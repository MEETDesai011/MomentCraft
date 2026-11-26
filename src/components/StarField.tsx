import { useMemo } from "react";

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  tone: "white" | "is-pink" | "is-lavender";
}

export function StarField() {
  const stars = useMemo<Star[]>(() => {
    const tones: Star["tone"][] = ["white", "white", "white", "is-pink", "is-lavender"];
    return Array.from({ length: 42 }, (_, index) => {
      const seedA = (index * 37 + 13) % 100;
      const seedB = (index * 53 + 29) % 100;
      const size = index % 5 === 0 ? 3 : index % 2 === 0 ? 2 : 1.5;
      return {
        id: index,
        left: `${seedA}%`,
        top: `${seedB}%`,
        size,
        duration: `${3.2 + (index % 5) * 0.75}s`,
        delay: `${(index % 7) * 0.45}s`,
        tone: tones[index % tones.length],
      };
    });
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className={`star-dot ${star.tone === "white" ? "" : star.tone}`}
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            ["--twinkle-duration" as string]: star.duration,
            ["--twinkle-delay" as string]: star.delay,
          }}
        />
      ))}
    </div>
  );
}
