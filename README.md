# Maren Cole — Portfolio Site (starter)

Plain HTML/CSS/JS, no build step. Open `index.html` directly, or serve the
folder with any static host.

## Structure
```
index.html            Home
about.html             About
work.html              Work / case study index
project-ledger.html    Case study template (duplicate this per project)
services.html          Services
blog.html               Journal / blog index
contact.html           Contact form (client-side validated, no backend wired)
404.html               Not-found page
css/style.css          Design tokens + all styles
js/main.js              Nav toggle, hero interaction, scroll reveal, form check
robots.txt              Search-engine crawl rules
sitemap.xml             Page list for search engines
```

## Before you launch — replace these placeholders
- Name "Maren Cole" everywhere (search-and-replace across all `.html` files)
- Domain `https://www.marencole.dev/` in every `<link rel="canonical">`,
  Open Graph/Twitter tags, JSON-LD blocks, `robots.txt`, and `sitemap.xml`
- Social links (GitHub/LinkedIn) in the footer and About page
- Email address in `contact.html`
- Project thumbnails: currently CSS/SVG placeholders (`.thumb` blocks) —
  swap in real screenshots or drop the `.thumb` divs for `<img>` tags
- `images/og-cover.jpg`: add a real 1200×630 image for social share previews
- Contact form: currently only validates in the browser and doesn't send
  anywhere. Wire it to Formspree, Netlify Forms, or your own endpoint —
  see the comment in `js/main.js`.

## Design system
Colors, fonts, spacing, and radii are all CSS custom properties at the top
of `css/style.css` (`:root`) — change a value once and it updates sitewide.

## Deploying
Push this folder to a GitHub repo and import it into Vercel (or drag-and-drop
the folder into Vercel/Netlify's dashboard). No build command is needed —
it's a static site.
