# Deployment

UniversalDocs is designed for static hosting. The built application lives in `dist/public` after `pnpm build`. HTTPS is required for camera, microphone, installability, service-worker, and several storage capabilities.

The repository contains a Pages artifact workflow. Review the workflow, enable GitHub Pages in the repository settings, and confirm the repository path/base configuration before exposing a public URL. The code remains portable to a static host such as Cloudflare Pages, Netlify, Vercel static output, or a self-hosted HTTPS server.
