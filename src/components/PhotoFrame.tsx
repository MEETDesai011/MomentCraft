import { useState } from "react";

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  loading?: "lazy" | "eager";
}

export function PhotoFrame({
  src,
  alt,
  className = "",
  objectPosition = "center 25%",
  loading = "lazy",
}: PhotoFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="photo-fallback" role="img" aria-label={alt || "Memory placeholder"}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M21 15l-4.5-4.5L9 18" />
        </svg>
        <span>A memory goes here</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      style={{ objectPosition }}
      onError={() => setHasError(true)}
    />
  );
}
