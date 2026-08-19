# File Formats

The first release detects categories from a safe extension registry and MIME information provided by the browser. This keeps the navigation format-neutral while making capability claims conservative.

| Category | Current behavior |
| --- | --- |
| PDF | Browser PDF viewer, download, rename, delete, share. |
| Editable text (`.txt`, `.md`, `.csv`, `.json`, `.xml`, `.yaml`, `.html`, `.rtf`) | Local editable text viewer, save-copy, deterministic fact extraction, download, share. |
| Images | Local image viewer, download, share, and image-to-PDF input. |
| Browser media | Local audio/video viewer, download, share. |
| Other formats | Retained safely with download, rename, share, and delete; the viewer states that preview is not yet available. |

The registry is deliberately extendable. DOCX, spreadsheets, presentation files, EPUB, archives, and legacy office documents remain future adapter work and must not be advertised as fully viewable until a maintained, browser-compatible parser is integrated.
