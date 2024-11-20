import Image from "next/image";
import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";
import Contact from "./_componnents/Contact";

export default function Home() {
  return (
    <>
      <div>
        <img src="Header.png" alt="big image" className="mb-12"/>
        
        <AsymmetricalGallery />

        <Contact />
      </div>
    </>
  );
}
