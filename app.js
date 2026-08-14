const API_BASE = 'https://qr-scanner-api.fanatics.workers.dev';
const APP_VERSION = 119;
// Più foto (09.08.2026): limite scelto con Rino, ragionevole per non appesantire i
// caricamenti su rete di cantiere. Stesso limite ricontrollato lato Worker.
const PHOTO_MAX = 4;

const TRANSLATIONS = {
  it: {
    login_username_ph: 'Utente',
    login_password_ph: 'Password',
    login_btn: 'Entra',
    login_err_missing: 'Inserisci utente e password',
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
    translate_btn_title: 'Traduci in inglese tecnico',
    translate_box_label: 'Traduzione proposta (EN) — verificala prima di confermare',
    translate_confirm_btn: 'Conferma traduzione',
    translate_err: 'Errore traduzione: ',
    comment_en_label: 'Commento (EN)',
    whatsapp_share: 'Condividi su WhatsApp',
    confirm_section_todo: 'Da completare',
    dataset_title: 'Equipment Master Data',
    dataset_title_short: 'Dataset',
    dataset_title_count: '{n} schede registrate',
    dataset_title_count_one: '{n} scheda registrata',
    search_ph: 'Cerca per Pipe N°, Item N°...',
    dataset_empty: 'Nessun asset ancora scansionato',
    dataset_empty_sub: 'Scansiona il primo asset per iniziare',
    dataset_empty_search: 'Nessun risultato',
    dataset_empty_search_sub: 'Controlla il Pipe N°, l\'Item N° o il filtro attivo',
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
    has_photo: 'Ha una foto allegata',
    photo_tool_circle: 'Cerchio',
    photo_tool_arrow: 'Freccia',
    photo_tool_text: 'Testo',
    photo_text_ph: 'Breve etichetta...',
    photo_annotate_hint_circle: 'Tocca la foto per segnare il difetto',
    photo_annotate_hint_arrow: 'Trascina per disegnare una freccia',
    photo_annotate_hint_text: 'Tocca il punto, poi scrivi qui sotto',
    photo_not_editable: 'Foto già salvata — rimuovila e ricaricala per modificare i segni.',
    photo_annotate_undo: 'Annulla ultimo segno',
    photo_loading: 'Carico foto...',
    err_photo: 'Impossibile elaborare la foto, riprova.',
    err_photo_load: 'Impossibile caricare la foto.',
    help_title: 'Guida',
    detail_edit: 'Modifica',
    confirm_title_edit: 'Modifica asset',
    pipe_ambiguous_hint: 'Questo Pipe N° esiste su più Item: inserisci anche l\'Item N° per l\'auto-compilazione.',
    stats_title: 'Statistiche',
    stats_total: 'Schede totali',
    stats_defects: 'Difetti (da rev./danneggiato)',
    stats_defect_pct: '% difetti',
    stats_weekly_title: 'Rilievi per settimana',
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
    admin_role_viewer: 'Visitatore',
    admin_role_label: 'Ruolo',
    admin_online_now: 'Online ora',
    admin_last_active: 'Ultimo accesso: {when}',
    admin_never_logged_in: "Mai effettuato l'accesso",
    presence_label: 'Online',
    viewer_banner: 'Modalità sola consultazione',
    viewer_readonly_tag: 'sola lettura',
    remove: 'Rimuovi',
    deactivate: 'Disattiva',
    reactivate: 'Riattiva',
    admin_bulk_deactivate: '⚠ Fine ordine: disattiva tutti',
    admin_active_title: 'Ispettori attivi',
    admin_history_title: 'Storico ispettori',
    admin_history_empty: 'Nessun ispettore disattivato',
    admin_access_log_title: 'Storico accessi',
    access_log_today: 'Oggi',
    access_log_yesterday: 'Ieri',
    access_log_empty: 'Nessun accesso registrato',
    access_log_single: '1 accesso alle {when}',
    access_log_multi: '{n} accessi tra le {from} e le {to}',
    access_log_show_more: 'Mostra accessi più vecchi ›',
    admin_disabled_on: 'Disattivato il {date}',
    err_save: 'Errore salvataggio: ',
    err_generic: 'Errore: ',
    err_session_expired: 'Sessione scaduta o account disattivato: accedi di nuovo.',
    err_fill_all: 'Compila tutti i campi',
    confirm_remove_user: 'Rimuovere {u}?',
    delete_user_permanently_title: 'Elimina definitivamente',
    confirm_delete_user_permanently: 'Eliminare DEFINITIVAMENTE {u}? A differenza di "Disattiva", questa azione non lascia traccia e non si può annullare.',
    confirm_deactivate_user: 'Disattivare {u}? Non potrà più accedere, ma resterà nello storico ispettori.',
    confirm_bulk_deactivate: 'Disattivare tutti gli ispettori attivi? Utile a fine ordine. Il tuo account admin non viene toccato.',
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
    disp_accept: 'Accettato',
    disp_reject: 'Scartato',
    disp_concession: 'Deroga',
    // "repair" non e' piu' selezionabile (sostituita da "Da Riparare"/"Riparato", 07.08.2026)
    // ma l'etichetta resta per le schede vecchie gia' salvate con quella disposizione.
    disp_repair: 'Ripara',
    disp_to_repair: 'Da Riparare',
    disp_repaired: 'Riparato',
    disp_to_rework: 'Da Rilavorare',
    disp_reworked: 'Rilavorato',
    disp_hold: 'Sospeso',
    ncr_cr_title: 'NCR / CR',
    ncr_label: 'NCR',
    cr_label: 'CR',
    ncr_cr_comment_ph: 'Riferimento/nota NCR o CR',
    field_ncr_cr: 'NCR / CR',
    defect_details_title: 'Dettagli difetto',
    close_note_ph: 'Causa e azione correttiva (obbligatorio)',
    cancel_btn: 'Annulla',
    confirm_close_btn: 'Conferma chiusura',
    err_close_note_required: 'Inserisci causa e azione correttiva prima di chiudere.',
    retest_confirm_label: 'Disposizione: Ripara. Confermo che il tubo è stato ri-collaudato dopo la riparazione e trovato conforme.',
    err_retest_required: 'Conferma il ri-collaudo prima di chiudere.',
    retest_tag: 'Ri-collaudato',
    timeline_title: 'Cronologia',
    timeline_issued: 'Emesso da {who}',
    timeline_edited: 'Modificato da {who}',
    timeline_closed: 'Chiuso da {who}',
    stats_avg_close: 'Giorni medi chiusura',
    stats_aging: 'Aperti da +5gg',
    stats_by_type: 'Per tipo difetto',
    stats_by_disposition: 'Per disposizione',
    stats_ncr_cr_title: 'NCR / CR',
    order_pill_label: 'Progetto',
    order_sheet_title: 'Progetto',
    tools_menu_title: 'Strumenti',
    tools_sheet_title: 'Strumenti',
    tools_group_daily: 'Lavoro quotidiano',
    tools_group_progress: 'Andamento',
    tools_group_system: 'Sistema',
    order_new_ph: 'Nome nuovo ordine',
    order_new_btn: '+ Nuovo ordine',
    order_status_title: 'Stato Ordine',
    lookup_title: 'Cerca tubo',
    lookup_title_sub: 'Solo consultazione — nessun salvataggio',
    lookup_ph: 'Pipe N°',
    lookup_no_input: 'Digita un Pipe N° per vedere i dati di produzione e se è già stato registrato.',
    lookup_ambiguous_hint: 'Questo Pipe N° esiste su più Item — apri "Nuovo asset" e inserisci anche l\'Item N° per un risultato preciso.',
    lookup_not_found: 'Nessun dato di produzione né scheda trovati per questo Pipe N°.',
    lookup_prod_header: 'Dati produzione',
    lookup_already_registered: 'Già registrato il {date} da {by} — condizione: {cond}.',
    lookup_open_record: 'Apri scheda ›',
    lookup_register_btn: '+ Registra questo asset',
    fi_tally_title: 'Tally List FI',
    fi_tally_empty: 'Nessuna Tally List caricata dal tool desktop.',
    fi_tally_pending: 'da valutare',
    fi_tally_accepted_lbl: 'valutati',
    fi_tally_banner: '{pending} da valutare · {done} valutati',
    fi_tally_warn: '⚠ Difetto aperto: {label}',
    fi_tally_who: '{esito} da {by}, {when}',
    fi_tally_esito_accepted: 'Accettato',
    fi_tally_esito_rejected: 'Scartato',
    fi_tally_reason_ph: 'Motivo dello scarto',
    fi_tally_reason_required: 'Il motivo dello scarto è obbligatorio.',
    fi_tally_confirm_reject_btn: 'Conferma scarto',
    fi_tally_undo_confirm: 'Annullare questo esito e riportare il tubo in sospeso?',
    fi_tally_inspection_time_lbl: 'ore',
    fi_tally_summary: '{certNo} completata — {accepted} accettati, {rejected} scartati',
    fi_tally_summary_meters: ', {meters} m',
    fi_tally_summary_meters_partial: ', {meters} m (lunghezza trovata per {found}/{total} tubi)',
    fi_tally_show_detail: 'Mostra elenco dettagliato',
    fi_tally_weekly_title: 'Riepilogo settimanale',
    fi_tally_week_label: 'Settimana {week}/{year}',
    fi_tally_weekly_empty: 'Nessun tubo ancora valutato.',
    fi_tally_total_title: 'Totale — tutte le Tally List',
    fi_tally_total_since_start: 'Dall\'inizio',
    fi_tally_chart_title: 'Andamento Tally List',
    fi_tally_chart_lists: 'Tally List',
    fi_tally_chart_total_pipes: 'Tubi valutati',
    fi_tally_chart_best_week: 'Settimana con il tasso migliore',
    fi_tally_chart_best_week_detail: '{week} ({rate}%, {n} tubi)',
    fi_tally_chart_rejection_rate: 'Tasso di scarto',
    fi_tally_heat_worse: 'Peggio',
    fi_tally_heat_better: 'Meglio',
    fi_tally_heat_historical: 'Storico (solo conteggio)',
    fi_tally_bulk_label: 'Accetta tutti i tubi in sospeso',
    fi_tally_bulk_confirm: 'Accettare tutti i {n} tubi ancora in sospeso?',
    health_summary_ok: 'Tutto regolare',
    health_summary_warn: 'Stato: da verificare ({n})',
    health_prod_label: 'Dati produzione',
    health_prod_never: 'Mai sincronizzati',
    health_prod_synced: 'Ultima sincronizzazione: {when}',
    health_prod_stale: 'Ultima sincronizzazione: {when} — verifica se sono aggiornati',
    health_tally_label: 'Tally List FI',
    health_tally_none: 'Nessuna Tally List caricata',
    health_tally_pending: '{certNo} — {n} tubi ancora in sospeso',
    health_tally_done: '{certNo} — tutti i {n} tubi valutati',
    health_defects_label: 'Difetti aperti',
    health_defects_none: 'Nessun difetto aperto',
    health_defects_open: '{n} aperti',
    health_defects_aging: '{open} aperti, {aging} da oltre 5 giorni',
    health_last_scan: 'Ultimo scan registrato: {who}, {when}',
    fi_tally_heat_date: 'Data',
    fi_tally_heat_result: 'Esito',
    fi_tally_heat_meters: 'Metri',
    fi_xcheck_head: '⚠ {n} anomalie trovate su {total} tubi',
    fi_xcheck_not_found: 'Non trovato in produzione',
    fi_xcheck_duplicate: 'Duplicato in questa lista',
    fi_tally_historical_note: 'Dal foglio "Weekly TL": {pipes} tubi rilasciati dal 2025 ({weeks} settimane con TL, {meters} m) — solo conteggio, nessun dettaglio accettato/scartato per le liste più vecchie. Settimana con più tubi: {bestWeek} ({bestWeekPipes}).',
    tools_tag_new: 'Nuova',
    tools_tag_updated: 'Aggiornato',
    tools_tag_updated_at: 'Aggiornata {when}',
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
    badge_new: 'Nuovo',
    filter_all: 'Tutti',
    filter_defects_only: 'Solo difetti',
    wa_title: 'Asset scansionato:',
    wa_condition: 'Condizione',
    wa_comments: 'Commenti',
    wa_date: 'Data',
    pdf_generated_on: 'Generato da IQS Field Inspector — {when}',
    pdf_doctype_general: 'Stato Generale',
    pdf_doctype_order: 'Stato Ordine',
    pdf_doctype_dataset: 'Dataset Scansioni',
    pdf_doctype_stats: 'Statistiche',
    pdf_doctype_record: 'Scheda Tubo',
    pdf_band_general_data: 'Dati Generali',
    pdf_band_defect: 'Difetto',
    pdf_band_history: 'Cronologia',
    pdf_field_status: 'Stato',
    pdf_band_summary: 'Riepilogo',
    pdf_band_tally_all: 'Tally List FI — tutte le liste',
    pdf_band_defects_disposition: 'Difetti Dataset — disposizione',
    pdf_band_per_list: 'Dettaglio per Tally List',
    pdf_band_bottleneck: 'Collo di bottiglia',
    pdf_band_phases: 'Avanzamento per fase',
    pdf_band_list: 'Elenco schede',
    pdf_band_by_type: 'Per tipo difetto',
    pdf_band_by_disposition: 'Per disposizione',
    pdf_kpi_total_pipes: 'Totale tubi',
    pdf_kpi_total_records: 'Schede totali',
    pdf_kpi_open_defects: 'Difetti aperti',
    pdf_kpi_good: 'Buoni',
    pdf_kpi_rejected: 'Scartati',
    pdf_kpi_pending: 'In sospeso',
    pdf_kpi_complete: '% Completamento',
    pdf_kpi_days_left: 'Giorni residui',
    pdf_kpi_po: 'PO',
    pdf_kpi_closure: '% Chiusura',
    pdf_kpi_aging: 'Difetti >5gg',
    pdf_col_certno: 'Cert-No',
    pdf_col_date: 'Data',
    pdf_col_rate: 'Tasso',
    pdf_col_phase: 'Fase',
    pdf_col_done: 'Completati',
    pdf_col_remaining: 'Rimanenti',
    pdf_col_forecast: 'Prevista',
    pdf_col_deviation: 'Scarto',
    pdf_col_status: 'Stato',
    pdf_col_pipe: 'Pipe N°',
    pdf_col_item: 'Item',
    pdf_col_condition: 'Condizione',
    pdf_col_itp_step: 'ITP Step',
    pdf_col_inspector: 'Ispettore',
    pdf_col_type: 'Tipo',
    pdf_col_count: 'Numero',
    pdf_col_disposition: 'Disposizione',
    pdf_filter_label: 'Filtro: {filter}',
    pdf_rows_word: 'schede',
    pdf_no_phase_data: 'Nessun dato di produzione sincronizzato per questo ordine.',
    pdf_avg_close_note: 'Giorni medi di chiusura difetti: {days}',
    pdf_filename_general: '{order} Stato Generale {date}.pdf',
    pdf_filename_order: '{order} Stato Ordine {date}.pdf',
    pdf_filename_dataset: '{order} Dataset Scansioni {date}.pdf',
    pdf_filename_stats: '{order} Statistiche {date}.pdf',
    pdf_filename_record: '{order} Scheda {pipe} {date}.pdf',
    excel_filename: '{order} Export Completo {date}.xlsx',
    pdf_export_btn: 'Esporta PDF',
    excel_export_btn: 'Esporta Excel',
    bool_yes: 'Sì',
    bool_no: 'No',
    locale: 'it-IT'
  },
  en: {
    login_username_ph: 'Username',
    login_password_ph: 'Password',
    login_btn: 'Log in',
    login_err_missing: 'Enter username and password',
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
    translate_btn_title: 'Translate to technical English',
    translate_box_label: 'Proposed translation (EN) — check it before confirming',
    translate_confirm_btn: 'Confirm translation',
    translate_err: 'Translation error: ',
    comment_en_label: 'Comment (EN)',
    whatsapp_share: 'Share on WhatsApp',
    confirm_section_todo: 'To complete',
    dataset_title: 'Equipment Master Data',
    dataset_title_short: 'Dataset',
    dataset_title_count: '{n} records tracked',
    dataset_title_count_one: '{n} record tracked',
    search_ph: 'Search by Pipe No., Item No...',
    dataset_empty: 'No assets scanned yet',
    dataset_empty_sub: 'Scan your first asset to get started',
    dataset_empty_search: 'No results',
    dataset_empty_search_sub: 'Check the Pipe No., Item No. or the active filter',
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
    has_photo: 'Has a photo attached',
    photo_tool_circle: 'Circle',
    photo_tool_arrow: 'Arrow',
    photo_tool_text: 'Text',
    photo_text_ph: 'Short label...',
    photo_annotate_hint_circle: 'Tap the photo to mark the defect',
    photo_annotate_hint_arrow: 'Drag to draw an arrow',
    photo_annotate_hint_text: 'Tap the spot, then type below',
    photo_not_editable: 'Photo already saved — remove and re-add it to edit the marks.',
    photo_annotate_undo: 'Undo last mark',
    photo_loading: 'Loading photo...',
    err_photo: 'Could not process the photo, please try again.',
    err_photo_load: 'Could not load the photo.',
    help_title: 'Help',
    detail_edit: 'Edit',
    confirm_title_edit: 'Edit asset',
    pipe_ambiguous_hint: 'This Pipe No. exists on more than one Item: enter the Item No. too for auto-fill.',
    stats_title: 'Statistics',
    stats_total: 'Total records',
    stats_defects: 'Defects (needs review/damaged)',
    stats_defect_pct: '% defects',
    stats_weekly_title: 'Findings per week',
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
    admin_role_viewer: 'Viewer',
    admin_role_label: 'Role',
    admin_online_now: 'Online now',
    admin_last_active: 'Last active: {when}',
    admin_never_logged_in: 'Never logged in',
    presence_label: 'Online',
    viewer_banner: 'Read-only mode',
    viewer_readonly_tag: 'read-only',
    remove: 'Remove',
    deactivate: 'Deactivate',
    reactivate: 'Reactivate',
    admin_bulk_deactivate: '⚠ End of order: deactivate all',
    admin_active_title: 'Active inspectors',
    admin_history_title: 'Inspector history',
    admin_history_empty: 'No deactivated inspectors',
    admin_access_log_title: 'Access history',
    access_log_today: 'Today',
    access_log_yesterday: 'Yesterday',
    access_log_empty: 'No access recorded yet',
    access_log_single: '1 access at {when}',
    access_log_multi: '{n} accesses between {from} and {to}',
    access_log_show_more: 'Show older accesses ›',
    admin_disabled_on: 'Deactivated on {date}',
    err_save: 'Save error: ',
    err_generic: 'Error: ',
    err_session_expired: 'Session expired or account disabled: please log in again.',
    err_fill_all: 'Fill in all fields',
    confirm_remove_user: 'Remove {u}?',
    delete_user_permanently_title: 'Delete permanently',
    confirm_delete_user_permanently: 'PERMANENTLY delete {u}? Unlike "Deactivate", this leaves no trace and cannot be undone.',
    confirm_deactivate_user: 'Deactivate {u}? They will no longer be able to log in, but will stay in the inspector history.',
    confirm_bulk_deactivate: 'Deactivate all active inspectors? Handy at the end of an order. Your admin account is not affected.',
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
    disp_accept: 'Accepted',
    disp_reject: 'Rejected',
    disp_concession: 'Concession',
    disp_repair: 'Repair',
    disp_to_repair: 'To Repair',
    disp_repaired: 'Repaired',
    disp_to_rework: 'To Rework',
    disp_reworked: 'Reworked',
    disp_hold: 'On Hold',
    ncr_cr_title: 'NCR / CR',
    ncr_label: 'NCR',
    cr_label: 'CR',
    ncr_cr_comment_ph: 'NCR or CR reference/note',
    field_ncr_cr: 'NCR / CR',
    defect_details_title: 'Defect details',
    close_note_ph: 'Root cause and corrective action (required)',
    cancel_btn: 'Cancel',
    confirm_close_btn: 'Confirm closure',
    err_close_note_required: 'Enter root cause and corrective action before closing.',
    retest_confirm_label: 'Disposition: Repair. I confirm the pipe was retested after the repair and found conforming.',
    err_retest_required: 'Confirm the retest before closing.',
    retest_tag: 'Retested',
    timeline_title: 'Timeline',
    timeline_issued: 'Issued by {who}',
    timeline_edited: 'Edited by {who}',
    timeline_closed: 'Closed by {who}',
    stats_avg_close: 'Avg. days to close',
    stats_aging: 'Open for +5 days',
    stats_by_type: 'By defect type',
    stats_by_disposition: 'By disposition',
    stats_ncr_cr_title: 'NCR / CR',
    order_pill_label: 'Project',
    order_sheet_title: 'Project',
    tools_menu_title: 'Tools',
    tools_sheet_title: 'Tools',
    tools_group_daily: 'Daily work',
    tools_group_progress: 'Progress',
    tools_group_system: 'System',
    order_new_ph: 'New order name',
    order_new_btn: '+ New order',
    order_status_title: 'Order Status',
    lookup_title: 'Pipe lookup',
    lookup_title_sub: 'Read-only — nothing is saved',
    lookup_ph: 'Pipe N°',
    lookup_no_input: 'Type a Pipe N° to see production data and whether it has already been registered.',
    lookup_ambiguous_hint: 'This Pipe N° exists on multiple Items — open "New asset" and also enter the Item N° for an exact match.',
    lookup_not_found: 'No production data or record found for this Pipe N°.',
    lookup_prod_header: 'Production data',
    lookup_already_registered: 'Already registered on {date} by {by} — condition: {cond}.',
    lookup_open_record: 'Open record ›',
    lookup_register_btn: '+ Register this asset',
    fi_tally_title: 'Tally List FI',
    fi_tally_empty: 'No Tally List uploaded from the desktop tool yet.',
    fi_tally_pending: 'pending',
    fi_tally_accepted_lbl: 'evaluated',
    fi_tally_banner: '{pending} pending · {done} evaluated',
    fi_tally_warn: '⚠ Open defect: {label}',
    fi_tally_who: '{esito} by {by}, {when}',
    fi_tally_esito_accepted: 'Accepted',
    fi_tally_esito_rejected: 'Rejected',
    fi_tally_reason_ph: 'Reason for rejection',
    fi_tally_reason_required: 'The rejection reason is required.',
    fi_tally_confirm_reject_btn: 'Confirm rejection',
    fi_tally_undo_confirm: 'Undo this outcome and put the tube back to pending?',
    fi_tally_inspection_time_lbl: 'at',
    fi_tally_summary: '{certNo} completed — {accepted} accepted, {rejected} rejected',
    fi_tally_summary_meters: ', {meters} m',
    fi_tally_summary_meters_partial: ', {meters} m (length found for {found}/{total} pipes)',
    fi_tally_show_detail: 'Show detailed list',
    fi_tally_weekly_title: 'Weekly summary',
    fi_tally_week_label: 'Week {week}/{year}',
    fi_tally_weekly_empty: 'No pipes evaluated yet.',
    fi_tally_total_title: 'Total — all Tally Lists',
    fi_tally_total_since_start: 'Since the start',
    fi_tally_chart_title: 'Tally List trend',
    fi_tally_chart_lists: 'Tally Lists',
    fi_tally_chart_total_pipes: 'Pipes evaluated',
    fi_tally_chart_best_week: 'Week with the best rate',
    fi_tally_chart_best_week_detail: '{week} ({rate}%, {n} pipes)',
    fi_tally_chart_rejection_rate: 'Rejection rate',
    fi_tally_heat_worse: 'Worse',
    fi_tally_heat_better: 'Better',
    fi_tally_heat_historical: 'Historical (count only)',
    fi_tally_bulk_label: 'Accept all pending pipes',
    fi_tally_bulk_confirm: 'Accept all {n} pipes still pending?',
    health_summary_ok: 'All clear',
    health_summary_warn: 'Status: needs review ({n})',
    health_prod_label: 'Production data',
    health_prod_never: 'Never synced',
    health_prod_synced: 'Last synced: {when}',
    health_prod_stale: 'Last synced: {when} — check if it\'s current',
    health_tally_label: 'Tally List FI',
    health_tally_none: 'No Tally List uploaded',
    health_tally_pending: '{certNo} — {n} pipes still pending',
    health_tally_done: '{certNo} — all {n} pipes evaluated',
    health_defects_label: 'Open defects',
    health_defects_none: 'No open defects',
    health_defects_open: '{n} open',
    health_defects_aging: '{open} open, {aging} for over 5 days',
    health_last_scan: 'Last scan: {who}, {when}',
    fi_tally_heat_date: 'Date',
    fi_tally_heat_result: 'Result',
    fi_tally_heat_meters: 'Meters',
    fi_xcheck_head: '⚠ {n} anomalies found out of {total} pipes',
    fi_xcheck_not_found: 'Not found in production data',
    fi_xcheck_duplicate: 'Duplicated in this list',
    fi_tally_historical_note: 'From the "Weekly TL" sheet: {pipes} pipes released since 2025 ({weeks} weeks with a TL, {meters} m) — count only, no accepted/rejected detail for older lists. Week with the most pipes: {bestWeek} ({bestWeekPipes}).',
    tools_tag_new: 'New',
    tools_tag_updated: 'Updated',
    tools_tag_updated_at: 'Updated {when}',
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
    badge_new: 'New',
    filter_all: 'All',
    filter_defects_only: 'Defects only',
    wa_title: 'Scanned asset:',
    wa_condition: 'Condition',
    wa_comments: 'Comments',
    wa_date: 'Date',
    pdf_generated_on: 'Generated by IQS Field Inspector — {when}',
    pdf_doctype_general: 'General Status',
    pdf_doctype_order: 'Order Status',
    pdf_doctype_dataset: 'Scan Dataset',
    pdf_doctype_stats: 'Statistics',
    pdf_doctype_record: 'Pipe Record',
    pdf_band_general_data: 'General Data',
    pdf_band_defect: 'Defect',
    pdf_band_history: 'History',
    pdf_field_status: 'Status',
    pdf_band_summary: 'Summary',
    pdf_band_tally_all: 'Tally List FI — all lists',
    pdf_band_defects_disposition: 'Dataset defects — disposition',
    pdf_band_per_list: 'Detail per Tally List',
    pdf_band_bottleneck: 'Bottleneck',
    pdf_band_phases: 'Progress by phase',
    pdf_band_list: 'Record list',
    pdf_band_by_type: 'By defect type',
    pdf_band_by_disposition: 'By disposition',
    pdf_kpi_total_pipes: 'Total pipes',
    pdf_kpi_total_records: 'Total records',
    pdf_kpi_open_defects: 'Open defects',
    pdf_kpi_good: 'Good',
    pdf_kpi_rejected: 'Rejected',
    pdf_kpi_pending: 'Pending',
    pdf_kpi_complete: '% Complete',
    pdf_kpi_days_left: 'Days left',
    pdf_kpi_po: 'PO',
    pdf_kpi_closure: '% Closure',
    pdf_kpi_aging: 'Defects >5d',
    pdf_col_certno: 'Cert-No',
    pdf_col_date: 'Date',
    pdf_col_rate: 'Rate',
    pdf_col_phase: 'Phase',
    pdf_col_done: 'Done',
    pdf_col_remaining: 'Remaining',
    pdf_col_forecast: 'Forecast',
    pdf_col_deviation: 'Deviation',
    pdf_col_status: 'Status',
    pdf_col_pipe: 'Pipe N°',
    pdf_col_item: 'Item',
    pdf_col_condition: 'Condition',
    pdf_col_itp_step: 'ITP Step',
    pdf_col_inspector: 'Inspector',
    pdf_col_type: 'Type',
    pdf_col_count: 'Count',
    pdf_col_disposition: 'Disposition',
    pdf_filter_label: 'Filter: {filter}',
    pdf_rows_word: 'records',
    pdf_no_phase_data: 'No production data synced for this order.',
    pdf_avg_close_note: 'Average defect closure time: {days} days',
    pdf_filename_general: '{order} General Status {date}.pdf',
    pdf_filename_order: '{order} Order Status {date}.pdf',
    pdf_filename_dataset: '{order} Scan Dataset {date}.pdf',
    pdf_filename_stats: '{order} Statistics {date}.pdf',
    pdf_filename_record: '{order} Record {pipe} {date}.pdf',
    excel_filename: '{order} Full Export {date}.xlsx',
    pdf_export_btn: 'Export PDF',
    excel_export_btn: 'Export Excel',
    bool_yes: 'Yes',
    bool_no: 'No',
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
    <div class="card"><div class="card-header"><span class="section-title">Stato generale</span></div>
      <div class="help-p">Subito sotto la barra in alto nel Dataset c'è una riga riassuntiva ("Tutto regolare" in verde, o "Stato: da verificare (N)" in arancio/rosso) — toccala per aprirla e vedere il dettaglio: quando sono stati sincronizzati i dati produzione, quanti tubi restano da valutare nella Tally List FI attiva, quanti difetti sono aperti (e da quanto tempo), e l'ultimo scan registrato. Ogni riga si tocca e porta dritto alla schermata giusta. Resta sempre chiusa quando riapri l'app.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Tornare indietro</span></div>
      <div class="help-p">Oltre al pulsante "‹ Dataset" in alto a sinistra su ogni schermata, funziona anche il tasto/gesto "Indietro" del telefono — riporta al Dataset da qualunque schermata, senza dover raggiungere l'angolo in alto.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Registrare un nuovo asset</span></div>
      <div class="help-p">Tab "Nuovo asset" → inserisci il Pipe N° (l'Item N° si auto-compila se il tubo è univoco — se lo stesso Pipe N° esiste su più Item compare un avviso e va inserito anche l'Item N°). Se il tubo è nei dati di produzione del giorno, si auto-compilano CS Heat, CRA Heat, Length, avanzamento % e ITP Step — puoi comunque correggere a mano. Se lo stesso Pipe N° risulta già scansionato oggi, compare un avviso rosso con l'ora e chi l'ha fatto (non blocca il salvataggio, è solo un avviso). Scegli ITP Step e Condizione (obbligatori); se scegli "Da revisionare" o "Danneggiato" compare anche il pannello richiudibile "Dettagli difetto" (il titolo riassume le scelte fatte anche da chiuso) con Tipo difetto, Disposizione (8 stati: Da Riparare/Riparato/Accettato/Scartato/Deroga/Da Rilavorare/Rilavorato/Sospeso) e una sezione NCR/CR a parte (due caselle indipendenti + un commento/riferimento) — tutto facoltativo ma utile per le Statistiche. Nel campo Commenti, l'icona 🎤 (se il telefono/browser la supporta) permette di dettare a voce invece di scrivere. Poi "Salva".</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Senza rete in impianto</span></div>
      <div class="help-p">Se salvi un nuovo asset senza connessione, la scheda non va persa: resta salvata sul telefono con un badge "In coda" nel Dataset e viene inviata da sola appena torna la rete. Mentre c'è qualcosa in attesa compare una striscia in alto con il conteggio — sparisce da sola a sincronizzazione completata. Una scheda "In coda" non si può ancora aprire/modificare, va aspettato l'invio.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Avviso nuovi asset dai colleghi</span></div>
      <div class="help-p">Mentre hai l'app aperta, un controllo periodico segnala con un breve bip e un pallino rosso sul tab Dataset quando un collega dello stesso progetto registra un nuovo asset — mai per i tuoi stessi scan. Il pallino sparisce aprendo il Dataset, dove la scheda nuova lampeggia con un'etichetta "Nuovo" per qualche secondo. Non è una notifica push vera: funziona solo mentre l'app è effettivamente aperta, non a telefono chiuso.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Foto</span></div>
      <div class="help-p">Facoltative, fino a 4 per scheda — tocca "Aggiungi foto" per la prima, poi la "+" nella striscia di miniature per le altre. Ogni foto viene compressa in automatico e salvata nel repository dell'app; tocchi una miniatura per aprirla nell'editor sotto. Tre strumenti sopra la foto: <b>Cerchio</b> (tocco singolo), <b>Freccia</b> (trascina da un punto all'altro), <b>Testo</b> (tocca, poi scrivi la breve etichetta nel campo che appare sotto). "Annulla ultimo segno" toglie l'ultimo segno, qualunque tipo sia. La "×" su una miniatura la rimuove. Le foto già salvate (modifica di una scheda esistente) si vedono come miniature ma non si possono annotare di nuovo senza prima rimuoverle e ricaricarle. Chiunque sia loggato le vede riaprendo la scheda dal Dataset — tocca una foto per aprirla a schermo intero. Nel Dataset, un'icona 📷 (con un numero se sono più di una) accanto al badge condizione segnala le schede con foto allegate.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Avviso automatico</span></div>
      <div class="help-p">Se salvi una scheda con condizione "Da revisionare" o "Danneggiato" parte in automatico un'email di avviso con i dettagli.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Gestione difetti: Aperto/Chiuso</span></div>
      <div class="help-p">Ogni scheda "Da revisionare"/"Danneggiato" nasce con stato "Aperto". Nel dettaglio, "Segna come chiuso" chiede sempre causa e azione correttiva (obbligatorio) prima di confermare — resta scritta nella Cronologia della scheda insieme a chi/quando l'ha emessa, modificata e chiusa. Se la Disposizione è "Da Riparare" o "Da Rilavorare" (i due stati "ancora da fare"), compare anche una casella obbligatoria da spuntare per confermare che il tubo è stato ri-collaudato e trovato conforme — senza spuntarla non si può chiudere; per le altre disposizioni (Riparato/Rilavorato/Accettato/Scartato/Deroga/Sospeso, già "fatte" o senza bisogno di ri-collaudo) non cambia nulla. Un difetto aperto da più giorni mostra un contatore rosso "● Ng" accanto al badge.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Modifica</span></div>
      <div class="help-p">Qualunque ispettore loggato (non solo l'admin) può correggere una scheda già salvata: apri il dettaglio → "Modifica" in alto a destra, cambia i campi necessari e "Salva". Le foto esistenti restano se non ne aggiungi/togli. Nella stessa schermata Dettaglio, il pulsante "📄 Esporta PDF" genera un PDF in stile IQS con tutti i campi di quella scheda (dati generali, difetto/disposizione/NCR-CR se presenti, cronologia apertura/chiusura con nota, commenti) e le foto allegate incorporate nel documento.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">WhatsApp</span></div>
      <div class="help-p">Il pulsante verde apre WhatsApp con il messaggio già pronto, sia durante l'inserimento che riaprendo la scheda.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Dataset</span></div>
      <div class="help-p">La striscia colorata a sinistra indica la condizione: verde = ottimo, blu = buono, arancio = da revisionare, rosso = danneggiato. Cerca per Pipe N°, Item N°, CS Heat o CRA Heat, oppure usa il filtro "Tutti / Solo difetti" per vedere solo le schede Da revisionare/Danneggiate. Solo l'admin può eliminare una scheda (cestino). Il pulsante "📄 Esporta PDF" genera un PDF in stile IQS con l'elenco così com'è filtrato/cercato in quel momento.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Tally List FI</span></div>
      <div class="help-p">Un banner rosso in cima avvisa da solo se qualche tubo della lista non torna coi dati di produzione (non trovato, o duplicato più volte nella stessa lista) — controllo automatico al caricamento, non serve più scoprirlo a mano dopo. Un pallino rosso sull'icona "⋮" Strumenti (e l'etichetta "Nuova" su questa voce) avvisa quando arriva una Tally List più recente di quella già vista - sparisce aprendo questa schermata. Pulsante 🏁 nel Dataset: mostra l'ultima Tally List di Final Inspection caricata dal tool desktop (Cert-No, Item, data e ora dell'ispezione), con l'elenco tubi da valutare. Tocca ✓ per Accettare (subito, nessuna conferma) o ✗ per Scartare (richiede di scrivere il motivo dello scarto) - qualunque ispettore loggato può farlo, si vede subito chi e quando. Sbagliato? Tocca di nuovo la spunta già attiva (verde o rossa): dopo una conferma, il tubo torna "in sospeso" come prima di valutarlo. In cima all'elenco, allineata sopra la colonna dei ✓, c'è anche una casella "Accetta tutti i tubi in sospeso" per accettarli tutti in un colpo solo (chiede conferma prima, e non tocca i tubi già decisi). Se un tubo ha un difetto ancora aperto registrato in questa stessa app, compare un avviso arancione prima di decidere. Quando tutti i tubi della lista sono stati valutati, la schermata si riduce a un riepilogo compatto (accettati/scartati) fino all'arrivo della prossima Tally List; sotto trovi anche un riepilogo per settimana (lun-ven), un totale su tutto lo storico, e una mappa a quadratini colorati (una per Tally List, raggruppate per mese) che mostra a colpo d'occhio quali liste hanno avuto più scarti — verde=tutto accettato, rosso=molti scarti; toccando un quadratino compare il dettaglio sotto. In fondo trovi anche il totale Tally List, i tubi valutati, la settimana col tasso di accettazione migliore (evidenziata) e il tasso di scarto complessivo. La mappa include anche le Tally List più vecchie dal 2025 (quadratini grigi, presi dal foglio Excel "Weekly TL" — solo conteggio tubi, nessun accettato/scartato disponibile per quelle) e ovunque compare una nota con il totale ufficiale (3.702 tubi, 45.281,645 m, 59 settimane con TL). L'esito resta salvato per sempre (anche per riscontri futuri), e il tool desktop può riscaricarlo per tenerlo anche nell'archivio Excel.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Cerca tubo</span></div>
      <div class="help-p">Pulsante 🔍 nel Dataset: consulta un Pipe N° (dati produzione: Item N°, CS Heat, CRA Heat, Length, step ITP, avanzamento), ti dice subito se è già stato registrato nel Dataset (con chi e quando) e, se presente, anche il suo esito nella Tally List FI (Cert-No ed esito) — tre fonti in un'unica schermata, senza creare o modificare nessuna scheda. Utile per un controllo veloce prima di decidere se serve davvero un nuovo rilievo. Se vuoi comunque registrarlo, il pulsante "+ Registra questo asset" in fondo apre "Nuovo asset" già precompilato.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Stato Ordine</span></div>
      <div class="help-p">Un pallino rosso sull'icona "⋮" Strumenti (e l'etichetta "Aggiornato" su questa voce) avvisa quando i dati di produzione sono stati risincronizzati dal tool desktop - sparisce aprendo questa schermata. Pulsante 🚨 nel Dataset: mostra l'avanzamento dell'Item ancora in lavorazione (dal foglio "Riepilogo per Fase" del file Excel di produzione). In alto: Item N°, riferimento PO, scadenza contrattuale e giorni residui. Per ogni fase: completati/totale, pezzi rimanenti, data prevista e scarto in giorni vs scadenza contrattuale, con badge OK (verde, in anticipo/puntuale), RITARDO (rosso, previsione oltre la scadenza) o N/D (grigio, dato insufficiente). Il "collo di bottiglia" in cima è la fase con più pezzi ancora da fare. Mostra anche i difetti aperti per step e, in fondo, la nota che spiega come viene calcolata la previsione. Se la produzione non è mai stata sincronizzata la sezione resta vuota; se manca il foglio "Riepilogo per Fase" nel file Excel, l'app mostra in automatico un imbuto più semplice su tutti i tubi tracciati. Il pulsante "📄 Esporta PDF" genera un PDF in stile IQS con lo stesso avanzamento per fase.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Statistiche</span></div>
      <div class="help-p">Pulsante 📊 nel Dataset: schede totali, difetti aperti, % chiusura, giorni medi di chiusura, quanti difetti restano aperti da oltre 5 giorni, un grafico settimanale (ultime 8 settimane) e la ripartizione per tipo difetto/disposizione. Per vedere i singoli difetti uno per uno, usa il filtro "Solo difetti" nel Dataset invece di cercarli qui. Due pulsanti PDF in stile IQS: "📄 Esporta PDF" per queste statistiche, "📄 Stato Generale" per un riepilogo separato che aggrega tutte le Tally List FI (buoni/scartati/in sospeso) insieme alla disposizione dei difetti (riparazioni/accetta/concessione/scarta). Solo per l'admin, un terzo pulsante "📊 Esporta Excel" scarica un file .xlsx con più fogli (Dataset completo, Tally List FI, Dati Produzione, Ispettori) e tutti i campi grezzi, pensato per un'analisi approfondita fuori dall'app.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Gestione ispettori (solo admin)</span></div>
      <div class="help-p">Icona ingranaggio nel Dataset: aggiungi ispettori con username/nome/password. Scegli il ruolo con i due tasti "Ispettore"/"Visitatore": un Visitatore vede tutto (Dataset, Tally List FI, Statistiche, ecc.) ma non può registrare nuovi asset, modificare o chiudere difetti, né flaggare la Tally List FI — vede l'etichetta "Modalità sola consultazione" e i pulsanti di scrittura restano nascosti. "Disattiva" non cancella l'account — lo sposta nello "Storico ispettori" (resta la traccia di chi ha lavorato sull'ordine) e blocca subito l'accesso, anche se l'ispettore aveva ancora una sessione aperta sul telefono; "Riattiva" lo riporta attivo. L'icona del cestino (attiva o nello storico, mai sul tuo account admin) elimina invece l'account per sempre, senza lasciare traccia — a differenza di "Disattiva" non si può annullare, chiede conferma prima di procedere. A fine ordine, "Fine ordine: disattiva tutti" disattiva in un colpo solo l'intera squadra (mai il tuo account admin).</div>
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
    <div class="card"><div class="card-header"><span class="section-title">Overall status</span></div>
      <div class="help-p">Right below the top bar in the Dataset there's a summary line ("All clear" in green, or "Status: needs review (N)" in orange/red) — tap it to open the detail: when production data was last synced, how many pipes are still pending in the active Tally List FI, how many defects are open (and for how long), and the last scan logged. Each row is tappable and jumps straight to the right screen. Always closed again when you reopen the app.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Going back</span></div>
      <div class="help-p">Besides the "‹ Dataset" button at the top-left of every screen, your phone's own back button/gesture also works — it returns to the Dataset from any screen, no need to reach the corner.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Logging a new asset</span></div>
      <div class="help-p">"New asset" tab → enter the Pipe No. (Item No. auto-fills if the pipe is unique — if the same Pipe No. exists on more than one Item, a hint appears asking to also enter the Item No.). If the pipe is in today's production data, CS Heat/CRA Heat/Length/progress %/ITP Step auto-fill too — you can still edit any field by hand. If the same Pipe No. was already scanned today, a red warning shows the time and who did it (it doesn't block saving, it's just a heads-up). Choose ITP Step and Condition (required); picking "Needs review" or "Damaged" also reveals the collapsible "Defect details" panel (its title summarises the choices already made even when closed) with Defect type, Disposition (8 states: To Repair/Repaired/Accepted/Rejected/Concession/To Rework/Reworked/On Hold) and a separate NCR/CR section (two independent checkboxes + a reference/comment) — all optional but useful for Statistics. In the Comments field, the 🎤 icon (if your phone/browser supports it) lets you dictate instead of typing. Then "Save".</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">No signal on site</span></div>
      <div class="help-p">If you save a new asset with no connection, the record isn't lost: it stays saved on the phone with a "Queued" badge in the Dataset and gets sent on its own once the network is back. While something is waiting, a strip appears at the top with the count — it disappears on its own once synced. A "Queued" record can't be opened/edited yet, you need to wait for it to be sent.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">New asset alert from teammates</span></div>
      <div class="help-p">While you have the app open, a periodic check plays a short beep and shows a red dot on the Dataset tab whenever a teammate on the same project logs a new asset — never for your own scans. The dot disappears when you open the Dataset, where the new record flashes with a "New" label for a few seconds. This isn't a real push notification: it only works while the app is actually open, not with the phone locked.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Photo</span></div>
      <div class="help-p">Optional, up to 4 per record — tap "Add photo" for the first one, then the "+" in the thumbnail strip for more. Each photo is compressed automatically and saved to the app's repository; tap a thumbnail to open it in the editor below. Three tools above the photo: <b>Circle</b> (single tap), <b>Arrow</b> (drag from one point to another), <b>Text</b> (tap, then type the short label in the field that appears below). "Undo last mark" removes the last mark, whatever type it is. The "×" on a thumbnail removes that photo. Already-saved photos (editing an existing record) show as thumbnails but can't be annotated again without removing and re-adding them first. Any logged-in inspector can see them by reopening the record from the Dataset — tap a photo to open it full screen. In the Dataset, a 📷 icon (with a number if there's more than one) next to the condition badge flags records with photos attached.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Automatic alert</span></div>
      <div class="help-p">Saving a record with condition "Needs review" or "Damaged" automatically triggers an alert email with the details.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Defect management: Open/Closed</span></div>
      <div class="help-p">Every "Needs review"/"Damaged" record starts as "Open". In the detail screen, "Mark as closed" always asks for root cause and corrective action (required) before confirming — it's kept in the record's Timeline together with who/when issued, edited and closed it. If the Disposition is "To Repair" or "To Rework" (the two "still pending" states), an extra required checkbox appears confirming the pipe was retested and found conforming — you can't close without checking it; the other dispositions (Repaired/Reworked/Accepted/Rejected/Concession/On Hold, already "done" or not needing a retest) are unaffected. A defect open for several days shows a red "● Nd" counter next to the badge.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Edit</span></div>
      <div class="help-p">Any logged-in inspector (not just admin) can correct an already-saved record: open the detail screen → "Edit" top right, change what's needed, "Save". Existing photos stay unless you add/remove some. On the same Detail screen, the "📄 Export PDF" button generates an IQS-style PDF with every field of that record (general data, defect/disposition/NCR-CR if present, open/close history with the closure note, comments) plus any attached photos embedded in the document.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">WhatsApp</span></div>
      <div class="help-p">The green button opens WhatsApp with the message ready to send, both while entering data and when reopening a record.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Dataset</span></div>
      <div class="help-p">The colored stripe on the left shows the condition: green = excellent, blue = good, orange = needs review, red = damaged. Search by Pipe No., Item No., CS Heat or CRA Heat, or use the "All / Defects only" filter to see just the Needs review/Damaged records. Only admins can delete a record (trash icon). The "📄 Export PDF" button generates an IQS-style PDF with the list exactly as currently filtered/searched.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Tally List FI</span></div>
      <div class="help-p">A red banner at the top warns you on its own if any pipe in the list doesn't match production data (not found, or duplicated more than once in the same list) — an automatic check on load, no more finding out by hand afterwards. A red dot on the "⋮" Tools icon (and a "New" tag on this row) shows up when a Tally List newer than the one you've already seen arrives - it clears once you open this screen. 🏁 button in the Dataset: shows the latest Final Inspection Tally List uploaded from the desktop tool (Cert-No, Item, date and inspection time), with the list of pipes to evaluate. Tap ✓ to Accept (right away, no confirmation) or ✗ to Reject (requires typing a reason) - any logged-in inspector can do this, and who/when is shown right away. Made a mistake? Tap the already-active tick again (green or red): after a confirmation, the pipe goes back to "pending" as before. At the top of the list, aligned above the ✓ column, there's also an "Accept all pending pipes" box to accept them all in one go (asks for confirmation first, and never touches pipes already decided). If a pipe has a defect still open in this same app, an orange warning appears before you decide. Once every pipe in the list has been evaluated, the screen collapses into a compact summary (accepted/rejected) until the next Tally List arrives; below it there's also a weekly (Mon-Fri) breakdown, an all-time total, and a grid of colored squares (one per Tally List, grouped by month) that shows at a glance which lists had more rejections — green=all accepted, red=lots of rejections; tap a square to see its detail below. At the bottom you'll also find the total Tally Lists, pipes evaluated, the week with the best acceptance rate (highlighted), and the overall rejection rate. The grid also includes older Tally Lists since 2025 (gray squares, sourced from the "Weekly TL" Excel sheet — pipe count only, no accepted/rejected detail available for those) and a note with the official total (3,702 pipes, 45,281.645 m, 59 weeks with a TL) appears everywhere it's relevant. The result is saved permanently (for future cross-checks too), and the desktop tool can re-download it to keep it in the Excel archive as well.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Pipe lookup</span></div>
      <div class="help-p">🔍 button in the Dataset: look up a Pipe N° (production data: Item No., CS Heat, CRA Heat, Length, ITP step, progress), instantly see whether it's already been registered in the Dataset (by whom and when) and, if present, its Tally List FI outcome too (Cert-No and result) — three sources in one screen, without creating or changing any record. Handy for a quick check before deciding whether a new record is actually needed. If you do want to register it, the "+ Register this asset" button at the bottom opens "New asset" already pre-filled.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Order Status</span></div>
      <div class="help-p">A red dot on the "⋮" Tools icon (and an "Updated" tag on this row) shows up when production data has been re-synced from the desktop tool - it clears once you open this screen. 🚨 button in the Dataset: shows progress for the Item still in production (from the "Riepilogo per Fase" sheet of the production Excel file). At the top: Item No., PO reference, contractual due date and days remaining. For each phase: completed/total, pipes remaining, forecast date and deviation in days vs the contractual due date, with an OK (green, ahead/on time), DELAY (red, forecast past the due date) or N/A (grey, not enough data) badge. The "bottleneck" at the top is the phase with the most pipes still to go. Also shows open defects by step and, at the bottom, the note explaining how the forecast is calculated. If production data has never been synced this stays empty; if the "Riepilogo per Fase" sheet isn't in the Excel file, the app automatically falls back to a simpler funnel across all tracked pipes. The "📄 Export PDF" button generates an IQS-style PDF with the same phase progress.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Statistics</span></div>
      <div class="help-p">📊 button in the Dataset: total records, open defects, % closed, average days to close, how many defects have been open for more than 5 days, an 8-week chart, and a breakdown by defect type/disposition. To browse individual defects, use the "Defects only" filter in the Dataset instead of looking for them here. Two IQS-style PDF buttons: "📄 Export PDF" for these statistics, "📄 General Status" for a separate summary aggregating every Tally List FI (good/rejected/pending) alongside the defect disposition breakdown (repair/accept/concession/reject). Admin only, a third button "📊 Export Excel" downloads a multi-sheet .xlsx (full Dataset, Tally List FI, Production Data, Inspectors) with every raw field, meant for deeper analysis outside the app.</div>
    </div>
    <div class="card"><div class="card-header"><span class="section-title">Inspector management (admin only)</span></div>
      <div class="help-p">Gear icon in the Dataset: add inspectors with username/name/password. Pick the role with the "Inspector"/"Viewer" buttons: a Viewer sees everything (Dataset, Tally List FI, Statistics, etc.) but can't register new assets, edit or close defects, or flag the Tally List FI — they see a "Read-only mode" label and write buttons stay hidden. "Deactivate" doesn't delete the account — it moves it into "Inspector history" (keeping a record of who worked on the order) and immediately blocks access, even if the inspector still had an open session on their phone; "Reactivate" brings it back. The trash icon (active or in history, never on your own admin account) deletes the account permanently instead, with no trace left — unlike "Deactivate" this can't be undone, and it asks for confirmation first. At the end of an order, "End of order: deactivate all" deactivates the whole team in one go (never your own admin account).</div>
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
  'Record non trovato': { it: 'Record non trovato', en: 'Record not found' },
  'Nota di chiusura obbligatoria': { it: 'Nota di chiusura obbligatoria', en: 'Closure note required' },
  'Conferma ri-collaudo obbligatoria': { it: 'Conferma ri-collaudo obbligatoria', en: 'Retest confirmation required' },
  'Stato non valido': { it: 'Stato non valido', en: 'Invalid status' },
  'Nome ordine mancante': { it: 'Nome ordine mancante', en: 'Order name missing' },
  'Ordine non trovato': { it: 'Ordine non trovato', en: 'Order not found' }
};

// Vocabolario tecnico IT->EN per la traduzione dei commenti (13.08.2026, richiesta Rino) -
// pensato per essere ampliato nel tempo: basta aggiungere una riga qui sotto, non serve
// nessun ordine particolare. Usato in due modi: (1) mandato a Gemini nel prompt cosi'
// preferisce questi termini a sinonimi generici, (2) mostrato come riferimento veloce
// sotto la traduzione proposta, per i termini trovati nel testo originale.
const TECH_GLOSSARY_IT_EN = {
  // Difetti
  'ammaccatura': 'dent', 'rigatura': 'scoring', 'graffio': 'scratch', 'cricca': 'crack',
  'cricca a caldo': 'hot crack', 'porosità': 'porosity', 'inclusione': 'inclusion',
  'inclusione di scoria': 'slag inclusion', 'mancanza di fusione': 'lack of fusion',
  'mancanza di penetrazione': 'lack of penetration', 'sottosquadro': 'undercut',
  'laminazione': 'lamination', 'vaiolatura': 'pitting', 'corrosione': 'corrosion',
  'ovalizzazione': 'ovality', 'disallineamento': 'misalignment', 'incisione': 'gouge',
  'bava': 'burr', 'bruciatura': 'burn-through',
  // Saldatura
  'saldatura': 'weld', 'saldatura circonferenziale': 'circumferential weld',
  'saldatura longitudinale': 'longitudinal weld', 'cordone di saldatura': 'weld bead',
  'cappa di saldatura': 'weld cap', 'radice di saldatura': 'weld root',
  'zona termicamente alterata': 'heat affected zone (HAZ)', 'ripristino': 'repair',
  'rilavorazione': 'rework', 'molatura': 'grinding',
  // Dimensionale
  'spessore parete': 'wall thickness', 'diametro esterno': 'outer diameter (OD)',
  'diametro interno': 'inner diameter (ID)', 'lunghezza': 'length', 'profondità': 'depth',
  'smusso': 'bevel',
  // Prove
  'esame macrografico': 'macro examination', 'prova di durezza': 'hardness test',
  'prova di trazione': 'tensile test', 'prova di resilienza': 'impact test (Charpy)',
  'controllo visivo': 'visual inspection', 'liquidi penetranti': 'penetrant testing (PT)',
  'ultrasuoni': 'ultrasonic testing (UT)', 'radiografia': 'radiographic testing (RT)',
  'prova idraulica': 'hydrostatic test', 'controllo dimensionale': 'dimensional check',
  // Materiale
  'colata': 'heat', 'lotto': 'batch', 'certificato di collaudo': 'mill test certificate (MTC)',
  'tracciabilità': 'traceability',
};
// Trova i termini del vocabolario presenti in un testo (frasi piu' lunghe prima, cosi'
// "saldatura circonferenziale" non viene anche contata come "saldatura" da sola).
function findGlossaryTerms(text) {
  const lower = (text || '').toLowerCase();
  const keys = Object.keys(TECH_GLOSSARY_IT_EN).sort((a, b) => b.length - a.length);
  const found = [];
  const covered = [];
  keys.forEach(k => {
    const idx = lower.indexOf(k);
    if (idx === -1) return;
    const overlaps = covered.some(([s, e]) => idx < e && idx + k.length > s);
    if (overlaps) return;
    covered.push([idx, idx + k.length]);
    found.push({ it: k, en: TECH_GLOSSARY_IT_EN[k] });
  });
  return found;
}

const CONDITION_CODES = ['excellent', 'good', 'needs-review', 'damaged'];
const ITP_STEPS_FALLBACK = ['Milling', 'Welding Base', 'Welding Clad', 'Hydro', 'UT', 'RT', 'PT', 'FI (Final Inspection)'];
const DEFECT_TYPE_CODES = ['weld', 'dimensional', 'visual', 'nde', 'material', 'other'];
// 07.08.2026 (richiesta di Rino): da 4 a 8 disposizioni - "Da Riparare"/"Da Rilavorare"
// sono stati ancora aperti (richiedono conferma di ri-collaudo alla chiusura, prima
// succedeva solo per "repair"), "Riparato"/"Rilavorato" sono gia' risolti (nessuna
// conferma). NCR/CR sono volutamente FUORI da questa lista - un flag a parte con un
// commento proprio, vedi renderNcrCrSection.
const DISPOSITION_CODES = ['to_repair', 'repaired', 'accept', 'reject', 'concession', 'to_rework', 'reworked', 'hold'];
const condKey = (code) => 'cond_' + String(code || '').replace(/-/g, '');
const defectTypeLabel = (code) => code ? t('defect_' + code) : '';
const dispositionLabel = (code) => code ? t('disp_' + code) : '';
const isDefectCondition = (c) => c === 'needs-review' || c === 'damaged';
// Solo le disposizioni "ancora da fare" chiedono conferma di ri-collaudo alla chiusura -
// stessa logica lato Worker (needsRetestConfirm), ripetuta qui per il controllo lato UI.
const needsRetestConfirm = (disposition) => disposition === 'to_repair' || disposition === 'to_rework';

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
  productionMeta: null,
  productionMap: new Map(),
  productionByPipe: new Map(),
  ambiguousPipes: new Set(),
  fiTallyEntries: [],
  fiTallyExpanded: false,
  tallyHasUpdate: false,
  accessLogEntries: [],
  accessLogExpanded: false,
  prodHasUpdate: false,
  editingId: null,
  orders: [],
  currentOrderId: localStorage.getItem('qr_order_id') || 'default',
  justArrivedIds: new Set(),
  audioCtx: null,
  datasetFilter: 'all'
};

const normProdNum = (v) => { const n = parseInt(String(v || '').trim(), 10); return isNaN(n) ? String(v || '').trim() : String(n); };
const prodKey = (itemNo, pipeNo) => normProdNum(itemNo) + '-' + normProdNum(pipeNo);

const el = (id) => document.getElementById(id);
const t = (key) => (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
const condLabel = (code) => t(condKey(code));
const screens = ['login', 'confirm', 'dataset', 'detail', 'admin', 'help', 'stats', 'order-status', 'lookup', 'fi-tally'];

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
  el('tab-dataset-count').textContent = state.records.length;
  el('dataset-title-count').textContent = t(state.records.length === 1 ? 'dataset_title_count_one' : 'dataset_title_count').replace('{n}', state.records.length);
  // L'etichetta Stato Ordine e' testo dinamico (data/ora), non un data-i18n statico -
  // va ricalcolata a parte qui, altrimenti il cambio lingua la lascerebbe nella lingua vecchia.
  renderToolsBadges();
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

// Tasto/gesto "Indietro" nativo del telefono (05.08.2026, richiesta di Rino: il
// pulsante in alto a sinistra come unico modo per tornare indietro era scomodo da
// raggiungere). Ogni schermata di questa app torna sempre e solo a "dataset" (nessuno
// stack a più livelli, verificato su tutti i pulsanti "indietro" esistenti) - quindi
// basta che "dataset"/"login" sostituiscano la voce di cronologia (sono la "base") e
// ogni altra schermata ne aggiunga una nuova: il tasto indietro del telefono, che
// genera un evento popstate, riporta cosi' automaticamente a "dataset" da qualunque
// schermata, esattamente come il pulsante "‹ Dataset" gia' esistente.
let suppressHistoryPush = false;
function showScreen(name) {
  state.screen = name;
  screens.forEach(s => el('screen-' + s).classList.toggle('hidden', s !== name));
  document.querySelectorAll('.tab-cap').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === name);
  });
  if (!suppressHistoryPush) {
    if (name === 'dataset' || name === 'login') {
      history.replaceState({ screen: name }, '', '#' + name);
    } else {
      history.pushState({ screen: name }, '', '#' + name);
    }
  }
}
window.addEventListener('popstate', (e) => {
  suppressHistoryPush = true;
  showScreen((e.state && e.state.screen) || 'dataset');
  suppressHistoryPush = false;
});

// ---------------- API ----------------
async function api(path, opts = {}) {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {});
  if (state.session && state.session.token) headers['Authorization'] = 'Bearer ' + state.session.token;
  if (state.currentOrderId) headers['X-Order-Id'] = state.currentOrderId;
  const resp = await fetch(API_BASE + path, Object.assign({}, opts, { headers }));
  // Sessione non piu' valida (scaduta o, dal 02.08.2026, account disattivato dall'admin
  // mentre l'ispettore era ancora loggato): riporta subito al login invece di lasciare
  // che ogni chiamata fallisca con errori sparsi in giro per l'app.
  if (resp.status === 401 && state.session) {
    state.session = null;
    localStorage.removeItem('qr_session');
    showScreen('login');
    el('login-error').textContent = t('err_session_expired');
  }
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
// Visitatore: sola consultazione, nessuna creazione/modifica/chiusura/flag - vedi anche
// la validazione server-side ripetuta in worker.js su ogni endpoint di scrittura.
function isViewer() {
  return !!(state.session && state.session.role === 'viewer');
}
function applyViewerRestrictions() {
  const viewer = isViewer();
  el('viewer-banner').classList.toggle('hidden', !viewer);
  el('tab-scan-btn').classList.toggle('hidden', viewer);
}

// ---------------- Login ----------------
el('login-btn').addEventListener('click', async () => {
  unlockAudio(); // click = gesto utente valido per sbloccare l'audio, va fatto qui e non piu' tardi
  const username = el('login-username').value.trim();
  const password = el('login-password').value;
  el('login-error').textContent = '';
  if (!username || !password) { el('login-error').textContent = t('login_err_missing'); return; }
  try {
    const data = await api('/api/login', { method: 'POST', body: JSON.stringify({ username, password }) });
    saveSession(data);
    el('admin-gear').classList.toggle('hidden', data.role !== 'admin');
    el('export-excel-btn').classList.toggle('hidden', data.role !== 'admin');
    await afterLogin();
  } catch (err) {
    el('login-error').textContent = err.message;
  }
});

async function afterLogin() {
  applyViewerRestrictions();
  try {
    state.meta = await api('/api/meta');
  } catch (e) { state.meta = { itpSteps: [], conditions: CONDITION_CODES }; }
  await loadOrders(); // prima degli altri: records/production-data dipendono dall'header X-Order-Id
  await loadRecords();
  loadProductionData(); // in background, non blocca l'ingresso in dataset
  showScreen('dataset');
  syncPendingQueue(); // scan rimasti in coda da una sessione precedente offline
  updateSyncBanner();
  checkForNewAssets(); // seed silenzioso dell'elenco "visti" al primo login, poi il polling
  startNewAssetsPolling();
  startToolsUpdatePolling(); // pallino Strumenti + etichette Tally List FI/Stato Ordine
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
  document.querySelectorAll('.screen-band-order').forEach(elx => { elx.textContent = currentOrderName(); });
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
  el('tab-dataset-ring').classList.add('hidden'); // era per l'ordine precedente, non ha piu' senso qui
  await loadRecords();
  loadProductionData();
  checkForNewAssets(); // semina l'elenco "visti" per il nuovo ordine se non esiste ancora
}

el('order-pill').addEventListener('click', () => {
  renderOrderSheet();
  el('order-sheet').classList.remove('hidden');
});
el('order-sheet-close').addEventListener('click', () => el('order-sheet').classList.add('hidden'));
el('order-sheet').addEventListener('click', (e) => { if (e.target.id === 'order-sheet') el('order-sheet').classList.add('hidden'); });

// Menu "Strumenti": un solo pulsante nella barra in alto invece delle 5-6 icone
// separate di prima (Tally List FI/Cerca tubo/Stato Ordine/Statistiche/Guida/
// Gestione ispettori) - i pulsanti dentro il pannello hanno mantenuto gli stessi
// id di prima, quindi i loro click handler (registrati altrove) restano invariati;
// qui si aggiunge solo apertura/chiusura del pannello.
el('tools-menu-btn').addEventListener('click', () => el('tools-sheet').classList.remove('hidden'));
el('tools-sheet-close').addEventListener('click', () => el('tools-sheet').classList.add('hidden'));
el('tools-sheet').addEventListener('click', (e) => { if (e.target.id === 'tools-sheet') el('tools-sheet').classList.add('hidden'); });
document.querySelectorAll('#tools-sheet .tools-row').forEach(btn => {
  btn.addEventListener('click', () => el('tools-sheet').classList.add('hidden'));
});
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
    state.productionMeta = data.meta || null;
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

// ---------------- Avviso nuovi asset da colleghi ----------------
// Niente notifiche push vere (servirebbe un Service Worker, tenuto apposta fuori dall'app -
// vedi coda offline sopra): mentre l'app resta aperta, un controllo periodico confronta i
// record dal server con quelli gia' "visti" su questo telefono (per ordine, in localStorage).
// Un nuovo scan fatto da un ALTRO ispettore fa suonare un breve bip e accende un pallino
// rosso sul tab Dataset; un tuo stesso scan non fa mai suonare nulla. Alla primissima
// esecuzione (nessun elenco "visti" salvato) si segna tutto come gia' visto senza avvisare,
// altrimenti al primo login suonerebbe per l'intero storico.
function unlockAudio() {
  if (state.audioCtx) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    state.audioCtx = new Ctx();
  } catch (e) { /* Web Audio non disponibile: niente bip, il resto funziona comunque */ }
}
function playChime() {
  if (!state.audioCtx) return;
  try {
    if (state.audioCtx.state === 'suspended') state.audioCtx.resume();
    const ctx = state.audioCtx;
    const now = ctx.currentTime;
    [[880, now, 0.14], [1175, now + 0.13, 0.16]].forEach(([freq, start, dur]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.22, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(start); osc.stop(start + dur + 0.02);
    });
  } catch (e) { /* rumore non essenziale, non deve mai bloccare nient'altro */ }
}
async function checkForNewAssets() {
  if (!state.session || !state.currentOrderId) return;
  let data;
  try { data = await api('/api/records'); } catch (e) { return; }
  const records = data.records || [];
  const seenKey = 'qr_seen_' + state.currentOrderId;
  const rawSeen = localStorage.getItem(seenKey);
  const isFirstRun = rawSeen === null;
  const seen = new Set(isFirstRun ? [] : JSON.parse(rawSeen));
  const me = state.session.name || state.session.username;
  const arrivedIds = [];
  records.forEach(r => {
    if (!seen.has(r.id)) {
      if (!isFirstRun && r.scannedBy !== me) arrivedIds.push(r.id);
      seen.add(r.id);
    }
  });
  localStorage.setItem(seenKey, JSON.stringify(Array.from(seen)));
  if (!arrivedIds.length) return;
  arrivedIds.forEach(id => state.justArrivedIds.add(id));
  playChime();
  el('tab-dataset-ring').classList.remove('hidden');
  await loadRecords();
  setTimeout(() => {
    arrivedIds.forEach(id => state.justArrivedIds.delete(id));
    renderDatasetList();
  }, 2500);
}
let newAssetsPoll = null;
function startNewAssetsPolling() {
  if (newAssetsPoll) return;
  newAssetsPoll = setInterval(checkForNewAssets, 50000);
}

// Avviso "c'e' qualcosa di nuovo" per Tally List FI / Stato Ordine (04.08.2026): un pallino
// sull'icona Strumenti come spia generale, un'etichetta per riga come dettaglio - solo
// visivo, niente suono (diverso dal "nuovo asset" con la campanella). Come li' sopra: al
// primo controllo per un ordine si registra solo il valore attuale senza far scattare
// l'avviso (altrimenti ogni ordine "nuovo" per questa funzione mostrerebbe subito i pallini).
function renderToolsBadges() {
  el('tools-menu-dot').classList.toggle('hidden', !(state.tallyHasUpdate || state.prodHasUpdate));
  el('fi-tally-new-tag').classList.toggle('hidden', !state.tallyHasUpdate);
  el('fi-tally-new-pill').classList.toggle('hidden', !state.tallyHasUpdate);
  // Stato Ordine (07.08.2026, richiesta di Rino): a differenza di Tally List FI qui
  // l'etichetta non sparisce mai aprendo la schermata - resta sempre visibile con
  // data/ora dell'ultima sincronizzazione, e il colore segnala quanto e' vecchia (non
  // piu' "vista/non vista"): verde <24h, giallo 24-48h, rosso oltre 48h - stesso semaforo
  // gia' usato per le fasi di avanzamento, cosi' un ritardo di sincronizzazione salta
  // all'occhio esattamente come un ritardo di produzione.
  const orderTag = el('order-status-new-tag');
  const updatedAt = state.productionMeta && state.productionMeta.updatedAt;
  if (updatedAt) {
    orderTag.classList.remove('hidden');
    const ageHours = (Date.now() - new Date(updatedAt).getTime()) / 3600000;
    const ageClass = ageHours < 24 ? 'tag-ok' : ageHours < 48 ? 'tag-warn' : 'tag-bad';
    orderTag.classList.remove('tag-ok', 'tag-warn', 'tag-bad');
    orderTag.classList.add(ageClass);
    orderTag.querySelector('.tag-txt').textContent = t('tools_tag_updated_at').replace('{when}',
      new Date(updatedAt).toLocaleString(t('locale'), { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }));
  } else {
    orderTag.classList.add('hidden');
  }
}
async function checkToolsUpdates() {
  if (!state.session || !state.currentOrderId) return;
  try {
    const data = await api('/api/fi-tally');
    const entries = data.entries || [];
    state.fiTallyEntries = entries; // tenuto aggiornato anche fuori dalla schermata Tally List FI, serve alla card Stato generale
    const latestCertNo = entries.length ? latestTallyCertNo(entries) : null;
    if (latestCertNo) {
      const seenKey = 'qr_seen_tally_' + state.currentOrderId;
      const seen = localStorage.getItem(seenKey);
      if (seen === null) localStorage.setItem(seenKey, latestCertNo);
      else if (seen !== latestCertNo) state.tallyHasUpdate = true;
    }
  } catch (e) { /* rete assente: il badge resta com'era, non deve bloccare nient'altro */ }
  try {
    const data = await api('/api/production-data');
    state.productionMeta = data.meta || null; // idem, serve alla card Stato generale
    const updatedAt = data.meta && data.meta.updatedAt;
    if (updatedAt) {
      const seenKey = 'qr_seen_prod_' + state.currentOrderId;
      const seen = localStorage.getItem(seenKey);
      if (seen === null) localStorage.setItem(seenKey, updatedAt);
      else if (seen !== updatedAt) state.prodHasUpdate = true;
    }
  } catch (e) { /* idem */ }
  if (state.session.role === 'admin') {
    try {
      const data = await api('/api/admin/users');
      const now = Date.now();
      const online = (data.users || []).filter(u => !u.disabled && u.lastActiveAt && (now - new Date(u.lastActiveAt).getTime()) < 5 * 60 * 1000);
      renderPresenceLine(online);
    } catch (e) { /* rete assente: la riga resta com'era */ }
  }
  renderToolsBadges();
  renderHealthCard();
}
function renderPresenceLine(online) {
  const line = el('presence-line');
  if (!online || !online.length) { line.classList.add('hidden'); return; }
  line.classList.remove('hidden');
  el('presence-text').textContent = online.map(u => u.name).join(', ');
}
let toolsUpdatePoll = null;
function startToolsUpdatePolling() {
  if (toolsUpdatePoll) return;
  checkToolsUpdates();
  toolsUpdatePoll = setInterval(checkToolsUpdates, 50000);
}

// ---------------- Nuovo asset ----------------
// I dati identificativi (Item N°/Pipe N°) sono stampati in chiaro sull'etichetta accanto al QR:
// niente scansione, si digitano direttamente (vedi LL register per il perche').
function startManualEntry() {
  openConfirm({});
}

// ---------------- Confirm ----------------
// Elenco foto di un record, con fallback per le schede create prima del 09.08.2026 (avevano
// solo photoPath/photoUrl singolari, mai migrate - il Worker le legge gia' cosi').
function recordPhotos(rec) {
  if (rec && Array.isArray(rec.photos)) return rec.photos;
  if (rec && rec.photoPath) return [{ path: rec.photoPath, url: rec.photoUrl || '' }];
  return [];
}

function openConfirm(parsed) {
  state.editingId = null;
  state.draft = Object.assign({ itpStep: null, condition: null, comment: '', commentEn: '', defectType: null, disposition: null, ncr: false, cr: false, ncrCrComment: '' }, parsed);
  state.draft._autoFields = new Set(); // campi attualmente auto-compilati, mai toccati a mano dall'utente
  el('f-itemNo').value = parsed.itemNo || '';
  el('f-pipeNo').value = parsed.pipeNo || '';
  el('f-csHeat').value = parsed.csHeat || '';
  el('f-craHeat').value = parsed.craHeat || '';
  el('f-length').value = parsed.length || '';
  el('f-scannedAt').textContent = new Date().toLocaleString(t('locale'));
  el('f-comment').value = '';
  el('comment-translate-box').classList.add('hidden');
  el('f-ncr-cr-comment').value = '';
  el('defect-details-toggle').closest('.accordion').classList.remove('collapsed');
  el('prod-progress-row').classList.add('hidden');
  el('pipe-ambiguous-hint').classList.add('hidden');
  el('dup-scan-hint').classList.add('hidden');
  resetPhotoField();
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
    commentEn: rec.commentEn || '',
    defectType: rec.defectType || null, disposition: rec.disposition || null,
    ncr: !!rec.ncr, cr: !!rec.cr, ncrCrComment: rec.ncrCrComment || '',
    _autoFields: new Set()
  };
  el('f-itemNo').value = rec.itemNo || '';
  el('f-pipeNo').value = rec.pipeNo || '';
  el('f-csHeat').value = rec.csHeat || '';
  el('f-craHeat').value = rec.craHeat || '';
  el('f-length').value = rec.length || '';
  el('f-scannedAt').textContent = rec.scannedAt ? new Date(rec.scannedAt).toLocaleString(t('locale')) : '-';
  el('f-comment').value = rec.comment || '';
  el('comment-translate-box').classList.add('hidden');
  el('f-ncr-cr-comment').value = rec.ncrCrComment || '';
  el('defect-details-toggle').closest('.accordion').classList.remove('collapsed');
  el('prod-progress-row').classList.add('hidden');
  el('pipe-ambiguous-hint').classList.add('hidden');
  el('dup-scan-hint').classList.add('hidden');
  resetPhotoField();
  // Foto gia' salvate (09.08.2026): ognuna diventa una miniatura non annotabile (nessun
  // byte lato client, come il vecchio testo "Foto già presente") - restano cosi' finche'
  // non vengono rimosse; rimuovendole e ricaricandole si torna ad averne i byte e a poterle
  // annotare, esattamente come una foto nuova.
  state.draft.photos = recordPhotos(rec).map(p => ({ existingPath: p.path, existingUrl: p.url }));
  state.draft.activePhotoIndex = state.draft.photos.length ? 0 : -1;
  renderPhotoThumbs();
  renderPhotoEditor();
  el('confirm-title').textContent = t('confirm_title_edit');
  renderChips();
  updateSaveState();
  showScreen('confirm');
}

// ---------------- Foto ----------------
// Più foto (09.08.2026, fino a PHOTO_MAX): ogni voce di state.draft.photos e' o una foto
// NUOVA { originalDataUrl, marks, base64, name } (annotabile, ha i byte lato client) o una
// foto GIA' SALVATA { existingPath, existingUrl } (modifica di un record esistente - non
// annotabile: non ne abbiamo i byte senza scaricarla, stesso limite del semplice testo
// "Foto già presente" di prima). state.draft.activePhotoIndex indica quale miniatura e'
// aperta nell'editor sotto, state.draft.annotateTool quale dei 3 strumenti e' selezionato.
function resetPhotoField() {
  if (state.draft) {
    state.draft.photos = [];
    state.draft.activePhotoIndex = -1;
    state.draft.annotateTool = 'circle';
    state.draft._dragPreview = null;
    state.draft._pendingTextPoint = null;
  }
  el('f-photo').value = '';
  el('photo-text-input-row').classList.add('hidden');
  renderPhotoThumbs();
  renderPhotoEditor();
}

function activePhotoForEdit() {
  const photos = (state.draft && state.draft.photos) || [];
  return photos[state.draft ? state.draft.activePhotoIndex : -1];
}

function removePhoto(i) {
  state.draft.photos.splice(i, 1);
  if (state.draft.activePhotoIndex >= state.draft.photos.length) {
    state.draft.activePhotoIndex = state.draft.photos.length - 1;
  }
  renderPhotoThumbs();
  renderPhotoEditor();
}

function renderPhotoThumbs() {
  const photos = (state.draft && state.draft.photos) || [];
  const wrap = el('photo-thumb-row');
  wrap.innerHTML = '';
  const hasAny = photos.length > 0;
  el('photo-pick-btn').classList.toggle('hidden', hasAny);
  wrap.classList.toggle('hidden', !hasAny);
  photos.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'photo-thumb' + (i === state.draft.activePhotoIndex ? ' active' : '');
    if (p.originalDataUrl) {
      const img = document.createElement('img');
      img.src = p.originalDataUrl;
      div.appendChild(img);
    } else {
      const ic = document.createElement('div');
      ic.className = 'photo-thumb-existing-ic';
      ic.textContent = '\u{1F4F7}';
      div.appendChild(ic);
    }
    const x = document.createElement('button');
    x.type = 'button'; x.className = 'photo-thumb-x'; x.textContent = '×';
    x.addEventListener('click', (e) => { e.stopPropagation(); removePhoto(i); });
    div.appendChild(x);
    div.addEventListener('click', () => { state.draft.activePhotoIndex = i; renderPhotoThumbs(); renderPhotoEditor(); });
    wrap.appendChild(div);
  });
  if (photos.length < PHOTO_MAX) {
    const add = document.createElement('button');
    add.type = 'button'; add.className = 'photo-thumb-add'; add.textContent = '+';
    add.addEventListener('click', () => el('f-photo').click());
    wrap.appendChild(add);
  }
}

function renderPhotoToolButtons() {
  const tool = (state.draft && state.draft.annotateTool) || 'circle';
  document.querySelectorAll('#photo-tool-row .photo-tool-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tool === tool);
  });
  const hintKey = tool === 'arrow' ? 'photo_annotate_hint_arrow' : tool === 'text' ? 'photo_annotate_hint_text' : 'photo_annotate_hint_circle';
  el('photo-annotate-hint').textContent = t(hintKey);
}

function renderPhotoEditor() {
  const active = activePhotoForEdit();
  const editor = el('photo-editor');
  el('photo-text-input-row').classList.add('hidden');
  if (!active) { editor.classList.add('hidden'); return; }
  editor.classList.remove('hidden');
  const editable = !!active.originalDataUrl;
  el('photo-tool-row').classList.toggle('hidden', !editable);
  editor.querySelector('.photo-annotate-stage').classList.toggle('hidden', !editable);
  el('photo-annotate-bar').classList.toggle('hidden', !editable);
  el('photo-not-editable').classList.toggle('hidden', editable);
  if (editable) {
    el('photo-preview').src = active.originalDataUrl;
    renderPhotoToolButtons();
  }
}

// Disegna un segno (cerchio/freccia/testo) sul canvas passato - stessa funzione usata sia
// per l'anteprima dal vivo (canvas piccolo, dimensione visualizzata) sia per l'appiattimento
// finale (canvas alla risoluzione naturale della foto) - solo r/lineWidth cambiano scala tra
// i due casi, la geometria e' identica cosi' il segno appiattito combacia con quello visto.
function drawMarkOnCtx(ctx, m, w, h, r, lineWidth) {
  ctx.strokeStyle = '#F87171';
  ctx.fillStyle = '#F87171';
  ctx.lineWidth = lineWidth;
  if (m.type === 'arrow') {
    const x1 = m.xFrac * w, y1 = m.yFrac * h, x2 = m.x2Frac * w, y2 = m.y2Frac * h;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLen = r * 0.9;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 7), y2 - headLen * Math.sin(angle - Math.PI / 7));
    ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 7), y2 - headLen * Math.sin(angle + Math.PI / 7));
    ctx.closePath(); ctx.fill();
  } else if (m.type === 'text') {
    const x = m.xFrac * w, y = m.yFrac * h;
    const fontSize = Math.max(11, Math.round(r * 1.1));
    ctx.font = '700 ' + fontSize + 'px ' + (getComputedStyle(document.body).fontFamily || 'sans-serif');
    ctx.textBaseline = 'middle';
    const textW = ctx.measureText(m.text).width;
    const padX = fontSize * 0.35, padY = fontSize * 0.5;
    ctx.fillStyle = 'rgba(0,0,0,.6)';
    ctx.fillRect(x - padX, y - padY, textW + padX * 2, padY * 2);
    ctx.fillStyle = '#F87171';
    ctx.fillText(m.text, x, y);
  } else {
    const x = m.xFrac * w, y = m.yFrac * h;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
  }
}

// Foto annotata (07.08.2026, idea "WOW" #3; estesa 09.08.2026 con freccia/testo, richiesta di
// Rino). L'originale pulito resta sempre in originalDataUrl: il canvas sopra la preview e'
// solo l'anteprima dal vivo dei segni, l'immagine finale si ricalcola da zero ogni volta a
// partire dall'originale + tutti i segni, mai sovrapponendo un flatten sopra un altro
// (altrimenti ogni tocco perderebbe qualita' e i segni vecchi si sommerebbero).
function redrawPhotoAnnotationOverlay() {
  const img = el('photo-preview');
  const canvas = el('photo-annotate-canvas');
  if (!img.naturalWidth) return;
  canvas.width = img.clientWidth;
  canvas.height = img.clientHeight;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const active = activePhotoForEdit();
  const marks = (active && active.marks) || [];
  const r = Math.max(14, Math.min(canvas.width, canvas.height) * 0.06);
  marks.forEach(m => drawMarkOnCtx(ctx, m, canvas.width, canvas.height, r, 3));
  if (state.draft && state.draft._dragPreview) {
    drawMarkOnCtx(ctx, state.draft._dragPreview, canvas.width, canvas.height, r, 3);
  }
}

function flattenPhotoAnnotations() {
  return new Promise((resolve) => {
    const active = activePhotoForEdit();
    if (!active || !active.originalDataUrl) { resolve(); return; }
    const marks = active.marks || [];
    if (!marks.length) {
      active.base64 = active.originalDataUrl.split(',')[1];
      resolve();
      return;
    }
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const r = Math.max(canvas.width, canvas.height) * 0.045;
      marks.forEach(m => drawMarkOnCtx(ctx, m, canvas.width, canvas.height, r, Math.max(3, canvas.width * 0.006)));
      active.base64 = canvas.toDataURL('image/jpeg', 0.85).split(',')[1];
      resolve();
    };
    img.src = active.originalDataUrl;
  });
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
  if (!state.draft.photos) state.draft.photos = [];
  if (state.draft.photos.length >= PHOTO_MAX) { el('f-photo').value = ''; return; }
  try {
    const dataUrl = await compressImage(file);
    state.draft.photos.push({
      originalDataUrl: dataUrl,
      marks: [],
      base64: dataUrl.split(',')[1],
      name: (state.draft.pipeNo || 'asset') + '-' + Date.now() + '.jpg'
    });
    state.draft.activePhotoIndex = state.draft.photos.length - 1;
    state.draft.annotateTool = 'circle';
    el('f-photo').value = '';
    renderPhotoThumbs();
    renderPhotoEditor();
  } catch (e) { alert(t('err_photo')); }
});
el('photo-preview').addEventListener('load', redrawPhotoAnnotationOverlay);
window.addEventListener('resize', redrawPhotoAnnotationOverlay);

document.querySelectorAll('#photo-tool-row .photo-tool-btn').forEach(b => {
  b.addEventListener('click', () => {
    if (!state.draft) return;
    state.draft.annotateTool = b.dataset.tool;
    el('photo-text-input-row').classList.add('hidden');
    renderPhotoToolButtons();
  });
});

// Cerchio: tocco singolo (come prima, 07.08.2026). Freccia: trascina da un punto all'altro -
// un tocco troppo piccolo (< 2% della foto) viene ignorato, per non creare una freccia
// invisibile per sbaglio. Testo: tocco, poi si scrive nel campo che appare sotto (non un
// popup nativo del telefono, resta coerente con lo stile dell'app).
let photoDragStart = null;
el('photo-annotate-canvas').addEventListener('pointerdown', (e) => {
  const active = activePhotoForEdit();
  if (!active || !active.originalDataUrl) return;
  if ((state.draft.annotateTool || 'circle') !== 'arrow') return;
  const rect = el('photo-annotate-canvas').getBoundingClientRect();
  photoDragStart = { xFrac: (e.clientX - rect.left) / rect.width, yFrac: (e.clientY - rect.top) / rect.height };
  try { el('photo-annotate-canvas').setPointerCapture(e.pointerId); } catch (e2) { /* non essenziale */ }
});
el('photo-annotate-canvas').addEventListener('pointermove', (e) => {
  if (!photoDragStart) return;
  const rect = el('photo-annotate-canvas').getBoundingClientRect();
  state.draft._dragPreview = {
    type: 'arrow', xFrac: photoDragStart.xFrac, yFrac: photoDragStart.yFrac,
    x2Frac: (e.clientX - rect.left) / rect.width, y2Frac: (e.clientY - rect.top) / rect.height
  };
  redrawPhotoAnnotationOverlay();
});
el('photo-annotate-canvas').addEventListener('pointerup', async (e) => {
  const active = activePhotoForEdit();
  const tool = state.draft ? (state.draft.annotateTool || 'circle') : 'circle';
  const rect = el('photo-annotate-canvas').getBoundingClientRect();
  const xFrac = (e.clientX - rect.left) / rect.width;
  const yFrac = (e.clientY - rect.top) / rect.height;

  if (tool === 'arrow') {
    const start = photoDragStart;
    photoDragStart = null;
    state.draft._dragPreview = null;
    if (!active || !active.originalDataUrl || !start) { redrawPhotoAnnotationOverlay(); return; }
    if (Math.hypot(xFrac - start.xFrac, yFrac - start.yFrac) > 0.02) {
      active.marks.push({ type: 'arrow', xFrac: start.xFrac, yFrac: start.yFrac, x2Frac: xFrac, y2Frac: yFrac });
      await flattenPhotoAnnotations();
    }
    redrawPhotoAnnotationOverlay();
    return;
  }
  photoDragStart = null;
  if (!active || !active.originalDataUrl) return;

  if (tool === 'text') {
    state.draft._pendingTextPoint = { xFrac, yFrac };
    el('photo-text-input-row').classList.remove('hidden');
    el('photo-text-input').value = '';
    el('photo-text-input').focus();
    return;
  }

  active.marks.push({ type: 'circle', xFrac, yFrac });
  redrawPhotoAnnotationOverlay();
  await flattenPhotoAnnotations();
});
el('photo-text-confirm').addEventListener('click', async () => {
  const active = activePhotoForEdit();
  const point = state.draft && state.draft._pendingTextPoint;
  const text = el('photo-text-input').value.trim();
  el('photo-text-input-row').classList.add('hidden');
  if (!active || !point || !text) { if (state.draft) state.draft._pendingTextPoint = null; return; }
  active.marks.push({ type: 'text', xFrac: point.xFrac, yFrac: point.yFrac, text });
  state.draft._pendingTextPoint = null;
  redrawPhotoAnnotationOverlay();
  await flattenPhotoAnnotations();
});
el('photo-text-cancel').addEventListener('click', () => {
  if (state.draft) state.draft._pendingTextPoint = null;
  el('photo-text-input-row').classList.add('hidden');
});
el('photo-annotate-undo').addEventListener('click', async () => {
  const active = activePhotoForEdit();
  if (!active || !active.marks || !active.marks.length) return;
  active.marks.pop();
  redrawPhotoAnnotationOverlay();
  await flattenPhotoAnnotations();
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
    // NCR/CR (07.08.2026): due chip indipendenti (non un solo selezionabile come le altre
    // liste) - una scheda puo' avere sia un NCR sia una CR aperti insieme, non si escludono
    // a vicenda. Il commento (riferimento/nota) compare solo se almeno una e' attiva.
    const ncrCrWrap = el('ncr-cr-chips'); ncrCrWrap.innerHTML = '';
    [['ncr', t('ncr_label')], ['cr', t('cr_label')]].forEach(([key, label]) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip' + (state.draft[key] ? ' selected itp' : '');
      b.textContent = label;
      b.addEventListener('click', () => { state.draft[key] = !state.draft[key]; renderChips(); });
      ncrCrWrap.appendChild(b);
    });
    el('ncr-cr-comment-row').classList.toggle('hidden', !(state.draft.ncr || state.draft.cr));
    updateDefectDetailsSummary();
  }
}

// Titolo del pannello "Dettagli difetto" (07.08.2026, valutazione UI): riassume le scelte
// gia' fatte anche da chiuso (es. "Saldatura, Da Riparare, NCR"), cosi' non serve riaprirlo
// solo per ricordare cosa si e' selezionato - torna al testo generico se non c'e' ancora
// nessuna selezione.
function updateDefectDetailsSummary() {
  const parts = [];
  if (state.draft.defectType) parts.push(defectTypeLabel(state.draft.defectType));
  if (state.draft.disposition) parts.push(dispositionLabel(state.draft.disposition));
  if (state.draft.ncr) parts.push(t('ncr_label'));
  if (state.draft.cr) parts.push(t('cr_label'));
  el('defect-details-summary').textContent = parts.length ? parts.join(', ') : t('defect_details_title');
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

// Dettatura vocale del commento (07.08.2026, idea "WOW" #2): utile con i guanti o in
// quota - Web Speech API nativa del browser, nessun server coinvolto. Il pulsante resta
// nascosto da solo se il telefono/browser non la supporta (es. alcuni Android datati),
// invece di mostrare un pulsante che poi non funziona.
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognitionCtor) {
  const micBtn = el('f-comment-voice-btn');
  micBtn.classList.remove('hidden');
  let recognizing = false;
  let recognition = null;
  micBtn.addEventListener('click', () => {
    const targetId = micBtn.dataset.target;
    const targetEl = el(targetId);
    if (recognizing) { recognition.stop(); return; }
    recognition = new SpeechRecognitionCtor();
    recognition.lang = state.lang === 'it' ? 'it-IT' : 'en-GB';
    recognition.interimResults = false;
    recognition.continuous = true;
    const baseValue = targetEl.value ? targetEl.value.replace(/\s+$/, '') + ' ' : '';
    recognition.onstart = () => { recognizing = true; micBtn.classList.add('recording'); };
    recognition.onend = () => { recognizing = false; micBtn.classList.remove('recording'); };
    recognition.onerror = () => { recognizing = false; micBtn.classList.remove('recording'); };
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) transcript += event.results[i][0].transcript;
      targetEl.value = baseValue + transcript;
      targetEl.dispatchEvent(new Event('input'));
    };
    recognition.start();
  });
}
// Traduzione tecnica del commento (13.08.2026, richiesta Rino): il testo tradotto va sempre
// confermato (eventualmente modificato) prima di essere salvato - questi commenti finiscono
// in documenti ufficiali (NCR/IRN/MDR), niente traduzione automatica silenziosa.
el('f-comment-translate-btn').addEventListener('click', async () => {
  const text = el('f-comment').value.trim();
  if (!text) return;
  const btn = el('f-comment-translate-btn');
  btn.disabled = true;
  btn.classList.add('translating');
  try {
    const { translated } = await api('/api/translate', { method: 'POST', body: JSON.stringify({ text }) });
    el('comment-translate-text').value = translated;
    const hints = findGlossaryTerms(text);
    const hintsWrap = el('comment-glossary-hints');
    if (hints.length) {
      hintsWrap.innerHTML = hints.map(h => `<span class="glossary-chip">${escapeHtml(h.it)} → <b>${escapeHtml(h.en)}</b></span>`).join('');
      hintsWrap.classList.remove('hidden');
    } else {
      hintsWrap.classList.add('hidden');
    }
    el('comment-translate-box').classList.remove('hidden');
  } catch (err) {
    alert(t('translate_err') + err.message);
  } finally {
    btn.disabled = false;
    btn.classList.remove('translating');
  }
});
el('comment-translate-cancel').addEventListener('click', () => {
  el('comment-translate-box').classList.add('hidden');
});
el('comment-translate-confirm').addEventListener('click', () => {
  state.draft.commentEn = el('comment-translate-text').value.trim();
  el('comment-translate-box').classList.add('hidden');
});
el('f-ncr-cr-comment').addEventListener('input', () => { state.draft.ncrCrComment = el('f-ncr-cr-comment').value; });
el('defect-details-toggle').addEventListener('click', () => {
  el('defect-details-toggle').closest('.accordion').classList.toggle('collapsed');
});

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

// Costruisce il corpo pulito da mandare al Worker: le foto esistenti (modifica) restano
// {existingPath, existingUrl}, quelle nuove diventano {base64, name} - lo stato interno di
// editing (originalDataUrl/marks, usati solo per disegnare/riappiattire lato client) non
// serve al server e raddoppierebbe inutilmente il peso della richiesta se venisse spedito.
function buildRecordPayload(draft) {
  const photos = (draft.photos || []).map(p => p.existingPath
    ? { existingPath: p.existingPath, existingUrl: p.existingUrl || '' }
    : { base64: p.base64, name: p.name });
  return { ...draft, photos };
}

el('confirm-save').addEventListener('click', async () => {
  if (!state.draft || !state.draft.itpStep || !state.draft.condition) return;
  el('confirm-save').disabled = true;
  el('confirm-save').textContent = t('confirm_save_saving');
  try {
    const payload = buildRecordPayload(state.draft);
    if (state.editingId) {
      const { record } = await api('/api/records/' + encodeURIComponent(state.editingId), { method: 'PUT', body: JSON.stringify(payload) });
      const idx = state.records.findIndex(r => r.id === state.editingId);
      if (idx >= 0) state.records[idx] = record; else state.records.unshift(record);
      state.editingId = null;
      renderDatasetList();
    } else {
      try {
        const { record } = await api('/api/records', { method: 'POST', body: JSON.stringify(payload) });
        state.records.unshift(record);
        renderDatasetList();
      } catch (err) {
        // errore di rete (offline/rete instabile) su un NUOVO scan: si mette in coda invece
        // di far perdere il rilievo all'ispettore. Un errore del server (es. campi mancanti)
        // resta invece un errore vero, va corretto e reinviato.
        if (err instanceof TypeError) {
          await queueRecordOffline(payload);
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

// Card "Stato generale" in cima al Dataset (05.08.2026, richiesta di Rino: oggi capita
// spesso di scoprire "a posteriori" che qualcosa non era davvero sincronizzato/allineato
// - questa card lo dice subito, appena apri l'app). Chiusa di default (nessuna
// persistenza tra sessioni, per scelta - resta sempre un riassunto di una riga finche'
// non la apri tu). Le prime 3 righe sono un vero e proprio semaforo (contano per il
// riassunto), la quarta (ultimo scan) e' solo informativa.
function renderHealthCard() {
  if (!el('health-summary-text')) return;
  const items = [];

  // 1) Sincronizzazione dati produzione
  const prodMeta = state.productionMeta;
  let prodStatus = 'orange', prodDetail = t('health_prod_never');
  if (prodMeta && prodMeta.updatedAt) {
    const ageHours = (Date.now() - new Date(prodMeta.updatedAt).getTime()) / 3600000;
    const when = new Date(prodMeta.updatedAt).toLocaleString(t('locale'));
    if (ageHours <= 24) {
      prodStatus = 'green';
      prodDetail = t('health_prod_synced').replace('{when}', when);
    } else {
      prodStatus = 'orange';
      prodDetail = t('health_prod_stale').replace('{when}', when);
    }
  }
  items.push({ status: prodStatus, label: t('health_prod_label'), detail: prodDetail, action: 'order-status' });

  // 2) Tally List FI attiva (solo l'ultima, stessa logica di loadFiTally)
  let tallyStatus = 'green', tallyDetail = t('health_tally_none');
  if (state.fiTallyEntries && state.fiTallyEntries.length) {
    const latestCertNo = latestTallyCertNo(state.fiTallyEntries);
    const active = state.fiTallyEntries.filter(e => e.certNo === latestCertNo);
    const pending = active.filter(e => !e.esito).length;
    if (pending > 0) {
      tallyStatus = 'orange';
      tallyDetail = t('health_tally_pending').replace('{certNo}', latestCertNo).replace('{n}', pending);
    } else {
      tallyDetail = t('health_tally_done').replace('{certNo}', latestCertNo).replace('{n}', active.length);
    }
  }
  items.push({ status: tallyStatus, label: t('health_tally_label'), detail: tallyDetail, action: 'fi-tally' });

  // 3) Difetti aperti (stessa soglia di 5 giorni gia' usata in Statistiche)
  const openDefects = (state.records || []).filter(r => isDefectCondition(r.condition) && r.status === 'open');
  const agingDefects = openDefects.filter(r => r.scannedAt && (Date.now() - new Date(r.scannedAt).getTime()) / 86400000 >= 5);
  let defStatus = 'green', defDetail = t('health_defects_none');
  if (agingDefects.length) {
    defStatus = 'red';
    defDetail = t('health_defects_aging').replace('{open}', openDefects.length).replace('{aging}', agingDefects.length);
  } else if (openDefects.length) {
    defStatus = 'orange';
    defDetail = t('health_defects_open').replace('{n}', openDefects.length);
  }
  items.push({ status: defStatus, label: t('health_defects_label'), detail: defDetail, action: 'dataset-defects' });

  // 4) Ultimo scan registrato - solo informativo, non entra nel conteggio avvisi
  const lastRecord = (state.records || []).slice().sort((a, b) => new Date(b.scannedAt) - new Date(a.scannedAt))[0];
  const lastScanText = lastRecord
    ? t('health_last_scan').replace('{who}', lastRecord.scannedBy || '-').replace('{when}', lastRecord.scannedAt ? new Date(lastRecord.scannedAt).toLocaleString(t('locale')) : '-')
    : '';

  const warnCount = items.filter(it => it.status !== 'green').length;
  const worst = items.some(it => it.status === 'red') ? 'red' : (warnCount ? 'orange' : 'green');

  el('health-summary-dot').className = 'dot dot-' + worst;
  const summaryText = el('health-summary-text');
  summaryText.textContent = warnCount ? t('health_summary_warn').replace('{n}', warnCount) : t('health_summary_ok');
  summaryText.className = 'summary-text' + (worst === 'red' ? ' danger' : worst === 'orange' ? ' warn' : '');

  const rows = el('health-rows');
  rows.innerHTML = items.map(it => `
    <div class="health-row" data-action="${it.action}">
      <span class="dot dot-${it.status}"></span>
      <div class="health-text"><div class="health-label">${escapeHtml(it.label)}</div><div class="health-detail">${escapeHtml(it.detail)}</div></div>
      <span class="health-chevron">&rsaquo;</span>
    </div>`).join('') + (lastScanText
    ? `<div class="health-row info"><span class="dot"></span><div class="health-text"><div class="health-label">${escapeHtml(lastScanText)}</div></div></div>`
    : '');
  rows.querySelectorAll('.health-row[data-action]').forEach(row => {
    row.addEventListener('click', () => {
      const action = row.dataset.action;
      if (action === 'order-status') el('order-status-btn').click();
      else if (action === 'fi-tally') el('fi-tally-btn').click();
      else if (action === 'dataset-defects') el('filter-defects').click();
    });
  });
}
el('health-summary-btn').addEventListener('click', () => {
  const card = el('health-card');
  const open = card.classList.toggle('open');
  el('health-rows').classList.toggle('hidden', !open);
});

function renderDatasetList() {
  renderHealthCard();
  const q = (el('search-input').value || '').toLowerCase().trim();
  const list = el('dataset-list');
  const filtered = state.records.filter(r => {
    if (state.datasetFilter === 'defects' && !isDefectCondition(r.condition)) return false;
    if (!q) return true;
    return (r.pipeNo || '').toLowerCase().includes(q) ||
           (r.itemNo || '').toLowerCase().includes(q) ||
           (r.csHeat || '').toLowerCase().includes(q) ||
           (r.craHeat || '').toLowerCase().includes(q);
  });
  // Numero sul tab e sottotitolo riflettono quello che si vede davvero nell'elenco sotto
  // (filtro Solo difetti + ricerca), non il totale assoluto - altrimenti "Solo difetti"
  // mostrava comunque il numero di TUTTI gli asset, non solo quelli filtrati.
  el('tab-dataset-count').textContent = filtered.length;
  el('dataset-title-count').textContent = t(filtered.length === 1 ? 'dataset_title_count_one' : 'dataset_title_count').replace('{n}', filtered.length);
  if (!filtered.length) {
    // Ricerca/filtro senza risultati e dataset davvero vuoto sono due situazioni diverse
    // (07.08.2026 polish): prima mostravano lo stesso messaggio "Nessun asset ancora
    // scansionato" anche cercando qualcosa di inesistente, che confondeva ("ma li ho gia'
    // scansionati!"). Icona diversa (lente per la ricerca, cartella per il vero vuoto).
    const isSearching = !!q || state.datasetFilter === 'defects';
    const icon = isSearching
      ? '<circle cx="10.5" cy="10.5" r="6.5"/><line x1="20" y1="20" x2="15.2" y2="15.2"/>'
      : '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>';
    const msg = t(isSearching ? 'dataset_empty_search' : 'dataset_empty');
    const sub = t(isSearching ? 'dataset_empty_search_sub' : 'dataset_empty_sub');
    list.innerHTML = `<div class="empty-state">
      <div class="empty-state-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icon}</svg></div>
      <div class="empty-state-msg">${escapeHtml(msg)}</div>
      <div class="empty-state-sub">${escapeHtml(sub)}</div>
    </div>`;
    updateSyncBanner();
    return;
  }
  const card = document.createElement('div');
  card.className = 'list-card';
  filtered.forEach(r => {
    const row = document.createElement('div');
    const isNew = state.justArrivedIds && state.justArrivedIds.has(r.id);
    row.className = 'list-row row-' + r.condition + (isNew ? ' new-flash' : '');
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
        ${isNew ? `<span class="badge-new">${escapeHtml(t('badge_new'))}</span>` : ''}
        ${(() => { const n = recordPhotos(r).length; return n ? `<span class="photo-icon" title="${escapeHtml(t('has_photo'))}">&#128247;${n > 1 ? ' ' + n : ''}</span>` : ''; })()}
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
el('filter-all').addEventListener('click', () => {
  state.datasetFilter = 'all';
  el('filter-all').classList.add('active');
  el('filter-defects').classList.remove('active');
  renderDatasetList();
});
el('filter-defects').addEventListener('click', () => {
  state.datasetFilter = 'defects';
  el('filter-defects').classList.add('active');
  el('filter-all').classList.remove('active');
  renderDatasetList();
});
el('dataset-export-btn').addEventListener('click', () => {
  try { exportDatasetPdf(); } catch (err) { alert(t('err_generic') + err.message); }
});

document.querySelectorAll('.tab-cap').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    if (tab === 'scan') startManualEntry();
    else {
      loadRecords();
      showScreen('dataset');
      el('tab-dataset-ring').classList.add('hidden'); // visto: sparisce aprendo il Dataset
    }
  });
});

el('lang-toggle-login').addEventListener('click', () => setLang(state.lang === 'it' ? 'en' : 'it'));
el('lang-toggle-dataset').addEventListener('click', () => setLang(state.lang === 'it' ? 'en' : 'it'));
el('theme-toggle-login').addEventListener('click', toggleTheme);
el('theme-toggle-dataset').addEventListener('click', toggleTheme);
applyTheme();

// ---------------- Detail ----------------
// Foto caricate tramite l'API (autenticata con la sessione dell'ispettore), non con un
// link diretto al repo GitHub: cosi' le vede qualunque ispettore loggato nell'app, non solo
// chi ha un account GitHub con accesso al repo privato. Galleria (09.08.2026): ogni foto e'
// recuperata per indice (/photo/N), non piu' una sola per record.
let detailPhotoObjectUrls = [];
async function loadDetailPhotos(rec) {
  detailPhotoObjectUrls.forEach(u => URL.revokeObjectURL(u));
  detailPhotoObjectUrls = [];
  const gallery = el('d-photo-gallery');
  gallery.innerHTML = '';
  const photos = recordPhotos(rec);
  photos.forEach((p, i) => {
    const item = document.createElement('div');
    item.className = 'photo-detail-item';
    const status = document.createElement('span');
    status.textContent = t('photo_loading');
    item.appendChild(status);
    gallery.appendChild(item);
    (async () => {
      try {
        const headers = {};
        if (state.session && state.session.token) headers['Authorization'] = 'Bearer ' + state.session.token;
        const resp = await fetch(API_BASE + '/api/records/' + encodeURIComponent(rec.id) + '/photo/' + i, { headers });
        if (!resp.ok) throw new Error('photo fetch failed');
        const blob = await resp.blob();
        const objUrl = URL.createObjectURL(blob);
        detailPhotoObjectUrls.push(objUrl);
        const img = document.createElement('img');
        img.src = objUrl;
        img.alt = '';
        img.addEventListener('click', () => window.open(objUrl, '_blank'));
        item.innerHTML = '';
        item.appendChild(img);
      } catch (e) {
        status.textContent = t('err_photo_load');
      }
    })();
  });
}

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
    el('d-comment-en-row').classList.toggle('hidden', !rec.commentEn);
    if (rec.commentEn) el('d-comment-en').textContent = rec.commentEn;
  } else {
    el('d-comment-card').classList.add('hidden');
  }
  if (recordPhotos(rec).length) {
    el('d-photo-card').classList.remove('hidden');
    loadDetailPhotos(rec);
  } else {
    el('d-photo-card').classList.add('hidden');
  }
  el('d-defect-type-row').classList.toggle('hidden', !rec.defectType);
  if (rec.defectType) el('d-defect-type').textContent = defectTypeLabel(rec.defectType);
  el('d-disposition-row').classList.toggle('hidden', !rec.disposition);
  if (rec.disposition) el('d-disposition').textContent = dispositionLabel(rec.disposition);
  const hasNcrCr = !!(rec.ncr || rec.cr);
  el('d-ncr-cr-row').classList.toggle('hidden', !hasNcrCr);
  if (hasNcrCr) {
    const parts = [rec.ncr ? t('ncr_label') : null, rec.cr ? t('cr_label') : null].filter(Boolean);
    el('d-ncr-cr').textContent = parts.join(' + ') + (rec.ncrCrComment ? ' — ' + rec.ncrCrComment : '');
  }
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
    el('d-status-toggle').classList.toggle('hidden', isViewer());
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
  el('detail-edit-btn').classList.toggle('hidden', isViewer());
  showScreen('detail');
}

// Cronologia derivata dai campi di audit gia' presenti sul record (emissione, ultima
// modifica, ultima chiusura) - non e' uno storico illimitato, solo l'ultimo evento di ognuno.
function renderTimeline(rec) {
  const entries = [];
  if (rec.scannedAt) entries.push({ text: t('timeline_issued').replace('{who}', rec.scannedBy || '-'), when: rec.scannedAt });
  if (rec.editedAt) entries.push({ text: t('timeline_edited').replace('{who}', rec.editedBy || '-'), when: rec.editedAt });
  if (rec.closedAt) {
    let closedText = t('timeline_closed').replace('{who}', rec.closedBy || '-') + (rec.closureNote ? ': ' + rec.closureNote : '');
    entries.push({ text: closedText, when: rec.closedAt, retestTag: !!rec.retestConfirmed });
  }
  const wrap = el('d-timeline');
  if (!entries.length) { el('d-timeline-card').classList.add('hidden'); return; }
  entries.sort((a, b) => a.when.localeCompare(b.when));
  wrap.innerHTML = entries.map(e => `
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-text">${escapeHtml(e.text)}<span>${new Date(e.when).toLocaleString(t('locale'))}</span>${e.retestTag ? `<span class="retest-tag">${escapeHtml(t('retest_tag'))}</span>` : ''}</div>
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
    // Disposizione "ripara": in piu' chiede conferma esplicita che il tubo e' stato
    // ri-collaudato dopo la riparazione, non solo scritto come intenzione nella nota.
    const needsRetest = needsRetestConfirm(rec.disposition);
    el('d-retest-check').classList.toggle('hidden', !needsRetest);
    el('d-retest-checkbox').checked = false;
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
  const needsRetest = needsRetestConfirm(rec.disposition);
  const retested = el('d-retest-checkbox').checked;
  if (needsRetest && !retested) { alert(t('err_retest_required')); return; }
  el('d-close-note-confirm').disabled = true;
  try {
    const { record } = await api('/api/records/' + encodeURIComponent(rec.id) + '/status', {
      method: 'POST', body: JSON.stringify({ status: 'closed', closureNote: note, retested: needsRetest ? true : undefined })
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
el('detail-export-btn').addEventListener('click', async () => {
  const rec = state.records.find(r => r.id === state.selectedId);
  if (!rec) return;
  const btn = el('detail-export-btn');
  btn.disabled = true;
  try { await exportRecordPdf(rec); } catch (err) { alert(t('err_generic') + err.message); }
  finally { btn.disabled = false; }
});

// ---------------- Admin ----------------
el('admin-gear').addEventListener('click', async () => {
  await loadUsers();
  await loadAccessLog();
  showScreen('admin');
});
el('admin-back').addEventListener('click', () => showScreen('dataset'));

// ---------------- Guida ----------------
el('help-btn').addEventListener('click', () => {
  el('help-content').innerHTML = HELP_CONTENT[state.lang] || HELP_CONTENT.it;
  el('help-footer-ver').textContent = 'v' + APP_VERSION;
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

  el('stats-ncr-count').textContent = allDefects.filter(r => r.ncr).length;
  el('stats-cr-count').textContent = allDefects.filter(r => r.cr).length;

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

  // L'elenco righe-per-riga dei difetti e' stato tolto da qui (era una copia quasi identica
  // di Equipment Master Data, stessa lista/stesso tap-per-aprire) - per vedere i difetti uno
  // per uno ora si usa il filtro "Solo difetti" nel Dataset, non serve piu' duplicarli qui.
}

el('stats-btn').addEventListener('click', () => {
  renderStats();
  showScreen('stats');
});
el('stats-back').addEventListener('click', () => showScreen('dataset'));
el('stats-export-btn').addEventListener('click', () => {
  try { exportStatistichePdf(); } catch (err) { alert(t('err_generic') + err.message); }
});
el('general-status-export-btn').addEventListener('click', () => {
  try { exportStatoGeneralePdf(); } catch (err) { alert(t('err_generic') + err.message); }
});

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
el('order-status-btn').addEventListener('click', async () => {
  // Mostra subito i dati gia' in memoria (niente schermata vuota in attesa della rete),
  // poi li rinfresca dal server - a differenza del resto dell'app, questa schermata deve
  // riflettere l'ultima sincronizzazione anche se qualcun altro l'ha fatta nel frattempo,
  // non solo quella caricata al login.
  renderOrderStatus();
  showScreen('order-status');
  try {
    await Promise.all([loadRecords(), loadProductionData()]);
  } catch (e) { /* rete assente: restano visibili gli ultimi dati caricati */ }
  if (state.screen === 'order-status') renderOrderStatus();
  // L'etichetta "Aggiornato" sparisce solo aprendo davvero questa schermata - registra
  // come "visto" l'orario dell'ultima sincronizzazione appena ricaricata sopra (loadProductionData).
  if (state.productionMeta && state.productionMeta.updatedAt) {
    localStorage.setItem('qr_seen_prod_' + state.currentOrderId, state.productionMeta.updatedAt);
  }
  state.prodHasUpdate = false;
  renderToolsBadges();
});
el('order-status-back').addEventListener('click', () => showScreen('dataset'));
el('order-status-export-btn').addEventListener('click', () => {
  try { exportStatoOrdinePdf(); } catch (err) { alert(t('err_generic') + err.message); }
});

// ---------------- Cerca tubo (solo consultazione, nessun salvataggio) ----------------
function renderLookup() {
  const q = el('lookup-input').value.trim();
  const empty = el('lookup-empty');
  const ambHint = el('lookup-ambiguous-hint');
  const notFound = el('lookup-not-found');
  const prodCard = el('lookup-prod-card');
  const foundHint = el('lookup-found-hint');
  const registerBtn = el('lookup-register-btn');
  state._lookupExistingId = null;
  if (!q) {
    empty.classList.remove('hidden');
    ambHint.classList.add('hidden');
    notFound.classList.add('hidden');
    prodCard.classList.add('hidden');
    foundHint.classList.add('hidden');
    registerBtn.classList.add('hidden');
    el('lookup-tally-card').classList.add('hidden');
    return;
  }
  empty.classList.add('hidden');
  registerBtn.classList.toggle('hidden', isViewer());
  const normPipe = normProdNum(q);
  const match = state.productionByPipe.get(normPipe);
  const isAmbiguous = !match && state.ambiguousPipes.has(normPipe);
  ambHint.classList.toggle('hidden', !isAmbiguous);

  if (match) {
    el('lk-itemNo').textContent = match.itemNo || '-';
    el('lk-csHeat').textContent = match.csHeat || '-';
    el('lk-craHeat').textContent = match.craHeat || '-';
    el('lk-length').textContent = match.length || '-';
    if (typeof match.progress === 'number' && match.currentStep) {
      const pct = Math.round(match.progress * 100);
      const stepNum = match.currentStepNum || (ITP_STEPS_FALLBACK.indexOf(match.currentStep) + 1);
      el('lk-progress').textContent = `${pct}% — ITP Step N° ${stepNum}: ${match.currentStep}`;
      el('lk-progress-row').classList.remove('hidden');
    } else {
      el('lk-progress-row').classList.add('hidden');
    }
    prodCard.classList.remove('hidden');
  } else {
    prodCard.classList.add('hidden');
  }

  const existing = state.records
    .filter(r => normProdNum(r.pipeNo) === normPipe)
    .sort((a, b) => new Date(b.scannedAt) - new Date(a.scannedAt))[0];
  if (existing) {
    const date = existing.scannedAt ? new Date(existing.scannedAt).toLocaleDateString(t('locale')) : '-';
    el('lookup-found-text').textContent = t('lookup_already_registered')
      .replace('{date}', date).replace('{by}', existing.scannedBy || '-').replace('{cond}', condLabel(existing.condition));
    foundHint.classList.remove('hidden');
    state._lookupExistingId = existing.id;
  } else {
    foundHint.classList.add('hidden');
  }

  // Scheda tubo unificata (07.08.2026, idea "WOW" #6): terza fonte oltre a produzione e
  // Dataset - l'esito Tally List FI per lo stesso Pipe N°, se presente. Se compare su piu'
  // Tally List (raro ma possibile) mostra la piu' recente per data.
  const tallyMatches = (state.fiTallyEntries || []).filter(e => normProdNum(e.pipeNo) === normPipe);
  const tallyCard = el('lookup-tally-card');
  let latestTally = null;
  if (tallyMatches.length) {
    latestTally = tallyMatches.slice().sort((a, b) => {
      const da = parseDdMmYyyy(a.dateStr), db = parseDdMmYyyy(b.dateStr);
      return (db ? db.getTime() : 0) - (da ? da.getTime() : 0);
    })[0];
    el('lk-tally-certno').textContent = latestTally.certNo || '-';
    el('lk-tally-esito').textContent = latestTally.esito
      ? t('fi_tally_who').replace('{esito}', t('fi_tally_esito_' + latestTally.esito)).replace('{by}', latestTally.flaggedBy || '-').replace('{when}', latestTally.flaggedAt ? new Date(latestTally.flaggedAt).toLocaleString(t('locale')) : '-')
      : t('fi_tally_pending');
    tallyCard.classList.remove('hidden');
  } else {
    tallyCard.classList.add('hidden');
  }

  notFound.classList.toggle('hidden', !!(match || isAmbiguous || existing || latestTally));
}
el('lookup-input').addEventListener('input', renderLookup);
el('lookup-open-record-btn').addEventListener('click', () => {
  if (state._lookupExistingId) openDetail(state._lookupExistingId);
});
el('lookup-register-btn').addEventListener('click', () => {
  const q = el('lookup-input').value.trim();
  if (!q) return;
  const match = state.productionByPipe.get(normProdNum(q));
  startManualEntry();
  el('f-pipeNo').value = q;
  state.draft.pipeNo = q;
  if (match && match.itemNo) { el('f-itemNo').value = match.itemNo; state.draft.itemNo = match.itemNo; }
  tryAutoFillFromProduction();
});
el('lookup-btn').addEventListener('click', async () => {
  el('lookup-input').value = '';
  renderLookup();
  showScreen('lookup');
  try { await loadProductionData(); } catch (e) { /* rete assente: resta la copia gia' caricata */ }
  el('lookup-input').focus();
});
el('lookup-back').addEventListener('click', () => showScreen('dataset'));

// ---------------- Tally List FI (caricata dal tool desktop, flaggata dagli ispettori) ----------------
// La lista viene caricata da gui_produzione.py (POST /api/admin/fi-tally) - qui si legge
// e si flagga soltanto, nessun salvataggio verso il tool desktop parte da qui.
function fiDefectWarning(pipeNo) {
  const normPipe = normProdNum(pipeNo);
  const rec = state.records.find(r =>
    normProdNum(r.pipeNo) === normPipe && r.status === 'open' && isDefectCondition(r.condition)
  );
  if (!rec) return null;
  const parts = [condLabel(rec.condition)];
  if (rec.disposition) parts.push(t('disp_' + rec.disposition));
  return { id: rec.id, label: parts.join(' / ') };
}

function parseDdMmYyyy(s) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s || '');
  if (!m) return null;
  return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
}

// Riepilogo accettati/scartati per settimana ISO (stessa numerazione gia' usata in
// Statistiche) su TUTTO lo storico caricato (non solo l'ultima Tally List) - la
// Tally List viene emessa dal lunedi' al venerdi', quindi la settimana e' il livello
// naturale per vedere un totale invece di una lista al giorno.
function renderFiTallyWeeklySummary() {
  const container = el('fi-tally-weekly-list');
  const weekMap = new Map();
  (state.fiTallyEntries || []).forEach(e => {
    if (!e.esito) return;
    const d = parseDdMmYyyy(e.dateStr);
    if (!d) return;
    const { week, year } = isoWeekNumber(d);
    const key = year + '-' + week;
    if (!weekMap.has(key)) weekMap.set(key, { week, year, accepted: 0, rejected: 0 });
    const w = weekMap.get(key);
    if (e.esito === 'accepted') w.accepted++;
    else if (e.esito === 'rejected') w.rejected++;
  });
  const weeks = Array.from(weekMap.values()).sort((a, b) => (b.year - a.year) || (b.week - a.week));
  container.innerHTML = '';
  if (!weeks.length) {
    container.innerHTML = `<div class="row">${escapeHtml(t('fi_tally_weekly_empty'))}</div>`;
  } else {
    weeks.forEach(w => {
      const row = document.createElement('div');
      row.className = 'fi-tally-week-row';
      row.innerHTML = `
        <span class="fi-tally-week-label">${escapeHtml(t('fi_tally_week_label').replace('{week}', w.week).replace('{year}', w.year))}</span>
        <span class="fi-tally-week-counts"><span class="accepted">✓ ${w.accepted}</span><span class="rejected">✗ ${w.rejected}</span></span>`;
      container.appendChild(row);
    });
  }
  // Nota informativa sul volume storico dal 2025 (foglio Excel "Weekly TL") - solo
  // conteggio, mai mescolata alle cifre accettati/scartati sopra (05.08.2026).
  const note = document.createElement('div');
  note.className = 'fi-tally-historical-note';
  note.textContent = fiHistoricalNote();
  container.appendChild(note);
}

// Totale accettati/scartati su tutto lo storico caricato, senza raggruppare per settimana -
// stesso dato del riepilogo settimanale ma sommato tutto insieme (04.08.2026, richiesta di Rino).
function renderFiTallyTotalSummary() {
  const card = el('fi-tally-total-card');
  const container = el('fi-tally-total-list');
  const accepted = (state.fiTallyEntries || []).filter(e => e.esito === 'accepted').length;
  const rejected = (state.fiTallyEntries || []).filter(e => e.esito === 'rejected').length;
  card.classList.remove('hidden');
  container.innerHTML = '';
  if (accepted || rejected) {
    const row = document.createElement('div');
    row.className = 'fi-tally-week-row';
    row.innerHTML = `
      <span class="fi-tally-week-label">${escapeHtml(t('fi_tally_total_since_start'))}</span>
      <span class="fi-tally-week-counts"><span class="accepted">✓ ${accepted}</span><span class="rejected">✗ ${rejected}</span></span>`;
    container.appendChild(row);
  }
  const note = document.createElement('div');
  note.className = 'fi-tally-historical-note';
  note.textContent = fiHistoricalNote();
  container.appendChild(note);
}

// Storico Tally List dal 2025 (05.08.2026, richiesta di Rino): recuperato dal foglio
// Excel "Weekly TL" del file "PO 1506050 SUMITOMO EEW Pipe progress_1.xlsm" (rollup
// settimanale per Tally List, non per singolo tubo - fonte: colonne A-F, righe 4-61).
// Dato fisso caricato una volta sola, non sincronizzato dal Worker: quel foglio non
// tiene traccia dell'esito accettato/scartato per tubo, solo il conteggio totale - per
// questo queste voci restano "solo conteggio" ovunque vengano mostrate (heatmap grigia,
// mai unite alle cifre accettati/scartati calcolate sulle Tally List vere caricate
// sull'app). L'ultima riga del foglio (2026-W32, 66 tubi) coincide esattamente con le
// 2 Tally List vere gia' in app (46+20=66) ed e' stata esclusa qui per non duplicarla.
const FI_HISTORICAL_TALLY_LISTS = [
  { week: '2025-W16', date: '2025-04-14', tlNo: 2, ref: 'from 45650-TL-FI-MpfB-01 to 45650-TL-FI-400', total: 22 },
  { week: '2025-W17', date: '2025-04-21', tlNo: 2, ref: 'from 45650-TL-FI-MpfB-02 to 45650-TL-FI-400', total: 3 },
  { week: '2025-W19', date: '2025-05-05', tlNo: 4, ref: 'from 45650-TL-FI-MpfB-03 to 45650-TL-FI-MpfB-06', total: 10 },
  { week: '2025-W20', date: '2025-05-12', tlNo: 2, ref: 'from 45650-TL-FI-400 to 45650-TL-FI-MpfB-07', total: 4 },
  { week: '2025-W21', date: '2025-05-19', tlNo: 3, ref: 'from 45650-TL-FI-MpfB-08 to 45650-TL-FI-MpfB10', total: 9 },
  { week: '2025-W22', date: '2025-05-26', tlNo: 4, ref: 'from 45650-TL-FI-MpfB11 to 45650-TL-FI-MpfB14', total: 9 },
  { week: '2025-W23', date: '2025-06-02', tlNo: 3, ref: 'from 45650-TL-FI-MpfB15 to 45650-TL-FI-MpfB17', total: 10 },
  { week: '2025-W24', date: '2025-06-09', tlNo: 3, ref: 'from 45650-TL-FI-MpfB18 to 45650-TL-FI-MpfB20', total: 24 },
  { week: '2025-W26', date: '2025-06-23', tlNo: 1, ref: '45650-TL-FI-MpfB22', total: 3 },
  { week: '2025-W29', date: '2025-07-14', tlNo: 1, ref: '45650 - TL-FI-100-01', total: 9 },
  { week: '2025-W30', date: '2025-07-21', tlNo: 1, ref: '45650-TL-FI-MpfB21', total: 1 },
  { week: '2025-W31', date: '2025-07-28', tlNo: 5, ref: 'from 45650 - TL-FI-400-04 to 45650 - TL-FI-400-08', total: 82 },
  { week: '2025-W32', date: '2025-08-04', tlNo: 5, ref: 'from 45650 - TL-FI-400-09 to 45650 - TL-FI-400-13', total: 61 },
  { week: '2025-W33', date: '2025-08-11', tlNo: 6, ref: 'from 45650 - TL-FI-400-14 to 45650 - TL-FI-400-18', total: 68 },
  { week: '2025-W34', date: '2025-08-18', tlNo: 5, ref: 'from 45650 - TL-FI-400-19 to 45650 - TL-FI-400-23', total: 68 },
  { week: '2025-W35', date: '2025-08-25', tlNo: 5, ref: 'from 45650 - TL-FI-400-24 to 45650 - TL-FI-400-28', total: 96 },
  { week: '2025-W36', date: '2025-09-01', tlNo: 5, ref: 'from 45650 - TL-FI-400-29 to 45650 - TL-FI-400-33', total: 88 },
  { week: '2025-W37', date: '2025-09-08', tlNo: 7, ref: 'from 45650-TL-FI-MpfB22 to 45650 - TL-FI-400-38', total: 102 },
  { week: '2025-W38', date: '2025-09-15', tlNo: 5, ref: 'from 45650 - TL-FI-400-39 to 45650 - TL-FI-400-43', total: 109 },
  { week: '2025-W39', date: '2025-09-22', tlNo: 5, ref: 'from 45650 - TL-FI-400-44 to 45650 - TL-FI-400-48', total: 90 },
  { week: '2025-W40', date: '2025-09-29', tlNo: 4, ref: 'from 45650 - TL-FI-400-49 to 45650 - TL-FI-400-52', total: 77 },
  { week: '2025-W41', date: '2025-10-06', tlNo: 5, ref: 'from 45650 - TL-FI-400-53 to 45650 - TL-FI-400-57', total: 96 },
  { week: '2025-W42', date: '2025-10-13', tlNo: 5, ref: 'from 45650 - TL-FI-400-58 to 45650 - TL-FI-400-62', total: 80 },
  { week: '2025-W43', date: '2025-10-20', tlNo: 6, ref: 'from 45650 - TL-FI-400-63 to 45650 - TL-FI-600-01', total: 108 },
  { week: '2025-W44', date: '2025-10-27', tlNo: 7, ref: 'from 45650 - TL-FI-600-02 to 45650 - TL-FI-400-72', total: 105 },
  { week: '2025-W45', date: '2025-11-03', tlNo: 7, ref: 'from 45650 - TL-FI-400-73 to 45650 - TL-FI-400-77', total: 102 },
  { week: '2025-W46', date: '2025-11-10', tlNo: 8, ref: 'from 45650 - TL-FI-400-78 to 45650 - TL-FI-400-82', total: 123 },
  { week: '2025-W47', date: '2025-11-17', tlNo: 6, ref: 'from 45650 - TL-FI-400-83 to 45650 - TL-FI-600-17', total: 110 },
  { week: '2025-W48', date: '2025-11-24', tlNo: 6, ref: 'from 45650 - TL-FI-400-88 to 45650 - TL-FI-500-02', total: 89 },
  { week: '2025-W49', date: '2025-12-01', tlNo: 6, ref: 'from 45650 - TL-FI-500-03 to 45650 - TL-FI-500-06', total: 40 },
  { week: '2025-W50', date: '2025-12-08', tlNo: 8, ref: 'from 45650 - TL-FI-500-07 to 45650 - TL-FI-100-03', total: 35 },
  { week: '2025-W51', date: '2025-12-15', tlNo: 7, ref: 'from 45650 - TL-FI-500-11 to 45650 - TL-FI-600-17', total: 38 },
  { week: '2026-W02', date: '2026-01-05', tlNo: 5, ref: 'from 45650 - TL-FI-500-15 to 45650 - TL-FI-500-17', total: 22 },
  { week: '2026-W03', date: '2026-01-12', tlNo: 9, ref: 'from 45650 - TL-FI-500-18 to 45650 - TL-FI-100-08', total: 57 },
  { week: '2026-W04', date: '2026-01-19', tlNo: 8, ref: 'from 45650 - TL-FI-500-23 to 45650 - TL-FI-100-11-1', total: 29 },
  { week: '2026-W05', date: '2026-01-26', tlNo: 6, ref: 'from 45650 - TL-FI-100-12 to 45650 - TL-FI-600-22', total: 19 },
  { week: '2026-W06', date: '2026-02-02', tlNo: 11, ref: 'from 45650 - TL-FI-600-23 to 45650 - TL-FI-500-30', total: 66 },
  { week: '2026-W07', date: '2026-02-09', tlNo: 10, ref: 'from 45650 - TL-FI-600-26 to 45650 - TL-FI-100-16', total: 75 },
  { week: '2026-W08', date: '2026-02-16', tlNo: 15, ref: 'from 45650 - TL-FI-500-36 to 45650 - TL-FI-500-14', total: 79 },
  { week: '2026-W09', date: '2026-02-23', tlNo: 8, ref: 'from 45650 - TL-FI-500-41 to 45650 - TL-FI-500-44', total: 59 },
  { week: '2026-W10', date: '2026-03-02', tlNo: 7, ref: 'from 45650 - TL-FI-500-45 to 45650 - TL-FI-700-02', total: 41 },
  { week: '2026-W11', date: '2026-03-09', tlNo: 13, ref: 'from 45650 - TL-FI-500-49 to 45650 - TL-FI-200-02', total: 61 },
  { week: '2026-W12', date: '2026-03-16', tlNo: 11, ref: 'from 45650 - TL-FI-400-103 to 45650 - TL-FI-800-03', total: 92 },
  { week: '2026-W13', date: '2026-03-23', tlNo: 9, ref: 'from 45650 - TL-FI-400-107 to 45650 - TL-FI-400-111', total: 58 },
  { week: '2026-W14', date: '2026-03-30', tlNo: 8, ref: 'from 45650 - TL-FI-400-112 to 45650 - TL-FI-500-60', total: 64 },
  { week: '2026-W15', date: '2026-04-06', tlNo: 5, ref: 'from 45650 - TL-FI-400-116 to 45650 - TL-FI-400-118', total: 30 },
  { week: '2026-W16', date: '2026-04-13', tlNo: 5, ref: 'from 45650 - TL-FI-400-119 to 45650 - TL-FI-400-123', total: 92 },
  { week: '2026-W17', date: '2026-04-20', tlNo: 3, ref: 'from 45650 - TL-FI-400-124 to 45650 - TL-FI-400-126', total: 27 },
  { week: '2026-W22', date: '2026-05-25', tlNo: 1, ref: '45650 - TL-FI-400-127', total: 4 },
  { week: '2026-W23', date: '2026-06-01', tlNo: 3, ref: 'from 45650 - TL-FI-400-128 to 45650 - TL-FI-400-130', total: 44 },
  { week: '2026-W24', date: '2026-06-08', tlNo: 5, ref: 'from 45650 - TL-FI-400-131 to 45650 - TL-FI-400-135', total: 55 },
  { week: '2026-W25', date: '2026-06-15', tlNo: 5, ref: 'from 45650 - TL-FI-400-136 to 45650 - TL-FI-400-140', total: 99 },
  { week: '2026-W26', date: '2026-06-22', tlNo: 5, ref: 'from 45650 - TL-FI-400-141 to 45650 - TL-FI-400-145', total: 76 },
  { week: '2026-W27', date: '2026-06-29', tlNo: 5, ref: 'from 45650 - TL-FI-400-146 to 45650 - TL-FI-400-150', total: 112 },
  { week: '2026-W28', date: '2026-07-06', tlNo: 5, ref: 'from 45650 - TL-FI-400-151 to 45650 - TL-FI-400-155', total: 122 },
  { week: '2026-W29', date: '2026-07-13', tlNo: 5, ref: 'from 45650 - TL-FI-400-156 to 45650 - TL-FI-400-160', total: 127 },
  { week: '2026-W30', date: '2026-07-20', tlNo: 5, ref: 'from 45650 - TL-FI-400-161 to 45650 - TL-FI-400-165', total: 120 },
  { week: '2026-W31', date: '2026-07-27', tlNo: 5, ref: 'from 45650 - TL-FI-400-166 to 45650 - TL-FI-400-170', total: 135 },
];
// Totali "certi" presi dal blocchetto "Totals Check" dello stesso foglio Excel (fonte
// unica sempre verificabile) invece di risommare riga per riga - copre TUTTO lo storico,
// incluse le 2 Tally List vere gia' in app (che vi sono gia' conteggiate dentro).
const FI_HISTORICAL_TOTALS = { weeksWithTL: 59, totalPipes: 3702, totalMeters: 45281.645, bestWeekLabel: '2026-W31', bestWeekPipes: 135 };

function fiHistoricalNote() {
  // useGrouping esplicito: in alcuni motori il default di toLocaleString('it-IT') non
  // raggruppa le migliaia (es. "3702" invece di "3.702") - scoperto testando questa
  // stessa funzione, non capitava altrove nell'app perche' nessun altro numero mostrato
  // superava le 999 unita'.
  const fmt = (n) => n.toLocaleString(t('locale'), { useGrouping: true });
  return t('fi_tally_historical_note')
    .replace('{pipes}', fmt(FI_HISTORICAL_TOTALS.totalPipes))
    .replace('{meters}', fmt(FI_HISTORICAL_TOTALS.totalMeters))
    .replace('{weeks}', FI_HISTORICAL_TOTALS.weeksWithTL)
    .replace('{bestWeek}', FI_HISTORICAL_TOTALS.bestWeekLabel)
    .replace('{bestWeekPipes}', FI_HISTORICAL_TOTALS.bestWeekPipes);
}

// Raggruppa gli esiti per Cert-No (una Tally List = un Cert-No) invece che per settimana -
// serve per il grafico, dove ogni barra e' una Tally List, non un periodo di tempo.
function groupTallyByCertNo(entries) {
  const map = new Map();
  (entries || []).forEach(e => {
    if (!e.esito) return;
    if (!map.has(e.certNo)) map.set(e.certNo, { certNo: e.certNo, itemNo: e.itemNo, dateStr: e.dateStr, accepted: 0, rejected: 0 });
    const g = map.get(e.certNo);
    if (e.esito === 'accepted') g.accepted++;
    else if (e.esito === 'rejected') g.rejected++;
  });
  return Array.from(map.values());
}

// Intensita' del quadratino in base al numero di tubi della lista (10.08.2026, richiesta di
// Rino: "verde più intenso = lista più grande" - prima tutte le liste al 100% erano identiche,
// non si distingueva una lista da 5 tubi da una da 130). Sotto i 25-49 tubi resta il colore
// "base" (quello di sempre); sopra/sotto si schiarisce/scurisce con color-mix() - risolve
// automaticamente in entrambi i temi chiaro/scuro perche' parte dalla variabile CSS gia'
// corretta per il tema attivo, non da un valore fisso.
function fiHeatIntensity(total) {
  if (total < 10) return { pct: 55, mix: 'white', text: '#0c1f14' };
  if (total < 25) return { pct: 75, mix: 'white', text: '#0c1f14' };
  if (total < 50) return null;
  if (total < 100) return { pct: 80, mix: 'black', text: '#EDEFF3' };
  return { pct: 60, mix: 'black', text: '#EDEFF3' };
}

// Colore di un quadratino della heatmap: tinta = tasso di accettazione della singola Tally
// List (1 = tutto accettato, invariato), intensita' = numero di tubi (vedi sopra). Ritorna
// {background, color} da applicare come style inline.
function fiHeatColor(rate, total) {
  const base = rate >= 1 ? '--green' : rate >= 0.95 ? '--fi-heat-mid' : rate >= 0.85 ? '--orange' : '--red';
  const intensity = fiHeatIntensity(total);
  if (!intensity) return { background: `var(${base})`, color: '#0c1f14' };
  return {
    background: `color-mix(in srgb, var(${base}) ${intensity.pct}%, ${intensity.mix} ${100 - intensity.pct}%)`,
    color: intensity.text
  };
}

// Heatmap raggruppata per mese (un quadratino per Tally List, colore = tasso di
// accettazione) invece di un grafico a barre - con mesi/anni di storico dal 2025 le barre
// affollavano lo schermo o dovevano tagliare via le liste vecchie; la heatmap resta
// compatta qualunque sia la quantita' di liste caricate. Toccando un quadratino compare
// il dettaglio (Cert-No/data/esito) sotto, invece di doverlo indovinare dalla sola
// posizione (04.08.2026, richiesta di Rino dopo aver visto in anteprima sia le barre sia
// questa alternativa).
function renderFiTallyChart() {
  const card = el('fi-tally-chart-card');
  const groups = groupTallyByCertNo(state.fiTallyEntries);
  card.classList.remove('hidden');
  groups.forEach(g => { g._date = parseDdMmYyyy(g.dateStr); });

  // Unisce le Tally List vere (colorate per tasso di accettazione) con quelle storiche
  // dal 2025 (grigie, solo conteggio) in un'unica sequenza ordinata per data - stessa
  // heatmap, cella diversa solo nel colore e nel dettaglio mostrato al tocco.
  const items = [
    ...groups.map(g => ({ type: 'real', id: 'r_' + g.certNo, date: g._date, label: g.certNo, accepted: g.accepted, rejected: g.rejected, dateStr: g.dateStr })),
    ...FI_HISTORICAL_TALLY_LISTS.map(h => ({ type: 'historical', id: 'h_' + h.week, date: new Date(h.date), label: 'TL#' + h.tlNo + ' · ' + h.week, ref: h.ref, total: h.total, week: h.week })),
  ];
  items.sort((a, b) => (a.date ? a.date.getTime() : 0) - (b.date ? b.date.getTime() : 0));

  const monthMap = new Map();
  items.forEach(it => {
    const key = it.date ? (it.date.getFullYear() + '-' + it.date.getMonth()) : 'unknown';
    const label = it.date ? it.date.toLocaleDateString(t('locale'), { month: 'short', year: 'numeric' }) : '-';
    if (!monthMap.has(key)) monthMap.set(key, { label, items: [] });
    monthMap.get(key).items.push(it);
  });

  const heatmap = el('fi-tally-heatmap');
  el('fi-tally-heatmap-detail').classList.add('hidden');
  heatmap.innerHTML = Array.from(monthMap.values()).map(m => `
    <div class="fi-heat-month-row">
      <span class="fi-heat-month-label">${escapeHtml(m.label)}</span>
      <div class="fi-heat-cells">
        ${m.items.map(it => {
          if (it.type === 'historical') {
            return `<button type="button" class="fi-heat-cell historical" style="background:var(--fi-heat-historical)" data-id="${escapeHtml(it.id)}" aria-label="${escapeHtml(it.label)}">${it.total || ''}</button>`;
          }
          const total = it.accepted + it.rejected;
          const c = fiHeatColor(total ? it.accepted / total : 0, total);
          return `<button type="button" class="fi-heat-cell" style="background:${c.background};color:${c.color}" data-id="${escapeHtml(it.id)}" aria-label="${escapeHtml(it.label)}">${total}</button>`;
        }).join('')}
      </div>
    </div>`).join('');

  heatmap.querySelectorAll('.fi-heat-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      heatmap.querySelectorAll('.fi-heat-cell.selected').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      const it = items.find(x => x.id === cell.dataset.id);
      if (!it) return;
      const detail = el('fi-tally-heatmap-detail');
      detail.classList.remove('hidden');
      if (it.type === 'historical') {
        detail.innerHTML = `
          <div class="fi-heat-detail-title">${escapeHtml(it.label)}</div>
          <div class="fi-heat-detail-row"><span>${escapeHtml(t('fi_tally_heat_date'))}</span><b>${escapeHtml(it.date.toLocaleDateString(t('locale')))}</b></div>
          <div class="fi-heat-detail-row"><span>${escapeHtml(t('fi_tally_chart_total_pipes'))}</span><b>${it.total}</b></div>
          <div class="fi-heat-detail-ref">${escapeHtml(it.ref)}</div>
        `;
      } else {
        const total = it.accepted + it.rejected;
        const rate = total ? ((it.rejected / total) * 100).toFixed(1) : '0.0';
        // Metri totali (07.08.2026, stessa richiesta gia' applicata al riepilogo Tally
        // List FI): qui serve rileggere le voci vere di questo Cert-No, "it" ha solo i
        // conteggi aggregati, non l'elenco tubi necessario per sumTallyMeters().
        const listEntries = state.fiTallyEntries.filter(e => e.certNo === it.label);
        const m = sumTallyMeters(listEntries);
        const metersRow = m.found
          ? `<div class="fi-heat-detail-row"><span>${escapeHtml(t('fi_tally_heat_meters'))}</span><b>${fmtMeters(m.sumM)} m${m.found < m.total ? ' (' + m.found + '/' + m.total + ')' : ''}</b></div>`
          : '';
        detail.innerHTML = `
          <div class="fi-heat-detail-title">${escapeHtml(it.label)}</div>
          <div class="fi-heat-detail-row"><span>${escapeHtml(t('fi_tally_heat_date'))}</span><b>${escapeHtml(it.dateStr || '-')}</b></div>
          <div class="fi-heat-detail-row"><span>${escapeHtml(t('fi_tally_heat_result'))}</span><b>✓ ${it.accepted} · ✗ ${it.rejected}</b></div>
          ${metersRow}
          <div class="fi-heat-detail-row"><span>${escapeHtml(t('fi_tally_chart_rejection_rate'))}</span><b>${rate}%</b></div>
        `;
      }
    });
  });

  const totalPipes = groups.reduce((s, g) => s + g.accepted + g.rejected, 0);
  const totalRejected = groups.reduce((s, g) => s + g.rejected, 0);
  const rejectionRate = totalPipes ? ((totalRejected / totalPipes) * 100).toFixed(1) : '0.0';
  const bestWeek = bestAcceptanceRateWeek(state.fiTallyEntries);
  el('fi-tally-chart-notes').innerHTML = `
    <div class="fi-tally-note-row"><span>${escapeHtml(t('fi_tally_chart_lists'))}</span><span>${groups.length}</span></div>
    <div class="fi-tally-note-row"><span>${escapeHtml(t('fi_tally_chart_total_pipes'))}</span><span>${totalPipes}</span></div>
    <div class="fi-tally-note-row highlight"><span>${escapeHtml(t('fi_tally_chart_best_week'))}</span><span>${bestWeek ? t('fi_tally_chart_best_week_detail').replace('{week}', t('fi_tally_week_label').replace('{week}', bestWeek.week).replace('{year}', bestWeek.year)).replace('{rate}', bestWeek.rate).replace('{n}', bestWeek.total) : '-'}</span></div>
    <div class="fi-tally-note-row"><span>${escapeHtml(t('fi_tally_chart_rejection_rate'))}</span><span>${rejectionRate}%</span></div>
    <div class="fi-tally-historical-note">${escapeHtml(fiHistoricalNote())}</div>
  `;
}

// Settimana ISO con la migliore percentuale di accettati (non semplicemente quella con piu'
// tubi) - raggruppa per settimana come il riepilogo settimanale, poi confronta i tassi.
// A parita' di tasso vince chi ha valutato piu' tubi (un 100% su 2 tubi non e' significativo
// quanto un 100% su 50).
function bestAcceptanceRateWeek(entries) {
  const weekMap = new Map();
  (entries || []).forEach(e => {
    if (!e.esito) return;
    const d = parseDdMmYyyy(e.dateStr);
    if (!d) return;
    const { week, year } = isoWeekNumber(d);
    const key = year + '-' + week;
    if (!weekMap.has(key)) weekMap.set(key, { week, year, accepted: 0, rejected: 0 });
    const w = weekMap.get(key);
    if (e.esito === 'accepted') w.accepted++;
    else if (e.esito === 'rejected') w.rejected++;
  });
  let best = null;
  weekMap.forEach(w => {
    const total = w.accepted + w.rejected;
    if (!total) return;
    const rate = w.accepted / total;
    if (!best || rate > best.rate || (rate === best.rate && total > best.total)) {
      best = { week: w.week, year: w.year, rate: Math.round(rate * 1000) / 10, total };
    }
  });
  return best;
}

// Cert-No con la data piu' recente tra tutte le voci - stessa logica usata sia per decidere
// quale lista mostrare come "attiva" (loadFiTally) sia per il controllo di avviso novita'
// (checkToolsUpdates), tenuta in un solo posto per non farle divergere.
function latestTallyCertNo(entries) {
  return entries.reduce((acc, e) => {
    if (!acc) return e.certNo;
    const a = entries.find(x => x.certNo === acc);
    return (e.dateStr || '') > (a.dateStr || '') ? e.certNo : acc;
  }, null);
}

async function loadFiTally() {
  const empty = el('fi-tally-empty');
  const banner = el('fi-tally-banner');
  const list = el('fi-tally-list');
  try {
    const data = await api('/api/fi-tally');
    state.fiTallyEntries = data.entries || [];
  } catch (err) {
    list.innerHTML = '';
    empty.textContent = t('err_generic') + err.message;
    empty.classList.remove('hidden');
    banner.classList.add('hidden');
    return;
  }
  renderFiTallyWeeklySummary();
  renderFiTallyTotalSummary();
  renderFiTallyChart();
  if (!state.fiTallyEntries.length) {
    el('fi-tally-sub').textContent = '';
    empty.classList.remove('hidden');
    banner.classList.add('hidden');
    list.innerHTML = '';
    return;
  }
  // mostra solo l'ultima Tally List caricata (certNo con la data piu' recente), non tutto
  // lo storico - le liste precedenti restano comunque nell'archivio del tool desktop.
  const latestCertNo = latestTallyCertNo(state.fiTallyEntries);
  const entries = state.fiTallyEntries.filter(e => e.certNo === latestCertNo);
  empty.classList.add('hidden');
  el('fi-tally-sub').textContent = `${latestCertNo} — Item ${entries[0].itemNo} — ${entries[0].dateStr}`
    + (entries[0].inspectionTime ? ` — ${t('fi_tally_inspection_time_lbl')} ${entries[0].inspectionTime}` : '');

  // Ogni apertura della schermata riparte "chiusa" se la lista e' completa - solo il
  // tocco su "Mostra elenco dettagliato" la riapre per quella visita.
  state.fiTallyExpanded = false;
  renderFiTallyList(entries);
}

el('fi-tally-show-detail-btn').addEventListener('click', () => {
  state.fiTallyExpanded = true;
  // Bug 06.08.2026: filtrava per state.fiTallyEntries[0].certNo (il primo elemento
  // dell'array, ordine arbitrario da KV.list) invece che per l'ultima Tally List
  // davvero in corso - stessa funzione gia' usata in loadFiTally per l'intestazione,
  // qui non veniva riusata e mostrava un'altra lista (tutti i suoi accettati/scartati).
  const latestCertNo = latestTallyCertNo(state.fiTallyEntries);
  renderFiTallyList(state.fiTallyEntries.filter(e => e.certNo === latestCertNo));
});

// Metri totali di una Tally List (07.08.2026, richiesta di Rino): la Tally List FI di
// per se' non porta la lunghezza dei tubi (solo Pipe N./Grade/OD/WT, vedi parse_tally_list
// nel tool desktop) - si recupera dai dati di produzione gia' caricati in app (stesso
// incrocio Item+Pipe N. gia' usato per l'auto-compilazione di CS/CRA Heat in Nuovo asset).
// Se manca il dato di produzione per qualche tubo il totale resta comunque calcolato sui
// tubi trovati, ma lo dice chiaramente (mai un totale silenziosamente incompleto spacciato
// per completo - stesso principio del registro Lessons Learned "il totale che torna non e'
// una prova di correttezza").
function sumTallyMeters(entries) {
  let sumM = 0, found = 0;
  entries.forEach(e => {
    let match = e.itemNo ? state.productionMap.get(prodKey(e.itemNo, e.pipeNo)) : null;
    if (!match) match = state.productionByPipe.get(normProdNum(e.pipeNo));
    const len = match && match.length ? parseFloat(match.length) : NaN;
    if (!isNaN(len)) { sumM += len; found++; }
  });
  return { sumM, found, total: entries.length };
}

// Controllo automatico Tally List (07.08.2026, idea "WOW" #1): confronta la lista coi dati
// di produzione al caricamento (stesso incrocio Item+Pipe N. di sumTallyMeters sopra) invece
// di scoprire le anomalie a mano dopo, come successo piu' volte in questa stessa giornata
// (Cert-No sbagliato, PDF illeggibile, lista mostrata sbagliata). Due controlli reali con
// i dati che l'app ha davvero a disposizione - niente "lunghezza diversa" (la Tally List non
// porta una sua lunghezza da confrontare, solo OD/WT): tubo non trovato in produzione, e
// tubo duplicato piu' volte nella stessa lista (stesso errore gia' visto nello strumento
// Evidenzia IRN sul PC, colore rosa - vedi Lessons Learned LL-021).
function crossCheckTally(entries) {
  const countByPipe = new Map();
  entries.forEach(e => {
    const key = normProdNum(e.pipeNo);
    countByPipe.set(key, (countByPipe.get(key) || 0) + 1);
  });
  const issues = [];
  const flagged = new Set(); // una sola segnalazione per tubo, anche se compare su piu' righe
  entries.forEach(e => {
    const key = normProdNum(e.pipeNo);
    if (countByPipe.get(key) > 1 && !flagged.has(key)) {
      flagged.add(key);
      issues.push({ pipeNo: e.pipeNo, type: 'duplicate' });
    }
  });
  entries.forEach(e => {
    const key = normProdNum(e.pipeNo);
    if (flagged.has(key)) return; // gia' segnalato come duplicato, non serve ripeterlo
    let match = e.itemNo ? state.productionMap.get(prodKey(e.itemNo, e.pipeNo)) : null;
    if (!match) match = state.productionByPipe.get(normProdNum(e.pipeNo));
    if (!match) { flagged.add(key); issues.push({ pipeNo: e.pipeNo, type: 'not_found' }); }
  });
  return issues;
}

function fmtMeters(n) {
  return (n / 1000).toLocaleString(t('locale'), { minimumFractionDigits: 1, maximumFractionDigits: 3 });
}

function renderFiTallyList(entries) {
  const list = el('fi-tally-list');
  const banner = el('fi-tally-banner');
  const summary = el('fi-tally-summary');
  const bulkHeader = el('fi-tally-bulk-header');
  const pending = entries.filter(e => !e.esito).length;

  // Controllo automatico (07.08.2026): sempre visibile, sia a lista aperta sia sul
  // riepilogo compatto - un tubo non trovato/duplicato resta un problema anche dopo
  // che tutti sono stati valutati, non solo mentre si sta ancora decidendo.
  const xcheckCard = el('fi-xcheck-card');
  const issues = crossCheckTally(entries);
  if (issues.length) {
    xcheckCard.classList.remove('hidden');
    el('fi-xcheck-head').textContent = t('fi_xcheck_head').replace('{n}', issues.length).replace('{total}', entries.length);
    el('fi-xcheck-list').innerHTML = issues.map(is =>
      `<div class="fi-xcheck-row"><b>Pipe ${escapeHtml(is.pipeNo)}</b><span>${escapeHtml(t(is.type === 'duplicate' ? 'fi_xcheck_duplicate' : 'fi_xcheck_not_found'))}</span></div>`
    ).join('');
  } else {
    xcheckCard.classList.add('hidden');
  }

  // Tally List completamente valutata: la schermata "si chiude" da sola su un
  // riepilogo compatto invece di lasciare 46 righe tutte verdi/rosse in vista -
  // quando arriva una Tally List nuova (con righe ancora da valutare) si riapre
  // automaticamente sulla lista interattiva, nessuna azione manuale richiesta.
  if (pending === 0 && entries.length && !state.fiTallyExpanded) {
    const accepted = entries.filter(e => e.esito === 'accepted').length;
    const rejected = entries.filter(e => e.esito === 'rejected').length;
    const m = sumTallyMeters(entries);
    const metersText = m.found === m.total
      ? t('fi_tally_summary_meters').replace('{meters}', fmtMeters(m.sumM))
      : (m.found > 0 ? t('fi_tally_summary_meters_partial').replace('{meters}', fmtMeters(m.sumM)).replace('{found}', m.found).replace('{total}', m.total) : '');
    el('fi-tally-summary-text').textContent = t('fi_tally_summary')
      .replace('{certNo}', entries[0].certNo).replace('{accepted}', accepted).replace('{rejected}', rejected)
      + metersText;
    summary.classList.remove('hidden');
    list.innerHTML = '';
    banner.classList.add('hidden');
    bulkHeader.classList.add('hidden');
    return;
  }
  summary.classList.add('hidden');
  list.innerHTML = '';
  const done = entries.length - pending;
  banner.classList.remove('hidden');
  banner.textContent = t('fi_tally_banner').replace('{pending}', pending).replace('{done}', done);
  // Casella "accetta tutti" in cima, allineata sopra la colonna dei pulsanti ✓ -
  // visibile solo se c'e' almeno un tubo in sospeso da flaggare (05.08.2026, richiesta
  // di Rino: prima anteprima con un pulsante largo separato, scartata perche' voleva
  // invece una casella nella stessa posizione/colonna dei ✓ di ogni riga).
  bulkHeader.classList.toggle('hidden', isViewer() || pending === 0);
  el('fi-tally-bulk-accept-btn').dataset.certNo = entries[0] ? entries[0].certNo : '';

  entries.forEach(e => {
    const warn = fiDefectWarning(e.pipeNo);
    const row = document.createElement('div');
    row.className = 'fi-tally-row' + (e.esito === 'accepted' ? ' accepted' : e.esito === 'rejected' ? ' rejected' : '') + (warn ? ' haswarn' : '');
    const whoLine = e.esito
      ? `<div class="who">${escapeHtml(t('fi_tally_who')
          .replace('{esito}', t('fi_tally_esito_' + e.esito))
          .replace('{by}', e.flaggedBy || '-')
          .replace('{when}', e.flaggedAt ? new Date(e.flaggedAt).toLocaleString(t('locale')) : '-'))
          + (e.esito === 'rejected' && e.reason ? ' — ' + escapeHtml(e.reason) : '')}</div>`
      : '';
    row.innerHTML = `
      <div>
        <div class="pn">${escapeHtml(e.pipeNo)}</div>
        <div class="sub">${escapeHtml(e.grade || '')} ${e.od ? '· OD ' + escapeHtml(e.od) : ''}</div>
        ${warn ? `<button type="button" class="warn" data-open-record="${escapeHtml(warn.id)}">${escapeHtml(t('fi_tally_warn').replace('{label}', warn.label))} <span class="chev">›</span></button>` : ''}
        ${whoLine}
      </div>
      ${isViewer()
        ? `<span class="tag tag-neutral">${escapeHtml(t('viewer_readonly_tag'))}</span>`
        : `<div class="fi-flag-btns">
        <button type="button" class="fi-flag-btn accept${e.esito === 'accepted' ? ' on' : ''}" data-id="${escapeHtml(e.id)}" data-esito="accepted">✓</button>
        <button type="button" class="fi-flag-btn reject${e.esito === 'rejected' ? ' on' : ''}" data-id="${escapeHtml(e.id)}" data-esito="rejected">✗</button>
      </div>`}`;
    list.appendChild(row);

    // Pannello motivo scarto, nascosto finche' non si tocca ✗ - stesso stile della
    // nota di chiusura obbligatoria gia' usata per i difetti (textarea + Annulla/Conferma).
    const rejectPrompt = document.createElement('div');
    rejectPrompt.className = 'fi-reject-prompt hidden';
    rejectPrompt.id = 'fi-reject-prompt-' + e.id;
    rejectPrompt.innerHTML = `
      <textarea class="field" rows="2" data-i18n-ph="fi_tally_reason_ph" placeholder="Motivo dello scarto"></textarea>
      <div class="fi-reject-actions">
        <button type="button" class="link-btn" data-cancel-id="${escapeHtml(e.id)}" data-i18n="cancel_btn">Annulla</button>
        <button type="button" class="btn-status-toggle btn-status-close" data-confirm-id="${escapeHtml(e.id)}" data-i18n="fi_tally_confirm_reject_btn">Conferma scarto</button>
      </div>`;
    list.appendChild(rejectPrompt);
  });

  // Apri la scheda del difetto direttamente dalla Tally List FI (13.08.2026, richiesta
  // Rino da screenshot): prima bisognava tornare al Dataset e cercare a mano il Pipe N°.
  // openDetail() e' la stessa funzione gia' usata da Dataset e da Cerca tubo - "Indietro"
  // sul Dettaglio torna sempre al Dataset per convenzione gia' esistente nell'app, non a
  // Tally List FI, coerente con quello che gia' fa "Cerca tubo".
  list.querySelectorAll('[data-open-record]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openDetail(btn.dataset.openRecord);
    });
  });

  list.querySelectorAll('.fi-flag-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const esito = btn.dataset.esito;
      const current = state.fiTallyEntries.find(x => x.id === id);
      // Ritoccare il pulsante gia' attivo (spunta verde o rossa) e' l'unico modo per
      // correggere un errore di flag: chiede conferma e riporta il tubo in sospeso,
      // invece di limitarsi a re-inviare lo stesso esito (05.08.2026, richiesto da Rino).
      if (current && current.esito === esito) {
        if (!confirm(t('fi_tally_undo_confirm'))) return;
        btn.disabled = true;
        try {
          const { entry } = await api('/api/fi-tally/' + encodeURIComponent(id) + '/flag', {
            method: 'POST', body: JSON.stringify({ esito: null })
          });
          const idx = state.fiTallyEntries.findIndex(x => x.id === id);
          if (idx >= 0) state.fiTallyEntries[idx] = entry;
          renderFiTallyWeeklySummary();
          renderFiTallyTotalSummary();
          renderFiTallyChart();
          renderFiTallyList(state.fiTallyEntries.filter(e => e.certNo === entry.certNo));
        } catch (err) {
          alert(t('err_generic') + err.message);
        }
        btn.disabled = false;
        return;
      }
      // "Scarta" ha conseguenze piu' serie di "Accetta" (esclude il tubo dalla Final
      // Inspection): richiede di scrivere il motivo prima di procedere, stessa logica
      // gia' usata per la nota di chiusura obbligatoria di un difetto - "Accetta" resta
      // invece un tocco solo, e' la scelta piu' comune.
      if (esito === 'rejected') {
        list.querySelectorAll('.fi-reject-prompt').forEach(p => { if (p.id !== 'fi-reject-prompt-' + id) p.classList.add('hidden'); });
        const prompt = el('fi-reject-prompt-' + id);
        prompt.classList.remove('hidden');
        prompt.querySelector('textarea').focus();
        return;
      }
      btn.disabled = true;
      try {
        const { entry } = await api('/api/fi-tally/' + encodeURIComponent(id) + '/flag', {
          method: 'POST', body: JSON.stringify({ esito })
        });
        const idx = state.fiTallyEntries.findIndex(x => x.id === id);
        if (idx >= 0) state.fiTallyEntries[idx] = entry;
        renderFiTallyWeeklySummary();
  renderFiTallyTotalSummary();
  renderFiTallyChart();
        renderFiTallyList(state.fiTallyEntries.filter(e => e.certNo === entry.certNo));
      } catch (err) {
        alert(t('err_generic') + err.message);
      }
      btn.disabled = false;
    });
  });

  list.querySelectorAll('[data-cancel-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      el('fi-reject-prompt-' + btn.dataset.cancelId).classList.add('hidden');
    });
  });
  list.querySelectorAll('[data-confirm-id]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.confirmId;
      const prompt = el('fi-reject-prompt-' + id);
      const reason = prompt.querySelector('textarea').value.trim();
      if (!reason) { alert(t('fi_tally_reason_required')); return; }
      btn.disabled = true;
      try {
        const { entry } = await api('/api/fi-tally/' + encodeURIComponent(id) + '/flag', {
          method: 'POST', body: JSON.stringify({ esito: 'rejected', reason })
        });
        const idx = state.fiTallyEntries.findIndex(x => x.id === id);
        if (idx >= 0) state.fiTallyEntries[idx] = entry;
        renderFiTallyWeeklySummary();
  renderFiTallyTotalSummary();
  renderFiTallyChart();
        renderFiTallyList(state.fiTallyEntries.filter(e => e.certNo === entry.certNo));
      } catch (err) {
        alert(t('err_generic') + err.message);
      }
      btn.disabled = false;
    });
  });
}

// Casella "accetta tutti" (05.08.2026): ascoltatore unico attaccato una sola volta (il
// pulsante e' HTML statico in index.html, non ricreato ad ogni renderFiTallyList come le
// righe) - tocca solo i tubi ancora in sospeso della lista attiva, mai quelli gia' decisi.
el('fi-tally-bulk-accept-btn').addEventListener('click', async () => {
  const btn = el('fi-tally-bulk-accept-btn');
  const certNo = btn.dataset.certNo;
  const pendingIds = state.fiTallyEntries.filter(e => e.certNo === certNo && !e.esito).map(e => e.id);
  if (!pendingIds.length) return;
  if (!confirm(t('fi_tally_bulk_confirm').replace('{n}', pendingIds.length))) return;
  btn.disabled = true;
  try {
    // Sequenziale, non in parallelo: il Worker legge-modifica-riscrive l'intero elenco
    // Tally List come un solo blob KV - chiamate concorrenti si sovrascriverebbero a
    // vicenda (vince l'ultima, le altre modifiche andrebbero perse in silenzio).
    for (const id of pendingIds) {
      const { entry } = await api('/api/fi-tally/' + encodeURIComponent(id) + '/flag', {
        method: 'POST', body: JSON.stringify({ esito: 'accepted' })
      });
      const idx = state.fiTallyEntries.findIndex(x => x.id === id);
      if (idx >= 0) state.fiTallyEntries[idx] = entry;
    }
  } catch (err) {
    alert(t('err_generic') + err.message);
  }
  renderFiTallyWeeklySummary();
  renderFiTallyTotalSummary();
  renderFiTallyChart();
  renderFiTallyList(state.fiTallyEntries.filter(e => e.certNo === certNo));
  btn.disabled = false;
});

el('fi-tally-btn').addEventListener('click', async () => {
  showScreen('fi-tally');
  await loadFiTally();
  // L'etichetta "Nuova" sparisce solo aprendo davvero questa schermata, non solo il menu -
  // registra come "vista" la lista che e' ora effettivamente mostrata.
  if (state.fiTallyEntries.length) {
    localStorage.setItem('qr_seen_tally_' + state.currentOrderId, latestTallyCertNo(state.fiTallyEntries));
  }
  state.tallyHasUpdate = false;
  renderToolsBadges();
});
el('fi-tally-back').addEventListener('click', () => showScreen('dataset'));

async function loadUsers() {
  try {
    const data = await api('/api/admin/users');
    renderUsers(data.users || []);
  } catch (err) {
    el('a-user-list').innerHTML = `<div class="row">${escapeHtml(err.message)}</div>`;
  }
}

// Storico accessi (13.08.2026, richiesta Rino - "quando" un ispettore usa l'app, non solo
// online/ultimo accesso). Raggruppato per giorno+persona (feedback Rino stesso giorno: una
// riga per ogni singolo accesso rischiava di allungare troppo la lista con piu' rientri
// ravvicinati) - "3 accessi tra le 07:15 e le 18:22" invece di 3 righe separate. Mostra solo
// gli ultimi 7 giorni di default, un link espande il resto (gia' scaricato, nessuna nuova
// chiamata) - i dati del Worker restano comunque quelli veri, qui e' solo la vista.
async function loadAccessLog() {
  try {
    const data = await api('/api/admin/access-log');
    state.accessLogEntries = data.entries || [];
    state.accessLogExpanded = false;
    renderAccessLog();
  } catch (err) {
    el('a-access-log').innerHTML = `<div class="row">${escapeHtml(err.message)}</div>`;
  }
}
function accessLogDayKey(d) {
  const day = new Date(d); day.setHours(0, 0, 0, 0);
  return day.getTime();
}
function accessLogDayLabel(dayKey) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today); yesterday.setDate(yesterday.getDate() - 1);
  if (dayKey === today.getTime()) return t('access_log_today');
  if (dayKey === yesterday.getTime()) return t('access_log_yesterday');
  return new Date(dayKey).toLocaleDateString(t('locale'), { day: '2-digit', month: '2-digit' });
}
function renderAccessLog() {
  const wrap = el('a-access-log');
  const entries = state.accessLogEntries || [];
  if (!entries.length) { wrap.innerHTML = `<div class="row">${escapeHtml(t('access_log_empty'))}</div>`; return; }
  const groups = new Map(); // dayKey -> Map(username -> {name, role, times[]})
  entries.forEach(e => {
    const dayKey = accessLogDayKey(e.at);
    if (!groups.has(dayKey)) groups.set(dayKey, new Map());
    const dayGroups = groups.get(dayKey);
    if (!dayGroups.has(e.username)) dayGroups.set(e.username, { name: e.name, role: e.role, times: [] });
    dayGroups.get(e.username).times.push(new Date(e.at));
  });
  const dayKeys = [...groups.keys()].sort((a, b) => b - a);
  const sevenDaysAgo = accessLogDayKey(Date.now() - 6 * 24 * 3600000);
  const visibleDayKeys = state.accessLogExpanded ? dayKeys : dayKeys.filter(k => k >= sevenDaysAgo);
  const roleClass = { admin: 'adm', inspector: 'insp', viewer: 'view' };
  const roleLabel = { admin: t('admin_role_admin'), inspector: t('admin_role_inspector'), viewer: t('admin_role_viewer') };
  const fmtTime = d => d.toLocaleTimeString(t('locale'), { hour: '2-digit', minute: '2-digit' });
  let html = '';
  visibleDayKeys.forEach(dayKey => {
    html += `<div class="day-sep">${escapeHtml(accessLogDayLabel(dayKey))}</div>`;
    const people = [...groups.get(dayKey).entries()].sort((a, b) => Math.max(...b[1].times) - Math.max(...a[1].times));
    people.forEach(([, g]) => {
      const times = g.times.slice().sort((a, b) => a - b);
      const initial = (g.name || '?').trim().charAt(0).toUpperCase();
      const sub = times.length > 1
        ? t('access_log_multi').replace('{n}', times.length).replace('{from}', fmtTime(times[0])).replace('{to}', fmtTime(times[times.length - 1]))
        : t('access_log_single').replace('{when}', fmtTime(times[0]));
      html += `<div class="log-row">
        <div class="log-avatar">${escapeHtml(initial)}</div>
        <div class="log-body">
          <div class="log-name">${escapeHtml(g.name)}<span class="role-tag ${roleClass[g.role] || 'view'}">${escapeHtml(roleLabel[g.role] || g.role)}</span></div>
          <div class="log-sub">${escapeHtml(sub)}</div>
        </div>
      </div>`;
    });
  });
  if (visibleDayKeys.length < dayKeys.length) {
    html += `<a href="#" class="more-link" id="access-log-more">${escapeHtml(t('access_log_show_more'))}</a>`;
  }
  wrap.innerHTML = html;
  const moreLink = el('access-log-more');
  if (moreLink) moreLink.addEventListener('click', (e) => { e.preventDefault(); state.accessLogExpanded = true; renderAccessLog(); });
}

// Tracciamento accessi (13.08.2026, richiesta Rino da admin - "chi sta usando l'app",
// sia ispettori che visitatori): worker.js aggiorna lastActiveAt su login e (throttled)
// su ogni richiesta autenticata - qui solo la resa visiva, "online" = attivo negli
// ultimi 5 minuti, stessa soglia che il Worker usa per il throttle di scrittura x 2,5.
function renderLastActive(iso) {
  if (!iso) return `<span class="live-dot off"></span>${escapeHtml(t('admin_never_logged_in'))}`;
  const ms = Date.now() - new Date(iso).getTime();
  if (ms < 5 * 60 * 1000) return `<span class="live-dot"></span>${escapeHtml(t('admin_online_now'))}`;
  const when = new Date(iso).toLocaleString(t('locale'), { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  return `<span class="live-dot off"></span>${escapeHtml(t('admin_last_active').replace('{when}', when))}`;
}

// Disattivare (non cancellare) lascia una traccia di chi ha lavorato su un ordine chiuso -
// vedi worker.js getSession() per la revoca immediata dell'accesso lato server.
function renderUsers(users) {
  const active = users.filter(u => !u.disabled);
  const history = users.filter(u => u.disabled);

  const activeWrap = el('a-user-list');
  activeWrap.innerHTML = '';
  if (!active.length) {
    activeWrap.innerHTML = `<div class="row">${escapeHtml(t('admin_empty'))}</div>`;
  } else {
    active.forEach(u => {
      const row = document.createElement('div');
      row.className = 'user-row';
      row.innerHTML = `
        <div>
          <div style="font-weight:600">${escapeHtml(u.name)} <span style="color:var(--text-secondary);font-weight:400">(${escapeHtml(u.username)})</span></div>
          <div style="font-size:12px;color:var(--text-secondary)">${u.role === 'admin' ? escapeHtml(t('admin_role_admin')) : u.role === 'viewer' ? escapeHtml(t('admin_role_viewer')) : escapeHtml(t('admin_role_inspector'))}</div>
          <div class="u-last">${renderLastActive(u.lastActiveAt)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <button class="danger-link" data-username="${escapeHtml(u.username)}">${escapeHtml(t('deactivate'))}</button>
          ${u.role !== 'admin' ? `<button class="delete-row-btn" data-username="${escapeHtml(u.username)}" title="${escapeHtml(t('delete_user_permanently_title'))}">&#128465;</button>` : ''}
        </div>`;
      row.querySelector('.danger-link').addEventListener('click', async (e) => {
        const username = e.target.dataset.username;
        if (!confirm(t('confirm_deactivate_user').replace('{u}', username))) return;
        try {
          await api('/api/admin/users/' + encodeURIComponent(username), { method: 'DELETE' });
          await loadUsers();
        } catch (err) { alert(t('err_generic') + err.message); }
      });
      const delBtn = row.querySelector('.delete-row-btn');
      if (delBtn) delBtn.addEventListener('click', () => deleteUserPermanently(delBtn.dataset.username));
      activeWrap.appendChild(row);
    });
  }

  const histWrap = el('a-user-history');
  histWrap.innerHTML = '';
  if (!history.length) {
    histWrap.innerHTML = `<div class="row">${escapeHtml(t('admin_history_empty'))}</div>`;
  } else {
    history.forEach(u => {
      const row = document.createElement('div');
      row.className = 'user-row history-row';
      const when = u.disabledAt ? new Date(u.disabledAt).toLocaleDateString(t('locale')) : '-';
      row.innerHTML = `
        <div>
          <div style="font-weight:600">${escapeHtml(u.name)} <span style="color:var(--text-secondary);font-weight:400">(${escapeHtml(u.username)})</span></div>
          <div class="user-period">${escapeHtml(t('admin_disabled_on').replace('{date}', when))}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <button class="reactivate-link" data-username="${escapeHtml(u.username)}">${escapeHtml(t('reactivate'))}</button>
          ${u.role !== 'admin' ? `<button class="delete-row-btn" data-username="${escapeHtml(u.username)}" title="${escapeHtml(t('delete_user_permanently_title'))}">&#128465;</button>` : ''}
        </div>`;
      row.querySelector('.reactivate-link').addEventListener('click', async (e) => {
        const username = e.target.dataset.username;
        try {
          await api('/api/admin/users/' + encodeURIComponent(username) + '/reactivate', { method: 'POST' });
          await loadUsers();
        } catch (err) { alert(t('err_generic') + err.message); }
      });
      const delBtn = row.querySelector('.delete-row-btn');
      if (delBtn) delBtn.addEventListener('click', () => deleteUserPermanently(delBtn.dataset.username));
      histWrap.appendChild(row);
    });
  }
}

// Eliminazione definitiva (diversa da "Disattiva"): niente Storico, l'account sparisce
// per sempre - disponibile subito su ogni riga (attiva o storica), mai per un account admin.
async function deleteUserPermanently(username) {
  if (!confirm(t('confirm_delete_user_permanently').replace('{u}', username))) return;
  try {
    await api('/api/admin/users/' + encodeURIComponent(username) + '/permanent', { method: 'DELETE' });
    await loadUsers();
  } catch (err) { alert(t('err_generic') + err.message); }
}

// Ruolo scelto alla creazione (chip Ispettore/Visitatore) - la creazione di un admin
// resta fuori da questa UI, come gia' era prima di introdurre il Visitatore.
let newUserRole = 'inspector';
el('a-role-inspector').addEventListener('click', () => {
  newUserRole = 'inspector';
  el('a-role-inspector').classList.add('active');
  el('a-role-viewer').classList.remove('active');
});
el('a-role-viewer').addEventListener('click', () => {
  newUserRole = 'viewer';
  el('a-role-viewer').classList.add('active');
  el('a-role-inspector').classList.remove('active');
});
el('a-add-btn').addEventListener('click', async () => {
  const username = el('a-username').value.trim();
  const name = el('a-name').value.trim();
  const password = el('a-password').value;
  if (!username || !name || !password) { alert(t('err_fill_all')); return; }
  try {
    await api('/api/admin/users', { method: 'POST', body: JSON.stringify({ username, name, password, role: newUserRole }) });
    el('a-username').value = ''; el('a-name').value = ''; el('a-password').value = '';
    newUserRole = 'inspector';
    el('a-role-inspector').classList.add('active');
    el('a-role-viewer').classList.remove('active');
    await loadUsers();
  } catch (err) { alert(t('err_generic') + err.message); }
});

// Fine ordine: disattiva in un colpo solo tutti gli ispettori attivi (mai gli admin, mai
// se lo stesso account e' quello loggato) - evita di ripetere "Disattiva" riga per riga
// quando l'intera squadra cambia da un ordine all'altro.
el('a-bulk-deactivate-btn').addEventListener('click', async () => {
  if (!confirm(t('confirm_bulk_deactivate'))) return;
  el('a-bulk-deactivate-btn').disabled = true;
  try {
    const data = await api('/api/admin/users');
    const toDeactivate = (data.users || []).filter(u => !u.disabled && u.role !== 'admin');
    for (const u of toDeactivate) {
      await api('/api/admin/users/' + encodeURIComponent(u.username), { method: 'DELETE' });
    }
    await loadUsers();
  } catch (err) { alert(t('err_generic') + err.message); }
  el('a-bulk-deactivate-btn').disabled = false;
});

// ---------------- Boot ----------------
(async function boot() {
  applyTranslations();
  loadSession();
  if (state.session && state.session.token) {
    el('admin-gear').classList.toggle('hidden', state.session.role !== 'admin');
    el('export-excel-btn').classList.toggle('hidden', state.session.role !== 'admin');
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

// ---------------- Esporta PDF (stile documenti IQS) ----------------
// Libreria vendorizzata in locale (vendor/jspdf.umd.min.js), non da CDN: la PWA deve
// restare offline-capable, un export PDF fatto in cantiere senza rete non puo' dipendere
// da un CDN esterno. Layout costruito a mano con le API base di jsPDF (rect/text/line),
// niente plugin tabelle: i report sono pochi KPI + tabelle semplici, non serve altro.
const IQS_LOGO_DATAURL = 'data:image/jpeg;base64,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';

// Marchio Field Inspector (identita' propria dell'app, non del logo aziendale IQS sopra) -
// usato solo come firma discreta nel piede pagina PDF, cfr. help-footer in index.html.
const FIELD_INSPECTOR_MARK_DATAURL = 'data:image/png;base64,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';

const PDF_NAVY = [0, 16, 50];       // #001032
const PDF_ACCENT = [63, 130, 102];  // #3f8266
const PDF_INK = [28, 31, 33];
const PDF_INK_SOFT = [90, 97, 108];
const PDF_LINE = [223, 225, 230];
const PDF_GREEN = [22, 163, 74];
const PDF_AMBER = [163, 114, 11];
const PDF_RED = [193, 39, 45];
const PDF_GREEN_BG = [231, 243, 232];
const PDF_AMBER_BG = [250, 241, 222];
const PDF_RED_BG = [251, 233, 233];

const PDF_MARGIN = 16;
const PDF_PAGE_W = 210;
const PDF_PAGE_H = 297;
const PDF_CONTENT_W = PDF_PAGE_W - PDF_MARGIN * 2;

function pdfNewDoc() {
  const doc = new jspdf.jsPDF({ unit: 'mm', format: 'a4' });
  doc.setFont('helvetica', 'normal');
  return doc;
}

// Intestazione: logo a sinistra, blocco titolo a destra, riga navy sotto - stessa
// impronta dei documenti IQS esistenti (Briefing Esecutivo, Rapporto Stato Avanzamento).
function pdfHeader(doc, doctype, title, meta) {
  const y = PDF_MARGIN;
  try { doc.addImage(IQS_LOGO_DATAURL, 'JPEG', PDF_MARGIN, y, 22, 9.5); } catch (e) { /* logo non bloccante */ }

  doc.setTextColor(...PDF_ACCENT);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text(doctype.toUpperCase(), PDF_PAGE_W - PDF_MARGIN, y + 3, { align: 'right' });

  doc.setTextColor(...PDF_NAVY);
  doc.setFontSize(14);
  doc.text(title, PDF_PAGE_W - PDF_MARGIN, y + 9, { align: 'right' });

  doc.setTextColor(...PDF_INK_SOFT);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(meta, PDF_PAGE_W - PDF_MARGIN, y + 14.5, { align: 'right' });

  doc.setDrawColor(...PDF_NAVY);
  doc.setLineWidth(0.6);
  doc.line(PDF_MARGIN, y + 18, PDF_PAGE_W - PDF_MARGIN, y + 18);
  return y + 24;
}

// Banda blu navy per i titoli sezione, come nei documenti IQS esistenti.
function pdfBand(doc, y, text) {
  doc.setFillColor(...PDF_NAVY);
  doc.rect(PDF_MARGIN, y, PDF_CONTENT_W, 6.5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'bold');
  doc.text(text.toUpperCase(), PDF_MARGIN + 2.5, y + 4.5);
  doc.setFont('helvetica', 'normal');
  return y + 10;
}

// Riga di caselle KPI (2-4 per riga). items: [{n, l, accent}]
function pdfKpiRow(doc, y, items) {
  const gap = 3;
  const w = (PDF_CONTENT_W - gap * (items.length - 1)) / items.length;
  const h = 15;
  items.forEach((it, i) => {
    const x = PDF_MARGIN + i * (w + gap);
    doc.setDrawColor(...PDF_LINE);
    doc.setLineWidth(0.3);
    doc.rect(x, y, w, h);
    doc.setTextColor(...(it.accent ? PDF_ACCENT : PDF_NAVY));
    doc.setFontSize(15);
    doc.setFont('helvetica', 'bold');
    doc.text(String(it.n), x + 3, y + 8);
    doc.setTextColor(...PDF_INK_SOFT);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text(it.l.toUpperCase(), x + 3, y + 12.5);
  });
  return y + h + 6;
}

// Tabella semplice con intestazione + righe, va a pagina nuova da sola se non c'e' piu'
// spazio (ridisegna l'intestazione tabella in cima alla pagina nuova) - necessario solo
// per il Dataset Scansioni, che puo' avere molte righe; per gli altri report e' comunque
// innocuo tenerla generica invece di scriverne due versioni.
function pdfTable(doc, y, headers, colWidths, rows, opts) {
  opts = opts || {};
  const rowH = 6;
  const bottomLimit = PDF_PAGE_H - PDF_MARGIN - 12;

  function drawHeaderRow(yy) {
    doc.setDrawColor(...PDF_INK);
    doc.setLineWidth(0.25);
    doc.line(PDF_MARGIN, yy + rowH - 1.5, PDF_MARGIN + PDF_CONTENT_W, yy + rowH - 1.5);
    doc.setTextColor(...PDF_INK_SOFT);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    let x = PDF_MARGIN;
    headers.forEach((h, i) => { doc.text(h.toUpperCase(), x + 1.5, yy + 3.5); x += colWidths[i]; });
    return yy + rowH;
  }

  let yy = drawHeaderRow(y);
  doc.setFont('helvetica', 'normal');
  rows.forEach(row => {
    if (yy + rowH > bottomLimit) {
      doc.addPage();
      yy = PDF_MARGIN;
      yy = drawHeaderRow(yy);
      doc.setFont('helvetica', 'normal');
    }
    let x = PDF_MARGIN;
    doc.setFontSize(8);
    row.cells.forEach((cell, i) => {
      const color = (row.colors && row.colors[i]) || PDF_INK;
      doc.setTextColor(...color);
      doc.text(String(cell), x + 1.5, yy + 4);
      x += colWidths[i];
    });
    doc.setDrawColor(...PDF_LINE);
    doc.setLineWidth(0.15);
    doc.line(PDF_MARGIN, yy + rowH - 0.5, PDF_MARGIN + PDF_CONTENT_W, yy + rowH - 0.5);
    yy += rowH;
  });
  return yy + 4;
}

function pdfNote(doc, y, text) {
  doc.setTextColor(...PDF_INK_SOFT);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  const lines = doc.splitTextToSize(text, PDF_CONTENT_W);
  doc.text(lines, PDF_MARGIN, y);
  return y + lines.length * 3.5 + 2;
}

// Footer su tutte le pagine effettivamente generate (una tabella lunga puo' averne create
// di nuove durante il disegno) - va fatto per ultimo, quando il numero totale e' definitivo.
function pdfFinish(doc, filename) {
  const pages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setDrawColor(...PDF_LINE);
    doc.setLineWidth(0.2);
    doc.line(PDF_MARGIN, PDF_PAGE_H - PDF_MARGIN, PDF_PAGE_W - PDF_MARGIN, PDF_PAGE_H - PDF_MARGIN);
    doc.setTextColor(...PDF_INK_SOFT);
    doc.setFontSize(7);
    doc.text('IQS S.r.l. — ' + currentOrderName(), PDF_MARGIN, PDF_PAGE_H - PDF_MARGIN + 4);
    doc.text(t('pdf_generated_on').replace('{when}', new Date().toLocaleString(t('locale'))), PDF_PAGE_W - PDF_MARGIN, PDF_PAGE_H - PDF_MARGIN + 4, { align: 'right' });

    // Firma discreta dello strumento (09.08.2026): identita' propria dell'app, separata
    // dalla riga IQS sopra - il report resta un documento IQS, la firma dice solo con
    // quale strumento e' stato generato.
    try { doc.addImage(FIELD_INSPECTOR_MARK_DATAURL, 'PNG', PDF_PAGE_W / 2 - 8.3, PDF_PAGE_H - PDF_MARGIN + 6.2, 2.8, 2.8); } catch (e) { /* firma non bloccante */ }
    doc.setTextColor(...PDF_INK_SOFT);
    doc.setFontSize(6);
    doc.setFont('helvetica', 'normal');
    doc.text('Field Inspector', PDF_PAGE_W / 2 - 4.7, PDF_PAGE_H - PDF_MARGIN + 8.4);
  }
  doc.save(filename);
}

// --- 1. Stato Generale: aggregato su tutte le Tally List FI + disposizione difetti Dataset ---
function exportStatoGeneralePdf() {
  const doc = pdfNewDoc();
  const groups = groupTallyByCertNo(state.fiTallyEntries || []);
  const totBuoni = groups.reduce((s, g) => s + g.accepted, 0);
  const totScartati = groups.reduce((s, g) => s + g.rejected, 0);
  const totSospeso = (state.fiTallyEntries || []).filter(e => !e.esito).length;
  const totTubi = (state.fiTallyEntries || []).length;

  const allDefects = (state.records || []).filter(r => isDefectCondition(r.condition));
  const dispCounts = {};
  DISPOSITION_CODES.forEach(code => { dispCounts[code] = 0; });
  allDefects.forEach(r => { if (r.disposition && dispCounts[r.disposition] !== undefined) dispCounts[r.disposition]++; });

  let y = pdfHeader(doc, t('pdf_doctype_general'), currentOrderName(), new Date().toLocaleDateString(t('locale')));
  y = pdfBand(doc, y, t('pdf_band_tally_all'));
  y = pdfKpiRow(doc, y, [
    { n: totTubi, l: t('pdf_kpi_total_pipes') },
    { n: totBuoni, l: t('pdf_kpi_good'), accent: true },
    { n: totScartati, l: t('pdf_kpi_rejected') },
    { n: totSospeso, l: t('pdf_kpi_pending') },
  ]);

  y = pdfBand(doc, y, t('pdf_band_defects_disposition'));
  y = pdfKpiRow(doc, y, DISPOSITION_CODES.map(code => ({ n: dispCounts[code], l: dispositionLabel(code) })));

  y = pdfBand(doc, y, t('pdf_band_per_list'));
  const rows = groups
    .sort((a, b) => (a.dateStr || '').localeCompare(b.dateStr || ''))
    .map(g => {
      const tot = g.accepted + g.rejected;
      const rate = tot ? Math.round((g.accepted / tot) * 100) + '%' : '-';
      return { cells: [g.certNo, g.dateStr || '-', g.accepted, g.rejected, rate] };
    });
  y = pdfTable(doc, y, [t('pdf_col_certno'), t('pdf_col_date'), t('pdf_kpi_good'), t('pdf_kpi_rejected'), t('pdf_col_rate')],
    [50, 30, 30, 30, 30], rows);

  pdfFinish(doc, t('pdf_filename_general').replace('{order}', currentOrderName()).replace('{date}', new Date().toISOString().slice(0, 10)));
}

// --- 2. Stato Ordine ---
function exportStatoOrdinePdf() {
  const doc = pdfNewDoc();
  const pf = state.phaseForecast;
  let y = pdfHeader(doc, t('pdf_doctype_order'),
    pf && pf.itemNo ? t('os_item_label').replace('{item}', pf.itemNo) : currentOrderName(),
    currentOrderName() + '  ·  ' + new Date().toLocaleDateString(t('locale')));

  if (pf && pf.phases && pf.phases.length) {
    const first = pf.phases[0];
    const last = pf.phases[pf.phases.length - 1];
    const total = first.totalPipes || 0;
    y = pdfBand(doc, y, t('pdf_band_summary'));
    y = pdfKpiRow(doc, y, [
      { n: total, l: t('pdf_kpi_total_pipes') },
      { n: total ? Math.round((last.completed / total) * 100) + '%' : '-', l: t('pdf_kpi_complete'), accent: true },
      { n: (pf.daysRemaining !== null && pf.daysRemaining !== undefined) ? pf.daysRemaining : '-', l: t('pdf_kpi_days_left') },
      { n: pf.referencePO || '-', l: t('pdf_kpi_po') },
    ]);

    let maxRemainingPhase = pf.phases[0];
    pf.phases.forEach(p => { if ((p.remaining || 0) > (maxRemainingPhase.remaining || 0)) maxRemainingPhase = p; });
    if (maxRemainingPhase && maxRemainingPhase.remaining > 0) {
      y = pdfBand(doc, y, t('pdf_band_bottleneck'));
      doc.setFillColor(...PDF_AMBER_BG);
      doc.rect(PDF_MARGIN, y, PDF_CONTENT_W, 9, 'F');
      doc.setTextColor(...PDF_AMBER);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(maxRemainingPhase.phase + ' — ' + t('os_remaining_at_phase').replace('{n}', maxRemainingPhase.remaining), PDF_MARGIN + 2.5, y + 6);
      doc.setFont('helvetica', 'normal');
      y += 13;
    }

    y = pdfBand(doc, y, t('pdf_band_phases'));
    const rows = pf.phases.map(p => {
      const statusCode = p.status === 'OK' ? 'ok' : (p.status === 'DELAY' ? 'delay' : 'na');
      const statusLabel = statusCode === 'ok' ? t('os_status_ok') : (statusCode === 'delay' ? t('os_status_delay') : t('os_status_na'));
      const statusColor = statusCode === 'ok' ? PDF_GREEN : (statusCode === 'delay' ? PDF_RED : PDF_INK_SOFT);
      const forecastStr = p.forecastDate ? parseISODate(p.forecastDate).toLocaleDateString(t('locale')) : '-';
      const devText = (typeof p.deviationDays === 'number') ? (p.deviationDays > 0 ? '+' : '') + p.deviationDays : '-';
      return {
        cells: [p.phase, p.completed + '/' + p.totalPipes, p.remaining, forecastStr, devText, statusLabel],
        colors: [PDF_INK, PDF_INK, PDF_INK, PDF_INK, PDF_INK, statusColor],
      };
    });
    y = pdfTable(doc, y, [t('pdf_col_phase'), t('pdf_col_done'), t('pdf_col_remaining'), t('pdf_col_forecast'), t('pdf_col_deviation'), t('pdf_col_status')],
      [45, 25, 22, 28, 25, 30], rows);
    if (pf.methodologyNote) y = pdfNote(doc, y, pf.methodologyNote);
  } else {
    y = pdfNote(doc, y, t('pdf_no_phase_data'));
  }

  pdfFinish(doc, t('pdf_filename_order').replace('{order}', currentOrderName()).replace('{date}', new Date().toISOString().slice(0, 10)));
}

// --- 3. Dataset Scansioni (rispetta filtro/ricerca correnti dello schermo Dataset) ---
function exportDatasetPdf() {
  const doc = pdfNewDoc();
  const q = (el('search-input').value || '').toLowerCase().trim();
  const filtered = (state.records || []).filter(r => {
    if (state.datasetFilter === 'defects' && !isDefectCondition(r.condition)) return false;
    if (!q) return true;
    return (r.pipeNo || '').toLowerCase().includes(q) || (r.itemNo || '').toLowerCase().includes(q) ||
           (r.csHeat || '').toLowerCase().includes(q) || (r.craHeat || '').toLowerCase().includes(q);
  });
  const filterLabel = state.datasetFilter === 'defects' ? t('filter_defects_only') : t('filter_all');

  let y = pdfHeader(doc, t('pdf_doctype_dataset'), currentOrderName(),
    t('pdf_filter_label').replace('{filter}', filterLabel) + (q ? '  ·  “' + q + '”' : '') + '  ·  ' + filtered.length + ' ' + t('pdf_rows_word'));

  y = pdfBand(doc, y, t('pdf_band_list'));
  const conditionColor = { excellent: PDF_GREEN, good: [37, 99, 235], 'needs-review': PDF_AMBER, damaged: PDF_RED };
  const rows = filtered.map(r => ({
    cells: [r.pipeNo || '-', r.itemNo || '-', condLabel(r.condition), r.itpStep || '-',
      r.scannedBy || '-', r.scannedAt ? new Date(r.scannedAt).toLocaleDateString(t('locale')) : '-'],
    colors: [PDF_INK, PDF_INK, conditionColor[r.condition] || PDF_INK, PDF_INK, PDF_INK, PDF_INK],
  }));
  y = pdfTable(doc, y, [t('pdf_col_pipe'), t('pdf_col_item'), t('pdf_col_condition'), t('pdf_col_itp_step'), t('pdf_col_inspector'), t('pdf_col_date')],
    [24, 20, 34, 34, 34, 30], rows);
  if (!filtered.length) y = pdfNote(doc, y, t('dataset_empty'));

  pdfFinish(doc, t('pdf_filename_dataset').replace('{order}', currentOrderName()).replace('{date}', new Date().toISOString().slice(0, 10)));
}

// Righe etichetta:valore (stile ".row" dell'app) invece della tabella con intestazione di
// pdfTable - piu' adatta a un elenco di campi di UNA scheda che a righe ripetute.
function pdfDetailRows(doc, y, pairs) {
  const rowH = 7;
  pairs.forEach(([label, value]) => {
    if (y + rowH > PDF_PAGE_H - PDF_MARGIN - 12) { doc.addPage(); y = PDF_MARGIN; }
    doc.setDrawColor(...PDF_LINE);
    doc.setLineWidth(0.15);
    doc.line(PDF_MARGIN, y + rowH - 1, PDF_MARGIN + PDF_CONTENT_W, y + rowH - 1);
    doc.setTextColor(...PDF_INK_SOFT);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text(String(label), PDF_MARGIN, y + 4.5);
    doc.setTextColor(...PDF_INK);
    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'bold');
    doc.text(String(value), PDF_MARGIN + PDF_CONTENT_W, y + 4.5, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    y += rowH;
  });
  return y + 3;
}

// Scarica ogni foto tramite la stessa proxy autenticata della Galleria Dettaglio e le
// incolla nel PDF, 2 per riga, proporzioni originali mantenute. Una foto che non si riesce
// a scaricare diventa un riquadro vuoto con una nota, invece di far fallire tutto l'export.
async function pdfAddPhotos(doc, y, recordId, count) {
  const gap = 4;
  const colW = (PDF_CONTENT_W - gap) / 2;
  const maxH = 70;
  let col = 0, rowMaxH = 0;
  for (let i = 0; i < count; i++) {
    let dataUrl = null, fmt = 'JPEG', w = colW, h = maxH * 0.55;
    try {
      const headers = {};
      if (state.session && state.session.token) headers['Authorization'] = 'Bearer ' + state.session.token;
      const resp = await fetch(API_BASE + '/api/records/' + encodeURIComponent(recordId) + '/photo/' + i, { headers });
      if (!resp.ok) throw new Error('photo fetch failed');
      const blob = await resp.blob();
      fmt = blob.type === 'image/png' ? 'PNG' : 'JPEG';
      dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      const dims = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
        img.onerror = () => resolve(null);
        img.src = dataUrl;
      });
      if (dims && dims.w && dims.h) {
        h = Math.min(maxH, colW * (dims.h / dims.w));
        w = colW;
      }
    } catch (e) { dataUrl = null; }

    if (col === 0) {
      if (y + maxH + gap > PDF_PAGE_H - PDF_MARGIN - 12) { doc.addPage(); y = PDF_MARGIN; }
      rowMaxH = 0;
    }
    const x = PDF_MARGIN + col * (colW + gap);
    if (dataUrl) {
      try { doc.addImage(dataUrl, fmt, x, y, w, h); } catch (e) { dataUrl = null; }
    }
    if (!dataUrl) {
      doc.setDrawColor(...PDF_LINE);
      doc.setLineWidth(0.3);
      doc.rect(x, y, colW, maxH * 0.55);
      doc.setTextColor(...PDF_INK_SOFT);
      doc.setFontSize(7);
      doc.text(t('err_photo_load'), x + 2, y + maxH * 0.28);
      h = maxH * 0.55;
    }
    rowMaxH = Math.max(rowMaxH, h);
    col++;
    if (col === 2) { y += rowMaxH + gap; col = 0; }
  }
  if (col === 1) y += rowMaxH + gap;
  return y + 2;
}

// --- Scheda singolo tubo (bottone "Esporta PDF" nella schermata Dettaglio) - tutti i campi
// visibili in Dettaglio, incluse le foto (scaricate al momento, vedi pdfAddPhotos). Async a
// differenza degli altri 4 export (che leggono solo dati gia' in memoria) proprio per le foto.
async function exportRecordPdf(rec) {
  const doc = pdfNewDoc();
  let y = pdfHeader(doc, t('pdf_doctype_record'), rec.pipeNo || '-',
    currentOrderName() + '  ·  ' + new Date().toLocaleDateString(t('locale')));

  y = pdfBand(doc, y, t('pdf_band_general_data'));
  y = pdfDetailRows(doc, y, [
    ['Item N°', rec.itemNo || '-'],
    ['CS Heat', rec.csHeat || '-'],
    ['CRA Heat', rec.craHeat || '-'],
    ['Length', rec.length || '-'],
    ['ITP Step', rec.itpStep || '-'],
    [t('pdf_col_condition'), condLabel(rec.condition)],
    [t('field_scannedBy'), rec.scannedBy || '-'],
    [t('field_scannedOn'), rec.scannedAt ? new Date(rec.scannedAt).toLocaleString(t('locale')) : '-'],
  ]);

  if (isDefectCondition(rec.condition)) {
    y = pdfBand(doc, y, t('pdf_band_defect'));
    const defRows = [[t('pdf_field_status'), rec.status === 'closed' ? t('status_closed') : t('status_open')]];
    if (rec.defectType) defRows.push([t('field_defect_type'), defectTypeLabel(rec.defectType)]);
    if (rec.disposition) defRows.push([t('field_disposition'), dispositionLabel(rec.disposition)]);
    if (rec.ncr || rec.cr) {
      const parts = [rec.ncr ? t('ncr_label') : null, rec.cr ? t('cr_label') : null].filter(Boolean);
      defRows.push([t('field_ncr_cr'), parts.join(' + ')]);
    }
    y = pdfDetailRows(doc, y, defRows);
    if (rec.ncrCrComment) y = pdfNote(doc, y, rec.ncrCrComment);

    if (rec.status === 'closed' || rec.closureNote) {
      y = pdfBand(doc, y, t('pdf_band_history'));
      y = pdfDetailRows(doc, y, [
        [t('field_closedBy'), rec.closedBy || '-'],
        [t('field_closedOn'), rec.closedAt ? new Date(rec.closedAt).toLocaleString(t('locale')) : '-'],
      ]);
      if (rec.closureNote) y = pdfNote(doc, y, rec.closureNote);
    }
  }

  if (rec.comment) {
    y = pdfBand(doc, y, t('field_comments'));
    y = pdfNote(doc, y, rec.comment);
  }

  const photos = recordPhotos(rec);
  if (photos.length) {
    y = pdfBand(doc, y, t('confirm_section_photo'));
    y = await pdfAddPhotos(doc, y, rec.id, photos.length);
  }

  pdfFinish(doc, t('pdf_filename_record').replace('{order}', currentOrderName()).replace('{pipe}', rec.pipeNo || rec.id).replace('{date}', new Date().toISOString().slice(0, 10)));
}

// --- Export Excel completo (solo admin, 10.08.2026; qualita' dati rivista lo stesso giorno
// dopo che Rino ha aperto il file vero e non gli e' piaciuto) ---
// Prima versione: json_to_sheet() diretto sugli oggetti grezzi - comodo da scrivere ma un
// foglio illeggibile (intestazioni "csHeat"/"itpStep" invece di "CS Heat"/"ITP Step", codici
// interni "damaged"/"weld"/"hold" invece delle etichette che si vedono nell'app, date come
// testo ISO invece di date Excel vere, colonne ridondanti come photoUrl/photoPath ora che
// c'e' "Foto"). Riscritta con una mappatura esplicita per ogni foglio - stesse etichette e
// stesse funzioni di traduzione gia' usate nell'app/nei PDF (condLabel/defectTypeLabel/
// dispositionLabel), cosi' l'Excel dice esattamente quello che dice l'app, non i nomi dei
// campi lato Worker. In cambio di scriverla a mano, un campo nuovo aggiunto in futuro ai
// record NON finisce piu' nel foglio da solo - va aggiunto qui esplicitamente.
function xlsxDate(iso) { return iso ? new Date(iso) : ''; }
function xlsxBool(v) { return v ? t('bool_yes') : t('bool_no'); }
// Larghezza colonne + autofilter (dropdown di Excel sull'intestazione) sono le uniche due
// rifiniture che la build gratuita di SheetJS scrive davvero nel file - verificato dal vivo
// (round-trip write+read): grassetto sull'intestazione e riquadro bloccato in alto non
// sopravvivono al salvataggio in questa build (funzioni della versione a pagamento).
function xlsxSheet(rows, colWidths, dateCols) {
  // cellDates:true (10.08.2026): senza, json_to_sheet trasforma gli oggetti Date in numeri
  // seriali con tipo 'n' invece di 'd' - il controllo cell.t==='d' sotto per applicare il
  // formato italiano non trovava piu' nulla da formattare (bug trovato dal vivo, la data
  // restava in formato USA "8/11/26" nonostante il resto della funzione fosse corretto).
  const ws = XLSX.utils.json_to_sheet(rows, { cellDates: true });
  ws['!cols'] = colWidths.map(w => ({ wch: w }));
  if (rows.length) {
    ws['!autofilter'] = { ref: 'A1:' + XLSX.utils.encode_col(colWidths.length - 1) + (rows.length + 1) };
    // Formato data italiano esplicito sulle colonne data (10.08.2026): senza questo, SheetJS
    // scrive le date con formato USA (m/d/yy) - "8/11/26" per l'11 agosto si legge come 8
    // novembre a un occhio italiano. Verificato dal vivo che il formato custom sopravvive
    // al salvataggio anche nella build gratuita (a differenza di grassetto/riquadro bloccato).
    (dateCols || []).forEach(h => {
      const colIdx = Object.keys(rows[0]).indexOf(h);
      if (colIdx < 0) return;
      const colLetter = XLSX.utils.encode_col(colIdx);
      for (let r = 2; r <= rows.length + 1; r++) {
        const cell = ws[colLetter + r];
        if (cell && cell.t === 'd') cell.z = 'dd/mm/yyyy hh:mm';
      }
    });
  }
  return ws;
}
async function exportAllDataExcel() {
  const wb = XLSX.utils.book_new();

  const recordsRows = (state.records || []).filter(r => !r._pending).map(r => ({
    'ID Scheda': r.id,
    'Item N°': r.itemNo || '',
    'Pipe N°': r.pipeNo || '',
    'CS Heat': r.csHeat || '',
    'CRA Heat': r.craHeat || '',
    'Lunghezza': r.length || '',
    'ITP Step': r.itpStep || '',
    'Condizione': condLabel(r.condition),
    'Stato': r.status ? (r.status === 'closed' ? t('status_closed') : t('status_open')) : '',
    'Tipo Difetto': defectTypeLabel(r.defectType),
    'Disposizione': dispositionLabel(r.disposition),
    'NCR': xlsxBool(r.ncr),
    'CR': xlsxBool(r.cr),
    'Nota NCR/CR': r.ncrCrComment || '',
    'Commenti': r.comment || '',
    'Emesso da': r.scannedBy || '',
    'Emesso il': xlsxDate(r.scannedAt),
    'Modificato da': r.editedBy || '',
    'Modificato il': xlsxDate(r.editedAt),
    'Chiuso da': r.closedBy || '',
    'Chiuso il': xlsxDate(r.closedAt),
    'Nota di Chiusura': r.closureNote || '',
    'Ri-collaudo Confermato': xlsxBool(r.retestConfirmed),
    'Foto': Array.isArray(r.photos) ? r.photos.map(p => p.url).join('; ') : ''
  }));
  XLSX.utils.book_append_sheet(wb, xlsxSheet(recordsRows,
    [22, 9, 9, 10, 10, 10, 18, 14, 10, 14, 14, 6, 6, 22, 30, 14, 16, 14, 16, 14, 16, 26, 10, 40],
    ['Emesso il', 'Modificato il', 'Chiuso il']), 'Dataset');

  if (state.fiTallyEntries && state.fiTallyEntries.length) {
    const tallyRows = state.fiTallyEntries.map(e => ({
      'Cert-No': e.certNo || '',
      'Item N°': e.itemNo || '',
      'Data': e.dateStr || '',
      'Ora Ispezione': e.inspectionTime || '',
      'Pipe N°': e.pipeNo || '',
      'Grade': e.grade || '',
      'OD': e.od || '',
      'WT': e.wt || '',
      'Esito': e.esito === 'accepted' ? t('fi_tally_esito_accepted') : e.esito === 'rejected' ? t('fi_tally_esito_rejected') : t('fi_tally_pending'),
      'Motivo Scarto': e.reason || '',
      'Valutato da': e.flaggedBy || '',
      'Valutato il': xlsxDate(e.flaggedAt)
    }));
    XLSX.utils.book_append_sheet(wb, xlsxSheet(tallyRows, [18, 9, 12, 12, 9, 14, 10, 10, 12, 26, 14, 16], ['Valutato il']), 'Tally List FI');
  }

  if (state.productionRecords && state.productionRecords.length) {
    const prodRows = state.productionRecords.map(p => ({
      'Item N°': p.itemNo || '',
      'Pipe N°': p.pipeNo || '',
      'CS Heat': p.csHeat || '',
      'CRA Heat': p.craHeat || '',
      'Lunghezza': p.length || '',
      'Fase Attuale': p.currentStep || '',
      'N° Fase': p.currentStepNum != null ? p.currentStepNum : '',
      'Avanzamento %': (typeof p.progress === 'number') ? Math.round(p.progress * 100) : ''
    }));
    XLSX.utils.book_append_sheet(wb, xlsxSheet(prodRows, [9, 9, 10, 10, 10, 18, 8, 14]), 'Dati Produzione');
  }

  try {
    const usersData = await api('/api/admin/users');
    if (usersData.users && usersData.users.length) {
      const userRows = usersData.users.map(u => ({
        'Utente': u.username || '',
        'Nome': u.name || '',
        'Ruolo': u.role === 'admin' ? t('admin_role_admin') : u.role === 'viewer' ? t('admin_role_viewer') : t('admin_role_inspector'),
        'Disattivato': xlsxBool(u.disabled),
        'Creato il': xlsxDate(u.createdAt),
        'Disattivato il': xlsxDate(u.disabledAt)
      }));
      XLSX.utils.book_append_sheet(wb, xlsxSheet(userRows, [14, 18, 12, 12, 16, 16], ['Creato il', 'Disattivato il']), 'Ispettori');
    }
  } catch (e) { /* non essenziale - il resto dell'export non deve fermarsi per questo */ }

  XLSX.writeFile(wb, t('excel_filename').replace('{order}', currentOrderName()).replace('{date}', new Date().toISOString().slice(0, 10)));
}

el('export-excel-btn').addEventListener('click', async () => {
  const btn = el('export-excel-btn');
  btn.disabled = true;
  try { await exportAllDataExcel(); } catch (err) { alert(t('err_generic') + err.message); }
  finally { btn.disabled = false; }
});

// --- 4. Statistiche ---
function exportStatistichePdf() {
  const doc = pdfNewDoc();
  const total = state.records.length;
  const allDefects = state.records.filter(r => isDefectCondition(r.condition));
  const openDefects = allDefects.filter(r => r.status !== 'closed');
  const closedCount = allDefects.length - openDefects.length;
  const closedWithDates = allDefects.filter(r => r.status === 'closed' && r.closedAt && r.scannedAt);
  const avgDays = closedWithDates.length
    ? (closedWithDates.reduce((sum, r) => sum + (new Date(r.closedAt) - new Date(r.scannedAt)) / 86400000, 0) / closedWithDates.length).toFixed(1).replace('.', ',')
    : '-';
  const agingCount = openDefects.filter(r => r.scannedAt && (Date.now() - new Date(r.scannedAt).getTime()) / 86400000 >= 5).length;

  let y = pdfHeader(doc, t('pdf_doctype_stats'), currentOrderName(), new Date().toLocaleDateString(t('locale')));
  y = pdfBand(doc, y, t('pdf_band_summary'));
  y = pdfKpiRow(doc, y, [
    { n: total, l: t('pdf_kpi_total_records') },
    { n: openDefects.length, l: t('pdf_kpi_open_defects') },
    { n: allDefects.length ? Math.round((closedCount / allDefects.length) * 100) + '%' : '-', l: t('pdf_kpi_closure'), accent: true },
    { n: agingCount, l: t('pdf_kpi_aging') },
  ]);

  const typeCounts = {};
  DEFECT_TYPE_CODES.forEach(code => { typeCounts[code] = 0; });
  allDefects.forEach(r => { if (r.defectType && typeCounts[r.defectType] !== undefined) typeCounts[r.defectType]++; });
  const dispCounts = {};
  DISPOSITION_CODES.forEach(code => { dispCounts[code] = 0; });
  allDefects.forEach(r => { if (r.disposition && dispCounts[r.disposition] !== undefined) dispCounts[r.disposition]++; });

  y = pdfBand(doc, y, t('pdf_band_by_type'));
  y = pdfTable(doc, y, [t('pdf_col_type'), t('pdf_col_count')], [140, 30],
    DEFECT_TYPE_CODES.map(code => ({ cells: [defectTypeLabel(code), typeCounts[code]] })));

  y = pdfBand(doc, y, t('pdf_band_by_disposition'));
  y = pdfTable(doc, y, [t('pdf_col_disposition'), t('pdf_col_count')], [140, 30],
    DISPOSITION_CODES.map(code => ({ cells: [dispositionLabel(code), dispCounts[code]] })));

  y = pdfBand(doc, y, t('stats_ncr_cr_title'));
  y = pdfKpiRow(doc, y, [
    { n: allDefects.filter(r => r.ncr).length, l: t('ncr_label') },
    { n: allDefects.filter(r => r.cr).length, l: t('cr_label') },
  ]);

  pdfNote(doc, y, t('pdf_avg_close_note').replace('{days}', avgDays));
  pdfFinish(doc, t('pdf_filename_stats').replace('{order}', currentOrderName()).replace('{date}', new Date().toISOString().slice(0, 10)));
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
