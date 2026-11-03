# Damir Biyankho — Portfolio

Personal portfolio of **Damir Biyankho**, full-stack engineer from Almaty, Kazakhstan.
I build business automation platforms: ERP dashboards, mobile attendance systems,
AI assistants, integrations, notifications and document generation.

The site is available in English and Russian and has sections for an introduction,
skills, education, projects, engineering highlights and contacts. The CV is in
`public/resume.pdf`.

## Selected projects

| Project | What it is | Links |
|---|---|---|
| Detsad ERP / Aldamiram | Operating system for private kindergartens: billing, staff, SanPiN food journals, medicine, pedagogy, PWA, Groq AI assistant. In production. | [demo](https://aldamiram.vercel.app/) · [frontend](https://github.com/Dammmup/detsad_f) · [backend](https://github.com/Dammmup/detsad_b) |
| Detsad Mobile | Flutter app for staff attendance with GPS geofencing and offline mode. | [code](https://github.com/Dammmup/detsad_m) |
| Uyghur Learn | SaaS learning platform with courses, community, email verification and RBAC. | [demo](https://ur-front.vercel.app/) |
| Garden Park Inn | Hospitality platform with menu translation into 9 languages and an admin dashboard. | [demo](https://gardenparkinn.vercel.app) |
| SearchX | Search product on external APIs with Supabase-backed favorites. | [demo](https://search-content.vercel.app/) |
| Universe | Interactive 3D experience with Three.js and React Three Fiber. | [demo](https://universe-flame-one.vercel.app/) |

## Tech stack

React 19, Vite, Tailwind CSS, shadcn/ui, Framer Motion, React Router, Lucide icons,
Vercel Analytics. Deployed on Vercel.

## Search and AI visibility

The site is a single-page app, so crawlers that do not run JavaScript would see an
empty page. To avoid that:

- `index.html` contains a plain-HTML summary inside `#root` (who I am, projects,
  contacts). React replaces it when the app starts.
- `index.html` has a meta description, Open Graph tags and Schema.org `Person`
  markup (JSON-LD).
- Every section sets its own page title; the page language follows the language switch.
- The `site-meta` plugin in `vite.config.js` adds `og:url`, `robots.txt` and
  `sitemap.xml` at build time. The site address comes from
  `SITE_URL`, or from Vercel's `VERCEL_PROJECT_PRODUCTION_URL` when deployed. In a
  local build without either, the absolute links are left out.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

To build with a fixed address: `SITE_URL=https://example.com npm run build`.

## Contacts

- Email: damir.-@mail.ru
- Telegram: [@damir_d](https://t.me/damir_d)
- GitHub: [Dammmup](https://github.com/Dammmup)
- LinkedIn: [damir-biyankho](https://www.linkedin.com/in/damir-biyankho-558287294/)

The design started from an open-source React + Vite portfolio template and has been
reworked for my own content.
