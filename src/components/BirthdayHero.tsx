interface BirthdayHeroProps {
  recipientName: string;
  senderLine: string;
  dateLabel: string;
}

export function BirthdayHero({ recipientName, senderLine, dateLabel }: BirthdayHeroProps) {
  return (
    <div className="hero-reveal-anim">
      <div className="hero-kicker">
        <span aria-hidden="true">✦</span>
        <span>{dateLabel}</span>
        <span aria-hidden="true">✦</span>
      </div>

      <h1 className="hero-headline">
        HAPPY BIRTHDAY,
        <span className="accent-name">{recipientName.toUpperCase()}!</span>
      </h1>

      <div className="hero-heart-row">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span>From {senderLine}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
}
