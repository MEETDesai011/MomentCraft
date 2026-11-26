interface BirthdayLetterProps {
  title: string;
  sealLabel: string;
  paragraphs: readonly string[];
  closing: string;
  senderDotsLine: string;
  buttonLabel: string;
  onContinue: () => void;
}

export function BirthdayLetter({
  title,
  sealLabel,
  paragraphs,
  closing,
  senderDotsLine,
  buttonLabel,
  onContinue,
}: BirthdayLetterProps) {
  return (
    <section id="letter" className="section-block letter-section reveal-block" aria-labelledby="letter-heading">
      <article className="letter-paper">
        <div className="letter-seal">
          <span aria-hidden="true">★</span>
          <span>{sealLabel}</span>
        </div>

        <h2 id="letter-heading" className="letter-heading">
          {title}
        </h2>

        <div className="letter-body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <footer className="letter-signature">
          <p className="letter-closing-word">{closing}</p>
          <p className="letter-names">{senderDotsLine}</p>
        </footer>

        <div className="letter-cta-wrap">
          <button type="button" className="btn-warm" onClick={onContinue}>
            <span>{buttonLabel}</span>
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </article>
    </section>
  );
}
