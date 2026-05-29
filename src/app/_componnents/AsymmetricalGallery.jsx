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

const AsymmetricalGallery = () => {
  const images = data;

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
      <div className="gallery-intro">
        <p className="gallery-kicker">Selected work</p>
        <h2 className="gallery-title">Mes projets</h2>
        <p className="gallery-description">
          Une sélection courte et lisible de travaux 2D, 3D, jeu et interface. Chaque carte reste simple, mais met en avant le contenu.
        </p>
      </div>

      <div className="gallery-grid carousel-mode">
        <Carousel images={images} onItemClick={handleImageClick} />
      </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal selectedImage={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </section>
  );
};

export default AsymmetricalGallery;

// Simple horizontal carousel component using scroll-snap
function Carousel({ images, onItemClick }) {
  const trackRef = React.createRef();

  const scrollByAmount = (dir = 1) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.round(track.clientWidth * 0.8) * dir;
    track.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleKey = (e) => {
    if (e.key === 'ArrowRight') scrollByAmount(1);
    if (e.key === 'ArrowLeft') scrollByAmount(-1);
  };

  return (
    <div className="carousel" onKeyDown={handleKey}>
      <button className="carousel-btn prev" onClick={() => scrollByAmount(-1)} aria-label="Previous">‹</button>
      <div className="carousel-track" ref={trackRef} tabIndex={0} role="list">
        {images.map((image, idx) => (
          <div className="carousel-item" role="listitem" key={`c-${idx}`}>
            <button type="button" className="gallery-card-button" onClick={() => onItemClick(image)} aria-label={`Open project ${image.titre || idx}`}>
              <MediaPreview source={image.src} alt={image.titre} className="gallery-image" />
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
      <button className="carousel-btn next" onClick={() => scrollByAmount(1)} aria-label="Next">›</button>
    </div>
  );
}
