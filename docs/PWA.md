# PWA

`vite-plugin-pwa` generates the web manifest and a service worker for the app shell. The manifest presents UniversalDocs as a standalone application, includes the application mark, and registers common document/media extensions as progressive file-handler declarations where the operating system supports them.

The service worker precaches the built application shell. Document bytes are intentionally not added to the service-worker cache; they remain in the user-selected local storage provider. A user-controlled update notice appears when a new service worker is ready.
