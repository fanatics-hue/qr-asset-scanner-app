const API_BASE = 'https://qr-scanner-api.fanatics.workers.dev';

const TRANSLATIONS = {
  it: {
    login_username_ph: 'Utente',
    login_password_ph: 'Password',
    login_btn: 'Entra',
    login_err_missing: 'Inserisci utente e password',
    scan_hint_idle: 'Tocca il pulsante per scattare una foto del QR',
    scan_hint_scanning: 'Analisi della foto in corso...',
    scan_hint_tip: 'Avvicina o allontana il telefono e assicurati che ci sia buona luce',
    scan_hint_no_code_found: 'Nessun QR trovato nella foto, riprova (avvicinati e assicurati che sia a fuoco)',
    camera_flip_title: 'Cambia fotocamera',
    scan_hint_camera_error: 'Errore: ',
    scan_btn: 'Scansiona QR',
    scan_btn_scanning: 'Scansione...',
    paste_step1: "Apri la Fotocamera del telefono (o Google Lens) e inquadra il QR sull'attrezzatura",
    paste_step2: 'Tocca il testo riconosciuto per copiarlo',
    paste_step3: 'Torna qui, incolla il codice e continua',
    paste_ph: 'Incolla qui il codice (es. 45650-00400-2458)',
    paste_continue_btn: 'Continua',
    paste_err_empty: 'Incolla prima il codice letto dalla fotocamera',
    scan_btn_alt: 'Prova invece la scansione automatica dalla foto',
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
    tab_scan: 'Nuovo asset',
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
    confirm_remove_record: 'Eliminare questo record? L\'operazione non e\' reversibile.',
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
    scan_hint_idle: 'Tap the button to take a photo of the QR code',
    scan_hint_scanning: 'Analyzing photo...',
    scan_hint_tip: 'Move the phone closer or further away and make sure there is good light',
    scan_hint_no_code_found: 'No QR code found in the photo, try again (get closer and make sure it is in focus)',
    camera_flip_title: 'Switch camera',
    scan_hint_camera_error: 'Error: ',
    scan_btn: 'Scan QR',
    scan_btn_scanning: 'Scanning...',
    paste_step1: 'Open the phone Camera (or Google Lens) and point it at the QR code on the equipment',
    paste_step2: 'Tap the recognized text to copy it',
    paste_step3: 'Come back here, paste the code and continue',
    paste_ph: 'Paste the code here (e.g. 45650-00400-2458)',
    paste_continue_btn: 'Continue',
    paste_err_empty: 'Paste the code read by the camera first',
    scan_btn_alt: 'Try automatic scan from photo instead',
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
    tab_scan: 'New asset',
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
    confirm_remove_record: 'Delete this record? This cannot be undone.',
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
  lang: localStorage.getItem('qr_lang') || 'it',
  productionMap: new Map(),
  productionByPipe: new Map()
};

const normProdNum = (v) => { const n = parseInt(String(v || '').trim(), 10); return isNaN(n) ? String(v || '').trim() : String(n); };
const prodKey = (itemNo, pipeNo) => normProdNum(itemNo) + '-' + normProdNum(pipeNo);

const el = (id) => document.getElementById(id);
const t = (key) => (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
const condLabel = (code) => t(condKey(code));
const screens = ['login', 'confirm', 'dataset', 'detail', 'admin'];

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
  loadProductionData(); // in background, non blocca l'ingresso in dataset
  showScreen('dataset');
}

async function loadProductionData() {
  try {
    const data = await api('/api/production-data');
    state.productionMap = new Map();
    state.productionByPipe = new Map();
    const pipeItemCount = new Map(); // conta quanti Item diversi condividono lo stesso Pipe N. (i numeri pipe non sono univoci tra Item)
    (data.records || []).forEach(r => {
      state.productionMap.set(prodKey(r.itemNo, r.pipeNo), r);
      const pipeKey = normProdNum(r.pipeNo);
      if (!state.productionByPipe.has(pipeKey)) state.productionByPipe.set(pipeKey, r);
      const itemsForPipe = pipeItemCount.get(pipeKey) || new Set();
      itemsForPipe.add(normProdNum(r.itemNo));
      pipeItemCount.set(pipeKey, itemsForPipe);
    });
    // rimuove dalla ricerca "solo Pipe" i numeri ambigui (stesso Pipe N. su piu' Item diversi):
    // meglio non compilare nulla che compilare il tubo sbagliato
    pipeItemCount.forEach((items, pipeKey) => {
      if (items.size > 1) state.productionByPipe.delete(pipeKey);
    });
  } catch (e) { /* nessun dato di produzione disponibile, l'inserimento resta manuale */ }
}

// ---------------- Nuovo asset ----------------
// I dati identificativi (Item N°/Pipe N°) sono stampati in chiaro sull'etichetta accanto al QR:
// niente scansione, si digitano direttamente (vedi LL register per il perche').
function startManualEntry() {
  openConfirm({});
}

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

// Auto-compilazione da dati di produzione (Raw data COMP3B): basta il solo Pipe N. (come nel
// foglio Excel "Ricerca da Elenco" - cerca su tutti gli Item, prima corrispondenza); se anche
// Item N. e' valorizzato, cerca la corrispondenza esatta Item+Pipe. Riempie CS Heat/CRA Heat/
// Length/Item N. solo se vuoti (non sovrascrive correzioni manuali) e suggerisce l'ITP Step.
function tryAutoFillFromProduction() {
  const itemNo = el('f-itemNo').value.trim();
  const pipeNo = el('f-pipeNo').value.trim();
  if (!pipeNo) return;
  let match = null;
  if (itemNo) match = state.productionMap.get(prodKey(itemNo, pipeNo));
  if (!match) match = state.productionByPipe.get(normProdNum(pipeNo));
  if (!match) return;
  if (!itemNo && match.itemNo) { el('f-itemNo').value = match.itemNo; state.draft.itemNo = match.itemNo; }
  if (!el('f-csHeat').value.trim() && match.csHeat) { el('f-csHeat').value = match.csHeat; state.draft.csHeat = match.csHeat; }
  if (!el('f-craHeat').value.trim() && match.craHeat) { el('f-craHeat').value = match.craHeat; state.draft.craHeat = match.craHeat; }
  if (!el('f-length').value.trim() && match.length) { el('f-length').value = match.length; state.draft.length = match.length; }
  if (!state.draft.itpStep && match.currentStep) {
    state.draft.itpStep = match.currentStep;
    renderChips();
    updateSaveState();
  }
}
['f-itemNo', 'f-pipeNo'].forEach(id => el(id).addEventListener('input', tryAutoFillFromProduction));

el('confirm-cancel').addEventListener('click', () => {
  state.draft = null;
  showScreen('dataset');
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
    const isAdmin = state.session && state.session.role === 'admin';
    row.innerHTML = `
      <div class="info">
        <span class="pipe">${escapeHtml(r.pipeNo || '-')}</span>
        <span class="meta">${escapeHtml(r.itemNo || '-')} · ${escapeHtml(r.itpStep || '-')} · ${dateStr}</span>
      </div>
      <div class="right">
        <span class="badge badge-${r.condition}">${escapeHtml(condLabel(r.condition))}</span>
        ${isAdmin ? `<button class="delete-row-btn" data-id="${escapeHtml(r.id)}" title="${escapeHtml(t('remove'))}">&#128465;</button>` : ''}
        <span class="chevron">&rsaquo;</span>
      </div>`;
    row.addEventListener('click', () => openDetail(r.id));
    row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(r.id); } });
    if (isAdmin) {
      row.querySelector('.delete-row-btn').addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = e.currentTarget.dataset.id;
        if (!confirm(t('confirm_remove_record'))) return;
        try {
          await api('/api/records/' + encodeURIComponent(id), { method: 'DELETE' });
          state.records = state.records.filter(rec => rec.id !== id);
          renderDatasetList();
        } catch (err) { alert(t('err_generic') + err.message); }
      });
    }
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
    if (tab === 'scan') startManualEntry();
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

// Service worker disattivato durante lo sviluppo attivo: la sua cache ha causato piu' problemi
// (versioni vecchie bloccate) che benefici. Questo si autopulisce: disinstalla qualsiasi SW e
// cache residui da visite precedenti, cosi' ogni caricamento prende sempre l'ultima versione pubblicata.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => regs.forEach(r => r.unregister())).catch(() => {});
}
if (window.caches) {
  caches.keys().then(keys => keys.forEach(k => caches.delete(k))).catch(() => {});
}
