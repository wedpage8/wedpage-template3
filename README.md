# WedPage 3 — Comic Wedding Invitation

A comic-book inspired wedding invitation option built with React 18 and Vite. Bold ink outlines, halftone textures, vivid primary colors, speech bubbles, and panel layouts give this edition its illustrated comic look. Wedding content is centralized in `src/data/weddingData.js`; update that object to customize the invitation for another couple.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## Customize

Edit `src/data/weddingData.js` to set the couple, date, story, event details, gallery images, map embed, and RSVP email endpoint. The sample invitation is set for December 18, 2026, with a ceremony at Don Bosco Church in Trancoville and a reception at Hotel Supreme in Baguio City. The bundled sample photos are in `public/images`; replace them with approved client imagery for production.

The app is a static frontend with no backend. It can be deployed to Vercel by importing the GitHub repository, using `npm run build` as the build command, and `dist` as the output directory.

## RSVP email delivery

RSVP submissions send the guest's name and attendance choice to the FormSubmit endpoint configured in `src/data/weddingData.js`. The RSVP component retains the reference template's email submission, validation, provider activation, and success/error handling. Before replies can be delivered, the recipient must submit the form once and confirm the activation email sent by FormSubmit. FormSubmit is a third-party service and processes the submitted RSVP details.

## Deploy to GitHub Pages

This copy is an independent Vite app. Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`, builds the app, and deploys `dist` to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The Vite base path is configured for `https://wedpage8.github.io/wedpage-template3/`.