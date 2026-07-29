const API_BASE = 'https://qr-scanner-api.fanatics.workers.dev';

const state = {
  screen: 'login',
  scanning: false,
  draft: null,
  records: [],
  selectedId: null,
  session: null,
  meta: { itpSteps: [], conditions: [] }
};

const el = (id) => document.getElementById(id);
const slug = (s) => String(s || '').toLowerCase().replace(/\s+/g, '-');
const screens = ['login', 'scan', 'confirm', 'dataset', 'detail', 'admin'];

function showScreen(name) {
  state.screen = name;
  screens.forEach(s => el('screen-' + s).classList.toggle('hidden', s !== name));
  const tabBarVisible = name === 'dataset';
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === name);
  });
  if (name === 'scan') stopCamera(); // idle state until user taps scan
}

// ---------------- API ----------------
async function api(path, opts = {}) {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {});
  if (state.session && state.session.token) headers['Authorization'] = 'Bearer ' + state.session.token;
  const resp = await fetch(API_BASE + path, Object.assign({}, opts, { headers }));
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) throw new Error(data.error || ('Errore ' + resp.status));
  return data;
}

// ---------------- Session ----------------
function saveSession(session) {
  state.session = session;
  localStorage.setItem('qr_session', JSON.stringify(session));
}
function loadSession() {
  const raw = localStorage.getItem('qr_session');
  if (raw) state.session = JSON.parse(raw);
}
function logout() {
  localStorage.removeItem('qr_session');
  state.session = null;
  showScreen('login');
}

// ---------------- Login ----------------
el('login-btn').addEventListener('click', async () => {
  const username = el('login-username').value.trim();
  const password = el('login-password').value;
  el('login-error').textContent = '';
  if (!username || !password) { el('login-error').textContent = 'Inserisci utente e password'; return; }
  try {
    const data = await api('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) });
    saveSession(data);
    el('admin-gear').classList.toggle('hidden', data.role !== 'admin');
    await afterLogin();
  } catch (err) {
    el('login-error').textContent = err.message;
  }
});

async function afterLogin() {
  try {
    state.meta = await api('/api/meta');
  } catch (e) { state.meta = { itpSteps: [], conditions: [] }; }
  await loadRecords();
  showScreen('dataset');
}

// ---------------- Scan ----------------
let stream = null;
let scanLoopId = null;
const video = el('qr-video');
const canvas = document.createElement('canvas');
const ctx2d = canvas.getContext('2d');

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    video.srcObject = stream;
    await video.play();
    video.classList.add('live');
    el('qr-glyph-idle').style.display = 'none';
  } catch (err) {
    el('scan-hint').textContent = 'Fotocamera non disponibile: ' + err.message;
    throw err;
  }
}

function stopCamera() {
  if (scanLoopId) cancelAnimationFrame(scanLoopId);
  scanLoopId = null;
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
  video.classList.remove('live');
  el('qr-glyph-idle').style.display = '';
  document.querySelector('.viewfinder').classList.remove('scanning');
  state.scanning = false;
}

function scanFrame() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx2d.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx2d.getImageData(0, 0, canvas.width, canvas.height);
    const code = window.jsQR(imageData.data, imageData.width, imageData.height);
    if (code && code.data) {
      onQrDecoded(code.data);
      return;
    }
  }
  scanLoopId = requestAnimationFrame(scanFrame);
}

function parseQrPayload(text) {
  const result = { itemNo: '', pipeNo: '', csHeat: '', craHeat: '', length: '' };
  try {
    const obj = JSON.parse(text);
    result.itemNo = obj.itemNo || obj.item || obj.ItemNo || obj['Item N°'] || '';
    result.pipeNo = obj.pipeNo || obj.pipe || obj.PipeNo || obj['Pipe N°'] || '';
    result.csHeat = obj.csHeat || obj['CS Heat'] || '';
    result.craHeat = obj.craHeat || obj['CRA Heat'] || '';
    result.length = obj.length || obj.Length || '';
    return result;
  } catch (e) { /* not JSON, try key:value pairs */ }
  const pairs = text.split(/[\n;]+/).map(s => s.trim()).filter(Boolean);
  let matchedAny = false;
  pairs.forEach(pair => {
    const m = pair.match(/^([^:=]+)[:=]\s*(.*)$/);
    if (!m) return;
    const key = m[1].trim().toLowerCase();
    const val = m[2].trim();
    if (key.includes('item')) { result.itemNo = val; matchedAny = true; }
    else if (key.includes('pipe')) { result.pipeNo = val; matchedAny = true; }
    else if (key.includes('cs') && key.includes('heat')) { result.csHeat = val; matchedAny = true; }
    else if (key.includes('cra') && key.includes('heat')) { result.craHeat = val; matchedAny = true; }
    else if (key.includes('length')) { result.length = val; matchedAny = true; }
  });
  if (!matchedAny) result.pipeNo = text; // fallback: testo grezzo, l'utente corregge a mano
  return result;
}

function onQrDecoded(text) {
  stopCamera();
  const parsed = parseQrPayload(text);
  openConfirm(parsed);
}

el('scan-btn').addEventListener('click', async () => {
  if (state.scanning) return;
  state.scanning = true;
  el('scan-btn').textContent = 'Scansione...';
  el('scan-btn').disabled = true;
  el('scan-hint').textContent = 'Scansione in corso...';
  document.querySelector('.viewfinder').classList.add('scanning');
  try {
    await startCamera();
    scanFrame();
  } catch (e) {
    state.scanning = false;
    el('scan-btn').textContent = 'Scansiona QR';
    el('scan-btn').disabled = false;
  }
});

// ---------------- Confirm ----------------
function openConfirm(parsed) {
  state.draft = Object.assign({ itpStep: null, condition: null, comment: '' }, parsed);
  el('f-itemNo').value = parsed.itemNo || '';
  el('f-pipeNo').value = parsed.pipeNo || '';
  el('f-csHeat').value = parsed.csHeat || '';
  el('f-craHeat').value = parsed.craHeat || '';
  el('f-length').value = parsed.length || '';
  el('f-scannedAt').textContent = new Date().toLocaleString('it-IT');
  el('f-comment').value = '';
  renderChips();
  updateSaveState();
  showScreen('confirm');
  resetScanBtn();
}

function resetScanBtn() {
  el('scan-btn').textContent = 'Scansiona QR';
  el('scan-btn').disabled = false;
  el('scan-hint').textContent = "Inquadra il QR code sull'attrezzatura";
}

function renderChips() {
  const itpWrap = el('itp-chips'); itpWrap.innerHTML = '';
  (state.meta.itpSteps.length ? state.meta.itpSteps : ['Milling','Welding Base','Welding Clad','Hydro','UT','RT','PT','FI (Final Inspection)']).forEach(step => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip itp' + (state.draft.itpStep === step ? ' selected itp' : '');
    b.textContent = step;
    b.addEventListener('click', () => { state.draft.itpStep = step; renderChips(); updateSaveState(); });
    itpWrap.appendChild(b);
  });
  const condWrap = el('cond-chips'); condWrap.innerHTML = '';
  (state.meta.conditions.length ? state.meta.conditions : ['Ottimo','Buono','Da revisionare','Danneggiato']).forEach(cond => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (state.draft.condition === cond ? ' selected cond-' + slug(cond) : '');
    b.textContent = cond;
    b.addEventListener('click', () => { state.draft.condition = cond; renderChips(); updateSaveState(); });
    condWrap.appendChild(b);
  });
}

function updateSaveState() {
  const ready = !!(state.draft && state.draft.itpStep && state.draft.condition);
  el('confirm-save').disabled = !ready;
}

['f-itemNo','f-pipeNo','f-csHeat','f-craHeat','f-length'].forEach(id => {
  el(id).addEventListener('input', () => {
    const key = id.replace('f-', '');
    state.draft[key] = el(id).value;
  });
});
el('f-comment').addEventListener('input', () => { state.draft.comment = el('f-comment').value; });

el('confirm-cancel').addEventListener('click', () => {
  state.draft = null;
  showScreen('scan');
});

el('confirm-save').addEventListener('click', async () => {
  if (!state.draft || !state.draft.itpStep || !state.draft.condition) return;
  el('confirm-save').disabled = true;
  el('confirm-save').textContent = 'Salvataggio...';
  try {
    const { record } = await api('/api/records', { method: 'POST', body: JSON.stringify(state.draft) });
    state.records.unshift(record);
    renderDatasetList();
    state.draft = null;
    showScreen('dataset');
  } catch (err) {
    alert('Errore salvataggio: ' + err.message);
  } finally {
    el('confirm-save').textContent = 'Salva';
    updateSaveState();
  }
});

function whatsappText(rec) {
  const lines = [
    'Asset scansionato:',
    `Item N°: ${rec.itemNo || '-'}`,
    `Pipe N°: ${rec.pipeNo || '-'}`,
    `CS Heat: ${rec.csHeat || '-'}`,
    `CRA Heat: ${rec.craHeat || '-'}`,
    `Length: ${rec.length || '-'}`,
    `ITP Step: ${rec.itpStep || '-'}`,
    `Condizione: ${rec.condition || '-'}`,
  ];
  if (rec.comment) lines.push(`Commenti: ${rec.comment}`);
  lines.push(`Data: ${rec.scannedAt ? new Date(rec.scannedAt).toLocaleString('it-IT') : new Date().toLocaleString('it-IT')}`);
  return lines.join('\n');
}

el('whatsapp-confirm-btn').addEventListener('click', () => {
  const text = whatsappText(state.draft || {});
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
});
el('whatsapp-detail-btn').addEventListener('click', () => {
  const rec = state.records.find(r => r.id === state.selectedId);
  if (!rec) return;
  const text = whatsappText(rec);
  window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
});

// ---------------- Dataset ----------------
async function loadRecords() {
  try {
    const data = await api('/api/records');
    state.records = data.records || [];
  } catch (err) {
    state.records = [];
  }
  renderDatasetList();
}

function renderDatasetList() {
  const q = (el('search-input').value || '').toLowerCase().trim();
  const list = el('dataset-list');
  const filtered = state.records.filter(r => {
    if (!q) return true;
    return (r.pipeNo || '').toLowerCase().includes(q) ||
           (r.itemNo || '').toLowerCase().includes(q) ||
           (r.csHeat || '').toLowerCase().includes(q) ||
           (r.craHeat || '').toLowerCase().includes(q);
  });
  el('tab-dataset-label').textContent = `Dataset (${state.records.length})`;
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">Nessun asset ancora scansionato</div>';
    return;
  }
  const card = document.createElement('div');
  card.className = 'list-card';
  filtered.forEach(r => {
    const row = document.createElement('div');
    row.className = 'list-row';
    row.setAttribute('role', 'button');
    row.setAttribute('tabindex', '0');
    const dateStr = r.scannedAt ? new Date(r.scannedAt).toLocaleDateString('it-IT') : '';
    row.innerHTML = `
      <div class="info">
        <span class="pipe">${escapeHtml(r.pipeNo || '-')}</span>
        <span class="meta">${escapeHtml(r.itemNo || '-')} · ${escapeHtml(r.itpStep || '-')} · ${dateStr}</span>
      </div>
      <div class="right">
        <span class="badge badge-${slug(r.condition)}">${escapeHtml(r.condition || '')}</span>
        <span class="chevron">&rsaquo;</span>
      </div>`;
    row.addEventListener('click', () => openDetail(r.id));
    row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(r.id); } });
    card.appendChild(row);
  });
  list.innerHTML = '';
  list.appendChild(card);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

el('search-input').addEventListener('input', renderDatasetList);

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    if (tab === 'scan') showScreen('scan');
    else { loadRecords(); showScreen('dataset'); }
  });
});

// ---------------- Detail ----------------
function openDetail(id) {
  const rec = state.records.find(r => r.id === id);
  if (!rec) return;
  state.selectedId = id;
  el('d-pipeNo').textContent = rec.pipeNo || '-';
  el('d-badge').textContent = rec.condition || '';
  el('d-badge').className = 'badge badge-' + slug(rec.condition);
  el('d-itemNo').textContent = rec.itemNo || '-';
  el('d-csHeat').textContent = rec.csHeat || '-';
  el('d-craHeat').textContent = rec.craHeat || '-';
  el('d-length').textContent = rec.length || '-';
  el('d-itpStep').textContent = rec.itpStep || '-';
  el('d-scannedBy').textContent = rec.scannedBy || '-';
  el('d-scannedAt').textContent = rec.scannedAt ? new Date(rec.scannedAt).toLocaleString('it-IT') : '-';
  if (rec.comment) {
    el('d-comment-card').classList.remove('hidden');
    el('d-comment').textContent = rec.comment;
  } else {
    el('d-comment-card').classList.add('hidden');
  }
  showScreen('detail');
}

el('detail-back').addEventListener('click', () => showScreen('dataset'));

// ---------------- Admin ----------------
el('admin-gear').addEventListener('click', async () => {
  await loadUsers();
  showScreen('admin');
});
el('admin-back').addEventListener('click', () => showScreen('dataset'));

async function loadUsers() {
  try {
    const data = await api('/api/admin/users');
    renderUsers(data.users || []);
  } catch (err) {
    el('a-user-list').innerHTML = `<div class="row">${escapeHtml(err.message)}</div>`;
  }
}

function renderUsers(users) {
  const wrap = el('a-user-list');
  wrap.innerHTML = '';
  if (!users.length) {
    wrap.innerHTML = '<div class="row">Nessun ispettore ancora aggiunto</div>';
    return;
  }
  users.forEach(u => {
    const row = document.createElement('div');
    row.className = 'user-row';
    row.innerHTML = `
      <div>
        <div style="font-weight:600">${escapeHtml(u.name)} <span style="color:var(--text-secondary);font-weight:400">(${escapeHtml(u.username)})</span></div>
        <div style="font-size:12px;color:var(--text-secondary)">${u.role === 'admin' ? 'Admin' : 'Ispettore'}</div>
      </div>
      <button class="danger-link" data-username="${escapeHtml(u.username)}">Rimuovi</button>`;
    row.querySelector('.danger-link').addEventListener('click', async (e) => {
      const username = e.target.dataset.username;
      if (!confirm(`Rimuovere ${username}?`)) return;
      try {
        await api('/api/admin/users/' + encodeURIComponent(username), { method: 'DELETE' });
        await loadUsers();
      } catch (err) { alert('Errore: ' + err.message); }
    });
    wrap.appendChild(row);
  });
}

el('a-add-btn').addEventListener('click', async () => {
  const username = el('a-username').value.trim();
  const name = el('a-name').value.trim();
  const password = el('a-password').value;
  if (!username || !name || !password) { alert('Compila tutti i campi'); return; }
  try {
    await api('/api/admin/users', { method: 'POST', body: JSON.stringify({ username, name, password, role: 'inspector' }) });
    el('a-username').value = ''; el('a-name').value = ''; el('a-password').value = '';
    await loadUsers();
  } catch (err) { alert('Errore: ' + err.message); }
});

// ---------------- Boot ----------------
(async function boot() {
  loadSession();
  if (state.session && state.session.token) {
    el('admin-gear').classList.toggle('hidden', state.session.role !== 'admin');
    try {
      await afterLogin();
      return;
    } catch (e) { /* sessione scaduta -> torna al login */ }
  }
  showScreen('login');
})();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
