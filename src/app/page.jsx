import Image from "next/image";
import AsymmetricalGallery from "./_componnents/AsymmetricalGallery";

export default function Home() {
  return (
    <>
      <div>
        <img src="Header.png" alt="big image" />
        <AsymmetricalGallery />
      </div>
    </>
  );
}
