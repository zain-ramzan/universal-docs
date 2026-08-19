# Dependency Decisions

## First Foundation Pass

UniversalDocs deliberately keeps the startup bundle small and uses native browser APIs for IndexedDB, OPFS, File System Access, media capture, share, and file picking. This avoids a storage dependency and keeps the local-first data boundary explicit.

| Component | Decision | Reason |
| --- | --- | --- |
| PWA shell | `vite-plugin-pwa` | The official documentation supports manifest generation, service-worker generation, and registration for Vite projects. [Vite PWA Guide](https://vite-pwa-org.netlify.app/guide/) |
| Local storage | Native IndexedDB + OPFS + File System Access API | These browser capabilities keep document bytes on the user’s device and let the interface select a progressive fallback at runtime. |
| Initial PDF tooling | `pdf-lib` | The library is pure TypeScript/JavaScript with no native dependencies and documents browser support for creating, modifying, splitting, merging, and embedding images in PDFs. [PDF-LIB](https://pdf-lib.js.org/) |

The first milestone installs only the PWA and PDF dependencies. OCR, translation, and complex office parsers remain lazy, separately evaluated additions because their model sizes and browser constraints require a later capability-specific assessment.

## Guardrails

All imported files remain untrusted input. No document content is logged, sent to analytics, or transmitted automatically. Viewer and converter features should expose only the capabilities that are implemented and must provide a safe keep/download fallback for everything else.
