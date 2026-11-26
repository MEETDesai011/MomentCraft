import { useState } from "react";

interface MadeForYouPromptProps {
  title: string;
  question: string;
  yesLabel: string;
  noLabel: string;
  stickerSrc: string;
  onYes: () => void;
}

const NO_MESSAGES = [
  "Nice try, bhai! Wrong button 😄",
  "No is locked today — tap YES!",
  "You know you wanna see it 👀",
  "Only YES works today, bhai!",
];

export function MadeForYouPrompt({
  title,
  question,
  yesLabel,
  noLabel,
  stickerSrc,
  onYes,
}: MadeForYouPromptProps) {
  const [noClicks, setNoClicks] = useState(0);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const handleNoTap = () => {
    const nextCount = noClicks + 1;
    setNoClicks(nextCount);
    const offsets = [
      { x: 18, y: -8 },
      { x: -20, y: 6 },
      { x: 14, y: 10 },
      { x: -12, y: -6 },
    ];
    setNoOffset(offsets[nextCount % offsets.length]);
  };

  const hintText =
    noClicks > 0 ? NO_MESSAGES[(noClicks - 1) % NO_MESSAGES.length] : null;

  return (
    <main className="full-scene scene-layer">
      <div className="made-for-you-card">
        <div className="gingham-strip gingham-top" aria-hidden="true" />

        <div className="made-confetti" aria-hidden="true">
          <span className="mc-dot mc-1" />
          <span className="mc-dot mc-2" />
          <span className="mc-dot mc-3" />
          <span className="mc-dot mc-4" />
          <span className="mc-dot mc-5" />
          <span className="mc-dot mc-6" />
        </div>

        <div className="made-for-you-inner">
          <h1 className="made-for-you-title">{title}</h1>

          <div className="shinchan-stage">
            <img
              src={stickerSrc}
              alt="Dancing Shinchan sticker"
              className="shinchan-sticker"
            />
          </div>

          <p className="made-for-you-question">{question}</p>

          {hintText && (
            <p className="made-no-hint" role="status" aria-live="polite">
              {hintText}
            </p>
          )}

          <div className="made-for-you-buttons">
            <button type="button" className="btn-candy" onClick={onYes}>
              {yesLabel}
            </button>

            <button
              type="button"
              className="btn-candy btn-candy-no"
              style={{
                transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
              }}
              onClick={handleNoTap}
            >
              {noLabel}
            </button>
          </div>
        </div>

        <div className="gingham-strip gingham-bottom" aria-hidden="true" />
      </div>
    </main>
  );
}
