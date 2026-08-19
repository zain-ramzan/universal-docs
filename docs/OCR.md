# OCR

OCR is a planned local feature, not a simulated result in the current interface. The initial architecture reserves `ocrAvailable` and detected-language fields on local document metadata so OCR output can be saved locally without changing the file-manager model.

The intended implementation will load language data only after a user request, display the model size before download, run recognition in a worker, and store extracted text alongside the local document index. Priority languages are Italian, English, Arabic, Urdu, French, German, and Spanish. No document image or OCR text may be automatically sent to a remote API.
