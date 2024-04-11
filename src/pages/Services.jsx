import { useSpring, animated } from "@react-spring/web";

import { FaCompassDrafting } from "react-icons/fa6";
import { FaTabletScreenButton } from "react-icons/fa6";
import { IoMdCloudDone } from "react-icons/io";

const Services = () => {
  const STYLE = {
    sectionContainer: `bg-[#121212] w-full p-6 text-white`,
    sectionHeading: `text-4xl my-4 text-center`,
    sectionDescription: `tracking-wide my-2`,
  };

  const CARD = {
    container: `grid gap-6 py-4 md:grid-cols-2 lg:grid-cols-3`,
    box: `bg-[#161616] flex flex-col items-center p-3 rounded-lg shadow-md text-center text-white tracking-wide`,
    icon: `text-[50px]`,
    title: `text-2xl text-white font-bold m-2`,
    button: `btn block mt-4 py-2 px-4 text-blue-200 font-bold border-2 border-blue-200 bg-transparent rounded-md text-center tracking-normal`,
  };
  const slideIn = useSpring({
    from: { transform: "translateX(-100%)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { tension: 1000, friction: 60 },
  });

  return (
    <>
      {/* CARD SECTION */}
      <section className={STYLE.sectionContainer}>
        <animated.div style={slideIn} className={CARD.container}>
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
            <a href="/service" className={CARD.button}>
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
            <a href="/service" className={CARD.button}>
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
            <a href="/service" className={CARD.button}>
              In die Cloud wechseln
            </a>
          </div>
        </animated.div>
      </section>
    </>
  );
};

export default Services;
