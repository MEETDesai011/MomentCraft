# Technical Specification

## 1. Recommended implementation

Build a **static, single-page React application**. The fastest maintainable option is:

- React + Vite + TypeScript
- CSS (custom CSS is preferred over a large UI framework for this small experience)
- Framer Motion for a small number of entrance/reveal transitions, if useful
- CSS keyframes for stars, code rain, glow, floating hearts, and simple decorative motion
- Optional `canvas-confetti` only if it is quick to integrate; CSS confetti is an acceptable alternative
- Vercel or Netlify for static hosting

Do not add a backend, database, authentication, API keys, or external services.

## 2. Architecture

The app is a client-side presentation with content separated from rendering:

```text
Browser
  └── React single-page app
       ├── Birthday content config (names, copy, photo paths)
       ├── Intro / terminal reveal
       ├── Birthday hero + celebration animation
       ├── Group letter
       ├── Photo memory gallery
       ├── Heart-shaped final collage
       └── Closing sign-off

Static assets
  ├── public/images/*
  └── public/audio/* (optional, user-supplied only)
```

The app should work when served as a static Vite build. It must not depend on a runtime API.

## 3. Suggested project structure

```text
vaatsal-birthday/
├── public/
│   ├── images/
│   │   ├── photo-01.jpg
│   │   ├── photo-02.jpg
│   │   └── ...
│   └── audio/
│       └── birthday-track.mp3        # optional; only if supplied and permitted
├── src/
│   ├── components/
│   │   ├── StarField.tsx
│   │   ├── CodeRainIntro.tsx
│   │   ├── CountdownReveal.tsx
│   │   ├── BirthdayHero.tsx
│   │   ├── CakeCelebration.tsx
│   │   ├── BirthdayLetter.tsx
│   │   ├── MemoryGallery.tsx
│   │   ├── HeartPhotoCollage.tsx
│   │   ├── ClosingSignoff.tsx
│   │   └── SoundToggle.tsx            # optional
│   ├── data/
│   │   └── birthdayContent.ts
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.tsx
│   └── main.tsx
├── README.md
├── package.json
└── vite.config.ts
```

Antigravity may adjust the exact structure, but keep content data separate from visual components.

## 4. Content configuration

Create one central configuration file, e.g. `src/data/birthdayContent.ts`. Avoid hardcoding the birthday copy in multiple components.

Suggested shape:

```ts
export const birthdayContent = {
  recipientName: "Vaatsal Bhai",
  senderNames: ["Meet", "Devansh", "Tej", "Dhruv", "Bhumi", "Ronit"],
  senderLine: "Meet, Devansh, Tej, Dhruv, Bhumi & Ronit",
  introEyebrow: "A little surprise is loading for",
  heroTitle: "Happy Birthday, Vaatsal Bhai!",
  heroSubtitle: "Today is all about you, bhai.",
  letterTitle: "A note from your people",
  letterBody: "[Paste the final group birthday message here]",
  closingLine: "With lots of love and endless memories,",
  photos: [
    { src: "/images/photo-01.jpg", caption: "[Optional caption]", alt: "A memory with Vaatsal" },
    { src: "/images/photo-02.jpg", caption: "", alt: "A photo from the friend group" }
  ],
  audioSrc: "" // optional local path, otherwise leave empty
} as const;
```

Use the actual sample letter from `CONTENT_AND_ASSETS.md` as the initial `letterBody`, unless the group supplies revised copy. Keep all content easy to edit.

## 5. Interaction/state model

Use a small state machine or equivalent state variable. Suggested states:

- `intro` — starfield and start button visible
- `countdown` — code-rain and countdown reveal
- `celebration` — birthday title and cake/gift animation
- `letter` — open letter card
- `memories` — photo gallery
- `finale` — heart collage and sender sign-off

Requirements:

- The start button advances from `intro` to `countdown`.
- The countdown should be brief (roughly 2–3 seconds total) and then automatically advance to `celebration`.
- Provide a continue/skip control so visitors can bypass long animation sequences.
- The letter, photos, and final sign-off must remain reachable even when motion is disabled.
- Do not force an automatic page redirect or reload.
- If the implementation uses scroll sections instead of stateful full-screen scenes, preserve the same order and provide clear in-page navigation/continue buttons.

## 6. Image handling

- Store all personal photos under `public/images/`.
- Use descriptive filenames where practical (`group-trip.jpg`, `birthday-2025.jpg`) or the numbered convention in the assets guide.
- Optimise images before adding them; target around 200–500 KB per image where visual quality allows.
- Use `loading="lazy"` for images below the first viewport.
- Use `object-fit: cover` for uniform photo cards; preserve the face/subject in the crop.
- Add a useful `alt` string. If no caption is supplied, use neutral alt text.
- Handle `onError` by switching to a designed placeholder; never leave a broken-image icon.
- Do not use AI-generated faces or stock people in place of the friend group. If real photos are unavailable, use abstract gradient/photo-frame placeholders until supplied.

## 7. Heart collage implementation

Create a responsive heart silhouette from photo tiles. A CSS grid or absolutely positioned collection of rounded photo cards is acceptable. The shape should remain recognizably heart-like at phone width.

Suggested 5-column / 5-row tile map:

```text
. X . X .
X X X X X
X X X X X
. X X X .
. . X . .
```

The 16 tile positions may reuse the available photo array in a deterministic order if fewer than 16 photos are provided. Do not generate blank broken tiles. On very narrow screens, use a simple heart-shaped mask or a compact balanced photo grid if the full tile map becomes too small. Keep a graceful visual fallback.

## 8. Animation and performance guidance

- Prefer CSS `transform` and `opacity` animations.
- Keep particle count low; avoid thousands of DOM nodes.
- Use a subtle starfield, not a high-resolution looping video.
- The code-rain effect can be CSS columns/short text fragments with staggered timing; it does not need to simulate real code execution.
- Do not run continuous heavy animation once the visitor reaches the letter/gallery.
- Respect `prefers-reduced-motion: reduce` by disabling or greatly shortening non-essential animations.
- Pause or simplify decorative animation when the tab is hidden if straightforward to implement.

## 9. Optional audio

Audio is not required. If a local, permitted track is supplied:

- Place it in `public/audio/`.
- Keep sound off by default.
- Provide a clearly labeled sound toggle.
- Only attempt playback after the visitor taps the start button or sound toggle.
- Handle missing audio without errors or empty controls.
- The complete experience must work with no audio file.

## 10. Responsive rules

- Start design at 390 × 844 px and test down to 360 px width.
- Use `min-height: 100svh` (with safe fallback) for scene-like sections.
- Keep important text within comfortable line lengths and avoid oversized text clipping.
- Make all buttons easy to tap (minimum target around 44 × 44 CSS px).
- Keep the heart collage within viewport width and avoid horizontal scrolling.
- Desktop may expand the gallery and letter width, but should not feel like a stretched mobile layout.

## 11. SEO and metadata

Set a simple page title such as `Happy Birthday, Vaatsal Bhai!` and a friendly description. A custom favicon is optional. Do not include unnecessary social tracking or analytics.

## 12. Build and deployment

Expected scripts:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Use the generated `dist/` folder for static deployment. Vercel should detect Vite automatically; if manual settings are required, use build command `npm run build` and output directory `dist`. No environment variables are required.

## 13. Implementation completion definition

Do not stop at a static mockup. Finish a functioning interactive app, run the production build, fix any TypeScript/build errors, verify the mobile layout, and document where to change the names/message/photos.
