## GitHub Pages Deployment Fix

- [x] Align the GitHub Actions pnpm setup version with the package manager version pinned in `package.json`.
- [x] Remove the workflow’s redundant pnpm version override so the setup action reads the exact pinned package-manager identifier.
- [ ] Push the corrected Pages workflow to the `main` branch.
- [ ] Instruct the user to rerun the Pages workflow and verify the public URL.
