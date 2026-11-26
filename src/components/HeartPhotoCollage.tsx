import { useEffect, useMemo, useRef, useState } from "react";
import type { BirthdayPhoto } from "../data/birthdayContent";
import { PhotoFrame } from "./PhotoFrame";

interface HeartPhotoCollageProps {
  photos: readonly BirthdayPhoto[];
  onSelectPhoto: (photo: BirthdayPhoto) => void;
}

// 5x5 heart silhouette with 16 active photo tile positions
const HEART_MASK: readonly (readonly number[])[] = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const TILE_TILTS = ["-2deg", "1.8deg", "-1.2deg", "1.5deg", "0deg", "-1.6deg"];

function mapPhotosToHeartSlots(photos: readonly BirthdayPhoto[]): BirthdayPhoto[] {
  if (photos.length === 0) return [];
  const totalSlots = 16;

  if (photos.length === 11) {
    // Showcase all 11 photos with the group shots in prominent central slots
    const order = [1, 2, 3, 4, 0, 5, 6, 7, 8, 9, 10, 1, 3, 5, 8, 10];
    return order.map((idx) => photos[idx]);
  }

  return Array.from({ length: totalSlots }, (_, slotIdx) => photos[slotIdx % photos.length]);
}

export function HeartPhotoCollage({ photos, onSelectPhoto }: HeartPhotoCollageProps) {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [assembled, setAssembled] = useState(false);

  const slottedPhotos = useMemo(() => mapPhotosToHeartSlots(photos), [photos]);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setAssembled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAssembled(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let activeTileCursor = 0;

  return (
    <div className="heart-stage">
      <div
        ref={gridRef}
        className={`heart-grid ${assembled ? "is-assembled" : ""}`}
        role="group"
        aria-label="Heart-shaped collage of friend group photos"
      >
        {HEART_MASK.flatMap((row, rowIdx) =>
          row.map((cell, colIdx) => {
            if (cell === 0) {
              return <div key={`spacer-${rowIdx}-${colIdx}`} className="heart-spacer" aria-hidden="true" />;
            }

            const slotIdx = activeTileCursor;
            activeTileCursor += 1;
            const photo = slottedPhotos[slotIdx];
            if (!photo) {
              return <div key={`empty-${rowIdx}-${colIdx}`} className="heart-spacer" aria-hidden="true" />;
            }

            const tilt = TILE_TILTS[slotIdx % TILE_TILTS.length];
            const delayMs = `${slotIdx * 55}ms`;

            return (
              <button
                key={`heart-tile-${slotIdx}-${photo.id}`}
                type="button"
                className="heart-tile heart-tile-animated"
                style={{
                  ["--tile-tilt" as string]: tilt,
                  ["--tile-delay" as string]: delayMs,
                }}
                onClick={() => onSelectPhoto(photo)}
                aria-label={`Open photo from heart collage: ${photo.alt}`}
              >
                <div className="heart-tile-inner">
                  <PhotoFrame
                    src={photo.src}
                    alt={photo.alt}
                    className="heart-tile-img"
                    objectPosition={photo.objectPosition ?? "center 25%"}
                    loading="lazy"
                  />
                </div>
              </button>
            );
          })
        )}
      </div>
      <p className="heart-collage-hint">Tap any photo tile to view full size</p>
    </div>
  );
}
