interface SoundToggleProps {
  visible: boolean;
  isPlaying: boolean;
  onToggle: () => void;
}

export function SoundToggle({ visible, isPlaying, onToggle }: SoundToggleProps) {
  if (!visible) {
    return null;
  }

  return (
    <div className="sound-toggle">
      <button
        type="button"
        className="btn-ghost"
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Mute birthday music" : "Play birthday music"}
      >
        <span aria-hidden="true">{isPlaying ? "🔊" : "🔇"}</span>
        <span>{isPlaying ? "Music: On" : "Music: Off"}</span>
      </button>
    </div>
  );
}
