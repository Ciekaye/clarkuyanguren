import Image from "next/image";

const logos = [
  { src: "/Adobe Illustrator.png", alt: "Adobe Illustrator" },
  { src: "/Adobe Photoshop.png", alt: "Adobe Photoshop" },
  { src: "/Figma.png", alt: "Figma" },
  { src: "/Adobe Indesign.png", alt: "Adobe InDesign" },
  { src: "/canva.png", alt: "Canva" },
  { src: "/Adobe Lightroom.png", alt: "Adobe Lightroom" },
];

export default function Tools() {
  return (
    <div className="tools-section">
      <div className="tools-label">Tools I use</div>
      <div className="tools-marquee">
        <div className="tools-track">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="tools-logo-wrap">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={120}
                className="tools-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
