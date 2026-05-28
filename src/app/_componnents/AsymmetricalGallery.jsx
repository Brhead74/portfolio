'use client';
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { data } from "./data";
import "./AsymmetricalGallery.css";

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

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-card ${
              index === 0
                ? "gallery-card-large"
                : index === 2
                ? "gallery-card-tall"
                : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.titre || `Gallery Item ${index + 1}`}
              loading="lazy"
              className="gallery-image"
              onClick={() => handleImageClick(image)}
            />
            <div className="gallery-overlay" />
            <div className="gallery-caption">
              <h3 className="gallery-card-title">{image.titre || "Untitled"}</h3>
              <p className="gallery-card-details">{image.details}</p>
            </div>
          </div>
        ))}

        {/* Modal */}
        {isModalOpen && (
          <Modal selectedImage={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </section>
  );
};

export default AsymmetricalGallery;
