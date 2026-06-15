# Steady Hand Contractors Website Notes

## Project Folder

Local website repo:

```bash
/Users/noahgillespie/Documents/Codex/2026-06-09/i-need-helping-making-my-website/outputs/steady-hand-vercel-site
```

GitHub repo:

```text
https://github.com/Steadyhandcontractors/Steadyhandcontractors
```

## Current Site Files

```text
app/
components/
data/
public/assets/steady-hand-logo.png
package.json
next.config.mjs
```

The site is now a Next.js app-router site made for Vercel. The old static
HTML/CSS pages were migrated into React pages and shared components.

## Brand Colors

These colors came from the logo:

```css
--red: #ed1c24;
--burgundy: #7b111d;
--black: #050505;
--tan: #F4EEE4;
```

## Business Info

Phone:

```text
(803) 743-2933
```

Email:

```text
steadyhandcontractors@gmail.com
```

Service area wording:

```text
Serving Charleston, Mount Pleasant, Summerville, Goose Creek, James Island, Johns Island, Kiawah Island, Seabrook Island, Hanahan, North Charleston, and nearby areas. If you do not see your area, call us to see if we service you.
```

## Services Included

- Tile Installation
- Shower Remodeling
- Backsplashes
- Tile & Grout Repair
- Outdoor Stone & Tile
- Handyman Services
- Minor Carpentry
- Select Major Carpentry such as fencing, steps, and decks
- Hardscaping
- Plant Installation

## Pages Created

- Home: `app/page.jsx`
- Services: `app/services/page.jsx`
- About Us: `app/about/page.jsx`
- Gallery: `app/gallery/page.jsx`
- Contact: `app/contact/page.jsx`

Shared site data lives in:

```text
data/site.js
```

Shared layout components live in:

```text
components/
```

Reviews were removed from the header and kept as a home page Google Business reviews section.

## Still Needed

Replace placeholders for:

- Google Business review link
- Instagram link
- Facebook link
- Nextdoor link
- Owner bio photo
- Real gallery/project photos
- Real contact form endpoint

The contact form currently uses this placeholder:

```html
https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID
```

Before the site is fully live, replace that with a real Formspree endpoint or another form service.

## Git Commands

Go to the repo:

```bash
cd "/Users/noahgillespie/Documents/Codex/2026-06-09/i-need-helping-making-my-website/outputs/steady-hand-vercel-site"
```

Check status:

```bash
git status
```

Add and commit changes:

```bash
git add .
git commit -m "Update website"
```

Push to GitHub:

```bash
git push
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the Next.js dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Vercel

The GitHub repo should be connected to Vercel as a Next.js project.

For Vercel:

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave blank

## Domain

Domain:

```text
steadyhandcontractors.com
```

Vercel showed this DNS record:

```text
Type: A
Name: @
Value: 216.198.79.1
```

This record needs to be set at the DNS provider where the domain is managed, likely WordPress.com if the domain is still there.

Do not delete email DNS records like MX, TXT, SPF, DKIM, or DMARC.
