import CarouselComponent from "../components/CarouselComponent";

import HeroImage from "../assets/matthieu-beaumont-iYnpYeyu57k-unsplash.jpg";

const Home = () => {
  const STYLE = {
    heroContainer: `h-[500px] relative`,
    sectionContainer: `bg-[#121212] w-full mx-auto p-6 text-white`,
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className={STYLE.heroContainer}>
        <img src={HeroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-4 text-center">
          <h3 className="text-white text-4xl font-bold my-4">NextVision</h3>
          <p className="text-white text-xl tracking-wide">
            Ihr verlässlicher Partner aus Hamburg
          </p>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section className={STYLE.sectionContainer}>
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
              wir stehen Ihnen mit Rat und Tat zur Seite, um Ihren Erfolg in der
              digitalen Welt zu sichern.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE CAROUSEL SECTION */}
      <section>
        <CarouselComponent />
      </section>
    </>
  );
};

export default Home;
