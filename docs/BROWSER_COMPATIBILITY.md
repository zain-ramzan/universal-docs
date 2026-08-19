# Browser Compatibility

UniversalDocs uses progressive enhancement. The file manager and private browser storage path work wherever IndexedDB is present; the strongest capabilities depend on the current browser and a secure HTTPS context.

| Capability | Chromium desktop / Android | Firefox | Safari / iPhone and iPad |
| --- | --- | --- |
| Private local storage | Expected through IndexedDB; OPFS selected when exposed. | IndexedDB fallback. | IndexedDB fallback. |
| Connected writable folder | Expected in Chromium browsers where File System Access is available. | Use private browser storage. | Use private browser storage. |
| Camera / microphone | Available over HTTPS with permission. | Available over HTTPS with permission. | Available over HTTPS with permission, subject to Safari media behavior. |
| Video recording | Selected at runtime using the browser’s supported `MediaRecorder` format. | Depends on supported codecs. | Depends on current Safari `MediaRecorder` support. |
| Web Share | Depends on browser/device. | Download fallback. | Often available on supported devices. |
| PWA installation / file handling | Progressive enhancement only. | Browser-dependent. | Installation is browser-dependent and file handlers are not assumed. |

The Settings screen translates these states into plain-language availability rather than exposing browser API names.
