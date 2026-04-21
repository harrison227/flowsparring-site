# Flow Sparring — Website

Static marketing site for Flow Sparring, a boxing gym in Leichhardt, Sydney.

- 6 pages — Home, Method, Classes, Schedule, Coaches, Contact
- Vanilla HTML, CSS, JS. No build step.
- Black & white editorial aesthetic, matching the gym's brand mark.

## Run locally

```sh
python -m http.server 5173
```

Then open http://localhost:5173.

## Deploy

This site is pure static files — any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages). GitHub Pages is configured to serve from the repo root of the `main` branch.

## Structure

```
.
├── index.html          Home
├── about.html          Method
├── classes.html        Classes
├── schedule.html       Schedule
├── coaches.html        Coaches
├── contact.html        Contact + booking form
├── assets/
│   └── logo.svg        Circular brand mark
├── css/
│   └── style.css       All styles
└── js/
    └── main.js         Nav, reveals, form
```
