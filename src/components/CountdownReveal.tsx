import { useEffect, useState } from "react";
import { CodeRainIntro } from "./CodeRainIntro";

interface CountdownRevealProps {
  recipientName: string;
  reducedMotion: boolean;
  onComplete: () => void;
}

const STEPS = ["03", "02", "01"] as const;

export function CountdownReveal({
  recipientName,
  reducedMotion,
  onComplete,
}: CountdownRevealProps) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      const quickTimer = window.setTimeout(onComplete, 250);
      return () => window.clearTimeout(quickTimer);
    }

    if (stepIndex < STEPS.length - 1) {
      const nextTimer = window.setTimeout(() => {
        setStepIndex((prev) => prev + 1);
      }, 780);
      return () => window.clearTimeout(nextTimer);
    }

    const finishTimer = window.setTimeout(onComplete, 820);
    return () => window.clearTimeout(finishTimer);
  }, [stepIndex, reducedMotion, onComplete]);

  const currentNumber = STEPS[stepIndex];

  return (
    <section className="full-scene countdown-scene scene-layer" aria-label="Birthday countdown reveal">
      {!reducedMotion && <CodeRainIntro />}

      <div className="countdown-center">
        <p className="countdown-label">Getting ready for {recipientName}</p>
        <div key={currentNumber} className="countdown-number countdown-pulse" aria-live="polite">
          {currentNumber}
        </div>
      </div>
    </section>
  );
}
