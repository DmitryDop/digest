"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./article-card.module.css";

type ArticleCoverProps = {
  src: string;
  alt: string;
  source: string;
  priority: boolean;
};

export function ArticleCover({ src, alt, source, priority }: ArticleCoverProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={styles.media}
      data-state={failed ? "failed" : loaded ? "loaded" : "loading"}
    >
      {!failed && (
        // Native img keeps the same relative cover path working both on the
        // dev server and when the static export is opened via file://.
        <img
          ref={imageRef}
          className={styles.cover}
          data-loaded={loaded}
          src={src}
          alt={alt}
          width={1400}
          height={788}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}

      {!failed && (
        <span className={styles.skeleton} data-hidden={loaded} aria-hidden="true" />
      )}

      {failed && (
        <span className={styles.fallback}>
          <span className={styles.fallbackSource}>{source}</span>
          <span className={styles.fallbackText}>Обложка недоступна</span>
        </span>
      )}
    </div>
  );
}
