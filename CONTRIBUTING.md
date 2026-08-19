# Contributing

Keep UniversalDocs local-first. Do not add document-upload behavior, account requirements, trackers, or mandatory paid APIs to a core workflow.

Before opening a pull request, run `pnpm exec prettier --check .`, `pnpm test`, `pnpm check`, and `pnpm build`. Use only synthetic documents in tests and screenshots. New file engines must register capabilities through the shared file contract rather than coupling navigation to a particular extension.
