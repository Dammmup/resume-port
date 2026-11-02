import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import process from 'node:process'

// Разделы сайта — для sitemap.xml (маршруты в src/App.jsx).
const PAGES = ['/', '/skills', '/projects', '/academics', '/cp', '/contact']

/**
 * Адрес сайта для og:url, Schema.org и sitemap: SITE_URL, иначе
 * домен продакшена, который Vercel отдаёт при сборке. Неизвестен (локальная
 * сборка) — абсолютные ссылки не пишем, чтобы не указать на чужой адрес.
 */
function siteMeta() {
  const raw =
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : '')
  const site = raw.replace(/\/+$/, '')
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      // Без canonical: страница одна на все разделы, и canonical на «/» объявил бы /projects и /skills дублями главной.
      const tags = site ? `<meta property="og:url" content="${site}/" />` : ''
      return html.replace('<!-- site-meta -->', tags).replaceAll('__SITE_URL__', site)
    },
    generateBundle() {
      const sitemapLine = site ? `\nSitemap: ${site}/sitemap.xml\n` : ''
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${sitemapLine}` })
      if (!site) return
      const urls = PAGES.map((page) => `  <url><loc>${site}${page}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteMeta()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,
  },
})
