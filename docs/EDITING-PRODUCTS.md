# Editing products — owner's guide

The whole product catalogue on the website comes from **one Google Sheet**.
You never touch code, GitHub, or the hosting.

---

## How it works (30 seconds)

1. Edit the **Products** tab of the Google Sheet.
2. Put product photos on **Cloudinary** and paste the link into the `image` column.
3. Click **FIKA → Publish site now** in the sheet's menu bar.
4. Wait ~3–5 minutes, then check the website in a private browser window.

If a cell has a mistake, the build **stops by itself** and the live website is
left exactly as it was. The hosting service emails you which row was wrong. Fix
it and click Publish again.

---

## Golden rules

- **Never** rename, reorder, or delete **row 1** (the column headings).
- **Never** delete the **Lists** tab.
- **One product per row.** No blank rows in the middle (a fully blank row is
  skipped, that's fine).
- Don't worry about the code repo — a file there called
  `equipment.generated.json` is rewritten automatically on every publish.

---

## Add a product

1. Go to the **Products** tab.
2. Right-click a row number → **Insert 1 row below**, or select an existing
   row → **Duplicate** (easiest — you get all the columns).
3. Fill in the cells (see the column reference below). Required columns:
   `name`, `category`, `dailyRate`, `shortDescription`, `description`, `image`,
   `featured`, `available`.
4. Leave `slug` and `id` **blank** — they're generated from the name. Only set
   `slug` yourself if you want a specific web address.
5. Upload the photo to Cloudinary (below) and paste its link into `image`.
6. Set `available` to **In stock**. Tick `featured` only if it should appear in
   the homepage carousel.
7. **FIKA → Publish site now.**

## Remove a product

1. Click the **row number** on the left → right-click → **Delete row**.
   (Just clearing the cells is not enough — delete the whole row.)
2. **FIKA → Publish site now.**

To hide a product temporarily instead of deleting it: set `available` to
**Temporarily unavailable** (or any status other than "In stock"). It stays in
the catalogue but shows "Currently unavailable" and can't be hired.

---

## Column reference

| Column | Required | What to put | Example |
|---|---|---|---|
| `id` | no | Leave blank. | |
| `name` | **yes** | Product name shown everywhere. | `Petrol Generator 5kVA` |
| `slug` | no | Leave blank unless you want a set web address. Lowercase, hyphens. | `petrol-generator-5kva` |
| `category` | **yes** | Pick from the dropdown only. | `Power Tools` |
| `dailyRate` | **yes** | Number only — no "R", no spaces, no "per day". | `450` |
| `weeklyRate` | no | Number only, or leave blank. | `2200` |
| `shortDescription` | **yes** | One line for the product card. Max 200 characters. | `Quiet petrol generator for sites without power.` |
| `description` | **yes** | Full paragraph for the product page. Commas and full stops are fine. | `A reliable 5kVA petrol generator …` |
| `image` | **yes** | Cloudinary link (see below), **or** an existing `/images/...` path. | `https://res.cloudinary.com/…/generator.jpg` |
| `specifications` | no | `Label: Value` pairs, separated by the `\|` key. | `Power: 5kVA \| Fuel: Petrol \| Runtime: 8 hrs` |
| `suitableFor` | no | Short phrases, separated by `\|`. | `Sites without power \| Events \| Backup power` |
| `gallery` | no | Extra image links separated by `\|`. Usually leave blank. | |
| `featured` | **yes** | Checkbox. Ticked = shows in the homepage carousel. | ✓ |
| `available` | **yes** | Status dropdown. **In stock** = live on the site; any other value (Temporarily unavailable, Re-purchase needed, Sold out) hides it. | `In stock` |

### The `|` separator

The list columns (`specifications`, `suitableFor`, `gallery`) use the **pipe
`|`** key (Shift + `\`, above Enter) to separate items. A **semicolon `;`** also
works if that's easier to type. **Never use commas** to separate them — commas
are normal text inside a description.

- `specifications`: each item is `Label: Value` — a real colon after the label.
  `Voltage: 220-240V ~ 50/60Hz` works fine (only the first colon splits it).
- `suitableFor`: `Driveway paving prep | Sand & gravel compaction | Asphalt repairs`

### Prices

Digits only. `450`, not `R450`, not `R 450 / day`. `weeklyRate` can be blank.

### Category

Use the dropdown. If the category you need isn't in the list, it has to be added
in code first (it needs an icon and a picture) — ask your developer.

### Availability

`available` is a dropdown. **In stock** shows the product on the site and lets it
be hired. **Any other value** — Temporarily unavailable, Re-purchase needed, Sold
out — hides it (it shows "Currently unavailable" and can't be hired). If you add a
brand-new option to the dropdown, tell your developer so it gets mapped —
until then an unrecognised status just hides that product.

---

## Photos (Cloudinary)

1. Log in to Cloudinary → **Media Library**.
2. Drag the photo in. Best results: landscape, at least 1200px wide, plain/white
   background, product filling most of the frame.
3. Click the uploaded image → **Copy URL** (the delivery URL, starts with
   `https://res.cloudinary.com/`).
4. Paste it into the `image` column for that row.

You can also keep using an existing built-in image by putting its path
(`/images/equipment/hire/chainsaw.jpeg`) in the `image` column — but for new
products, Cloudinary is the way.

If you'd rather your developer handle images, just tell them the row and send
the photo.

---

## Publish and check

1. **FIKA → Publish site now** → you get a "Publishing started" pop-up.
2. Wait 3–5 minutes.
3. Open the website in a **private / incognito window** (or hard-refresh) and
   check your change is live.

## If the site doesn't update

You'll get an email from the **hosting service** with a failed build and a
message naming the exact row and the problem (e.g. *"Row 24 (Petrol Generator):
dailyRate 'R450' is not a positive number"*). Fix that cell and click **Publish
site now** again. Until then the live site keeps showing the last good version.

---

## For the developer (appendix)

### How a publish flows

1. The sheet's **FIKA → Publish site now** button (`apps-script/Code.gs`) POSTs to
   one configurable URL — the **`DEPLOY_HOOK_URL`** script property.
2. That URL is the host's build webhook (Vercel *Deploy Hook*, Cloudflare Pages
   *Deploy hook*, or a GitHub `repository_dispatch` endpoint). It triggers a rebuild.
3. The build runs `npm run build`; its `prebuild` hook runs
   `scripts/fetch-products.mjs`, which pulls the **Products** tab, validates every
   row, and rewrites `lib/data/equipment.generated.json`. Any error fails the build
   and the previous deployment stays live.

The pull is host-agnostic — it happens wherever `next build` runs. Only the trigger
URL is host-specific.

### Host setup

- **Build env vars** (set on the host — Vercel/Cloudflare project settings, and as
  GitHub Actions secrets for the `Build check` workflow): `SHEET_ID`,
  `GOOGLE_SHEETS_API_KEY` (Google Cloud API key restricted to the Sheets API).
- **Deploy hook:** create one on the host, paste its URL into the Apps Script
  `DEPLOY_HOOK_URL` property. For GitHub `repository_dispatch` also set
  `DEPLOY_HOOK_AUTH` (`Bearer <fine-grained PAT, Contents: R/W>`) and
  `DEPLOY_HOOK_BODY` (`{"event_type":"publish"}`).
- **Nightly safety net:** an Apps Script time-driven trigger on `publishSite`
  (Triggers → Add trigger → daily). Host-independent.
- **The sheet** must be shared *Anyone with the link → Viewer* for the API key to
  read it.

### Migrating hosts (e.g. Vercel → Cloudflare Pages)

1. Point the new host at the repo; set `SHEET_ID` + `GOOGLE_SHEETS_API_KEY` there.
2. Create a deploy hook on the new host; update `DEPLOY_HOOK_URL` in the Apps Script.
   No code changes.

### Other

- **Add a category:** edit `lib/data/categories.json` (add `id`, `name`, `slug`,
  `description`, `iconKey`, `image`). If `iconKey` is new, add it to `iconMap` in
  `components/ui/CategoryCard.tsx`. Then add the category **name** to the sheet's
  `Lists` tab so it appears in the dropdown.
- **Refresh the committed snapshot:** `npm run products:pull` (needs
  `.env.local`), then commit `lib/data/equipment.generated.json`.
- **Local build from the sheet:** copy `.env.local.example` → `.env.local`, fill
  in `SHEET_ID` + `GOOGLE_SHEETS_API_KEY`, `npm run build`.
- **Rotations:** the Google Sheets API key; any `DEPLOY_HOOK_AUTH` token in the
  Apps Script. Update the matching host env var / script property.
- **Rollback:** content — fix the cell and Publish. Bad code deploy — redeploy the
  last good commit on the host, or `git revert` and push.
