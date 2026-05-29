import React, { useEffect, useState } from "react";
import "./Modal.css";

const videoPattern = /\.(mp4|webm|ogg)(\?.*)?$/i;

const isVideoSource = (source) => videoPattern.test(source || "");

const normalizeSources = (source) => {
  if (!source) return [];
  return Array.isArray(source) ? source : [source];
};

const renderMedia = (source, alt, className) => {
  if (!source) return null;

  if (isVideoSource(source)) {
    return (
      <video
        src={source}
        className={className}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        title={alt}
      />
    );
  }

  return <img src={source} alt={alt} className={className} />;
};

const Modal = ({ selectedImage, closeModal }) => {
  const primarySource = selectedImage
    ? selectedImage.src || normalizeSources(selectedImage.src2 || selectedImage.other)[0] || ""
    : "";

  const mediaSources = selectedImage
    ? [selectedImage.src, ...normalizeSources(selectedImage.src2 || selectedImage.other)].filter(Boolean)
    : [];

  const [mainSrc, setMainSrc] = useState(primarySource);

  useEffect(() => {
    setMainSrc(primarySource);
  }, [primarySource]);

  // close on Escape locally (more reliable across breakpoints)
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeModal]);

  if (!selectedImage) return null;

  return (
    <div
      className="project-modal"
      onClick={closeModal}
      onPointerDown={closeModal}
      onTouchStart={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="project-modal-panel"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <button
          className="project-modal-close"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          &times;
        </button>

        <div className="project-modal-layout">
          <div className="project-modal-image-shell">
            <div className="project-modal-image-wrap">
              {renderMedia(
                mainSrc,
                selectedImage.titre || "Modal Image",
                "project-modal-image"
              )}
            </div>

            {mediaSources.length > 1 && (
              <div className="project-modal-thumbs" role="list">
                {mediaSources.map((source) => (
                  <button
                    key={source}
                    type="button"
                    role="listitem"
                    className={`project-modal-thumb ${source === mainSrc ? "project-modal-thumb-selected" : ""}`}
                    onClick={() => setMainSrc(source)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setMainSrc(source); }}
                    aria-pressed={source === mainSrc}
                  >
                    {renderMedia(source, `Preview ${source}`, "project-modal-thumb-media")}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="project-modal-content">
            <div className="project-modal-copy">
              <p className="project-modal-kicker">Projet</p>
              {selectedImage.titre && (
                <h2 id="modal-title" className="project-modal-title">
                  {selectedImage.titre}
                </h2>
              )}

              {selectedImage.details && (
                <p id="modal-description" className="project-modal-description">
                  {selectedImage.details}
                </p>
              )}
            </div>

            {Array.isArray(selectedImage.stack) && selectedImage.stack.length > 0 && (
              <div className="project-modal-stack-block">
                <p className="project-modal-stack-title">Technologies</p>
                <div className="project-modal-stack-list">
                  {selectedImage.stack.map((item) => (
                    <span key={item} className="project-modal-stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="project-modal-actions">
              {selectedImage.link ? (
                <a
                  href={selectedImage.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-modal-button project-modal-button-primary"
                >
                  Ouvrir le projet
                </a>
              ) : (
                <span className="project-modal-badge">
                  Aperçu uniquement
                </span>
              )}

              <button
                type="button"
                onClick={closeModal}
                className="project-modal-button project-modal-button-secondary"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
