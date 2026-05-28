import React from "react";
import "./Modal.css";

const Modal = ({ selectedImage, closeModal }) => {
  // Return null if no image is selected
  if (!selectedImage) return null;

  return (
    <div
      className="project-modal"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="project-modal-panel"
        onClick={(e) => e.stopPropagation()}
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
              <img
                src={selectedImage.src}
                alt={selectedImage.titre || "Modal Image"}
                className="project-modal-image"
              />
            </div>
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
