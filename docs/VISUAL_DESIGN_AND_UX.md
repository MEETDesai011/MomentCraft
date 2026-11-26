# Visual Design & UX Direction

## 1. Reference interpretation

The supplied reference is a vertical reel showing a birthday microsite on a laptop. Its visible sequence is:

1. A dark interface with animated pink code-like vertical lines and a short countdown.
2. Large pink “Happy Birthday” typography with the recipient's name and a heart.
3. A playful illustrated birthday/cake character moment.
4. A dark starry section with a warm cream greeting-card panel.
5. Individual photos displayed in clean, softly glowing frames.
6. A finale in which multiple photo cards arrange into a large heart shape.

Use this sequence and mood as inspiration. Do not reproduce the original romantic copy or any person/photo from the reference. Build a new version for Vaatsal Bhai and the six friends.

## 2. Overall art direction

**Mood:** midnight surprise, digital scrapbook, playful brotherhood, warm and heartfelt.  
**Canvas:** deep navy/near-black background with a subtle starfield.  
**Accent:** bright pink/magenta glow, with a small amount of lavender.  
**Warm contrast:** cream paper card and soft gold/yellow candle/cake details.  
**Photo treatment:** rounded polaroid-like frames with soft pink edge glow and gentle depth.

Avoid a generic corporate landing-page look. Avoid excessive gradients, tiny unreadable text, or too many decorative elements competing with the photos.

## 3. Colour tokens

Use these as starting values; Antigravity can tune them for contrast:

```css
:root {
  --night: #080811;
  --night-soft: #111122;
  --surface: #171628;
  --pink: #ff4fa3;
  --pink-bright: #ff78bb;
  --lavender: #b9a2ff;
  --cream: #fff1d5;
  --ink-warm: #5f4650;
  --gold: #ffd36e;
  --white: #fffafc;
  --muted: #c3bdcc;
}
```

Ensure all body text and interactive controls maintain readable contrast. Use glow as decoration, not as the only way to distinguish elements.

## 4. Typography

- **Hero:** bold rounded or geometric sans-serif, with strong letter spacing and a pink highlight/glow.
- **Body:** readable sans-serif such as Inter, system UI, or a bundled fallback.
- **Letter:** elegant serif or script-like accent, but keep it highly readable. Georgia/serif is a safe fallback.
- Do not depend on an external font request for the page to remain usable.

## 5. Screen-by-screen direction

### Scene A — The surprise is loading

- Full-screen near-black/navy canvas.
- Tiny stars slowly twinkle in the background.
- Short text: “A little surprise is loading for” followed by **Vaatsal Bhai**.
- A prominent button: **Open your surprise**.
- Keep the first screen uncluttered and obvious.

### Scene B — Digital countdown reveal

- On tap, animate short magenta/pink code-like lines falling down the screen, inspired by the reference's vertical pink rain.
- Display a brief `03 → 02 → 01` countdown, with a soft scale/opacity transition.
- Follow with a large title: **HAPPY BIRTHDAY, VAATSAL BHAI!**
- Add a heart/sparkle/confetti burst, then stop the intense motion.
- Provide a `Skip intro` control.

### Scene C — Birthday celebration

- Show a small illustrated cake, gift box, or friendly mascot. Prefer custom CSS/SVG/emoji illustration over a large external image.
- Candles may flicker subtly; confetti can burst once.
- Copy: “Today is all about you, bhai.”
- Button: **There's a message for you**.

### Scene D — Group letter

- Bring in a warm cream/paper-style card against the dark starry backdrop.
- Add a tiny heart/seal detail, but do not imitate a romantic love-letter aesthetic.
- Heading: **A note from your people**.
- Present the complete editable group message with generous line-height and comfortable spacing.
- Signature: **Meet • Devansh • Tej • Dhruv • Bhumi • Ronit**.
- Button: **Relive the memories**.

### Scene E — Memory gallery

- Use real group photographs when supplied.
- Display each image in a softly rounded/polaroid frame with a fine cream border and pink glow.
- Use varied but restrained card sizes; no image should be cropped in a way that cuts off a face.
- Captions are optional and editable. Do not invent dates or stories.
- On mobile, use a vertically scrollable grid or a horizontal snap gallery with clear controls. Avoid a tiny multi-column gallery.

### Scene F — Heart-shaped photo finale

- Animate several photo cards into the heart-shaped composition described in the technical spec.
- Use slight rotation/overlap and a soft pink-white glow to make the collage feel like a crafted keepsake.
- Keep the heart visually centered and large enough to understand on a phone.
- Add final message: **One big birthday hug from all of us.**
- Closing line: **With lots of love, your people.**
- Display all six names clearly.

## 6. Motion language

- **Starfield:** very slow twinkle and occasional drift.
- **Code rain:** fast entrance for the reveal only; stop once the title appears.
- **Countdown:** one number at a time; about 0.7–0.9 seconds each.
- **Hero:** scale from 0.92 to 1 with fade and a short glow pulse.
- **Cake/gift:** one gentle bounce or candle flicker.
- **Letter:** card rises/fades in; text remains still and easy to read.
- **Gallery:** cards fade/slide in with a small stagger.
- **Collage:** tiles move into place once; avoid perpetual bouncing.

Include reduced-motion behaviour. A visitor should never have to wait through a long animation to read the message.

## 7. Layout and interaction rules

- Mobile-first, with a single clear primary action per scene.
- Main content must never sit under browser safe areas or be clipped by the screen edge.
- Use clear labels rather than icon-only controls.
- Buttons need visible hover/focus/pressed states.
- Include a small progress cue only if it helps navigation; avoid a complicated multi-step wizard UI.
- If the site is one long page, make transitions feel connected and provide clear scroll/continue affordances.

## 8. Tone and copy rules

- Use friendly, confident, affectionate friend-group language.
- “Bhai” is intentional and should remain part of the greeting.
- Avoid romantic/partner phrasing, “my love,” or assumptions about a relationship.
- A little playful humour is welcome, but do not make jokes at the recipient's expense.
- Avoid invented inside jokes, personal milestones, age, location, or claims about specific memories.
