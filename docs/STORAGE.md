# Storage

UniversalDocs has two local storage modes. **Connected Folder** uses the File System Access API where supported. The user selects a parent directory, the application creates or reuses a `UniversalDocs/` child directory, stores the handle locally, and creates dated year/month paths for documents created inside the application. **Private Browser Storage** uses OPFS when available and falls back to IndexedDB blobs.

The IndexedDB `documents` store is a fast index, not the canonical copy of the file. A rescan enumerates the active provider, compares its files with existing metadata, and replaces the local index with the current provider view. It runs on initialization, browser focus, and explicit refresh. A connected folder that needs renewed permission exposes a single reconnect action.

Private browser storage is not a user-visible Files/Finder folder. The user interface must say this clearly and provide export/backup guidance rather than implying otherwise.
