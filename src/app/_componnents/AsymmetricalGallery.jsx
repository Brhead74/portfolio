import React from "react";

const AsymmetricalGallery = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((src, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            index === 0
              ? "col-span-2 row-span-2"
              : index === 2
              ? "row-span-2"
              : "col-span-1"
          }`}
        >
          <img
            src={src}
            alt={`Gallery Item ${index + 1}`}
            className="w-full h-full object-cover"
          />
          
        </div>
      ))}
    </div>
  );
};

export default AsymmetricalGallery;
