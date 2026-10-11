/**
 * FIKA — "Publish site now" button for the Products spreadsheet.
 *
 * When the owner clicks FIKA -> Publish site now, this POSTs to one configurable
 * webhook URL that tells the host to rebuild the site. The build itself pulls the
 * latest rows from this sheet (scripts/fetch-products.mjs runs on every build), so
 * the only host-specific thing here is the URL you paste in step 3.
 *
 * Works with any host that exposes a "deploy hook" / build webhook:
 *   - Vercel          : Project -> Settings -> Git -> Deploy Hooks -> create one.
 *                       Paste the URL. No auth, no body needed.
 *   - Cloudflare Pages: Project -> Settings -> Builds & deployments -> Deploy hooks.
 *                       Paste the URL. No auth, no body needed.
 *   - GitHub Actions  : URL  = https://api.github.com/repos/OWNER/REPO/dispatches
 *                       DEPLOY_HOOK_AUTH = Bearer <fine-grained PAT, Contents: R/W>
 *                       DEPLOY_HOOK_BODY = {"event_type":"publish"}
 *
 * Setup (one time):
 *  1. Open the Google Sheet -> Extensions -> Apps Script. Paste this file.
 *  2. Create the deploy hook on your host (see above) and copy its URL.
 *  3. Apps Script -> Project Settings -> Script properties -> Add:
 *       DEPLOY_HOOK_URL  = <the URL>
 *       DEPLOY_HOOK_AUTH = <optional; value of the Authorization header, e.g. "Bearer xxx">
 *       DEPLOY_HOOK_BODY = <optional; raw JSON body to send>
 *  4. In the Apps Script editor, Run -> publishSite once and approve the prompt.
 *  5. Reload the sheet. A "FIKA" menu appears.
 *  6. (Recommended) Triggers -> Add trigger -> publishSite, time-driven, daily.
 *     A nightly safety net so sheet edits still ship even if nobody clicks.
 *
 * Migrating hosts later: change DEPLOY_HOOK_URL (and the optional properties).
 * Nothing in this file changes.
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('FIKA')
    .addItem('Publish site now', 'publishSite')
    .addToUi();
}

function publishSite() {
  var ui = SpreadsheetApp.getUi();
  var props = PropertiesService.getScriptProperties();
  var url = props.getProperty('DEPLOY_HOOK_URL');

  if (!url) {
    ui.alert(
      'Setup incomplete',
      'No DEPLOY_HOOK_URL found in Script Properties. Contact your developer.',
      ui.ButtonSet.OK
    );
    return;
  }

  var cache = CacheService.getScriptCache();
  if (cache.get('publishing')) {
    ui.alert(
      'Already publishing',
      'A publish was triggered moments ago. Give it a few minutes before trying again.',
      ui.ButtonSet.OK
    );
    return;
  }

  var auth = props.getProperty('DEPLOY_HOOK_AUTH');
  var body = props.getProperty('DEPLOY_HOOK_BODY');

  var options = {
    method: 'post',
    muteHttpExceptions: true,
    headers: { Accept: 'application/json' }
  };
  if (auth) options.headers.Authorization = auth;
  if (body) {
    options.contentType = 'application/json';
    options.payload = body;
  }

  var resp;
  try {
    resp = UrlFetchApp.fetch(url, options);
  } catch (err) {
    ui.alert('Could not start publish', 'Network error:\n' + err, ui.ButtonSet.OK);
    return;
  }

  var code = resp.getResponseCode();
  if (code >= 200 && code < 300) {
    cache.put('publishing', '1', 90); // 90-second debounce
    ui.alert(
      'Publishing started',
      'The website is rebuilding from this sheet and will be live in about 3-5 minutes.\n\n' +
        'If a cell has a mistake the build stops automatically and the current live ' +
        'site is left unchanged - you will get an email from the host saying which row.',
      ui.ButtonSet.OK
    );
  } else {
    ui.alert(
      'Could not start publish',
      'The host responded ' + code + ':\n' + resp.getContentText().slice(0, 500),
      ui.ButtonSet.OK
    );
  }
}
