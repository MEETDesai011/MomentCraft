import { useEffect } from "react";
import type { BirthdayPhoto } from "../data/birthdayContent";

interface PhotoLightboxProps {
  photo: BirthdayPhoto | null;
  onClose: () => void;
}

export function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded birthday memory"
      onClick={onClose}
    >
      <div className="lightbox-dialog" onClick={(event) => event.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} className="lightbox-img" />
        <div className="lightbox-bar">
          <p className="lightbox-caption">{photo.caption || photo.alt}</p>
          <button type="button" className="lightbox-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
