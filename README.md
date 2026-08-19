# UniversalDocs

> **Open the website, work with your document, and close it. No account. No automatic upload. Your documents stay with you.**

UniversalDocs is a local-first Progressive Web Application for opening, organizing, capturing, viewing, converting, and sharing common documents and media directly in a browser. It is intentionally a client-side application: registration, mandatory cloud storage, and paid APIs are not part of the core product.

## Current Foundation

The current milestone provides a responsive PWA shell, a first-run choice between a connected folder and private browser storage, a local IndexedDB file index, OPFS fallback where available, file import, a filterable local file manager, safe basic viewers, text editing as a saved copy, local deterministic fact extraction, camera photo capture, browser video recording, and image-to-PDF conversion. It also includes English, Italian, Urdu, and Arabic translations for the initial flow, with direction switching for Urdu and Arabic. French, German, and Spanish are represented in the language architecture and await complete copy translation.

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Run the Vite development server. |
| `pnpm test` | Run the unit suite. |
| `pnpm check` | Run strict TypeScript validation. |
| `pnpm build` | Build the static PWA and production server wrapper. |

## Privacy Boundary

Document bytes are stored through the selected local storage provider. UniversalDocs does not add a document-upload endpoint and does not ship analytics code. Browser permissions for camera, microphone, sharing, and folder access are requested only when the corresponding user action requires them.

## Project Notes

The production build output is `dist/public`. The included GitHub Actions workflow validates formatting, unit tests, TypeScript, and the production build. The Pages workflow builds a static artifact; review and enable the repository’s Pages settings before using it for a public release.

Read the focused documentation in [`docs/`](docs/) before changing the storage provider, file adapters, or PWA configuration.
