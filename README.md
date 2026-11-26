# Happy Birthday, Vaatsal Bhai!

A private, mobile-first birthday surprise website made for **Vaatsal Bhai** by **Meet, Devansh, Tej, Dhruv, Bhumi & Ronit**.

**Live Website:** https://happy-birthday-vaatsal.vercel.app/

## Local Development

```bash
npm install
npm run dev
```

To test the production bundle locally:

```bash
npm run build
npm run preview
```

## Replacing Photos & Editing Content

- **Edit all copy, names, captions, and photo metadata:**  
  Update `src/data/birthdayContent.ts`
  - Change `letterParagraphs` to customize the group birthday note.
  - Add or edit the note under each individual person's photo by editing the `caption` field inside `photos` (`photo-01` through `photo-11`), e.g. `caption: "Your note here"`.
  - Adjust `objectPosition` per photo if needed so faces stay centered.
- **Replace photos:**  
  Replace any file in `public/images/` (`photo-01.jpg` through `photo-11.jpg`), keeping the same filenames or updating the matching `src` path in `src/data/birthdayContent.ts`.
- **Background audio:**  
  Drop an MP3 file at `public/audio/birthday-track.mp3` and set `audioSrc: "/audio/birthday-track.mp3"` in `src/data/birthdayContent.ts`. Audio stays off on initial load and starts after tapping `YES` (with a `Music: On/Off` toggle in the bottom-right corner).

## Deploying to Vercel

1. Push or import this folder into Vercel.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Environment Variables: None required.
