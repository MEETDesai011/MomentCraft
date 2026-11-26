# Google Antigravity — Master Build Prompt

You are building a finished, deployable birthday surprise website. Read every project document in the `docs/` folder before coding, especially `PRD.md`, `TECHNICAL_SPEC.md`, `VISUAL_DESIGN_AND_UX.md`, and `CONTENT_AND_ASSETS.md`. Treat those documents as the source of truth.

## Project

Build a single-page, mobile-first birthday microsite titled **“Happy Birthday, Vaatsal Bhai!”**. It is a personal surprise from **Meet, Devansh, Tej, Dhruv, Bhumi & Ronit** to **Vaatsal Bhai**. The target is to finish and share it tonight, 26 November 2026.

The user supplied a short vertical reference video showing a dark starry birthday website with pink code-rain/countdown, a large Happy Birthday reveal, a cute birthday/cake animation, a cream greeting card, framed photos, and a final heart-shaped collage. Recreate the spirit and flow of that experience, but create a fresh implementation and rewrite all copy for close friends/bhai. Do not use romantic wording such as “my love.”

## Required experience

Implement this sequence:

1. **Intro:** full-screen deep navy/near-black starfield, subtle twinkling stars, text “A little surprise is loading for…” and “Vaatsal Bhai,” with a clear `Open your surprise` button.
2. **Reveal:** after the button is tapped, animate a short magenta/pink code-rain effect and a quick `03 → 02 → 01` countdown. Then reveal the large headline `HAPPY BIRTHDAY, VAATSAL BHAI!` with a heart/sparkle/confetti moment. Include a `Skip intro` control.
3. **Celebration:** display a playful animated cake, gift, or friendly mascot made with CSS/SVG/emoji; keep it lightweight. Add the line “Today is all about you, bhai.” and a continue button.
4. **Letter:** show a warm cream/paper card titled `A note from your people`, containing the editable group birthday message below. Signature must include all six names.
5. **Gallery:** display local friend-group photographs as softly glowing, rounded/polaroid-style cards with optional editable captions.
6. **Finale:** animate photo tiles into a recognisable heart-shaped collage, then show `One big birthday hug from all of us.` and the six sender names.

Use the exact screen order and visual details in `docs/VISUAL_DESIGN_AND_UX.md`. It may be a staged one-page scroll or a small state-driven sequence, but the visitor must never be trapped in an animation.

## Exact content

Recipient: `Vaatsal Bhai`

Senders, exact spelling/order: `Meet`, `Devansh`, `Tej`, `Dhruv`, `Bhumi`, `Ronit`

Hero title: `Happy Birthday, Vaatsal Bhai!`

Suggested letter (keep editable in one content config file):

“Vaatsal Bhai,

Happy birthday, bhai! Life is simply more fun with you around. From random plans and endless laughs to the memories we keep bringing up, you make every moment better.

We hope this year brings you good health, bigger wins, new adventures, and everything you've been working towards. Keep smiling, keep winning, and never lose that madness. No matter what life throws your way, you've got your people standing right beside you.

Here's to more laughs, more plans, more unforgettable memories, and an amazing year ahead. Have the best one, bhai!

With lots of love,
Meet, Devansh, Tej, Dhruv, Bhumi & Ronit”

This is starter copy. Do not invent any specific inside jokes, age, venue, dates of memories, or personal claims. Make the message and captions easy to edit.

## Technical constraints

- Use React + Vite + TypeScript.
- Use custom CSS for the visual system and lightweight animations. Framer Motion may be used for a few section transitions if needed.
- No backend, database, authentication, API keys, analytics, comments, or third-party tracking.
- Keep all copy, names, image paths, captions, and optional audio path in one file such as `src/data/birthdayContent.ts`.
- Personal photographs must be local files in `public/images/`. Use placeholders when no photos exist. Never leave broken image icons.
- Do not use stock images or AI-generated people as substitutes for the friend group.
- Do not alter or synthesize real faces.
- Optional music is off by default and must only play after a user gesture. The site must work perfectly without music.
- Respect `prefers-reduced-motion`.
- Make it mobile-first, responsive from 360 px width upwards, with no horizontal overflow and large tap targets.
- Keep animations lightweight and stop the dramatic code-rain once the birthday reveal is complete.

## Implementation expectations

1. Inspect the existing folder. If empty, scaffold the Vite React TypeScript app.
2. Create clear, reusable components for each scene (intro, code-rain/countdown, hero, cake, letter, gallery, collage, closing sign-off).
3. Create a single central content config, using the exact names above.
4. Implement the entire working experience, not just a static mockup or wireframe.
5. Add graceful image fallback states and sensible alt text.
6. Add a skip/continue path so all content can be reached quickly.
7. Add page metadata/title.
8. Add a concise `README.md` with local run, photo replacement, content editing, and deployment instructions.
9. Run `npm install` and `npm run build`. Fix all errors before finishing.
10. Test at 360 px and 390 px widths (or use responsive preview) and correct clipping/overflow.
11. Report exactly which files the group must replace to add photos and edit the message.

## Definition of done

The result is a polished and emotionally warm birthday microsite, works on a phone, includes the full reveal-letter-gallery-heart-collage journey, displays the six names exactly, has no broken images or build errors, and can be deployed as a static Vite site to Vercel with build command `npm run build` and output folder `dist`.

Do not stop after planning. Build the complete app, run the production build, fix issues, and leave clear instructions for replacing photos and sharing the deployed URL.
