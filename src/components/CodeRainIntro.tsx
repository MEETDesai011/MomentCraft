const RAIN_STREAMS = [
  ["VAATSAL", "BHAI", "★", "27", "11", "♥", "HBD"],
  ["HAPPY", "BDAY", "03", "02", "01", "✦", "BRO"],
  ["MEET", "DEVANSH", "TEJ", "DHRUV", "BHUMI", "RONIT"],
  ["YOUR", "PEOPLE", "♥", "CHEERS", "★", "2026"],
  ["VAATSAL", "✦", "SMILES", "PLANS", "LAUGHS", "♥"],
  ["HBD", "BHAI", "★", "03", "02", "01", "✦"],
  ["CELEBRATE", "TODAY", "♥", "FOR", "YOU", "★"],
  ["27.11", "WISH", "BIG", "WINS", "✦", "BHAI"],
];

export function CodeRainIntro() {
  return (
    <div className="code-rain" aria-hidden="true">
      {RAIN_STREAMS.map((tokens, index) => {
        const leftPercent = 4 + index * 12;
        const duration = `${1.9 + (index % 3) * 0.4}s`;
        const delay = `${(index % 4) * -0.45}s`;
        return (
          <div
            key={index}
            className="code-column"
            style={{
              left: `${leftPercent}%`,
              ["--fall-duration" as string]: duration,
              ["--fall-delay" as string]: delay,
            }}
          >
            {tokens.map((token, tokenIdx) => (
              <span key={tokenIdx}>{token}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
