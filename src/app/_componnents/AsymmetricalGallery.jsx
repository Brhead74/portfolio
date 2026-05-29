'use client';
import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { data } from "./data";
import "./AsymmetricalGallery.css";

const videoPattern = /\.(mp4|webm|ogg)(\?.*)?$/i;

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

  if (videoPattern.test(source)) {
    return (
      <video
        ref={ref}
        src={source}
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

  return <img src={source} alt={alt} loading="lazy" className={className} />;
};

const AsymmetricalGallery = ({ limit } = {}) => {
  const images = Number.isInteger(limit) && limit > 0 ? data.slice(0, limit) : data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Handle keyboard escape for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

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
                  <button
                    type="button"
                    className="gallery-card-button"
                    onClick={() => handleImageClick(primary)}
                    aria-label={`Open project ${primary.titre || 'featured project'}`}
                  >
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
                  </button>
                </div>
              </div>

              <div className="gallery-tiles">
                {others.map((image, idx) => (
                  <div
                    className={`gallery-card tile ${((image.src && image.src.toLowerCase().includes('horror')) || (image.titre && image.titre.toLowerCase().includes('glauque'))) ? 'saturated-card' : ''}`}
                    key={`tile-${idx}`}
                    style={{ ['--delay']: `${(idx + 1) * 40}ms` }}
                  >
                    <button
                      type="button"
                      className="gallery-card-button"
                      onClick={() => handleImageClick(image)}
                      aria-label={`Open project ${image.titre || ('project ' + (idx + 2))}`}
                    >
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
                    </button>
                  </div>
                ))}
              </div>
            </>
          );
        })()}

      {/* Modal */}
      {isModalOpen && (
        <Modal selectedImage={selectedImage} closeModal={closeModal} />
      )}
      </div>
    </section>
  );
};


export default AsymmetricalGallery;
