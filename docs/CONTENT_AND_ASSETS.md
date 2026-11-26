# Content & Asset Guide

## 1. Confirmed names

**Recipient:** Vaatsal Bhai  
**From:** Meet, Devansh, Tej, Dhruv, Bhumi & Ronit

Use this exact spelling and sender order throughout the site.

## 2. Suggested default website copy

This is starter copy and can be edited by the group before launch.

### Intro

“A little surprise is loading for…”  
**VAATSAL BHAI**  
Button: **Open your surprise**

### Hero

**HAPPY BIRTHDAY, VAATSAL BHAI!**  
“Today is all about you, bhai.”

### Letter heading

**A note from your people**

### Birthday letter — ready-to-use draft

> Vaatsal Bhai,
>
> Happy birthday, bhai! Life is simply more fun with you around. From random plans and endless laughs to the memories we keep bringing up, you make every moment better.
>
> We hope this year brings you good health, bigger wins, new adventures, and everything you've been working towards. Keep smiling, keep winning, and never lose that madness. No matter what life throws your way, you've got your people standing right beside you.
>
> Here's to more laughs, more plans, more unforgettable memories, and an amazing year ahead. Have the best one, bhai!
>
> With lots of love,  
> **Meet, Devansh, Tej, Dhruv, Bhumi & Ronit**

The note is deliberately general because no specific shared memories or inside jokes were supplied. Replace any line that does not sound like the group.

### Gallery section

Heading: **A few memories, a lifetime of stories**  
Optional subheading: “Some moments deserve their own little corner.”

Use only supplied photos and captions. Captions may be omitted entirely.

### Finale

**One big birthday hug from all of us.**  
“With lots of love, your people.”  
**Meet • Devansh • Tej • Dhruv • Bhumi • Ronit**

## 3. Photo asset checklist

For a strong result, use **6–12 real photos** if available. Include a mix of:

- Group photos with Vaatsal and friends.
- Funny/candid moments that the group is comfortable sharing.
- A few clear portraits or individual moments.
- One especially meaningful group photo for the final screen, if available.

Do not delay the working build while searching for a perfect set. Start with the photos already available and add more later.

## 4. File naming convention

Create this folder in the generated app:

```text
public/images/
  photo-01.jpg
  photo-02.jpg
  photo-03.jpg
  photo-04.jpg
  photo-05.jpg
  photo-06.jpg
  photo-07.jpg
  photo-08.jpg
  photo-09.jpg
  photo-10.jpg
  photo-11.jpg
```

If using different names, update the photo paths in the central content configuration file. JPG or WebP is preferred. Avoid huge originals; resize long edges to around 1600 px where possible.

## 5. Photo handling rules

- Preserve people's real faces and body proportions; do not apply AI face edits or filters that materially change appearances.
- Use `object-fit: cover` only with careful focal positioning. If a face is cropped, adjust `object-position` or use `contain` for that image.
- Use `alt` text that describes the photo neutrally.
- Captions are optional. Do not make up locations, dates, or events.
- If a file is missing, show a designed placeholder tile (cream/pink frame, subtle icon, “A memory goes here”) rather than a broken image.
- Do not upload photos to a third-party image host as part of the core build.

## 6. Optional audio

Audio is optional and should not delay delivery. If the group supplies a track they have permission to use:

- Put it at `public/audio/birthday-track.mp3`.
- Keep it off by default.
- Add a labelled sound toggle after the visitor taps to start.
- Do not bundle or fetch a commercial song from the internet.

## 7. Quick edit checklist before sharing

- [ ] Recipient says “Vaatsal Bhai” everywhere.
- [ ] Sender names are exactly Meet, Devansh, Tej, Dhruv, Bhumi and Ronit.
- [ ] Birthday letter sounds like the group.
- [ ] All photo paths point to real local files, or a graceful placeholder appears.
- [ ] Captions contain no invented details.
- [ ] No romantic wording carried over from the reference reel.
