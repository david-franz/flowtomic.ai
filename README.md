# Flowtomic.ai

This repo renders the landing page for **Flowtomic.ai**, a project focused on building and deploying robust agentic AI workflows. The experience highlights the ecosystem of Flowtomic tools — all converging on the portable `.flow` format for defining tasks, logic, and interactions across languages, runtimes, and environments.

### Notable details
- Dark mode toggle available via the “Dark mode (D)” button or the `D` keyboard shortcut.
- Product grid dynamically adapts to the number of offerings.
- Hero background mirrors the Flowtomic colour palette with subtle animated gradients.
- Favicon + hero logo sourced from `public/logo.ico`.

## Local development
```bash
npm install
npm run dev
```
Open the printed local URL in your browser.

## Production build & preview
```bash
npm run build
npm run preview
```

## Deployment
- CI/CD via GitHub Actions builds the site and uploads the `dist` output to Azure Static Web Apps.
- Add an `AZURE_STATIC_WEB_APPS_API_TOKEN` repository secret (copied from the Azure portal) to enable deployments.
