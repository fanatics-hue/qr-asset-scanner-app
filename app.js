const API_BASE = 'https://qr-scanner-api.fanatics.workers.dev';
const APP_VERSION = 45;

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
    field_progress: 'Avanzamento',
    field_condition: 'Condizione *',
    field_comments: 'Commenti',
    comments_ph: 'Note su condizioni, danni, manutenzione...',
    whatsapp_share: 'Condividi su WhatsApp',
    confirm_section_todo: 'Da completare',
    dataset_title: 'Equipment Master Data',
    dataset_title_short: 'Dataset',
    dataset_title_count: '{n} schede registrate',
    dataset_title_count_one: '{n} scheda registrata',
    search_ph: 'Cerca per Pipe N°, Item N°...',
    dataset_empty: 'Nessun asset ancora scansionato',
    tab_scan: 'Nuovo asset',
    tab_dataset_prefix: 'Dataset',
    field_scannedBy: 'Emesso da',
    field_scannedOn: 'Emesso il',
    field_closedBy: 'Chiuso da',
    field_closedOn: 'Chiuso il',
    field_closeNote: 'Nota di chiusura',
    theme_toggle_title: 'Tema chiaro/scuro',
    update_available: 'Nuova versione disponibile',
    update_required_desc: 'È stata pubblicata una versione piu\' recente. Per continuare a usare l\'app devi aggiornare.',
    update_now: 'Aggiorna',
    confirm_section_photo: 'Foto (opzionale)',
    photo_add: 'Aggiungi foto',
    photo_loading: 'Carico foto...',
    err_photo: 'Impossibile elaborare la foto, riprova.',
    err_photo_load: 'Impossibile caricare la foto.',
    help_title: 'Guida',
    detail_edit: 'Modifica',
    confirm_title_edit: 'Modifica asset',
    photo_existing_note: 'Foto già presente — scegline una nuova solo se vuoi sostituirla.',
    pipe_ambiguous_hint: 'Questo Pipe N° esiste su più Item: inserisci anche l\'Item N° per l\'auto-compilazione.',
    stats_title: 'Statistiche',
    stats_total: 'Schede totali',
    stats_defects: 'Difetti (da rev./danneggiato)',
    stats_defect_pct: '% difetti',
    stats_weekly_title: 'Rilievi per settimana',
    stats_defects_list_title: 'Elenco difetti',
    stats_no_defects: 'Nessun difetto registrato',
    stats_defects_open: 'Difetti aperti',
    stats_closure_pct: '% chiusura',
    status_open: 'Aperto',
    status_closed: 'Chiuso',
    status_close_btn: 'Segna come chiuso',
    status_reopen_btn: 'Riapri',
    status_closed_by: 'Chiuso da {who} il {when}',
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
    field_defect_type: 'Tipo difetto',
    field_disposition: 'Disposizione',
    defect_weld: 'Saldatura',
    defect_dimensional: 'Dimensionale',
    defect_visual: 'Visivo',
    defect_nde: 'NDE',
    defect_material: 'Materiale',
    defect_other: 'Altro',
    disp_accept: 'Accetta',
    disp_repair: 'Ripara',
    disp_reject: 'Scarta',
    disp_concession: 'Deroga',
    close_note_ph: 'Causa e azione correttiva (obbligatorio)',
    cancel_btn: 'Annulla',
    confirm_close_btn: 'Conferma chiusura',
    err_close_note_required: 'Inserisci causa e azione correttiva prima di chiudere.',
    timeline_title: 'Cronologia',
    timeline_issued: 'Emesso da {who}',
    timeline_edited: 'Modificato da {who}',
    timeline_closed: 'Chiuso da {who}',
    stats_avg_close: 'Giorni medi chiusura',
    stats_aging: 'Aperti da +5gg',
    stats_by_type: 'Per tipo difetto',
    stats_by_disposition: 'Per disposizione',
    order_pill_label: 'Progetto',
    order_sheet_title: 'Progetto',
    order_new_ph: 'Nome nuovo ordine',
    order_new_btn: '+ Nuovo ordine',
    order_status_title: 'Stato Ordine',
    os_total: 'Tubi tracciati',
    os_complete_pct: 'Completati (ultimo step)',
    os_funnel_title: 'Imbuto produzione',
    os_no_data_title: 'Nessun dato di produzione',
    os_no_data_desc: 'Sincronizza i dati di produzione per questo ordine per vedere l\'imbuto.',
    os_defects_by_step: 'Difetti aperti per step',
    os_bottleneck_label: 'Collo di bottiglia rilevato',
    os_bottleneck_sub: '{n} tubi in coda rispetto allo step precedente (su {total} tracciati)',
    os_item_label: 'Item {item}',
    os_item_sub: '{po} · scadenza {date}',
    os_days_remaining: 'Giorni residui',
    os_funnel_title_phase: 'Avanzamento per fase',
    os_forecast_label: 'Previsto',
    os_days_vs_po: 'gg vs PO',
    os_remaining_word: 'rimanenti',
    os_remaining_at_phase: '{n} rimanenti',
    os_status_ok: 'OK',
    os_status_delay: 'RITARDO',
    os_status_na: 'N/D',
    dup_scan_hint: 'ATTENZIONE: Pipe N° già scansionato oggi alle {time} da {by}.',
    sync_offline_text: 'Offline — {n} scan in attesa di invio',
    sync_syncing_text: 'Invio in corso — {done} di {total}',
    status_queued: 'In coda',
    err_queued_no_detail: 'Scheda non ancora inviata: apribile dopo la sincronizzazione.',
    saved_offline_note: 'Nessuna rete: salvato in locale, verrà inviato appena torna la connessione.',
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
    field_progress: 'Progress',
    field_condition: 'Condition *',
    field_comments: 'Comments',
    comments_ph: 'Notes on condition, damage, maintenance...',
    whatsapp_share: 'Share on WhatsApp',
    confirm_section_todo: 'To complete',
    dataset_title: 'Equipment Master Data',
    dataset_title_short: 'Dataset',
    dataset_title_count: '{n} records tracked',
    dataset_title_count_one: '{n} record tracked',
    search_ph: 'Search by Pipe No., Item No...',
    dataset_empty: 'No assets scanned yet',
    tab_scan: 'New asset',
    tab_dataset_prefix: 'Dataset',
    field_scannedBy: 'Issued by',
    field_scannedOn: 'Issued on',
    field_closedBy: 'Closed by',
    field_closedOn: 'Closed on',
    field_closeNote: 'Closure note',
    theme_toggle_title: 'Light/dark theme',
    update_available: 'A new version is available',
    update_required_desc: 'A newer version has been published. You must update to keep using the app.',
    update_now: 'Update',
    confirm_section_photo: 'Photo (optional)',
    photo_add: 'Add photo',
    photo_loading: 'Loading photo...',
    err_photo: 'Could not process the photo, please try again.',
    err_photo_load: 'Could not load the photo.',
    help_title: 'Help',
    detail_edit: 'Edit',
    confirm_title_edit: 'Edit asset',
    photo_existing_note: 'Photo already attached — pick a new one only to replace it.',
    pipe_ambiguous_hint: 'This Pipe No. exists on more than one Item: enter the Item No. too for auto-fill.',
    stats_title: 'Statistics',
    stats_total: 'Total records',
    stats_defects: 'Defects (needs review/damaged)',
    stats_defect_pct: '% defects',
    stats_weekly_title: 'Findings per week',
    stats_defects_list_title: 'Defects list',
    stats_no_defects: 'No defects logged',
    stats_defects_open: 'Open defects',
    stats_closure_pct: '% closed',
    status_open: 'Open',
    status_closed: 'Closed',
    status_close_btn: 'Mark as closed',
    status_reopen_btn: 'Reopen',
    status_closed_by: 'Closed by {who} on {when}',
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
    field_defect_type: 'Defect type',
    field_disposition: 'Disposition',
    defect_weld: 'Weld',
    defect_dimensional: 'Dimensional',
    defect_visual: 'Visual',
    defect_nde: 'NDE',
    defect_material: 'Material',
    defect_other: 'Other',
    disp_accept: 'Accept',
    disp_repair: 'Repair',
    disp_reject: 'Reject',
    disp_concession: 'Concession',
    close_note_ph: 'Root cause and corrective action (required)',
    cancel_btn: 'Cancel',
    confirm_close_btn: 'Confirm closure',
    err_close_note_required: 'Enter root cause and corrective action before closing.',
    timeline_title: 'Timeline',
    timeline_issued: 'Issued by {who}',
    timeline_edited: 'Edited by {who}',
    timeline_closed: 'Closed by {who}',
    stats_avg_close: 'Avg. days to close',
    stats_aging: 'Open for +5 days',
    stats_by_type: 'By defect type',
    stats_by_disposition: 'By disposition',
    order_pill_label: 'Project',
    order_sheet_title: 'Project',
    order_new_ph: 'New order name',
    order_new_btn: '+ New order',
    order_status_title: 'Order Status',
    os_total: 'Pipes tracked',
    os_complete_pct: 'Completed (last step)',
    os_funnel_title: 'Production funnel',
    os_no_data_title: 'No production data',
    os_no_data_desc: 'Sync production data for this order to see the funnel.',
    os_defects_by_step: 'Open defects by step',
    os_bottleneck_label: 'Bottleneck detected',
    os_bottleneck_sub: '{n} pipes queued vs the previous step (of {total} tracked)',
    os_item_label: 'Item {item}',
    os_item_sub: '{po} · due {date}',
    os_days_remaining: 'Days remaining',
    os_funnel_title_phase: 'Progress by phase',
    os_forecast_label: 'Forecast',
    os_days_vs_po: 'd vs PO',
    os_remaining_word: 'remaining',
    os_remaining_at_phase: '{n} remaining',
    os_status_ok: 'OK',
    os_status_delay: 'DELAY',
    os_status_na: 'N/A',
    dup_scan_hint: 'WARNING: Pipe No. already scanned today at {time} by {by}.',
    sync_offline_text: 'Offline — {n} scan waiting to be sent',
    sync_syncing_text: 'Sending — {done} of {total}',
    status_queued: 'Queued',
    err_queued_no_detail: 'Not sent yet: openable after it syncs.',
    saved_offline_note: 'No network: saved locally, will be sent once the connection is back.',
    wa_title: 'Scanned asset:',
    wa_condition: 'Condition',
    wa_comments: 'Comments',
    wa_date: 'Date',
    locale: 'en-GB'
  }
};

const HELP_CONTENT = {
  it: `
    <div class="card"><div class="card-header"><span class="section-title">Cos'è</span></div>
      <div class="help-p">App per registrare rapidamente lo stato di un tubo/asset durante l'ispezione: Item N°, Pipe N°, CS Heat, CRA Heat, Length, ITP Step e Condizione.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Progetto / Ordine</span></div>
      <div class="help-p">In alto nel Dataset c'è un riquadro con il nome del progetto attivo (es. "Order 45650 / COMP3B"). Toccalo per cambiare ordine se ne esiste più di uno: è lo stesso per tutti gli ispettori, come cambiare cantiere. Solo l'admin può rinominare un ordine (matita) o crearne uno nuovo ("+ Nuovo ordine").</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Registrare un nuovo asset</span></div>
      <div class="help-p">Tab "Nuovo asset" → inserisci il Pipe N° (l'Item N° si auto-compila se il tubo è univoco — se lo stesso Pipe N° esiste su più Item compare un avviso e va inserito anche l'Item N°). Se il tubo è nei dati di produzione del giorno, si auto-compilano CS Heat, CRA Heat, Length, avanzamento % e ITP Step — puoi comunque correggere a mano. Se lo stesso Pipe N° risulta già scansionato oggi, compare un avviso rosso con l'ora e chi l'ha fatto (non blocca il salvataggio, è solo un avviso). Scegli ITP Step e Condizione (obbligatori); se scegli "Da revisionare" o "Danneggiato" compaiono anche Tipo difetto (saldatura/dimensionale/visivo/NDE/materiale/altro) e Disposizione (accetta/ripara/scarta/deroga), facoltativi ma utili per le Statistiche. Commenti facoltativi, poi "Salva".</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Senza rete in impianto</span></div>
      <div class="help-p">Se salvi un nuovo asset senza connessione, la scheda non va persa: resta salvata sul telefono con un badge "In coda" nel Dataset e viene inviata da sola appena torna la rete. Mentre c'è qualcosa in attesa compare una striscia in alto con il conteggio — sparisce da sola a sincronizzazione completata. Una scheda "In coda" non si può ancora aprire/modificare, va aspettato l'invio.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Foto</span></div>
      <div class="help-p">Facoltativa, tocca "Aggiungi foto". Viene compressa in automatico e salvata nel repository dell'app. La vede qualunque ispettore loggato riaprendo la scheda dal Dataset — tocca per aprirla a schermo intero.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Avviso automatico</span></div>
      <div class="help-p">Se salvi una scheda con condizione "Da revisionare" o "Danneggiato" parte in automatico un'email di avviso con i dettagli.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Gestione difetti: Aperto/Chiuso</span></div>
      <div class="help-p">Ogni scheda "Da revisionare"/"Danneggiato" nasce con stato "Aperto". Nel dettaglio, "Segna come chiuso" chiede sempre causa e azione correttiva (obbligatorio) prima di confermare — resta scritta nella Cronologia della scheda insieme a chi/quando l'ha emessa, modificata e chiusa. Un difetto aperto da più giorni mostra un contatore rosso "● Ng" accanto al badge.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Modifica</span></div>
      <div class="help-p">Qualunque ispettore loggato (non solo l'admin) può correggere una scheda già salvata: apri il dettaglio → "Modifica" in alto a destra, cambia i campi necessari e "Salva". La foto esistente resta se non ne scegli una nuova.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">WhatsApp</span></div>
      <div class="help-p">Il pulsante verde apre WhatsApp con il messaggio già pronto, sia durante l'inserimento che riaprendo la scheda.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Dataset</span></div>
      <div class="help-p">La striscia colorata a sinistra indica la condizione: verde = ottimo, blu = buono, arancio = da revisionare, rosso = danneggiato. Cerca per Pipe N°, Item N°, CS Heat o CRA Heat. Solo l'admin può eliminare una scheda (cestino).</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Stato Ordine</span></div>
      <div class="help-p">Pulsante 🚨 nel Dataset: mostra l'imbuto di produzione per ITP Step (quanti tubi hanno raggiunto ogni step, dai dati di produzione sincronizzati) ed evidenzia da solo il collo di bottiglia — lo step con il calo più forte rispetto al precedente. Mostra anche i difetti aperti raggruppati per step. Se non è mai stata sincronizzata la produzione per l'ordine attivo, la sezione resta vuota finché non lo fai.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Statistiche</span></div>
      <div class="help-p">Pulsante 📊 nel Dataset: schede totali, difetti aperti, % chiusura, giorni medi di chiusura, quanti difetti restano aperti da oltre 5 giorni, un grafico settimanale (ultime 8 settimane) e la ripartizione per tipo difetto/disposizione. Sotto al grafico, l'elenco di tutti i difetti (aperti prima) — tocca una riga per aprirne il dettaglio.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Lingua e tema</span></div>
      <div class="help-p">Pulsante "EN"/"IT" cambia lingua. Pulsante ☽/☀ forza il tema chiaro o scuro (di default segue il telefono).</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Aggiornamenti</span></div>
      <div class="help-p">Se compare il banner "Nuova versione disponibile", tocca "Aggiorna": l'app ricarica da sola l'ultima versione pubblicata.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Icona sulla Home (consigliato)</span></div>
      <div class="help-p"><b>Android:</b> tre puntini in alto a destra → "Aggiungi a schermata Home".<br><b>iPhone:</b> icona di condivisione → "Aggiungi a Home". Se l'app resta bloccata su una versione vecchia, rimuovi l'icona e rifalla.</div>
    </div>
  `,
  en: `
    <div class="card"><div class="card-header"><span class="section-title">What it is</span></div>
      <div class="help-p">App to quickly log the status of a pipe/asset during inspection: Item No., Pipe No., CS Heat, CRA Heat, Length, ITP Step and Condition.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Project / Order</span></div>
      <div class="help-p">A pill at the top of the Dataset shows the active project (e.g. "Order 45650 / COMP3B"). Tap it to switch orders if more than one exists: it's shared by all inspectors, like switching site. Only admins can rename an order (pencil) or create a new one ("+ New order").</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Logging a new asset</span></div>
      <div class="help-p">"New asset" tab → enter the Pipe No. (Item No. auto-fills if the pipe is unique — if the same Pipe No. exists on more than one Item, a hint appears asking to also enter the Item No.). If the pipe is in today's production data, CS Heat/CRA Heat/Length/progress %/ITP Step auto-fill too — you can still edit any field by hand. If the same Pipe No. was already scanned today, a red warning shows the time and who did it (it doesn't block saving, it's just a heads-up). Choose ITP Step and Condition (required); picking "Needs review" or "Damaged" also reveals Defect type (weld/dimensional/visual/NDE/material/other) and Disposition (accept/repair/reject/concession), optional but useful for Statistics. Optional comments, then "Save".</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">No signal on site</span></div>
      <div class="help-p">If you save a new asset with no connection, the record isn't lost: it stays saved on the phone with a "Queued" badge in the Dataset and gets sent on its own once the network is back. While something is waiting, a strip appears at the top with the count — it disappears on its own once synced. A "Queued" record can't be opened/edited yet, you need to wait for it to be sent.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Photo</span></div>
      <div class="help-p">Optional, tap "Add photo". It's compressed automatically and saved to the app's repository. Any logged-in inspector can see it by reopening the record from the Dataset — tap to open full screen.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Automatic alert</span></div>
      <div class="help-p">Saving a record with condition "Needs review" or "Damaged" automatically triggers an alert email with the details.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Defect management: Open/Closed</span></div>
      <div class="help-p">Every "Needs review"/"Damaged" record starts as "Open". In the detail screen, "Mark as closed" always asks for root cause and corrective action (required) before confirming — it's kept in the record's Timeline together with who/when issued, edited and closed it. A defect open for several days shows a red "● Nd" counter next to the badge.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Edit</span></div>
      <div class="help-p">Any logged-in inspector (not just admin) can correct an already-saved record: open the detail screen → "Edit" top right, change what's needed, "Save". The existing photo stays unless you pick a new one.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">WhatsApp</span></div>
      <div class="help-p">The green button opens WhatsApp with the message ready to send, both while entering data and when reopening a record.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Dataset</span></div>
      <div class="help-p">The colored stripe on the left shows the condition: green = excellent, blue = good, orange = needs review, red = damaged. Search by Pipe No., Item No., CS Heat or CRA Heat. Only admins can delete a record (trash icon).</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Order Status</span></div>
      <div class="help-p">🚨 button in the Dataset: shows the production funnel by ITP Step (how many pipes reached each step, from synced production data) and highlights the bottleneck on its own — the step with the biggest drop versus the previous one. Also shows open defects grouped by step. If production data has never been synced for the active order, this stays empty until you do.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Statistics</span></div>
      <div class="help-p">📊 button in the Dataset: total records, open defects, % closed, average days to close, how many defects have been open for more than 5 days, an 8-week chart, and a breakdown by defect type/disposition. Below the chart, the full defects list (open ones first) — tap a row to open its detail.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Language and theme</span></div>
      <div class="help-p">"EN"/"IT" button switches language. ☽/☀ button forces light or dark theme (follows the phone by default).</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Updates</span></div>
      <div class="help-p">If the "New version available" banner appears, tap "Update": the app reloads the latest published version on its own.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Home screen icon (recommended)</span></div>
      <div class="help-p"><b>Android:</b> top-right menu → "Add to Home screen".<br><b>iPhone:</b> share icon → "Add to Home Screen". If the app seems stuck on an old version, remove the icon and re-add it.</div>
    </div>
  `
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
const ITP_STEPS_FALLBACK = ['Milling', 'Welding Base', 'Welding Clad', 'Hydro', 'UT', 'RT', 'PT', 'FI (Final Inspection)'];
const DEFECT_TYPE_CODES = ['weld', 'dimensional', 'visual', 'nde', 'material', 'other'];
const DISPOSITION_CODES = ['accept', 'repair', 'reject', 'concession'];
const condKey = (code) => 'cond_' + String(code || '').replace(/-/g, '');
const defectTypeLabel = (code) => code ? t('defect_' + code) : '';
const dispositionLabel = (code) => code ? t('disp_' + code) : '';
const isDefectCondition = (c) => c === 'needs-review' || c === 'damaged';

const state = {
  screen: 'login',
  scanning: false,
  draft: null,
  records: [],
  selectedId: null,
  session: null,
  meta: { itpSteps: [], conditions: [], defectTypes: [], dispositions: [] },
  lang: localStorage.getItem('qr_lang') || 'it',
  theme: localStorage.getItem('qr_theme') || 'auto',
  productionRecords: [],
  phaseForecast: null,
  productionMap: new Map(),
  productionByPipe: new Map(),
  ambiguousPipes: new Set(),
  editingId: null,
  orders: [],
  currentOrderId: localStorage.getItem('qr_order_id') || 'default'
};

const normProdNum = (v) => { const n = parseInt(String(v || '').trim(), 10); return isNaN(n) ? String(v || '').trim() : String(n); };
const prodKey = (itemNo, pipeNo) => normProdNum(itemNo) + '-' + normProdNum(pipeNo);

const el = (id) => document.getElementById(id);
const t = (key) => (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
const condLabel = (code) => t(condKey(code));
const screens = ['login', 'confirm', 'dataset', 'detail', 'admin', 'help', 'stats', 'order-status'];

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
  el('dataset-title-count').textContent = t(state.records.length === 1 ? 'dataset_title_count_one' : 'dataset_title_count').replace('{n}', state.records.length);
}

const darkMediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

function effectiveDark() {
  if (state.theme === 'dark') return true;
  if (state.theme === 'light') return false;
  return !!(darkMediaQuery && darkMediaQuery.matches);
}

function applyTheme() {
  if (state.theme === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', state.theme);
  const icon = effectiveDark() ? '☀' : '☽';
  ['theme-toggle-login', 'theme-toggle-dataset'].forEach(id => { if (el(id)) el(id).textContent = icon; });
}

function toggleTheme() {
  state.theme = effectiveDark() ? 'light' : 'dark';
  localStorage.setItem('qr_theme', state.theme);
  applyTheme();
}

if (darkMediaQuery) darkMediaQuery.addEventListener('change', () => { if (state.theme === 'auto') applyTheme(); });

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('qr_lang', lang);
  applyTranslations();
  if (state.screen === 'confirm' && state.draft) {
    renderChips();
    el('confirm-title').textContent = state.editingId ? t('confirm_title_edit') : t('confirm_title');
  }
  if (state.screen === 'dataset') renderDatasetList();
  if (state.screen === 'detail' && state.selectedId) openDetail(state.selectedId);
  if (state.screen === 'admin') loadUsers();
  if (state.screen === 'stats') renderStats();
  if (state.screen === 'order-status') renderOrderStatus();
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
  if (state.currentOrderId) headers['X-Order-Id'] = state.currentOrderId;
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
  await loadOrders(); // prima degli altri: records/production-data dipendono dall'header X-Order-Id
  await loadRecords();
  loadProductionData(); // in background, non blocca l'ingresso in dataset
  showScreen('dataset');
  syncPendingQueue(); // scan rimasti in coda da una sessione precedente offline
  updateSyncBanner();
}

// ---------------- Ordini (multi-progetto) ----------------
// Un solo ordine "attivo" alla volta, condiviso da tutti gli ispettori (non selezione per
// utente): chi lo cambia lo cambia per tutti, come un vero cambio di cantiere/commessa.
async function loadOrders() {
  try {
    const data = await api('/api/orders');
    state.orders = data.orders || [];
    if (!state.orders.find(o => o.id === state.currentOrderId)) {
      state.currentOrderId = state.orders[0] ? state.orders[0].id : 'default';
      localStorage.setItem('qr_order_id', state.currentOrderId);
    }
  } catch (e) {
    state.orders = [{ id: state.currentOrderId, name: 'Order 45650 / COMP3B' }];
  }
  renderOrderPill();
}

function currentOrderName() {
  const o = state.orders.find(o => o.id === state.currentOrderId);
  return o ? o.name : '-';
}

function renderOrderPill() {
  if (el('order-pill-name')) el('order-pill-name').textContent = currentOrderName();
}

function renderOrderSheet() {
  const wrap = el('order-list');
  wrap.innerHTML = '';
  const isAdmin = state.session && state.session.role === 'admin';
  state.orders.forEach(o => {
    const row = document.createElement('div');
    row.className = 'order-row' + (o.id === state.currentOrderId ? ' active' : '');
    buildOrderRow(row, o, isAdmin);
    wrap.appendChild(row);
  });
  el('order-new-row').classList.toggle('hidden', !isAdmin);
  el('order-new-input').value = '';
}

function buildOrderRow(row, o, isAdmin) {
  row.innerHTML = '';
  const nameSpan = document.createElement('span');
  nameSpan.className = 'order-row-name';
  nameSpan.textContent = o.name;
  nameSpan.addEventListener('click', () => switchOrder(o.id));
  row.appendChild(nameSpan);
  if (isAdmin) {
    const editBtn = document.createElement('button');
    editBtn.className = 'order-row-edit';
    editBtn.type = 'button';
    editBtn.textContent = '✎';
    editBtn.addEventListener('click', (e) => { e.stopPropagation(); startRenameOrder(o, row, isAdmin); });
    row.appendChild(editBtn);
  }
}

function startRenameOrder(o, row) {
  row.innerHTML = '';
  const input = document.createElement('input');
  input.className = 'field'; input.value = o.name;
  input.addEventListener('click', (e) => e.stopPropagation());
  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.className = 'order-row-save';
  saveBtn.textContent = t('confirm_save');
  saveBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const name = input.value.trim();
    if (!name) return;
    try {
      await api('/api/admin/orders/' + encodeURIComponent(o.id), { method: 'PUT', body: JSON.stringify({ name }) });
      await loadOrders();
      renderOrderSheet();
    } catch (err) { alert(t('err_generic') + err.message); }
  });
  row.appendChild(input);
  row.appendChild(saveBtn);
}

async function switchOrder(orderId) {
  el('order-sheet').classList.add('hidden');
  if (orderId === state.currentOrderId) return;
  state.currentOrderId = orderId;
  localStorage.setItem('qr_order_id', orderId);
  renderOrderPill();
  await loadRecords();
  loadProductionData();
}

el('order-pill').addEventListener('click', () => {
  renderOrderSheet();
  el('order-sheet').classList.remove('hidden');
});
el('order-sheet-close').addEventListener('click', () => el('order-sheet').classList.add('hidden'));
el('order-sheet').addEventListener('click', (e) => { if (e.target.id === 'order-sheet') el('order-sheet').classList.add('hidden'); });
el('order-new-btn').addEventListener('click', async () => {
  const name = el('order-new-input').value.trim();
  if (!name) return;
  try {
    const data = await api('/api/admin/orders', { method: 'POST', body: JSON.stringify({ name }) });
    state.orders = data.orders || state.orders;
    renderOrderSheet();
  } catch (err) { alert(t('err_generic') + err.message); }
});

async function loadProductionData() {
  try {
    const data = await api('/api/production-data');
    state.productionRecords = data.records || [];
    state.phaseForecast = data.phaseForecast || null;
    state.productionMap = new Map();
    state.productionByPipe = new Map();
    state.ambiguousPipes = new Set(); // Pipe N. che compaiono su piu' Item diversi
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
    // meglio non compilare nulla che compilare il tubo sbagliato - ma lo segnala all'ispettore
    // (vedi tryAutoFillFromProduction) invece di restare muta senza spiegazioni.
    pipeItemCount.forEach((items, pipeKey) => {
      if (items.size > 1) {
        state.productionByPipe.delete(pipeKey);
        state.ambiguousPipes.add(pipeKey);
      }
    });
  } catch (e) { state.productionRecords = []; state.phaseForecast = null; /* nessun dato di produzione disponibile, l'inserimento resta manuale */ }
}

// ---------------- Coda offline ----------------
// Se il salvataggio di un NUOVO scan fallisce per assenza di rete (non per un errore del
// server), invece di far perdere il lavoro all'ispettore lo si tiene in locale (IndexedDB,
// non Service Worker - niente caching delle pagine, cosi' non si riapre il problema gia'
// risolto con l'overlay di aggiornamento obbligatorio) e si reinvia da solo appena torna
// la connessione. Solo per i NUOVI scan (POST): modificare un record gia' salvato mentre
// si e' offline resta un caso raro, si torna a mostrare l'errore e si riprova a mano.
const IDB_NAME = 'iqs_offline_queue';
const IDB_STORE = 'pending';

function idbOpen() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      req.result.createObjectStore(IDB_STORE, { keyPath: 'localId' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbAddPending(item) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(item);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function idbGetAllPending() {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly');
    const req = tx.objectStore(IDB_STORE).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}
async function idbDeletePending(localId) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(localId);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

state.syncing = false;

function updateSyncBanner(progress) {
  const banner = el('sync-banner');
  const offline = !navigator.onLine;
  const pendingCount = state.records.filter(r => r._pending).length;
  if (state.syncing && progress) {
    banner.className = 'sync-banner syncing';
    el('sync-banner-text').textContent = t('sync_syncing_text').replace('{done}', progress.done).replace('{total}', progress.total);
    banner.classList.remove('hidden');
  } else if (offline && pendingCount > 0) {
    banner.className = 'sync-banner';
    el('sync-banner-text').textContent = t('sync_offline_text').replace('{n}', pendingCount);
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

// Costruisce la scheda "finta" da mostrare subito nel Dataset mentre e' ancora in coda,
// con gli stessi campi che avrebbe restituito il server - cosi' l'ispettore la vede subito,
// non solo dopo l'invio riuscito.
function buildPendingRecord(localId, data, orderId) {
  const scannedAt = new Date().toISOString();
  return {
    id: 'pending-' + localId,
    _pending: true,
    orderId,
    itemNo: data.itemNo || '', pipeNo: data.pipeNo, csHeat: data.csHeat || '',
    craHeat: data.craHeat || '', length: data.length || '', itpStep: data.itpStep,
    condition: data.condition, comment: data.comment || '',
    photoUrl: '', photoPath: '',
    status: isDefectCondition(data.condition) ? 'open' : '',
    defectType: isDefectCondition(data.condition) ? (data.defectType || '') : '',
    disposition: isDefectCondition(data.condition) ? (data.disposition || '') : '',
    closureNote: '', closedAt: '', closedBy: '',
    scannedAt, scannedBy: state.session ? (state.session.name || state.session.username) : ''
  };
}

async function queueRecordOffline(data) {
  const localId = 'q' + Date.now() + Math.random().toString(36).slice(2, 8);
  await idbAddPending({ localId, data, orderId: state.currentOrderId, createdAt: Date.now() });
  const pendingRecord = buildPendingRecord(localId, data, state.currentOrderId);
  state.records.unshift(pendingRecord);
  renderDatasetList();
  updateSyncBanner();
  return pendingRecord;
}

async function syncPendingQueue() {
  if (state.syncing) return;
  let items;
  try { items = await idbGetAllPending(); } catch (e) { return; }
  items = items.filter(it => it.orderId === state.currentOrderId).sort((a, b) => a.createdAt - b.createdAt);
  if (!items.length) return;
  state.syncing = true;
  let done = 0;
  updateSyncBanner({ done, total: items.length });
  for (const item of items) {
    if (!navigator.onLine) break;
    try {
      const headers = { 'Content-Type': 'application/json', 'X-Order-Id': item.orderId };
      if (state.session && state.session.token) headers['Authorization'] = 'Bearer ' + state.session.token;
      const resp = await fetch(API_BASE + '/api/records', { method: 'POST', headers, body: JSON.stringify(item.data) });
      const respData = await resp.json().catch(() => ({}));
      if (!resp.ok) { await idbDeletePending(item.localId); /* rifiutato dal server: non ha senso riprovarlo all'infinito */ continue; }
      await idbDeletePending(item.localId);
      const idx = state.records.findIndex(r => r.id === 'pending-' + item.localId);
      if (idx >= 0) state.records[idx] = respData.record; else state.records.unshift(respData.record);
      done++;
      updateSyncBanner({ done, total: items.length });
      renderDatasetList();
    } catch (e) {
      break; // ancora offline o rete instabile: si ferma, ci si riprova al prossimo 'online'
    }
  }
  state.syncing = false;
  updateSyncBanner();
}

window.addEventListener('online', () => { syncPendingQueue(); updateSyncBanner(); });
window.addEventListener('offline', () => updateSyncBanner());

// ---------------- Nuovo asset ----------------
// I dati identificativi (Item N°/Pipe N°) sono stampati in chiaro sull'etichetta accanto al QR:
// niente scansione, si digitano direttamente (vedi LL register per il perche').
function startManualEntry() {
  openConfirm({});
}

// ---------------- Confirm ----------------
function openConfirm(parsed) {
  state.editingId = null;
  state.draft = Object.assign({ itpStep: null, condition: null, comment: '', defectType: null, disposition: null }, parsed);
  state.draft._autoFields = new Set(); // campi attualmente auto-compilati, mai toccati a mano dall'utente
  el('f-itemNo').value = parsed.itemNo || '';
  el('f-pipeNo').value = parsed.pipeNo || '';
  el('f-csHeat').value = parsed.csHeat || '';
  el('f-craHeat').value = parsed.craHeat || '';
  el('f-length').value = parsed.length || '';
  el('f-scannedAt').textContent = new Date().toLocaleString(t('locale'));
  el('f-comment').value = '';
  el('prod-progress-row').classList.add('hidden');
  el('pipe-ambiguous-hint').classList.add('hidden');
  el('dup-scan-hint').classList.add('hidden');
  resetPhotoField();
  el('photo-existing-note').classList.add('hidden');
  el('confirm-title').textContent = t('confirm_title');
  renderChips();
  updateSaveState();
  showScreen('confirm');
}

// Admin: apre la scheda Conferma pre-compilata con i dati di un record gia' salvato,
// per correggerlo (es. ITP Step calcolato male prima di un fix) senza doverlo ricreare.
function openEditRecord(rec) {
  state.editingId = rec.id;
  state.draft = {
    itemNo: rec.itemNo || '', pipeNo: rec.pipeNo || '', csHeat: rec.csHeat || '',
    craHeat: rec.craHeat || '', length: rec.length || '',
    itpStep: rec.itpStep || null, condition: rec.condition || null, comment: rec.comment || '',
    defectType: rec.defectType || null, disposition: rec.disposition || null,
    _autoFields: new Set()
  };
  el('f-itemNo').value = rec.itemNo || '';
  el('f-pipeNo').value = rec.pipeNo || '';
  el('f-csHeat').value = rec.csHeat || '';
  el('f-craHeat').value = rec.craHeat || '';
  el('f-length').value = rec.length || '';
  el('f-scannedAt').textContent = rec.scannedAt ? new Date(rec.scannedAt).toLocaleString(t('locale')) : '-';
  el('f-comment').value = rec.comment || '';
  el('prod-progress-row').classList.add('hidden');
  el('pipe-ambiguous-hint').classList.add('hidden');
  el('dup-scan-hint').classList.add('hidden');
  resetPhotoField();
  el('photo-existing-note').classList.toggle('hidden', !rec.photoPath);
  el('confirm-title').textContent = t('confirm_title_edit');
  renderChips();
  updateSaveState();
  showScreen('confirm');
}

// ---------------- Foto ----------------
// Compressa lato client (max 1600px, JPEG 72%) prima dell'invio: le foto da fotocamera
// pesano diversi MB, inutile spedirle intere su rete di cantiere solo per un allegato.
function resetPhotoField() {
  if (state.draft) { state.draft.photoBase64 = null; state.draft.photoName = null; }
  el('f-photo').value = '';
  el('photo-preview-wrap').classList.add('hidden');
  el('photo-pick-btn').classList.remove('hidden');
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const maxDim = 1600;
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        if (width > height) { height = Math.round(height * maxDim / width); width = maxDim; }
        else { width = Math.round(width * maxDim / height); height = maxDim; }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.72));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('img load failed')); };
    img.src = url;
  });
}

el('photo-pick-btn').addEventListener('click', () => el('f-photo').click());
el('f-photo').addEventListener('change', async () => {
  const file = el('f-photo').files[0];
  if (!file) return;
  try {
    const dataUrl = await compressImage(file);
    state.draft.photoBase64 = dataUrl.split(',')[1];
    state.draft.photoName = (state.draft.pipeNo || 'asset') + '-' + Date.now() + '.jpg';
    el('photo-preview').src = dataUrl;
    el('photo-preview-wrap').classList.remove('hidden');
    el('photo-pick-btn').classList.add('hidden');
    el('photo-existing-note').classList.add('hidden');
  } catch (e) { alert(t('err_photo')); }
});
el('photo-remove-btn').addEventListener('click', () => {
  resetPhotoField();
  if (state.editingId) {
    const rec = state.records.find(r => r.id === state.editingId);
    el('photo-existing-note').classList.toggle('hidden', !(rec && rec.photoPath));
  }
});

function renderChips() {
  const itpWrap = el('itp-chips'); itpWrap.innerHTML = '';
  (state.meta.itpSteps.length ? state.meta.itpSteps : ['Milling','Welding Base','Welding Clad','Hydro','UT','RT','PT','FI (Final Inspection)']).forEach(step => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip itp' + (state.draft.itpStep === step ? ' selected itp' : '');
    b.textContent = step;
    b.addEventListener('click', () => {
      state.draft.itpStep = step;
      state.draft._autoFields.delete('itpStep'); // scelta manuale: non va piu' sovrascritta dall'auto-fill
      renderChips();
      updateSaveState();
    });
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

  // Tipo difetto/Disposizione: visibili solo per condizioni "difetto" (stile NCR).
  const isDefect = isDefectCondition(state.draft.condition);
  el('defect-fields').classList.toggle('hidden', !isDefect);
  if (isDefect) {
    const typeWrap = el('defect-type-chips'); typeWrap.innerHTML = '';
    (state.meta.defectTypes && state.meta.defectTypes.length ? state.meta.defectTypes : DEFECT_TYPE_CODES).forEach(code => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.draft.defectType === code ? ' selected itp' : '');
      b.textContent = defectTypeLabel(code);
      b.addEventListener('click', () => { state.draft.defectType = code; renderChips(); });
      typeWrap.appendChild(b);
    });
    const dispWrap = el('disposition-chips'); dispWrap.innerHTML = '';
    (state.meta.dispositions && state.meta.dispositions.length ? state.meta.dispositions : DISPOSITION_CODES).forEach(code => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.draft.disposition === code ? ' selected itp' : '');
      b.textContent = dispositionLabel(code);
      b.addEventListener('click', () => { state.draft.disposition = code; renderChips(); });
      dispWrap.appendChild(b);
    });
  }
}

function updateSaveState() {
  const ready = !!(state.draft && state.draft.itpStep && state.draft.condition);
  el('confirm-save').disabled = !ready;
}

['f-itemNo','f-pipeNo','f-csHeat','f-craHeat','f-length'].forEach(id => {
  el(id).addEventListener('input', () => {
    const key = id.replace('f-', '');
    state.draft[key] = el(id).value;
    // l'utente sta digitando a mano: il campo non e' piu' "solo auto-compilato", non va piu' sovrascritto in automatico
    if (state.draft._autoFields) state.draft._autoFields.delete(key);
  });
});
el('f-comment').addEventListener('input', () => { state.draft.comment = el('f-comment').value; });

// Auto-compilazione da dati di produzione (Raw data COMP3B): basta il solo Pipe N. (come nel
// foglio Excel "Ricerca da Elenco" - cerca su tutti gli Item, prima corrispondenza); se anche
// Item N. e' valorizzato, cerca la corrispondenza esatta Item+Pipe. Riempie CS Heat/CRA Heat/
// Length/Item N. solo se vuoti O se il valore attuale viene da una precedente auto-compilazione
// mai toccata a mano (cosi' cambiando Pipe N. si aggiorna, senza mai cancellare correzioni manuali)
// e suggerisce l'ITP Step.
function setAutoField(id, key, value) {
  el(id).value = value;
  state.draft[key] = value;
  state.draft._autoFields.add(key);
}
// Se lo stesso Pipe N. risulta gia' scansionato oggi (per l'ordine corrente), avvisa subito
// invece di scoprirlo solo dopo, guardando il Dataset - non blocca il salvataggio: un secondo
// scan puo' essere legittimo (es. difetto trovato dopo), ma l'ispettore deve saperlo.
function checkDuplicateScan() {
  const hint = el('dup-scan-hint');
  const pipeNo = el('f-pipeNo').value.trim();
  if (!pipeNo) { hint.classList.add('hidden'); return; }
  const normPipe = normProdNum(pipeNo);
  const todayStr = new Date().toDateString();
  const dup = state.records.find(r =>
    r.id !== state.editingId &&
    normProdNum(r.pipeNo) === normPipe &&
    r.scannedAt && new Date(r.scannedAt).toDateString() === todayStr
  );
  if (!dup) { hint.classList.add('hidden'); return; }
  const time = dup.scannedAt ? new Date(dup.scannedAt).toLocaleTimeString(t('locale'), { hour: '2-digit', minute: '2-digit' }) : '-';
  hint.textContent = t('dup_scan_hint').replace('{time}', time).replace('{by}', dup.scannedBy || '-');
  hint.classList.remove('hidden');
}

function tryAutoFillFromProduction() {
  const itemNo = el('f-itemNo').value.trim();
  const pipeNo = el('f-pipeNo').value.trim();
  checkDuplicateScan();
  if (!pipeNo) {
    el('prod-progress-row').classList.add('hidden');
    el('pipe-ambiguous-hint').classList.add('hidden');
    return;
  }
  let match = null;
  if (itemNo) match = state.productionMap.get(prodKey(itemNo, pipeNo));
  if (!match) match = state.productionByPipe.get(normProdNum(pipeNo));
  const isAmbiguous = !itemNo && !match && state.ambiguousPipes.has(normProdNum(pipeNo));
  el('pipe-ambiguous-hint').classList.toggle('hidden', !isAmbiguous);
  if (!match) { el('prod-progress-row').classList.add('hidden'); return; }
  const canOverwrite = (id, key) => !el(id).value.trim() || state.draft._autoFields.has(key);
  if (!itemNo && match.itemNo) { el('f-itemNo').value = match.itemNo; state.draft.itemNo = match.itemNo; }
  // Se il nuovo tubo non ha un valore per questo campo, svuotalo invece di lasciare
  // quello (sbagliato) del tubo scansionato prima - vale solo per campi auto-compilati,
  // mai per una correzione manuale dell'ispettore.
  ['csHeat', 'craHeat', 'length'].forEach(key => {
    const id = 'f-' + key;
    if (!canOverwrite(id, key)) return;
    if (match[key]) setAutoField(id, key, match[key]);
    else setAutoField(id, key, '');
  });
  // Stessa logica "auto vs manuale" dei campi sopra: se l'ITP Step in vista era solo
  // auto-suggerito (mai scelto a mano), si aggiorna cambiando tubo; se l'ispettore lo
  // ha scelto lui, resta protetto.
  const itpAutoOk = !state.draft.itpStep || state.draft._autoFields.has('itpStep');
  if (itpAutoOk) {
    if (match.currentStep) {
      state.draft.itpStep = match.currentStep;
      state.draft._autoFields.add('itpStep');
    } else if (state.draft._autoFields.has('itpStep')) {
      state.draft.itpStep = null;
      state.draft._autoFields.delete('itpStep');
    }
    renderChips();
    updateSaveState();
  }
  if (typeof match.progress === 'number' && match.currentStep) {
    const pct = Math.round(match.progress * 100);
    const stepNum = match.currentStepNum || (ITP_STEPS_FALLBACK.indexOf(match.currentStep) + 1);
    el('f-progress').textContent = `${pct}% — ITP Step N° ${stepNum}: ${match.currentStep}`;
    el('prod-progress-row').classList.remove('hidden');
  } else {
    el('prod-progress-row').classList.add('hidden');
  }
}
['f-itemNo', 'f-pipeNo'].forEach(id => el(id).addEventListener('input', tryAutoFillFromProduction));

el('confirm-cancel').addEventListener('click', () => {
  state.draft = null;
  state.editingId = null;
  showScreen('dataset');
});

el('confirm-save').addEventListener('click', async () => {
  if (!state.draft || !state.draft.itpStep || !state.draft.condition) return;
  el('confirm-save').disabled = true;
  el('confirm-save').textContent = t('confirm_save_saving');
  try {
    if (state.editingId) {
      const { record } = await api('/api/records/' + encodeURIComponent(state.editingId), { method: 'PUT', body: JSON.stringify(state.draft) });
      const idx = state.records.findIndex(r => r.id === state.editingId);
      if (idx >= 0) state.records[idx] = record; else state.records.unshift(record);
      state.editingId = null;
      renderDatasetList();
    } else {
      try {
        const { record } = await api('/api/records', { method: 'POST', body: JSON.stringify(state.draft) });
        state.records.unshift(record);
        renderDatasetList();
      } catch (err) {
        // errore di rete (offline/rete instabile) su un NUOVO scan: si mette in coda invece
        // di far perdere il rilievo all'ispettore. Un errore del server (es. campi mancanti)
        // resta invece un errore vero, va corretto e reinviato.
        if (err instanceof TypeError) {
          await queueRecordOffline(state.draft);
          alert(t('saved_offline_note'));
        } else {
          throw err;
        }
      }
    }
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
  // loadRecords() sostituisce l'intero array dal server: senza questo, uno scan appena
  // messo in coda offline sparirebbe dalla vista al primo refresh/cambio ordine prima
  // ancora di essere sincronizzato davvero.
  try {
    const pending = (await idbGetAllPending())
      .filter(it => it.orderId === state.currentOrderId)
      .sort((a, b) => a.createdAt - b.createdAt);
    pending.forEach(it => state.records.unshift(buildPendingRecord(it.localId, it.data, it.orderId)));
  } catch (e) { /* IndexedDB non disponibile: nessuna coda da recuperare */ }
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
  el('dataset-title-count').textContent = t(state.records.length === 1 ? 'dataset_title_count_one' : 'dataset_title_count').replace('{n}', state.records.length);
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">${escapeHtml(t('dataset_empty'))}</div>`;
    updateSyncBanner();
    return;
  }
  const card = document.createElement('div');
  card.className = 'list-card';
  filtered.forEach(r => {
    const row = document.createElement('div');
    row.className = 'list-row row-' + r.condition;
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
        ${r._pending
          ? `<span class="badge badge-queued">${escapeHtml(t('status_queued'))}</span>`
          : `<span class="badge badge-${r.condition}">${escapeHtml(condLabel(r.condition))}</span>`}
        ${isAdmin && !r._pending ? `<button class="delete-row-btn" data-id="${escapeHtml(r.id)}" title="${escapeHtml(t('remove'))}">&#128465;</button>` : ''}
        <span class="chevron">&rsaquo;</span>
      </div>`;
    if (r._pending) {
      row.addEventListener('click', () => alert(t('err_queued_no_detail')));
    } else {
      row.addEventListener('click', () => openDetail(r.id));
      row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(r.id); } });
    }
    if (isAdmin && !r._pending) {
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
  updateSyncBanner();
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
el('theme-toggle-login').addEventListener('click', toggleTheme);
el('theme-toggle-dataset').addEventListener('click', toggleTheme);
applyTheme();

// ---------------- Detail ----------------
// Foto caricata tramite l'API (autenticata con la sessione dell'ispettore), non con un
// link diretto al repo GitHub: cosi' la vede qualunque ispettore loggato nell'app, non solo
// chi ha un account GitHub con accesso al repo privato.
let detailPhotoObjectUrl = null;
async function loadDetailPhoto(id) {
  if (detailPhotoObjectUrl) { URL.revokeObjectURL(detailPhotoObjectUrl); detailPhotoObjectUrl = null; }
  el('d-photo-img').classList.add('hidden');
  el('d-photo-status').textContent = t('photo_loading');
  el('d-photo-status').classList.remove('hidden');
  try {
    const headers = {};
    if (state.session && state.session.token) headers['Authorization'] = 'Bearer ' + state.session.token;
    const resp = await fetch(API_BASE + '/api/records/' + encodeURIComponent(id) + '/photo', { headers });
    if (!resp.ok) throw new Error('photo fetch failed');
    const blob = await resp.blob();
    detailPhotoObjectUrl = URL.createObjectURL(blob);
    el('d-photo-img').src = detailPhotoObjectUrl;
    el('d-photo-img').classList.remove('hidden');
    el('d-photo-status').classList.add('hidden');
  } catch (e) {
    el('d-photo-status').textContent = t('err_photo_load');
  }
}
el('d-photo-img').addEventListener('click', () => { if (detailPhotoObjectUrl) window.open(detailPhotoObjectUrl, '_blank'); });

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
  if (rec.photoPath) {
    el('d-photo-card').classList.remove('hidden');
    loadDetailPhoto(rec.id);
  } else {
    el('d-photo-card').classList.add('hidden');
  }
  el('d-defect-type-row').classList.toggle('hidden', !rec.defectType);
  if (rec.defectType) el('d-defect-type').textContent = defectTypeLabel(rec.defectType);
  el('d-disposition-row').classList.toggle('hidden', !rec.disposition);
  if (rec.disposition) el('d-disposition').textContent = dispositionLabel(rec.disposition);
  const isClosed = rec.status === 'closed';
  el('d-closedBy-row').classList.toggle('hidden', !isClosed);
  el('d-closedAt-row').classList.toggle('hidden', !isClosed);
  el('d-closeNote-row').classList.toggle('hidden', !isClosed);
  if (isClosed) {
    el('d-closedBy').textContent = rec.closedBy || '-';
    el('d-closedAt').textContent = rec.closedAt ? new Date(rec.closedAt).toLocaleString(t('locale')) : '-';
    el('d-closeNote').textContent = rec.closureNote || '-';
  }
  el('d-close-note-prompt').classList.add('hidden');
  if (isDefectCondition(rec.condition)) {
    const isOpen = rec.status !== 'closed';
    el('d-status-row').classList.remove('hidden');
    el('d-status-badge').textContent = t(isOpen ? 'status_open' : 'status_closed');
    el('d-status-badge').className = 'badge badge-status-' + (isOpen ? 'open' : 'closed');
    el('d-status-toggle').textContent = t(isOpen ? 'status_close_btn' : 'status_reopen_btn');
    el('d-status-toggle').className = 'btn-status-toggle ' + (isOpen ? 'btn-status-close' : 'btn-status-reopen');
    if (isOpen && rec.scannedAt) {
      const days = Math.floor((Date.now() - new Date(rec.scannedAt).getTime()) / 86400000);
      if (days >= 1) { el('d-aging').textContent = '● ' + days + 'g'; el('d-aging').classList.remove('hidden'); }
      else el('d-aging').classList.add('hidden');
    } else {
      el('d-aging').classList.add('hidden');
    }
  } else {
    el('d-status-row').classList.add('hidden');
  }
  renderTimeline(rec);
  el('detail-edit-btn').classList.remove('hidden');
  showScreen('detail');
}

// Cronologia derivata dai campi di audit gia' presenti sul record (emissione, ultima
// modifica, ultima chiusura) - non e' uno storico illimitato, solo l'ultimo evento di ognuno.
function renderTimeline(rec) {
  const entries = [];
  if (rec.scannedAt) entries.push({ text: t('timeline_issued').replace('{who}', rec.scannedBy || '-'), when: rec.scannedAt });
  if (rec.editedAt) entries.push({ text: t('timeline_edited').replace('{who}', rec.editedBy || '-'), when: rec.editedAt });
  if (rec.closedAt) entries.push({ text: t('timeline_closed').replace('{who}', rec.closedBy || '-') + (rec.closureNote ? ': ' + rec.closureNote : ''), when: rec.closedAt });
  const wrap = el('d-timeline');
  if (!entries.length) { el('d-timeline-card').classList.add('hidden'); return; }
  entries.sort((a, b) => a.when.localeCompare(b.when));
  wrap.innerHTML = entries.map(e => `
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-text">${escapeHtml(e.text)}<span>${new Date(e.when).toLocaleString(t('locale'))}</span></div>
    </div>`).join('');
  el('d-timeline-card').classList.remove('hidden');
}

el('detail-back').addEventListener('click', () => showScreen('dataset'));
el('d-status-toggle').addEventListener('click', async () => {
  const rec = state.records.find(r => r.id === state.selectedId);
  if (!rec) return;
  if (rec.status === 'closed') {
    // riaprire non richiede nota: azione rapida
    el('d-status-toggle').disabled = true;
    try {
      const { record } = await api('/api/records/' + encodeURIComponent(rec.id) + '/status', {
        method: 'POST', body: JSON.stringify({ status: 'open' })
      });
      const idx = state.records.findIndex(r => r.id === rec.id);
      if (idx >= 0) state.records[idx] = record;
      openDetail(rec.id);
      renderDatasetList();
    } catch (err) {
      alert(t('err_generic') + err.message);
    } finally {
      el('d-status-toggle').disabled = false;
    }
  } else {
    // chiudere richiede causa + azione correttiva: mostra il campo invece di chiudere subito
    el('d-close-note-input').value = '';
    el('d-close-note-prompt').classList.remove('hidden');
  }
});
el('d-close-note-cancel').addEventListener('click', () => {
  el('d-close-note-prompt').classList.add('hidden');
});
el('d-close-note-confirm').addEventListener('click', async () => {
  const rec = state.records.find(r => r.id === state.selectedId);
  if (!rec) return;
  const note = el('d-close-note-input').value.trim();
  if (!note) { alert(t('err_close_note_required')); return; }
  el('d-close-note-confirm').disabled = true;
  try {
    const { record } = await api('/api/records/' + encodeURIComponent(rec.id) + '/status', {
      method: 'POST', body: JSON.stringify({ status: 'closed', closureNote: note })
    });
    const idx = state.records.findIndex(r => r.id === rec.id);
    if (idx >= 0) state.records[idx] = record;
    openDetail(rec.id);
    renderDatasetList();
  } catch (err) {
    alert(t('err_generic') + err.message);
  } finally {
    el('d-close-note-confirm').disabled = false;
  }
});
el('detail-edit-btn').addEventListener('click', () => {
  const rec = state.records.find(r => r.id === state.selectedId);
  if (rec) openEditRecord(rec);
});

// ---------------- Admin ----------------
el('admin-gear').addEventListener('click', async () => {
  await loadUsers();
  showScreen('admin');
});
el('admin-back').addEventListener('click', () => showScreen('dataset'));

// ---------------- Guida ----------------
el('help-btn').addEventListener('click', () => {
  el('help-content').innerHTML = HELP_CONTENT[state.lang] || HELP_CONTENT.it;
  showScreen('help');
});
el('help-back').addEventListener('click', () => showScreen('dataset'));

// ---------------- Statistiche ----------------
const STATS_WEEKS = 8;
const CONDITION_COLORS = {
  excellent: 'var(--green)', good: 'var(--blue-c)', 'needs-review': 'var(--orange)', damaged: 'var(--red)'
};

function isoWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return { week, year: d.getUTCFullYear() };
}

function mondayOf(date) {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // 0 = lunedi
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

function computeWeeklyStats(records) {
  const thisMonday = mondayOf(new Date());
  const weeks = [];
  for (let i = STATS_WEEKS - 1; i >= 0; i--) {
    const monday = new Date(thisMonday);
    monday.setDate(thisMonday.getDate() - i * 7);
    weeks.push({ key: monday.toISOString().slice(0, 10), monday, counts: { excellent: 0, good: 0, 'needs-review': 0, damaged: 0 } });
  }
  const weekIndex = new Map(weeks.map(w => [w.key, w]));
  records.forEach(r => {
    if (!r.scannedAt) return;
    const key = mondayOf(r.scannedAt).toISOString().slice(0, 10);
    const w = weekIndex.get(key);
    if (w && w.counts[r.condition] !== undefined) w.counts[r.condition]++;
  });
  return weeks;
}

function renderStats() {
  const total = state.records.length;
  const allDefects = state.records.filter(r => isDefectCondition(r.condition));
  const openDefects = allDefects.filter(r => r.status !== 'closed');
  const closedCount = allDefects.length - openDefects.length;
  el('stats-total').textContent = total;
  el('stats-defects').textContent = openDefects.length;
  el('stats-defect-pct').textContent = allDefects.length ? Math.round((closedCount / allDefects.length) * 100) + '%' : '-';

  const closedWithDates = allDefects.filter(r => r.status === 'closed' && r.closedAt && r.scannedAt);
  if (closedWithDates.length) {
    const avgDays = closedWithDates.reduce((sum, r) => sum + (new Date(r.closedAt) - new Date(r.scannedAt)) / 86400000, 0) / closedWithDates.length;
    el('stats-avg-close').textContent = avgDays.toFixed(1).replace('.', ',');
  } else {
    el('stats-avg-close').textContent = '-';
  }
  const agingCount = openDefects.filter(r => r.scannedAt && (Date.now() - new Date(r.scannedAt).getTime()) / 86400000 >= 5).length;
  el('stats-aging').textContent = agingCount;

  const typeCounts = {};
  DEFECT_TYPE_CODES.forEach(code => { typeCounts[code] = 0; });
  allDefects.forEach(r => { if (r.defectType && typeCounts[r.defectType] !== undefined) typeCounts[r.defectType]++; });
  const typeTotal = Object.values(typeCounts).reduce((a, b) => a + b, 0);
  const typeCard = el('stats-defect-type-card');
  if (!typeTotal) {
    typeCard.classList.add('hidden');
  } else {
    typeCard.classList.remove('hidden');
    el('stats-defect-type-list').innerHTML = DEFECT_TYPE_CODES.map(code =>
      `<div class="row"><label>${escapeHtml(defectTypeLabel(code))}</label><span class="readonly">${typeCounts[code]}</span></div>`
    ).join('');
  }

  const dispCounts = {};
  DISPOSITION_CODES.forEach(code => { dispCounts[code] = 0; });
  allDefects.forEach(r => { if (r.disposition && dispCounts[r.disposition] !== undefined) dispCounts[r.disposition]++; });
  const dispTotal = Object.values(dispCounts).reduce((a, b) => a + b, 0);
  const dispCard = el('stats-disposition-card');
  if (!dispTotal) {
    dispCard.classList.add('hidden');
  } else {
    dispCard.classList.remove('hidden');
    el('stats-disposition-list').innerHTML = DISPOSITION_CODES.map(code =>
      `<div class="stats-legend-item"><span>${escapeHtml(dispositionLabel(code))}: ${dispCounts[code]}</span></div>`
    ).join('');
  }

  const weeks = computeWeeklyStats(state.records);
  const maxTotal = Math.max(1, ...weeks.map(w => Object.values(w.counts).reduce((a, b) => a + b, 0)));
  const chart = el('stats-chart');
  chart.innerHTML = '';
  weeks.forEach(w => {
    const weekTotal = Object.values(w.counts).reduce((a, b) => a + b, 0);
    const col = document.createElement('div');
    col.className = 'stats-bar-col';
    const totalLabel = document.createElement('div');
    totalLabel.className = 'stats-bar-total';
    totalLabel.textContent = weekTotal || '';
    const stack = document.createElement('div');
    stack.className = 'stats-bar-stack';
    stack.style.height = Math.max(4, Math.round((weekTotal / maxTotal) * 130)) + 'px';
    ['excellent', 'good', 'needs-review', 'damaged'].forEach(code => {
      const count = w.counts[code];
      if (!count) return;
      const seg = document.createElement('div');
      seg.className = 'stats-bar-seg';
      seg.style.background = CONDITION_COLORS[code];
      seg.style.height = Math.round((count / weekTotal) * 100) + '%';
      stack.appendChild(seg);
    });
    const label = document.createElement('div');
    label.className = 'stats-bar-label';
    const iso = isoWeekNumber(w.monday);
    label.textContent = iso.week + '/' + iso.year;
    col.appendChild(totalLabel);
    col.appendChild(stack);
    col.appendChild(label);
    chart.appendChild(col);
  });

  const legend = el('stats-legend');
  legend.innerHTML = '';
  ['excellent', 'good', 'needs-review', 'damaged'].forEach(code => {
    const item = document.createElement('div');
    item.className = 'stats-legend-item';
    item.innerHTML = `<span class="stats-legend-dot" style="background:${CONDITION_COLORS[code]}"></span><span>${escapeHtml(condLabel(code))}</span>`;
    legend.appendChild(item);
  });

  const defectRecords = state.records
    .filter(r => isDefectCondition(r.condition))
    .sort((a, b) => {
      const aOpen = a.status !== 'closed', bOpen = b.status !== 'closed';
      if (aOpen !== bOpen) return aOpen ? -1 : 1; // aperti prima
      return (b.scannedAt || '').localeCompare(a.scannedAt || '');
    });
  const listWrap = el('stats-defects-list');
  listWrap.innerHTML = '';
  if (!defectRecords.length) {
    listWrap.innerHTML = `<div class="empty-state">${escapeHtml(t('stats_no_defects'))}</div>`;
  } else {
    const card = document.createElement('div');
    card.className = 'list-card';
    defectRecords.forEach(r => {
      const row = document.createElement('div');
      const isOpen = r.status !== 'closed';
      row.className = 'list-row row-' + r.condition;
      row.setAttribute('role', 'button');
      row.setAttribute('tabindex', '0');
      const dateStr = r.scannedAt ? new Date(r.scannedAt).toLocaleDateString(t('locale')) : '';
      row.innerHTML = `
        <div class="info">
          <span class="pipe">${escapeHtml(r.pipeNo || '-')}</span>
          <span class="meta">${escapeHtml(r.itemNo || '-')} · ${escapeHtml(r.itpStep || '-')} · ${dateStr}</span>
        </div>
        <div class="right">
          <span class="badge badge-status-${isOpen ? 'open' : 'closed'}">${escapeHtml(t(isOpen ? 'status_open' : 'status_closed'))}</span>
          <span class="badge badge-${r.condition}">${escapeHtml(condLabel(r.condition))}</span>
          <span class="chevron">&rsaquo;</span>
        </div>`;
      row.addEventListener('click', () => openDetail(r.id));
      row.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(r.id); } });
      card.appendChild(row);
    });
    listWrap.appendChild(card);
  }
}

el('stats-btn').addEventListener('click', () => {
  renderStats();
  showScreen('stats');
});
el('stats-back').addEventListener('click', () => showScreen('dataset'));

// ---------------- Stato Ordine ----------------
// Non e' un'altra vista sui difetti (quella e' Statistiche): risponde a "dove sta rallentando
// l'ordine adesso", incrociando i dati di produzione (a che ITP Step e' ogni tubo) con i
// difetti aperti scansionati - l'imbuto e' cumulativo: quanti tubi hanno RAGGIUNTO almeno
// quello step, cosi' il calo piu' forte tra due step consecutivi segnala da solo il collo
// di bottiglia, senza bisogno di soglie configurate a mano.
// 'YYYY-MM-DD' -> Date locale (evita lo shift di un giorno che darebbe new Date(stringa)
// interpretando la stringa come UTC mezzanotte).
function parseISODate(s) {
  if (!s) return null;
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function renderOrderStatus() {
  const openDefects = state.records.filter(r => isDefectCondition(r.condition) && r.status !== 'closed');
  el('os-open-defects').textContent = openDefects.length;
  renderOrderStatusDefectsByStep(openDefects);

  const pf = state.phaseForecast;
  if (pf && pf.phases && pf.phases.length) {
    renderOrderStatusFromPhaseForecast(pf);
  } else {
    renderOrderStatusFromCumulativeFunnel();
  }
}

function renderOrderStatusDefectsByStep(openDefects) {
  const byStep = {};
  openDefects.forEach(r => { const key = r.itpStep || '-'; byStep[key] = (byStep[key] || 0) + 1; });
  const stepDefectEntries = Object.entries(byStep).sort((a, b) => b[1] - a[1]);
  const stepCard = el('os-defects-step-card');
  if (!stepDefectEntries.length) {
    stepCard.classList.add('hidden');
  } else {
    stepCard.classList.remove('hidden');
    el('os-defects-step-list').innerHTML = stepDefectEntries.map(([step, count]) =>
      `<div class="row"><label>${escapeHtml(step)}</label><span class="readonly">${count}</span></div>`
    ).join('');
  }
}

// Fonte preferita quando disponibile (sincronizzata da gui_produzione.py leggendo il foglio
// "Riepilogo per Fase" - gia' filtrato sul solo Item ancora in lavorazione, con data prevista
// e scarto vs contratto per fase): niente piu' somma su TUTTI gli Item mai tracciati, che
// mischiava lotti chiusi da tempo e falsava sia i totali sia il "collo di bottiglia".
function renderOrderStatusFromPhaseForecast(pf) {
  el('os-no-data-card').classList.add('hidden');
  el('os-funnel-card').classList.remove('hidden');

  el('os-item-header').classList.remove('hidden');
  el('os-item-name').textContent = t('os_item_label').replace('{item}', pf.itemNo || '-');
  el('os-item-days-value').textContent = (pf.daysRemaining !== null && pf.daysRemaining !== undefined) ? pf.daysRemaining : '-';
  const contractualStr = pf.contractualDate ? parseISODate(pf.contractualDate).toLocaleDateString(t('locale')) : '-';
  el('os-item-sub').textContent = t('os_item_sub').replace('{po}', pf.referencePO || '-').replace('{date}', contractualStr);

  const first = pf.phases[0];
  const last = pf.phases[pf.phases.length - 1];
  const total = first.totalPipes || 0;
  el('os-total').textContent = total;
  el('os-complete-pct').textContent = total ? Math.round((last.completed / total) * 100) + '%' : '-';

  // "Collo di bottiglia" qui = la fase con piu' pezzi ancora da fare, non piu' il calo
  // cumulativo tra step: con un solo Item, quel calo semplicemente segue l'ordine delle
  // fasi (ognuna ha sempre >= pezzi rimanenti della precedente) e non dice nulla di utile.
  let maxRemainingPhase = pf.phases[0];
  pf.phases.forEach(p => { if ((p.remaining || 0) > (maxRemainingPhase.remaining || 0)) maxRemainingPhase = p; });
  if (maxRemainingPhase && maxRemainingPhase.remaining > 0) {
    el('os-bottleneck-card').classList.remove('hidden');
    el('os-bottleneck-step').textContent = maxRemainingPhase.phase;
    el('os-bottleneck-sub').textContent = t('os_remaining_at_phase').replace('{n}', maxRemainingPhase.remaining);
  } else {
    el('os-bottleneck-card').classList.add('hidden');
  }

  el('os-funnel-title').textContent = t('os_funnel_title_phase');
  const wrap = el('os-funnel');
  wrap.innerHTML = '';
  pf.phases.forEach(p => {
    const pct = p.totalPipes ? Math.round((p.completed / p.totalPipes) * 100) : 0;
    const statusCode = p.status === 'OK' ? 'ok' : (p.status === 'DELAY' ? 'delay' : 'na');
    const statusLabel = statusCode === 'ok' ? t('os_status_ok') : (statusCode === 'delay' ? t('os_status_delay') : t('os_status_na'));
    const forecastStr = p.forecastDate ? parseISODate(p.forecastDate).toLocaleDateString(t('locale')) : '-';
    const devText = (typeof p.deviationDays === 'number')
      ? (p.deviationDays > 0 ? '+' + p.deviationDays : p.deviationDays) + t('os_days_vs_po')
      : t('os_status_na');
    const isMax = maxRemainingPhase && p.phase === maxRemainingPhase.phase;
    const card = document.createElement('div');
    card.className = 'os-phase-card';
    card.innerHTML = `
      <div class="os-phase-top"><span class="os-phase-name">${escapeHtml(p.phase)}</span><span class="os-phase-status ${statusCode}">${escapeHtml(statusLabel)}</span></div>
      <div class="os-phase-track"><div class="os-phase-fill${isMax ? ' hl' : ''}" style="width:${pct}%"></div></div>
      <div class="os-phase-nums"><span><b>${p.completed}</b> / ${p.totalPipes}</span><span>${p.remaining} ${t('os_remaining_word')}</span></div>
      <div class="os-phase-foot"><span>${t('os_forecast_label')} ${forecastStr}</span><span class="dev ${statusCode === 'delay' ? 'delay' : 'ok'}">${devText}</span></div>`;
    wrap.appendChild(card);
  });

  const noteEl = el('os-methodology-note');
  if (pf.methodologyNote) {
    noteEl.textContent = pf.methodologyNote;
    noteEl.classList.remove('hidden');
  } else {
    noteEl.classList.add('hidden');
  }
}

// Fallback generico (nessun 'Riepilogo per Fase' sincronizzato per l'ordine attivo, o
// struttura Excel diversa da COMP3B): imbuto cumulativo sull'INTERO state.productionRecords.
function renderOrderStatusFromCumulativeFunnel() {
  el('os-item-header').classList.add('hidden');
  el('os-methodology-note').classList.add('hidden');
  el('os-funnel-title').textContent = t('os_funnel_title');

  const steps = (state.meta.itpSteps && state.meta.itpSteps.length) ? state.meta.itpSteps : ITP_STEPS_FALLBACK;
  const prod = state.productionRecords || [];
  const total = prod.length;
  el('os-total').textContent = total;

  const noData = total === 0;
  el('os-no-data-card').classList.toggle('hidden', !noData);
  el('os-funnel-card').classList.toggle('hidden', noData);
  if (noData) {
    el('os-complete-pct').textContent = '-';
    el('os-bottleneck-card').classList.add('hidden');
    return;
  }

  const stepCounts = steps.map((step, idx) => {
    const stepNum = idx + 1;
    const count = prod.filter(r => (r.currentStepNum || 0) >= stepNum).length;
    return { step, stepNum, count };
  });

  const lastCount = stepCounts[stepCounts.length - 1].count;
  el('os-complete-pct').textContent = Math.round((lastCount / total) * 100) + '%';

  let bottleneck = null, maxDrop = 0;
  for (let i = 1; i < stepCounts.length; i++) {
    const drop = stepCounts[i - 1].count - stepCounts[i].count;
    if (drop > maxDrop) { maxDrop = drop; bottleneck = stepCounts[i]; }
  }
  if (bottleneck && maxDrop > 0) {
    el('os-bottleneck-card').classList.remove('hidden');
    el('os-bottleneck-step').textContent = bottleneck.step;
    el('os-bottleneck-sub').textContent = t('os_bottleneck_sub').replace('{n}', maxDrop).replace('{total}', total);
  } else {
    el('os-bottleneck-card').classList.add('hidden');
  }

  const funnelWrap = el('os-funnel');
  funnelWrap.innerHTML = '';
  stepCounts.forEach(sc => {
    const pct = total ? Math.round((sc.count / total) * 100) : 0;
    const isBottleneck = !!(bottleneck && sc.step === bottleneck.step);
    const row = document.createElement('div');
    row.className = 'funnel-row' + (isBottleneck ? ' is-bottleneck' : '');
    row.innerHTML = `
      <div class="funnel-head"><span class="step">${escapeHtml(sc.step)}</span><span class="count">${sc.count}</span></div>
      <div class="funnel-track"><div class="funnel-fill${isBottleneck ? ' bottleneck' : ''}" style="width:${pct}%"></div></div>`;
    funnelWrap.appendChild(row);
  });
}
el('order-status-btn').addEventListener('click', () => {
  renderOrderStatus();
  showScreen('order-status');
});
el('order-status-back').addEventListener('click', () => showScreen('dataset'));

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

// ---------------- Controllo versione ----------------
// GitHub Pages tiene index.html/css/js in cache lato server per ~10 min: invece di chiedere
// all'utente di ricordarsi trucchi con ?t=, l'app stessa controlla se e' uscita una versione
// piu' recente. Overlay BLOCCANTE (non un banner ignorabile): niente tasto per chiuderlo,
// l'unica azione possibile e' "Aggiorna" - cosi' nessun ispettore resta su una versione
// vecchia (es. senza l'ultimo controllo di validazione) senza accorgersene.
function showUpdateBanner() {
  if (el('update-overlay')) return;
  const b = document.createElement('div');
  b.id = 'update-overlay';
  b.className = 'update-overlay';
  b.innerHTML = `<div class="update-overlay-card">
    <div class="update-icon">⬆️</div>
    <h3>${escapeHtml(t('update_available'))}</h3>
    <p>${escapeHtml(t('update_required_desc'))}</p>
    <button id="update-overlay-btn">${escapeHtml(t('update_now'))}</button>
  </div>`;
  document.body.appendChild(b);
  el('update-overlay-btn').addEventListener('click', () => {
    location.href = location.pathname + '?t=' + Date.now();
  });
}
async function checkForUpdate() {
  try {
    const res = await fetch('version.json?_=' + Date.now(), { cache: 'no-store' });
    const data = await res.json();
    if (data.version && data.version > APP_VERSION) showUpdateBanner();
  } catch (e) { /* offline o rete assente: nessun blocco, non e' un errore da mostrare */ }
}
checkForUpdate();
setInterval(checkForUpdate, 5 * 60 * 1000);
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') checkForUpdate(); });
