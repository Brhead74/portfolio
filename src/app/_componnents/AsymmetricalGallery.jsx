'use client';
import React, { useRef, useEffect } from "react";
import Link from 'next/link';
import { data } from "../data";
import "./AsymmetricalGallery.css";
import { normalizeSrc, videoPattern, slugify } from './utils';

const MediaPreview = ({ source, alt, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.tagName === "VIDEO") {
      // make sure videos are paused by default in previews
      el.pause();
      el.muted = true;
      el.playsInline = true;
    }
  }, [source]);

  const handleMouseEnter = () => {
    const el = ref.current;
    if (el && el.tagName === "VIDEO") el.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el && el.tagName === "VIDEO") {
      el.pause();
      try { el.currentTime = 0; } catch (e) {}
    }
  };

  if (!source) return null;

  const src = normalizeSrc(source);

  if (videoPattern.test(src)) {
    return (
      <video
        ref={ref}
        src={src}
        className={className}
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        title={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      />
    );
  }

  return <img src={src} alt={alt} loading="lazy" className={className} />;
};

 

const AsymmetricalGallery = ({ limit } = {}) => {
  const images = Number.isInteger(limit) && limit > 0 ? data.slice(0, limit) : data;

  return (
    <section id="work" className="gallery-section">

      <div className="gallery-grid focused-primary">
        {(() => {
          if (!images || images.length === 0) return null;

          const primary = images[0];
          const others = images.slice(1);

          return (
            <>
              <div className="gallery-primary" style={{ ['--delay']: `0ms` }}>
                <div className={`gallery-card gallery-card-large ${((primary.src && primary.src.toLowerCase().includes('horror')) || (primary.titre && primary.titre.toLowerCase().includes('glauque'))) ? 'saturated-card' : ''}`}>
                  <Link href={`/projects/${slugify(primary.titre || 'featured')}`} className="gallery-card-button" aria-label={`Open project ${primary.titre || 'featured project'}`}>
                    {(() => {
                      const isHorror = (primary.src && primary.src.toLowerCase().includes('horror')) || (primary.titre && primary.titre.toLowerCase().includes('glauque'));
                      return <MediaPreview source={primary.src} alt={primary.titre} className={`gallery-image ${isHorror ? 'saturated' : ''}`} />;
                    })()}
                    {videoPattern.test(primary.src) && (
                      <span className="gallery-play" aria-hidden>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.35)" />
                          <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#fff" />
                        </svg>
                      </span>
                    )}
                    <div className="gallery-overlay" />
                    <div className="gallery-caption">
                      <h3 className="gallery-card-title">{primary.titre || "Untitled"}</h3>
                      <p className="gallery-card-details">{primary.details}</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="gallery-tiles">
                {others.map((image, idx) => (
                  <div
                    className={`gallery-card tile ${((image.src && image.src.toLowerCase().includes('horror')) || (image.titre && image.titre.toLowerCase().includes('glauque'))) ? 'saturated-card' : ''}`}
                    key={`tile-${idx}`}
                    style={{ ['--delay']: `${(idx + 1) * 40}ms` }}
                  >
                    <Link href={`/projects/${slugify(image.titre || ('project-' + (idx + 2)))}`} className="gallery-card-button" aria-label={`Open project ${image.titre || ('project ' + (idx + 2))}`}>
                      <MediaPreview
                        source={image.src}
                        alt={image.titre}
                        className={`gallery-image ${((image.src && image.src.toLowerCase().includes('horror')) || (image.titre && image.titre.toLowerCase().includes('glauque'))) ? 'saturated' : ''}`}
                      />
                      {videoPattern.test(image.src) && (
                        <span className="gallery-play" aria-hidden>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.28)" />
                            <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#fff" />
                          </svg>
                        </span>
                      )}
                      <div className="gallery-overlay" />
                      <div className="gallery-caption">
                        <h3 className="gallery-card-title">{image.titre || "Untitled"}</h3>
                        <p className="gallery-card-details">{image.details}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      {/* modal removed — projects now open as pages */}
      </div>
    </section>
  );
};


export default AsymmetricalGallery;
