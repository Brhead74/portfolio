import React from 'react';

const Modal = ({ selectedImage, closeModal }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 "
            onClick={closeModal}
        >
            <div
                className="bg-white p-6 md:p-10 rounded-2xl shadow-lg w-11/12 max-w-lg relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
            >
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">{selectedImage.titre || "Untitled"}</h2>
                <img
                    src={selectedImage.src}
                    alt="Selected project"
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md mb-6 transform transition-transform duration-500 hover:scale-105"
                />
                <p className="text-lg text-gray-700 mb-6">{selectedImage.details}</p>

                <button
                    className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-red-600 transition-colors duration-200 ease-in-out"
                    onClick={closeModal}
                    aria-label="Close modal"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Modal;
