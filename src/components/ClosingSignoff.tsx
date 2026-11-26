interface ClosingSignoffProps {
  title: string;
  subtitle: string;
  senderNames: readonly string[];
  senderDotsLine: string;
  onReplay: () => void;
}

export function ClosingSignoff({
  title,
  subtitle,
  senderNames,
  senderDotsLine,
  onReplay,
}: ClosingSignoffProps) {
  return (
    <div className="closing-card">
      <h2 className="closing-title">{title}</h2>
      <p className="closing-subtitle">{subtitle}</p>

      <div className="sender-chips" aria-label="Birthday wishes from">
        {senderNames.map((name) => (
          <span key={name} className="sender-chip">
            {name}
          </span>
        ))}
      </div>

      <p className="closing-dots">{senderDotsLine}</p>

      <button type="button" className="btn-ghost" onClick={onReplay}>
        <span aria-hidden="true">↺</span>
        <span>Replay from start</span>
      </button>
    </div>
  );
}
