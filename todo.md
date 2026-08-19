## GitHub Pages Deployment Fix

- [x] Align the GitHub Actions pnpm setup version with the package manager version pinned in `package.json`.
- [x] Remove the workflow’s redundant pnpm version override so the setup action reads the exact pinned package-manager identifier.
- [ ] Push the corrected Pages workflow to the `main` branch.
- [ ] Instruct the user to rerun the Pages workflow and verify the public URL.

## GoatCounter Integration

- [x] Add the user-provided GoatCounter page-view script to the application shell.
- [x] Update the privacy statement and application copy to disclose third-party page-view analytics.
- [ ] Validate the build and push the published analytics update to `main`.

## GitHub Pages Visual Repair

- [x] Replace the development-only image URLs with GitHub Pages-compatible visual treatments.
- [x] Remove the unintended blank image regions beside the local workspace cards.
- [ ] Validate the repaired interface and push the static-hosting fix to `main`.
