import React, { useState, useEffect } from "react";
import MobileCarousel from "../components/MobileCarousel";

import SlideFirst from "../assets/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg";
import SlideSecond from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";
import SlideThird from "../assets/nrd-c3tNiAb098I-unsplash.jpg";

// import AboutUsImage from "../assets"

const Home = () => {
  const STYLE = {
    heroContainer: `h-80 bg-blue`,
    sectionContainer: `bg-[#121212] w-full mx-auto p-6 text-white`,
  };

  // Bilder für die Slideshow
  const slides = [
    { id: 1, text: "Digitalisierung", bg: `url(${SlideFirst})` },
    { id: 2, text: "Cloud", bg: `url(${SlideSecond})` },
    { id: 3, text: "Strategie", bg: `url(${SlideThird})` },
  ];

  // Änderung der Slideshow Bilder
  const [currentSlide, setCurrentSlide] = useState(0);

  // Logik - Bildrotation - 5 sek pro Bild
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 10000); // Wechseln der Slides alle 5 Sekunden

    return () => clearInterval(interval);
  }, [slides.length]);

  const carouselItems = [
    {
      image: SlideFirst,
      alt: "Server Raum",
      heading: "IT-Strategieberatung",
      description: `Entwickeln Sie eine zukunftssichere IT-Strategie, die mit Ihrem Unternehmenswachstum skaliert. Unsere Experten helfen Ihnen, Technologien zu identifizieren, die Ihre Geschäftsziele unterstützen und Wettbewerbsvorteile schaffen.`,
      buttonText: "Erfahren Sie mehr",
    },
    {
      image: SlideSecond,
      alt: "Server Raum",
      heading: "Digitalisierungsberatung",
      description: `Transformieren Sie Ihr Geschäft durch digitale Innovation. UnsereBeratung unterstützt Sie bei der Digitalisierung IhrerGeschäftsprozesse, der Einführung neuer Technologien und derSchaffung digitaler Erlebnisse, die Ihre Kunden begeistern undIhre Effizienz steigern.`,
      buttonText: "Erfahren Sie mehr",
    },
    {
      image: SlideThird,
      alt: "Server Raum",
      heading: `Cloud-Computing-Beratung`,
      description: `Nutzen Sie die Kraft der Cloud, um Ihre IT-Infrastruktur zu
    optimieren und zu skalieren. Wir bieten maßgeschneiderte
    Cloud-Lösungen, die Flexibilität, Kosteneffizienz und Innovation
    fördern, um Ihre Geschäftsprozesse zu transformieren.`,
      buttonText: "Erfahren Sie mehr",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className={STYLE.heroContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="h-full w-full bg-cover bg-center  text-white flex items-center justify-center relative text-center"
            style={{
              backgroundImage: slide.bg,
              display: index === currentSlide ? "flex" : "none",
            }}
          >
            <div className="p-4 bg-black bg-opacity-50 backdrop-blur-sm">
              <h1 className="text-4xl">Willkommen bei Business</h1>
              <p className="text-2xl">Ihr verlässlicher Partner aus Hamburg</p>
            </div>
          </div>
        ))}
      </div>

      {/* ABOUT US SECTION */}
      <section className={STYLE.sectionContainer}>
        <div
          className="h-1/2 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SlideSecond})` }}
        ></div>
        <div className="bg-[#121212] h-1/2 w-full">
          <div className="flex flex-col items-center text-center p-4 text-white gap-2 tracking-wide">
            <h2 className="text-3xl font-bold tracking-wider">
              Wir beraten Sie!
            </h2>
            <span>______________</span>
            <p className="text-2xl">Erfahren Sie mehr über uns</p>
            <span>______________</span>
            <p>
              Wir von NextVision sind Ihr vertrauenswürdiger Partner im Bereich
              IT-Beratungen. Mit einem Team aus erfahrenen Experten bieten wir
              maßgeschneiderte Lösungen, die genau auf Ihre geschäftlichen
              Anforderungen zugeschnitten sind. Ob es um die Optimierung Ihrer
              IT-Infrastruktur geht, die Einführung neuer Technologien oder um
              strategische Beratung zur Digitalisierung Ihrer Geschäftsprozesse
              wir stehen Ihnen mit Rat und Tat zur Seite, um Ihren Erfolg in
              der digitalen Welt zu sichern.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE CARUSEL SECTION */}
      <section className="w-full py-8">
        <MobileCarousel items={carouselItems} />
      </section>
    </>
  );
};

export default Home;
