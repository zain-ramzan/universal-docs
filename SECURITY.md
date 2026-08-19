# Security Policy

UniversalDocs treats all imported files as untrusted input. The initial release accepts only local browser files, does not execute document macros or scripts, and keeps unsupported formats in a safe download-only state.

Please report a suspected vulnerability privately through the repository’s security-advisory workflow rather than opening a public issue. Do not include real identity documents, credentials, or personal data in a report. Include a minimal synthetic reproduction, the affected browser and version, and the impact you observed.

## Current Controls

File names are sanitized before writing; duplicate names receive a predictable suffix; imports larger than 250 MB are rejected in the first release; imported HTML/SVG are not rendered as executable application content; document facts are extracted from editable text using deterministic patterns; and no application document content is written to analytics or logs.
