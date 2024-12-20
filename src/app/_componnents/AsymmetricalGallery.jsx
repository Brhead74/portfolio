'use client';
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { data } from "./data";

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
    <div id="Gallery" className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 md:text-3xl">Mes Projets</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${
              index === 0
                ? "md:col-span-2 md:row-span-2 xl:col-span-2" // larger span on xl screens
                : index === 2
                ? "md:row-span-2"
                : "md:col-span-1"
            }`}
          >
            <img
              src={image.src}
              alt={image.titre || `Gallery Item ${index + 1}`}
              loading="lazy"
              className="w-full h-48 md:h-full object-cover cursor-pointer transition-transform hover:scale-110"
              onClick={() => handleImageClick(image)}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
            <h2 className="absolute bottom-8 left-4 text-sm md:text-lg font-bold text-white">
              {image.titre || "Untitled"}
            </h2>
            <p className="absolute bottom-4 left-4 text-xs md:text-sm text-white">{image.details}</p>
          </div>
        ))}

        {/* Modal */}
        {isModalOpen && (
          <Modal selectedImage={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default AsymmetricalGallery;
