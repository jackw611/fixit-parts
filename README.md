# FixIt Parts — Static Storefront

Welcome to FixIt Parts, a minimalist e‑commerce storefront for 3D‑printed replacement parts.

## Contents
- **index.html** — home page with a catalog of available parts
- **css/styles.css** — site styling
- **js/viewer.js** — Three.js STL viewer
- **products/{slug}/index.html** — individual product pages with interactive viewer and PayPal checkout
- **policies/** — returns, intellectual property, and safety notices
- **thanks/index.html** — confirmation page after a successful purchase

## Deployment
1. Commit all files to the `main` branch of your GitHub repository.
2. Go to **Settings** → **Pages** and set the source to `main` branch, root folder.
3. After Pages is enabled, your site will be live at `https://<username>.github.io/<repository>/`.

## PayPal Integration
Each product page includes PayPal Smart Buttons for client-side checkout. Replace the sandbox client ID (`sb‑00000000000000000000000000000000`) with your live client ID from [PayPal Developer](https://developer.paypal.com/).

## Licensing & Safety
We only list models with permissive licenses suitable for commercial use (CC0, CC‑BY, MIT, BSD, Apache‑2.0). Every page includes a notice clarifying that these parts are compatible replacements, not OEM components, and should not be used for load‑bearing, food‑contact, or electrical applications.
