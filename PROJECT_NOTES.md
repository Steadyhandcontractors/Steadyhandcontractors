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
- Shower Remodeling/Installation
- Backsplashes
- Tile & Grout Repair/Cleaning
- Outdoor Stone & Tile
- Handyman Services
- Minor & Select Major Carpentry such as fencing, steps, and decks
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

## Social Links

- Instagram: `https://www.instagram.com/steadyhandcontractors/`
- Facebook: `https://www.facebook.com/profile.php?id=61570972769196`
- Google Business: `https://share.google/wp03gcoM9RiVX54vv`
- Nextdoor: `https://nextdoor.com/page/noahs-handyman-services`

## Google Reviews

Business Profile ID:

```text
13981049815893978876
```

Current implementation:

- The homepage has an Elfsight Google Reviews widget embedded.
- The provided Business Profile/CID ID is saved in `data/site.js`.
- The provided ID did not resolve in Google's Place ID Finder, so do not use it as a widget Place ID.
- Elfsight app class: `elfsight-app-f3c85da6-bf17-405a-b974-dd4d19e01ca6`.

Automatic update options:

- Google Business Profile Reviews API can retrieve reviews for a verified location, but requires OAuth access to the business account.
- Google Places API can retrieve limited review data for a public place, but requires a Google Maps Platform API key and a Place ID.
- A third-party Google reviews widget can provide a paste-in embed that usually auto-refreshes without custom API work.

## Still Needed

Replace placeholders for:

- Google reviews embed/widget code or API feed
- Owner bio photo
- Real gallery/project photos
- One-time FormSubmit email activation, if prompted by the first submission

The contact form submits in-page with FormSubmit AJAX and falls back to:

```html
https://formsubmit.co/steadyhandcontractors@gmail.com
```

The first live submission triggered a FormSubmit activation email. Confirm that email once from `steadyhandcontractors@gmail.com`, then future submissions should send directly without the activation warning.

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
