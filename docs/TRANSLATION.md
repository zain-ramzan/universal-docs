# Translation

Translation is intentionally disabled in the current UI with a clear **Requires model download** explanation. The app distinguishes its interface language from a document’s desired translation language, and it does not silently fall back to a cloud translation service.

The next implementation should evaluate browser-compatible, locally executable translation engines and their licensing, model footprint, language quality, worker support, and cache/deletion controls. The first target pairs are Italian, English, Urdu, and Arabic, followed by French, German, and Spanish.
