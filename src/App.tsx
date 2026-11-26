import { useCallback, useEffect, useRef, useState } from "react";
import { birthdayContent, type BirthdayPhoto } from "./data/birthdayContent";
import { StarField } from "./components/StarField";
import { MadeForYouPrompt } from "./components/MadeForYouPrompt";
import { CountdownReveal } from "./components/CountdownReveal";
import { ConfettiBurst } from "./components/ConfettiBurst";
import { BirthdayHero } from "./components/BirthdayHero";
import { CakeCelebration } from "./components/CakeCelebration";
import { BirthdayLetter } from "./components/BirthdayLetter";
import { MemoryGallery } from "./components/MemoryGallery";
import { HeartPhotoCollage } from "./components/HeartPhotoCollage";
import { ClosingSignoff } from "./components/ClosingSignoff";
import { PhotoLightbox } from "./components/PhotoLightbox";
import { SoundToggle } from "./components/SoundToggle";

type SceneStage = "intro" | "prompt" | "countdown" | "experience";

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function App() {
  const [stage, setStage] = useState<SceneStage>("intro");
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<BirthdayPhoto | null>(null);
  const [audioAvailable, setAudioAvailable] = useState(Boolean(birthdayContent.audioSrc));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reducedMotion = useReducedMotion();

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !audioAvailable || !birthdayContent.audioSrc) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [audioAvailable]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !audioAvailable) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [audioAvailable, isPlaying]);

  const enterExperience = useCallback(() => {
    setStage("experience");
    setShowConfetti(true);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!showConfetti) return;
    const timer = window.setTimeout(() => setShowConfetti(false), 2800);
    return () => window.clearTimeout(timer);
  }, [showConfetti]);

  useEffect(() => {
    if (stage !== "experience") return;

    const blocks = document.querySelectorAll<HTMLElement>(".reveal-block");
    if (!("IntersectionObserver" in window)) {
      blocks.forEach((block) => block.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, [stage]);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <div className="app-shell">
      <StarField />

      {birthdayContent.audioSrc && (
        <audio
          ref={audioRef}
          src={birthdayContent.audioSrc}
          loop
          preload="none"
          onError={() => {
            setAudioAvailable(false);
            setIsPlaying(false);
          }}
        />
      )}

      {stage === "intro" && (
        <main className="full-scene scene-layer">
          <div className="intro-card">
            <div className="intro-badge">
              <span aria-hidden="true">✦</span>
              <span>{birthdayContent.shortDate}</span>
            </div>

            <p className="intro-eyebrow">{birthdayContent.introEyebrow}</p>
            <h1 className="intro-name">{birthdayContent.recipientName}</h1>
            <p className="intro-from">From {birthdayContent.senderLine}</p>

            <div className="intro-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setStage("prompt")}
              >
                <span>{birthdayContent.introButtonLabel}</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </main>
      )}

      {stage === "prompt" && (
        <MadeForYouPrompt
          title={birthdayContent.promptTitle}
          question={birthdayContent.promptQuestion}
          yesLabel={birthdayContent.promptYesLabel}
          noLabel={birthdayContent.promptNoLabel}
          stickerSrc={birthdayContent.promptStickerSrc}
          onYes={() => {
            void startMusic();
            setStage("countdown");
          }}
        />
      )}

      {stage === "countdown" && (
        <CountdownReveal
          recipientName={birthdayContent.recipientName}
          reducedMotion={reducedMotion}
          onComplete={enterExperience}
        />
      )}

      {stage === "experience" && (
        <>
          <ConfettiBurst active={showConfetti} reducedMotion={reducedMotion} />

          <nav className="experience-nav scene-layer" aria-label="Birthday sections">
            <div className="experience-nav-inner">
              <a href="#celebration" className="nav-pill">
                Birthday
              </a>
              <a href="#letter" className="nav-pill">
                Note
              </a>
              <a href="#memories" className="nav-pill">
                Photos ({birthdayContent.photos.length})
              </a>
              <a href="#finale" className="nav-pill">
                Collage
              </a>
              <button
                type="button"
                className="nav-pill"
                onClick={() => setStage("intro")}
              >
                Replay
              </button>
            </div>
          </nav>

          <main className="main-flow scene-layer">
            <section id="celebration" className="section-block hero-celebration-section">
              <BirthdayHero
                recipientName={birthdayContent.recipientName}
                senderLine={birthdayContent.senderLine}
                dateLabel={birthdayContent.fullDate}
              />

              <CakeCelebration
                subtitle={birthdayContent.heroSubtitle}
                buttonLabel={birthdayContent.celebrationButtonLabel}
                onContinue={() => scrollToSection("letter")}
              />
            </section>

            <BirthdayLetter
              title={birthdayContent.letterTitle}
              sealLabel={birthdayContent.letterSealLabel}
              paragraphs={birthdayContent.letterParagraphs}
              closing={birthdayContent.letterClosing}
              senderDotsLine={birthdayContent.senderDotsLine}
              buttonLabel={birthdayContent.letterButtonLabel}
              onContinue={() => scrollToSection("memories")}
            />

            <MemoryGallery
              title={birthdayContent.galleryTitle}
              subtitle={birthdayContent.gallerySubtitle}
              photos={birthdayContent.photos}
              buttonLabel={birthdayContent.galleryButtonLabel}
              onSelectPhoto={setSelectedPhoto}
              onContinue={() => scrollToSection("finale")}
            />

            <section id="finale" className="section-block finale-section reveal-block" aria-labelledby="finale-heading">
              <header className="section-header">
                <h2 id="finale-heading" className="section-title">
                  {birthdayContent.finaleClosingLine}
                </h2>
                <p className="section-subtitle">All {birthdayContent.photos.length} memories, one big heart.</p>
              </header>

              <HeartPhotoCollage
                photos={birthdayContent.photos}
                onSelectPhoto={setSelectedPhoto}
              />

              <ClosingSignoff
                title={birthdayContent.finaleTitle}
                subtitle={birthdayContent.finaleSubtitle}
                senderNames={birthdayContent.senderNames}
                senderDotsLine={birthdayContent.senderDotsLine}
                onReplay={() => setStage("intro")}
              />
            </section>
          </main>
        </>
      )}

      <SoundToggle
        visible={audioAvailable && stage !== "intro"}
        isPlaying={isPlaying}
        onToggle={() => void toggleMusic()}
      />
      <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
}
