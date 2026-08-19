# Architecture

UniversalDocs is a React and TypeScript PWA built with Vite. Its design principle is to keep document bytes behind a local storage interface and to let UI code work with a normalized `LocalDocument` record rather than individual file extensions.

| Layer | Responsibility |
| --- | --- |
| `storage/` | Connected-folder and private-browser providers, local index, and storage-mode selection. |
| `types/` | Stable contracts for document metadata, storage status, and browser capabilities. |
| `lib/` | Defensive filenames, format categorization, capability registry, local PDF creation, and deterministic extraction. |
| `i18n/` | Locale records plus application direction changes for right-to-left languages. |
| `pages/` | The Field Desk workspace and explicitly available local actions. |

The UI does not inspect directory handles or OPFS implementation details. `StorageManager` coordinates the provider, rebuilds the indexed file list on startup/focus/manual refresh, and returns normalized file entries to the workspace.
