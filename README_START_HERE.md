# Vaatsal Bhai — Birthday Website Project Pack

**Prepared for:** Google Antigravity  
**Target delivery:** Tonight — 26 November 2026  
**From:** Meet, Devansh, Tej, Dhruv, Bhumi & Ronit  
**Recipient:** Vaatsal Bhai

## What this pack contains

- `docs/PRD.md` — product requirements, scope, user journey, and acceptance criteria.
- `docs/TECHNICAL_SPEC.md` — recommended stack, architecture, component map, content model, and implementation notes.
- `docs/VISUAL_DESIGN_AND_UX.md` — the design language and screen-by-screen animation direction derived from the supplied reference video.
- `docs/CONTENT_AND_ASSETS.md` — ready-to-use birthday message, editable content fields, and photo/audio asset instructions.
- `docs/QA_AND_DEPLOYMENT.md` — test checklist and quick deployment steps.
- `ANTIGRAVITY_MASTER_PROMPT.md` — the single prompt to paste into Google Antigravity after opening this folder.
- `Vaatsal_Birthday_PRD.docx` — a formatted Word version of the PRD for easy reading/sharing.

## Fastest way to use this with Antigravity

1. Create/open a new empty project folder in Google Antigravity.
2. Copy the contents of this project pack into that folder (or extract the ZIP there).
3. Add the supplied reference video to the Antigravity context if the IDE supports attachments. It is the vertical birthday-website reel shared with this request. The written visual specification is also included, so the build should not depend on the video being attached.
4. Paste the full contents of `ANTIGRAVITY_MASTER_PROMPT.md` into Antigravity.
5. Add real photos to `public/images/` when the app is scaffolded, following `docs/CONTENT_AND_ASSETS.md`.
6. Replace or refine the default note in `src/data/birthdayContent.ts` (or the matching content configuration file Antigravity creates).
7. Run the app locally, check it on a phone-sized viewport, then deploy it.

## Important personalization note

Only the recipient and friend-group names are confirmed. The sample birthday message and captions are editable starter copy, not claims about specific shared memories. Do not invent private jokes, events, ages, locations, or personal details. Leave optional photo captions editable or omit them if the group does not provide captions.

## Delivery strategy

Build the complete working experience first. Real photos and final copy can be inserted immediately afterwards. Do not spend the available time on a backend, login, admin panel, database, or unnecessary integrations.
