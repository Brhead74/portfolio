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
    <section id="work" className="mx-auto max-w-7xl px-0 py-6 sm:py-10">
      <div className="mb-5 flex flex-col gap-3 px-2 sm:mb-6 sm:px-0">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] sm:text-xs">Selected work</p>
        <h2 className="text-[1.6rem] font-black tracking-tight text-[var(--foreground)] sm:text-3xl">Mes projets</h2>
        <p className="max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
          Une sélection courte et lisible de travaux 2D, 3D, jeu et interface. Chaque carte reste simple, mais met en avant le contenu.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_16px_60px_rgba(15,23,42,0.08)] ${
              index === 0
                ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                : index === 2
                ? "sm:row-span-2"
                : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.titre || `Gallery Item ${index + 1}`}
              loading="lazy"
              className="h-56 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-[1.04] sm:h-64 lg:h-full"
              onClick={() => handleImageClick(image)}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <h3 className="text-base font-bold sm:text-lg">{image.titre || "Untitled"}</h3>
              <p className="mt-1 text-sm text-white/80">{image.details}</p>
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
