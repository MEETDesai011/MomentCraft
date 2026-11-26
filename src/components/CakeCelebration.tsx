interface CakeCelebrationProps {
  subtitle: string;
  buttonLabel: string;
  onContinue: () => void;
}

export function CakeCelebration({ subtitle, buttonLabel, onContinue }: CakeCelebrationProps) {
  return (
    <div className="cake-card hero-reveal-anim">
      <div className="cake-svg-wrap" aria-hidden="true">
        <svg
          className="cake-float"
          width="164"
          height="150"
          viewBox="0 0 180 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sparkles */}
          <path d="M24 34L27 25L30 34L39 37L30 40L27 49L24 40L15 37L24 34Z" fill="#ffd36e" />
          <path d="M153 28L155 21L157 28L164 30L157 32L155 39L153 32L146 30L153 28Z" fill="#ff78bb" />
          <circle cx="38" cy="70" r="3" fill="#b9a2ff" />
          <circle cx="145" cy="72" r="3" fill="#ffd36e" />

          {/* Candles */}
          <rect x="61" y="34" width="10" height="32" rx="4" fill="#b9a2ff" />
          <rect x="85" y="28" width="10" height="38" rx="4" fill="#ff78bb" />
          <rect x="109" y="34" width="10" height="32" rx="4" fill="#ffd36e" />

          {/* Candle flames */}
          <path
            className="candle-flame"
            d="M66 15C66 15 72 23 72 27.5C72 30.8 69.3 33.5 66 33.5C62.7 33.5 60 30.8 60 27.5C60 23 66 15 66 15Z"
            fill="#ffd36e"
          />
          <path
            className="candle-flame delay-1"
            d="M90 8C90 8 96.5 16.5 96.5 21.5C96.5 25.1 93.6 28 90 28C86.4 28 83.5 25.1 83.5 21.5C83.5 16.5 90 8 90 8Z"
            fill="#ffca45"
          />
          <path
            className="candle-flame delay-2"
            d="M114 15C114 15 120 23 120 27.5C120 30.8 117.3 33.5 114 33.5C110.7 33.5 108 30.8 108 27.5C108 23 114 15 114 15Z"
            fill="#ffd36e"
          />

          {/* Top cake tier */}
          <rect x="44" y="62" width="92" height="34" rx="14" fill="#ff4fa3" />
          <path
            d="M44 74C52 82 60 72 68 78C76 84 84 72 92 78C100 84 108 72 116 78C124 84 130 76 136 74V68C136 62 130 58 124 58H56C49 58 44 62 44 68V74Z"
            fill="#fff1d5"
          />

          {/* Bottom cake tier */}
          <rect x="30" y="92" width="120" height="44" rx="16" fill="#282348" stroke="#ff78bb" strokeWidth="2.5" />
          <path
            d="M32 104C42 112 52 100 62 108C72 116 82 100 92 108C102 116 112 100 122 108C132 116 142 104 148 104V98C148 92 143 88 136 88H44C37 88 32 92 32 98V104Z"
            fill="#ff78bb"
          />

          {/* Cute friendly smile on cake */}
          <circle cx="74" cy="118" r="3" fill="#fffafc" />
          <circle cx="106" cy="118" r="3" fill="#fffafc" />
          <path d="M83 122C86 126 94 126 97 122" stroke="#ffd36e" strokeWidth="2.8" strokeLinecap="round" />

          {/* Cake plate */}
          <rect x="18" y="136" width="144" height="11" rx="5.5" fill="#fff1d5" />
        </svg>
      </div>

      <p className="cake-subtitle">{subtitle}</p>

      <button type="button" className="btn-primary" onClick={onContinue}>
        <span>{buttonLabel}</span>
        <span aria-hidden="true">↓</span>
      </button>
    </div>
  );
}
