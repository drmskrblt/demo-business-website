import React, { useState, useEffect } from "react";

import { FaCompassDrafting } from "react-icons/fa6";
import { FaTabletScreenButton } from "react-icons/fa6";
import { IoMdCloudDone } from "react-icons/io";

import SlideFirst from "../assets/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg";
import SlideSecond from "../assets/scott-graham-5fNmWej4tAA-unsplash.jpg";
import SlideThird from "../assets/nrd-c3tNiAb098I-unsplash.jpg";

// import AboutUsImage from "../assets"

const Home = () => {
  const STYLE = {
    sectionContainer: `bg-[#121212] w-full mx-auto p-6 text-white`,
  };

  const CARD = {
    container: `grid gap-6 md:grid-cols-2 lg:grid-cols-3`,
    box: `bg-[#161616] flex flex-col items-center p-4 rounded-lg shadow-md text-center text-white tracking-wide`,
    icon: `text-[50px]`,
    title: `text-2xl text-white font-bold m-2`,
    button: `btn block mt-4 py-2 px-4 text-blue-200 font-bold border-2 border-blue-200 bg-transparent rounded-md text-center tracking-normal`,
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

  return (
    <>
      {/* HERO SECTION */}

      <div>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="h-screen w-full bg-cover bg-center  text-white flex items-center justify-center relative text-center"
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

      {/* CARD SECTION */}
      <section className={STYLE.sectionContainer}>
        <div className={CARD.container}>
          {/* <!-- IT-Strategieberatung --> */}
          <div className={CARD.box}>
            <div className={CARD.icon}>
              <FaCompassDrafting />
            </div>
            <h3 className={CARD.title}>IT-Strategieberatung</h3>
            <p>
              Entwickeln Sie eine zukunftssichere IT-Strategie, die mit Ihrem
              Unternehmenswachstum skaliert. Unsere Experten helfen Ihnen,
              Technologien zu identifizieren, die Ihre Geschäftsziele
              unterstützen und Wettbewerbsvorteile schaffen.
            </p>
            <a href="#fahrservice" className={CARD.button}>
              Strategie entwickeln
            </a>
          </div>

          {/* <!-- Service 2 --> */}
          <div className={CARD.box}>
            <div className={CARD.icon}>
              <FaTabletScreenButton />
            </div>
            <h3 className={CARD.title}>Digitalisierungsberatung</h3>
            <p>
              Transformieren Sie Ihr Geschäft durch digitale Innovation. Unsere
              Beratung unterstützt Sie bei der Digitalisierung Ihrer
              Geschäftsprozesse, der Einführung neuer Technologien und der
              Schaffung digitaler Erlebnisse, die Ihre Kunden begeistern und
              Ihre Effizienz steigern.
            </p>
            <a href="#chauffeur-service" className={CARD.button}>
              Jetzt digitalisieren
            </a>
          </div>

          {/* <!-- Cloud-Computing-Beratung --> */}
          <div className={CARD.box}>
            <div className={CARD.icon}>
              <IoMdCloudDone />
            </div>
            <h3 className={CARD.title}>Cloud-Computing-Beratung</h3>
            <p>
              Nutzen Sie die Kraft der Cloud, um Ihre IT-Infrastruktur zu
              optimieren und zu skalieren. Wir bieten maßgeschneiderte
              Cloud-Lösungen, die Flexibilität, Kosteneffizienz und Innovation
              fördern, um Ihre Geschäftsprozesse zu transformieren.
            </p>
            <a href="#personal-fuer-events" className={CARD.button}>
              In die Cloud wechseln
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="h-screen w-full">
        <div
          className="h-1/2 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SlideSecond})` }}
        ></div>
        <div className="bg-[#121212] h-1/2 w-full">
          <div className="flex flex-col items-center text-center p-4 text-white gap-2 tracking-wide">
            <h2 className="text-3xl font-bold tracking-wider">Wir beraten Sie!</h2>
            <span>______________</span>
            <p className="text-2xl">Willkommen bei NextVision</p>
            <p>
              Wir von NextVision sind Ihr vertrauenswürdiger Partner im Bereich
              IT-Beratungen. Mit einem Team aus erfahrenen Experten bieten wir
              maßgeschneiderte Lösungen, die genau auf Ihre geschäftlichen
              Anforderungen zugeschnitten sind. Ob es um die Optimierung Ihrer
              IT-Infrastruktur geht, die Einführung neuer Technologien oder um
              strategische Beratung zur Digitalisierung Ihrer Geschäftsprozesse
              – wir stehen Ihnen mit Rat und Tat zur Seite, um Ihren Erfolg in
              der digitalen Welt zu sichern.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
