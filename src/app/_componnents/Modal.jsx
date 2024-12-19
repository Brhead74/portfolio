import React from "react";

const Modal = ({ selectedImage, closeModal }) => {
  // Return null if no image is selected
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 cursor-pointer"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="relative bg-white p-4 rounded-lg max-w-3xl w-full max-h-full overflow-auto pointer-events-auto cursor-default"
        onClick={(e) => e.stopPropagation()} // Prevent click propagation
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-black text-3xl transition-transform transform hover:scale-110"
          onClick={closeModal}
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={selectedImage.src}
          alt={selectedImage.titre || "Modal Image"}
          className="w-full h-auto max-h-96 object-contain"
        />

        {/* Title */}
        {selectedImage.titre && (
          <h2 id="modal-title" className="text-xl font-bold mt-4">
            {selectedImage.titre}
          </h2>
        )}

        {/* Description */}
        {selectedImage.details && (
          <p id="modal-description" className="mt-2">
            {selectedImage.details}
          </p>
        )}
      </div>
    </div>
  );
};

export default Modal;
