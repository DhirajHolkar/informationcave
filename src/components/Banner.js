// components/Banner.js
import Image from "next/image";
import "../styles/banner.css";

export default function Banner() {
  return (
    <div className="bannerContainer">
      <Image
        src="/japan.avif"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="overlay">
        <div className="banner-title">Information is Freedom</div>
        <p className="banner-text">Explore Fascinating Science Facts and Weird Wonders of the World</p>
      </div>
    </div>
  );
}
