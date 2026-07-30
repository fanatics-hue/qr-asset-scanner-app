const API_BASE = 'https://qr-scanner-api.fanatics.workers.dev';

const TRANSLATIONS = {
  it: {
    login_username_ph: 'Utente',
    login_password_ph: 'Password',
    login_btn: 'Entra',
    login_err_missing: 'Inserisci utente e password',
    scan_hint_idle: "Inquadra il QR code sull'attrezzatura",
    scan_hint_scanning: 'Scansione in corso...',
    scan_hint_tip: 'Avvicina o allontana il telefono e assicurati che ci sia buona luce',
    scan_hint_camera_error: 'Fotocamera non disponibile: ',
    scan_btn: 'Scansiona QR',
    scan_btn_scanning: 'Scansione...',
    confirm_cancel: 'Annulla',
    confirm_title: 'Nuovo asset',
    confirm_save: 'Salva',
    confirm_save_saving: 'Salvataggio...',
    confirm_section_scanned: 'Dati scansionati',
    confirm_hint_editable: 'modificabili se errati',
    field_scannedAt: 'Data scansione',
    field_condition: 'Condizione *',
    field_comments: 'Commenti',
    comments_ph: 'Note su condizioni, danni, manutenzione...',
    whatsapp_share: 'Condividi su WhatsApp',
    confirm_section_todo: 'Da completare',
    dataset_title: 'Dataset asset',
    dataset_title_short: 'Dataset',
    search_ph: 'Cerca per Pipe N°, Item N°...',
    dataset_empty: 'Nessun asset ancora scansionato',
    tab_scan: 'Scansiona',
    tab_dataset_prefix: 'Dataset',
    field_scannedBy: 'Scansionato da',
    field_scannedOn: 'Scansionato il',
    admin_title: 'Gestione ispettori',
    admin_name: 'Nome',
    admin_username_ph: 'es. mrossi',
    admin_name_ph: 'Mario Rossi',
    admin_password_ph: 'password iniziale',
    admin_add_btn: 'Aggiungi ispettore',
    admin_empty: 'Nessun ispettore ancora aggiunto',
    admin_role_admin: 'Admin',
    admin_role_inspector: 'Ispettore',
    remove: 'Rimuovi',
    err_save: 'Errore salvataggio: ',
    err_generic: 'Errore: ',
    err_fill_all: 'Compila tutti i campi',
    confirm_remove_user: 'Rimuovere {u}?',
    cond_excellent: 'Ottimo',
    cond_good: 'Buono',
    cond_needsreview: 'Da revisionare',
    cond_damaged: 'Danneggiato',
    wa_title: 'Asset scansionato:',
    wa_condition: 'Condizione',
    wa_comments: 'Commenti',
    wa_date: 'Data',
    locale: 'it-IT'
  },
  en: {
    login_username_ph: 'Username',
    login_password_ph: 'Password',
    login_btn: 'Log in',
    login_err_missing: 'Enter username and password',
    scan_hint_idle: 'Point the camera at the QR code on the equipment',
    scan_hint_scanning: 'Scanning...',
    scan_hint_tip: 'Move the phone closer or further away and make sure there is good light',
    scan_hint_camera_error: 'Camera not available: ',
    scan_btn: 'Scan QR',
    scan_btn_scanning: 'Scanning...',
    confirm_cancel: 'Cancel',
    confirm_title: 'New asset',
    confirm_save: 'Save',
    confirm_save_saving: 'Saving...',
    confirm_section_scanned: 'Scanned data',
    confirm_hint_editable: 'editable if incorrect',
    field_scannedAt: 'Scan date',
    field_condition: 'Condition *',
    field_comments: 'Comments',
    comments_ph: 'Notes on condition, damage, maintenance...',
    whatsapp_share: 'Share on WhatsApp',
    confirm_section_todo: 'To complete',
    dataset_title: 'Asset dataset',
    dataset_title_short: 'Dataset',
    search_ph: 'Search by Pipe No., Item No...',
    dataset_empty: 'No assets scanned yet',
    tab_scan: 'Scan',
    tab_dataset_prefix: 'Dataset',
    field_scannedBy: 'Scanned by',
    field_scannedOn: 'Scanned on',
    admin_title: 'Inspector management',
    admin_name: 'Name',
    admin_username_ph: 'e.g. jsmith',
    admin_name_ph: 'John Smith',
    admin_password_ph: 'initial password',
    admin_add_btn: 'Add inspector',
    admin_empty: 'No inspectors added yet',
    admin_role_admin: 'Admin',
    admin_role_inspector: 'Inspector',
    remove: 'Remove',
    err_save: 'Save error: ',
    err_generic: 'Error: ',
    err_fill_all: 'Fill in all fields',
    confirm_remove_user: 'Remove {u}?',
    cond_excellent: 'Excellent',
    cond_good: 'Good',
    cond_needsreview: 'Needs review',
    cond_damaged: 'Damaged',
    wa_title: 'Scanned asset:',
    wa_condition: 'Condition',
    wa_comments: 'Comments',
    wa_date: 'Date',
    locale: 'en-GB'
  }
};

const BACKEND_ERR_MAP = {
  'Credenziali mancanti': { it: 'Credenziali mancanti', en: 'Missing credentials' },
  'Utente o password errati': { it: 'Utente o password errati', en: 'Incorrect username or password' },
  'Non autenticato': { it: 'Non autenticato', en: 'Not authenticated' },
  'Campi obbligatori mancanti (Pipe N°, ITP Step, Condizione)': { it: 'Campi obbligatori mancanti (Pipe N°, ITP Step, Condizione)', en: 'Missing required fields (Pipe No., ITP Step, Condition)' },
  'Solo admin': { it: 'Solo admin', en: 'Admins only' },
  'Campi mancanti': { it: 'Campi mancanti', en: 'Missing fields' },
  'Record non trovato': { it: 'Record non trovato', en: 'Record not found' }
};

const CONDITION_CODES = ['excellent', 'good', 'needs-review', 'damaged'];
const condKey = (code) => 'cond_' + String(code || '').replace(/-/g, '');

const state = {
  screen: 'login',
  scanning: false,
  draft: null,
  records: [],
  selectedId: null,
  session: null,
  meta: { itpSteps: [], conditions: [] },
  lang: localStorage.getItem('qr_lang') || 'it'
};

const el = (id) => document.getElementById(id);
const t = (key) => (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
const condLabel = (code) => t(condKey(code));
const screens = ['login', 'scan', 'confirm', 'dataset', 'detail', 'admin'];

function translateBackendError(msg) {
  const entry = BACKEND_ERR_MAP[msg];
  return entry ? entry[state.lang] : msg;
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(elx => { elx.textContent = t(elx.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(elx => { elx.placeholder = t(elx.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-title]').forEach(elx => { elx.title = t(elx.dataset.i18nTitle); });
  const other = state.lang === 'it' ? 'EN' : 'IT';
  ['lang-toggle-login', 'lang-toggle-dataset'].forEach(id => { if (el(id)) el(id).textContent = other; });
  el('tab-dataset-label').textContent = `${t('tab_dataset_prefix')} (${state.records.length})`;
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('qr_lang', lang);
  applyTranslations();
  if (state.screen === 'confirm' && state.draft) renderChips();
  if (state.screen === 'dataset') renderDatasetList();
  if (state.screen === 'detail' && state.selectedId) openDetail(state.selectedId);
  if (state.screen === 'admin') loadUsers();
}

function showScreen(name) {
  state.screen = name;
  screens.forEach(s => el('screen-' + s).classList.toggle('hidden', s !== name));
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
  if (!resp.ok) throw new Error(translateBackendError(data.error) || ('Error ' + resp.status));
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

// ---------------- Login ----------------
el('login-btn').addEventListener('click', async () => {
  const username = el('login-username').value.trim();
  const password = el('login-password').value;
  el('login-error').textContent = '';
  if (!username || !password) { el('login-error').textContent = t('login_err_missing'); return; }
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
  } catch (e) { state.meta = { itpSteps: [], conditions: CONDITION_CODES }; }
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
    const constraints = {
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      }
    };
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (e) {
      // alcuni telefoni rifiutano width/height ideal troppo alti insieme a facingMode: riprova piu' semplice
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    }
    video.srcObject = stream;
    await video.play();
    video.classList.add('live');
    el('qr-glyph-idle').style.display = 'none';
    const track = stream.getVideoTracks()[0];
    const settings = track && track.getSettings ? track.getSettings() : {};
    el('scan-debug').textContent = `${settings.width || video.videoWidth}x${settings.height || video.videoHeight}`;
  } catch (err) {
    el('scan-hint').textContent = t('scan_hint_camera_error') + err.message;
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
  scanStartedAt = 0;
}

let scanStartedAt = 0;
let scanAttempts = 0;
function scanFrame() {
  if (video.videoWidth > 0 && video.videoHeight > 0) {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx2d.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx2d.getImageData(0, 0, canvas.width, canvas.height);
    const code = window.jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'attemptBoth' });
    scanAttempts++;
    el('scan-debug').textContent = `${canvas.width}x${canvas.height} · ${scanAttempts} tentativi`;
    if (code && code.data) {
      onQrDecoded(code.data);
      return;
    }
    if (scanStartedAt && Date.now() - scanStartedAt > 6000) {
      el('scan-hint').textContent = t('scan_hint_tip');
    }
  }
  scanLoopId = requestAnimationFrame(scanFrame);
}

function parseQrPayload(text) {
  const result = { itemNo: '', pipeNo: '', csHeat: '', craHeat: '', length: '' };
  const clean = text.trim();
  // formato reale etichetta EEW: "45650-00400-2458" = Ordine-Item-Tubo (CS/CRA Heat e Length non sono nel QR)
  const dashMatch = clean.match(/^(\d+)-(\d+)-(\d+)$/);
  if (dashMatch) {
    result.itemNo = String(parseInt(dashMatch[2], 10));
    result.pipeNo = dashMatch[3];
    return result;
  }
  try {
    const obj = JSON.parse(clean);
    result.itemNo = obj.itemNo || obj.item || obj.ItemNo || obj['Item N°'] || '';
    result.pipeNo = obj.pipeNo || obj.pipe || obj.PipeNo || obj['Pipe N°'] || '';
    result.csHeat = obj.csHeat || obj['CS Heat'] || '';
    result.craHeat = obj.craHeat || obj['CRA Heat'] || '';
    result.length = obj.length || obj.Length || '';
    return result;
  } catch (e) { /* not JSON, try key:value pairs */ }
  const pairs = clean.split(/[\n;]+/).map(s => s.trim()).filter(Boolean);
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
  if (!matchedAny) result.pipeNo = clean; // fallback: testo grezzo, l'utente corregge a mano
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
  el('scan-btn').textContent = t('scan_btn_scanning');
  el('scan-btn').disabled = true;
  el('scan-hint').textContent = t('scan_hint_scanning');
  document.querySelector('.viewfinder').classList.add('scanning');
  try {
    await startCamera();
    scanStartedAt = Date.now();
    scanAttempts = 0;
    scanFrame();
  } catch (e) {
    state.scanning = false;
    el('scan-btn').textContent = t('scan_btn');
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
  el('f-scannedAt').textContent = new Date().toLocaleString(t('locale'));
  el('f-comment').value = '';
  renderChips();
  updateSaveState();
  showScreen('confirm');
  resetScanBtn();
}

function resetScanBtn() {
  el('scan-btn').textContent = t('scan_btn');
  el('scan-btn').disabled = false;
  el('scan-hint').textContent = t('scan_hint_idle');
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
  (state.meta.conditions.length ? state.meta.conditions : CONDITION_CODES).forEach(code => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (state.draft.condition === code ? ' selected cond-' + code : '');
    b.textContent = condLabel(code);
    b.addEventListener('click', () => { state.draft.condition = code; renderChips(); updateSaveState(); });
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
  el('confirm-save').textContent = t('confirm_save_saving');
  try {
    const { record } = await api('/api/records', { method: 'POST', body: JSON.stringify(state.draft) });
    state.records.unshift(record);
    renderDatasetList();
    state.draft = null;
    showScreen('dataset');
  } catch (err) {
    alert(t('err_save') + err.message);
  } finally {
    el('confirm-save').textContent = t('confirm_save');
    updateSaveState();
  }
});

function whatsappText(rec) {
  const lines = [
    t('wa_title'),
    `Item N°: ${rec.itemNo || '-'}`,
    `Pipe N°: ${rec.pipeNo || '-'}`,
    `CS Heat: ${rec.csHeat || '-'}`,
    `CRA Heat: ${rec.craHeat || '-'}`,
    `Length: ${rec.length || '-'}`,
    `ITP Step: ${rec.itpStep || '-'}`,
    `${t('wa_condition')}: ${condLabel(rec.condition) || '-'}`,
  ];
  if (rec.comment) lines.push(`${t('wa_comments')}: ${rec.comment}`);
  lines.push(`${t('wa_date')}: ${rec.scannedAt ? new Date(rec.scannedAt).toLocaleString(t('locale')) : new Date().toLocaleString(t('locale'))}`);
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
  el('tab-dataset-label').textContent = `${t('tab_dataset_prefix')} (${state.records.length})`;
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">${escapeHtml(t('dataset_empty'))}</div>`;
    return;
  }
  const card = document.createElement('div');
  card.className = 'list-card';
  filtered.forEach(r => {
    const row = document.createElement('div');
    row.className = 'list-row';
    row.setAttribute('role', 'button');
    row.setAttribute('tabindex', '0');
    const dateStr = r.scannedAt ? new Date(r.scannedAt).toLocaleDateString(t('locale')) : '';
    row.innerHTML = `
      <div class="info">
        <span class="pipe">${escapeHtml(r.pipeNo || '-')}</span>
        <span class="meta">${escapeHtml(r.itemNo || '-')} · ${escapeHtml(r.itpStep || '-')} · ${dateStr}</span>
      </div>
      <div class="right">
        <span class="badge badge-${r.condition}">${escapeHtml(condLabel(r.condition))}</span>
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

el('lang-toggle-login').addEventListener('click', () => setLang(state.lang === 'it' ? 'en' : 'it'));
el('lang-toggle-dataset').addEventListener('click', () => setLang(state.lang === 'it' ? 'en' : 'it'));

// ---------------- Detail ----------------
function openDetail(id) {
  const rec = state.records.find(r => r.id === id);
  if (!rec) return;
  state.selectedId = id;
  el('d-pipeNo').textContent = rec.pipeNo || '-';
  el('d-badge').textContent = condLabel(rec.condition);
  el('d-badge').className = 'badge badge-' + rec.condition;
  el('d-itemNo').textContent = rec.itemNo || '-';
  el('d-csHeat').textContent = rec.csHeat || '-';
  el('d-craHeat').textContent = rec.craHeat || '-';
  el('d-length').textContent = rec.length || '-';
  el('d-itpStep').textContent = rec.itpStep || '-';
  el('d-scannedBy').textContent = rec.scannedBy || '-';
  el('d-scannedAt').textContent = rec.scannedAt ? new Date(rec.scannedAt).toLocaleString(t('locale')) : '-';
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
    wrap.innerHTML = `<div class="row">${escapeHtml(t('admin_empty'))}</div>`;
    return;
  }
  users.forEach(u => {
    const row = document.createElement('div');
    row.className = 'user-row';
    row.innerHTML = `
      <div>
        <div style="font-weight:600">${escapeHtml(u.name)} <span style="color:var(--text-secondary);font-weight:400">(${escapeHtml(u.username)})</span></div>
        <div style="font-size:12px;color:var(--text-secondary)">${u.role === 'admin' ? escapeHtml(t('admin_role_admin')) : escapeHtml(t('admin_role_inspector'))}</div>
      </div>
      <button class="danger-link" data-username="${escapeHtml(u.username)}">${escapeHtml(t('remove'))}</button>`;
    row.querySelector('.danger-link').addEventListener('click', async (e) => {
      const username = e.target.dataset.username;
      if (!confirm(t('confirm_remove_user').replace('{u}', username))) return;
      try {
        await api('/api/admin/users/' + encodeURIComponent(username), { method: 'DELETE' });
        await loadUsers();
      } catch (err) { alert(t('err_generic') + err.message); }
    });
    wrap.appendChild(row);
  });
}

el('a-add-btn').addEventListener('click', async () => {
  const username = el('a-username').value.trim();
  const name = el('a-name').value.trim();
  const password = el('a-password').value;
  if (!username || !name || !password) { alert(t('err_fill_all')); return; }
  try {
    await api('/api/admin/users', { method: 'POST', body: JSON.stringify({ username, name, password, role: 'inspector' }) });
    el('a-username').value = ''; el('a-name').value = ''; el('a-password').value = '';
    await loadUsers();
  } catch (err) { alert(t('err_generic') + err.message); }
});

// ---------------- Boot ----------------
(async function boot() {
  applyTranslations();
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
