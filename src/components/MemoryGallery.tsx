import type { BirthdayPhoto } from "../data/birthdayContent";
import { PhotoFrame } from "./PhotoFrame";

interface MemoryGalleryProps {
  title: string;
  subtitle: string;
  photos: readonly BirthdayPhoto[];
  buttonLabel: string;
  onSelectPhoto: (photo: BirthdayPhoto) => void;
  onContinue: () => void;
}

const CARD_TILTS = ["-1.4deg", "1.2deg", "-0.8deg", "1.5deg", "-1.1deg", "0.9deg"];

export function MemoryGallery({
  title,
  subtitle,
  photos,
  buttonLabel,
  onSelectPhoto,
  onContinue,
}: MemoryGalleryProps) {
  return (
    <section id="memories" className="section-block reveal-block" aria-labelledby="gallery-heading">
      <header className="section-header">
        <h2 id="gallery-heading" className="section-title">
          {title}
        </h2>
        <p className="section-subtitle">{subtitle}</p>
      </header>

      <div className="gallery-grid">
        {photos.map((photo, index) => {
          const tilt = CARD_TILTS[index % CARD_TILTS.length];
          const numberLabel = String(index + 1).padStart(2, "0");

          return (
            <figure
              key={photo.id}
              className="polaroid-card"
              style={{ ["--card-tilt" as string]: tilt }}
            >
              <button
                type="button"
                className="polaroid-button"
                onClick={() => onSelectPhoto(photo)}
                aria-label={`View photo ${numberLabel} in full screen`}
              >
                <div className="polaroid-frame">
                  <PhotoFrame
                    src={photo.src}
                    alt={photo.alt}
                    className="polaroid-img"
                    objectPosition={photo.objectPosition ?? "center 25%"}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="polaroid-footer">
                  {photo.caption ? <span className="polaroid-caption">{photo.caption}</span> : null}
                  <span className="polaroid-index">#{numberLabel}</span>
                </figcaption>
              </button>
            </figure>
          );
        })}
      </div>

      <div className="gallery-cta-wrap">
        <button type="button" className="btn-primary" onClick={onContinue}>
          <span>{buttonLabel}</span>
          <span aria-hidden="true">↓</span>
        </button>
      </div>
    </section>
  );
}
