# QA, Launch & Deployment Checklist

## 1. Before testing

- [ ] Recipient and six sender names are correct.
- [ ] Birthday message has been reviewed by the group.
- [ ] Real photos have been added to `public/images/` and paths updated in the central content file.
- [ ] Optional audio is either supplied and user-controlled or omitted completely.

## 2. Functional QA

- [ ] Opening screen loads without a blank page or console-breaking error.
- [ ] “Open your surprise” starts the experience.
- [ ] Countdown/reveal reaches the birthday headline.
- [ ] “Happy Birthday, Vaatsal Bhai!” is readable and not clipped.
- [ ] Visitor can continue or skip the intro.
- [ ] Cake/gift animation renders, or a static celebration fallback appears.
- [ ] Letter content and all sender names are correct.
- [ ] Every valid photo loads.
- [ ] Missing photo paths show a designed placeholder.
- [ ] Heart collage appears as a recognizable heart on mobile.
- [ ] Closing message and all six names are visible.
- [ ] No sound starts automatically.

## 3. Responsive/accessibility QA

- [ ] Test at 360 px, 390 px, and 430 px wide.
- [ ] Test at a tablet and desktop width.
- [ ] No horizontal scrolling.
- [ ] Buttons are easy to tap and have clear labels.
- [ ] All controls can be reached by keyboard.
- [ ] Visible keyboard focus is present.
- [ ] Text contrast is adequate on dark and cream surfaces.
- [ ] `prefers-reduced-motion` disables or reduces decorative motion.
- [ ] The page remains usable with sound off and with no audio asset.

## 4. Performance/build QA

Run:

```bash
npm install
npm run build
npm run preview
```

- [ ] Production build completes without errors.
- [ ] No TypeScript errors remain.
- [ ] No broken asset requests in the browser console/network panel.
- [ ] Large images are compressed and gallery images are lazy-loaded.
- [ ] Intro effects do not cause noticeable lag on a typical phone.

## 5. Vercel deployment

1. Put the finished project in a Git repository, or import the local project into Vercel using the available workflow.
2. Choose the Vite project preset if asked.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. No environment variables are required.
6. Deploy and open the generated HTTPS URL on an actual phone.
7. Share the link privately with Vaatsal Bhai.

Netlify can also host the static `dist/` output with the same build command and output directory.

## 6. Last-minute delivery order

If time is extremely limited, use this order:

1. Get the app running and deployable.
2. Confirm the first screen, birthday headline, letter, names, and mobile layout.
3. Add real photos and confirm paths.
4. Add the heart collage.
5. Polish animation, confetti, and optional audio only after the above works.
