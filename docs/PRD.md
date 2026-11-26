# Product Requirements Document (PRD)

## 1. Project summary

**Product name:** Vaatsal Bhai — Birthday Surprise  
**Product type:** Private, single-page, mobile-first birthday microsite  
**Prepared for:** Google Antigravity code generation  
**Target delivery:** Evening of 26 November 2026  
**Presented by:** Meet, Devansh, Tej, Dhruv, Bhumi & Ronit  
**Made for:** Vaatsal Bhai

Create a polished, interactive birthday website inspired by the supplied reference reel. The experience should feel like a small digital birthday gift: a dramatic animated opening, a personalized birthday reveal, a celebratory cake/gift moment, a heartfelt group letter, a memory gallery, and a final heart-shaped photo collage.

The tone must be warm, playful, celebratory, and friendship-focused. The reference contains romantic-style copy; this version must be rewritten for a close friend/bhai relationship and must not use romantic wording such as “my love.”

## 2. Problem and opportunity

A normal birthday message in a chat is easy to overlook. The group wants to give Vaatsal Bhai something more memorable: a link that opens into a custom-designed experience, celebrates him by name, and brings together a message and photos from all six friends.

## 3. Product goals

1. Make Vaatsal feel personally celebrated by the six named friends.
2. Recreate the emotional progression of the reference: anticipation → reveal → celebration → personal message → memories → final group tribute.
3. Make the experience work smoothly on a phone, since the link is likely to be opened from a messaging app.
4. Keep all text and photos easy to replace without editing complex application logic.
5. Be deployable as a static site tonight without a backend or paid service dependency.

## 4. Success measures

- The first screen clearly addresses “Vaatsal Bhai.”
- A visitor can reach the birthday message and gallery without instructions or technical knowledge.
- All six sender names appear correctly and consistently: Meet, Devansh, Tej, Dhruv, Bhumi and Ronit.
- The site loads and remains usable on a typical mobile connection.
- All supplied photos render correctly, with a graceful fallback for missing files.
- The production build completes successfully and the deployed link works on a phone.

## 5. Target audience and context

**Primary visitor:** Vaatsal Bhai, opening a private birthday link.  
**Secondary visitors:** The six friends and anyone Vaatsal chooses to share the link with.  
**Primary device:** Smartphone, portrait orientation.  
**Secondary device:** Laptop/desktop.  
**Emotional context:** A personal birthday surprise from close friends; not a public marketing page.

## 6. Scope

### In scope — launch version

- Full-screen opening scene with a dark starfield and animated code/terminal-style reveal.
- A short 3–2–1 countdown or equivalent dramatic build-up.
- Large animated “Happy Birthday, Vaatsal Bhai!” hero reveal.
- A small animated cake, gift, mascot, or celebratory illustration.
- A clear “Open your birthday letter” interaction.
- A birthday message written from the group of six.
- A photo-memory section with individual photo cards and optional short captions.
- A final heart-shaped collage made from the supplied friend-group photos.
- A closing sign-off containing all six sender names.
- Confetti/sparkle effects used sparingly.
- Responsive layout, accessible controls, and reduced-motion support.
- Static deployment (Vercel or Netlify) with no server requirement.

### Out of scope — do not build for tonight

- Login, password protection, user accounts, or an admin dashboard.
- Database, backend API, contact forms, comments, analytics, or tracking.
- Uploading photos through the website.
- Complex 3D scenes or heavy video backgrounds.
- External API calls or features that require API keys.
- Autoplaying copyrighted music. Optional audio may be added only as a user-controlled feature using a supplied, permitted audio file.

## 7. User journey

1. **Open link:** Visitor lands on a dark, starry screen with a short invitation such as “A little surprise is loading for Vaatsal Bhai.”
2. **Start surprise:** Visitor taps “Open the surprise” (or an equivalent start control). This interaction may unlock optional audio if an audio file is supplied.
3. **Build-up:** Pink/magenta code-like lines animate down the screen. A short 3, 2, 1 sequence builds anticipation.
4. **Birthday reveal:** The page reveals “HAPPY BIRTHDAY, VAATSAL BHAI!” with a glowing heart, sparkles, and a small celebratory animation.
5. **Celebration moment:** An illustrated cake/gift animation appears, with a clear button to continue.
6. **Open letter:** A cream or warm-paper card reveals the group’s birthday note.
7. **Memory gallery:** Personal photographs appear as glowing, softly rounded/polaroid-like cards. Each can have an optional editable caption.
8. **Final tribute:** The photos arrange into a heart-shaped collage. The page closes with “With love, your people” or another editable group sign-off and the six names.

The experience may be implemented as one long scroll page with controlled reveal transitions, or as staged full-screen sections. It must remain possible to skip/continue; do not trap the visitor in animations.

## 8. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Show the recipient name “Vaatsal Bhai” in the opening/reveal. | P0 |
| FR-02 | Provide a clear start/continue interaction. | P0 |
| FR-03 | Play the opening code-rain/countdown reveal. | P0 |
| FR-04 | Show an animated birthday headline. | P0 |
| FR-05 | Display a celebratory cake/gift/mascot moment. | P1 |
| FR-06 | Display the group birthday letter with editable copy. | P0 |
| FR-07 | Display a gallery populated from local image assets. | P0 |
| FR-08 | Build a heart-shaped photo collage at the end. | P1 |
| FR-09 | Show all six sender names in the closing sign-off. | P0 |
| FR-10 | Provide a visible “skip animation” or “continue” option wherever an animation delays access to content. | P1 |
| FR-11 | Provide an optional sound toggle only if a local audio file exists; sound must be off by default. | P2 |
| FR-12 | Gracefully handle missing or broken photos with attractive placeholders. | P0 |

## 9. Non-functional requirements

- **Responsive:** Designed mobile-first for 360 px width and up; must also look intentional on tablet and desktop.
- **Performance:** Avoid large video backgrounds and unnecessary libraries. Compress photos and lazy-load gallery images below the fold.
- **Reliability:** No backend, environment variables, or API keys required for core functionality.
- **Accessibility:** Semantic headings, keyboard-operable buttons, visible focus states, meaningful image alt text, and `prefers-reduced-motion` support.
- **Compatibility:** Current Chrome on Android, Safari on iOS, and modern desktop browsers.
- **Privacy:** Photos are local project assets. Do not add third-party tracking or send images to an external service.
- **Maintainability:** All names, messages, captions, and photo paths live in one clearly named content/config file.

## 10. Content requirements

The website must use:

- Recipient: **Vaatsal Bhai**
- Senders: **Meet, Devansh, Tej, Dhruv, Bhumi & Ronit**
- Main heading: **Happy Birthday, Vaatsal Bhai!**
- A group birthday note (starter copy is in `CONTENT_AND_ASSETS.md`).
- Photo captions only where the group provides them. Do not invent personal anecdotes.

## 11. Visual direction

Use the supplied reference reel as the visual inspiration, not as a pixel-perfect copy. Preserve its sequence and mood: near-black/navy background, tiny stars, vivid pink/magenta code-rain, warm cream message card, glowing photo frames, and a photo collage that forms a heart. Adapt the typography, message, and illustrations to a friendly brotherhood/best-friend birthday.

See `VISUAL_DESIGN_AND_UX.md` for the detailed screen and animation brief.

## 12. Delivery priorities for the same-night deadline

**P0 — must work:** responsive page; recipient reveal; birthday headline; group letter; photo gallery with fallback; sender names; successful production build.  
**P1 — polish:** animated cake/gift; countdown; heart collage; tasteful confetti; skip controls.  
**P2 — optional extras:** sound toggle, extra transitions, decorative micro-interactions.

If time is tight, finish all P0 items before polishing P1/P2. Do not sacrifice working content or mobile stability for elaborate animation.

## 13. Risks and mitigations

- **Photos arrive late:** Build the gallery and collage from a configurable local array; provide placeholders until real images are added.
- **Animation is slow on mobile:** Use CSS transforms/opacity and small particle counts; disable or simplify motion for reduced-motion users.
- **Website is not ready in time:** Deploy the complete static MVP first; update copy/photos and redeploy afterwards.
- **Audio does not autoplay:** Keep audio optional and user-initiated; the experience must be complete without sound.
- **Too much animation delays the message:** Add skip/continue controls and keep the full letter reachable.

## 14. Acceptance criteria

The project is ready to share when:

1. Opening the URL on a phone shows a polished first screen without horizontal scrolling.
2. Starting the experience reveals “Happy Birthday, Vaatsal Bhai!” clearly.
3. The letter identifies the gift as being from Meet, Devansh, Tej, Dhruv, Bhumi and Ronit.
4. The gallery displays every valid local photo path and replaces missing files with a fallback instead of a broken-image icon.
5. The final collage reads visually as a heart on a mobile screen, with a simpler grid fallback allowed on narrow screens if necessary.
6. The user can skip or move through animations without getting stuck.
7. Reduced-motion mode remains usable.
8. `npm run build` completes without errors.
9. The deployed production URL loads over HTTPS and has been checked on a phone-sized viewport.

## 15. Assumptions and editable decisions

- The birthday is being celebrated on 26 November 2026; no age is specified.
- The six sender names are confirmed and must not be changed.
- The group will provide the photographs, if available.
- The default note is sample wording and can be edited before deployment.
- No venue, schedule, inside jokes, or personal stories have been supplied; the site must not fabricate them.
