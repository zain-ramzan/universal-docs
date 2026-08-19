# Security

UniversalDocs treats every imported file as untrusted. The first foundation avoids macro execution, never renders imported document HTML as privileged application code, and shows unsupported formats only as safe file actions.

Future format adapters must validate filename and MIME/signature details where practical, contain expensive parsing in workers, defend archive operations against traversal and expansion attacks, and never log document bodies. See the root [security policy](../SECURITY.md) for vulnerability reporting.
