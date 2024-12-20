import Image from "next/image";
import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";
import Contact from "./_componnents/Contact";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <img src="Header.png" alt="big image" className="mb-12 w-full"/>
        
        <AsymmetricalGallery />

        <Contact />
      </div>
    </>
  );
}
