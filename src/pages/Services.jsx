// Imports for Animation
import { useSpring, animated } from "@react-spring/web";

// Icons for Cards
import {
  FaCompassDrafting,
  FaLaptopCode,
  FaTabletScreenButton,
} from "react-icons/fa6";
import { IoMdCloudDone } from "react-icons/io";

const Services = () => {
  // Styling of the section
  const STYLE = {
    sectionContainer: `bg-[#121212] w-full p-6 text-white`,
  };

  const CARD = {
    container: `grid gap-6 py-4 md:grid-cols-2 lg:grid-cols-3`,
    box: `bg-[#161616] flex flex-col items-center p-3 rounded-lg shadow-md text-center text-white tracking-wide`,
    icon: `text-[50px]`,
    title: `text-2xl text-white font-bold m-2`,
    button: `btn block mt-4 py-2 px-4 text-blue-200 font-bold border-2 border-blue-200 bg-transparent rounded-md text-center tracking-normal`,
  };

  const slideInAnimation = useSpring({
    from: { transform: "translateY(-100%)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { tension: 1000, friction: 60 },
  });

  // Card Information
  const serviceCards = [
    {
      icon: <FaCompassDrafting />,
      title: "IT-Strategieberatung",
      description:
        "Entwickeln Sie eine zukunftssichere IT-Strategie, die mit Ihrem Unternehmenswachstum skaliert. Unsere Experten helfen Ihnen, Technologien zu identifizieren, die Ihre Geschäftsziele unterstützen und Wettbewerbsvorteile schaffen.",
      link: "/service",
      buttonText: "Strategie entwickeln",
    },
    {
      icon: <FaTabletScreenButton />,
      title: "Digitalisierungsberatung",
      description:
        "Transformieren Sie Ihr Geschäft durch digitale Innovation. Unsere Beratung unterstützt Sie bei der Digitalisierung Ihrer Geschäftsprozesse, der Einführung neuer Technologien und der Schaffung digitaler Erlebnisse, die Ihre Kunden begeistern und Ihre Effizienz steigern.",
      link: "/service",
      buttonText: "Jetzt digitalisieren",
    },
    {
      icon: <IoMdCloudDone />,
      title: "Cloud-Computing-Beratung",
      description:
        "Nutzen Sie die Kraft der Cloud, um Ihre IT-Infrastruktur zu optimieren und zu skalieren. Wir bieten maßgeschneiderte Cloud-Lösungen, die Flexibilität, Kosteneffizienz und Innovation fördern, um Ihre Geschäftsprozesse zu transformieren.",
      link: "/service",
      buttonText: "In die Cloud wechseln",
    },
    {
      icon: <FaLaptopCode />,
      title: "Webdesign und Website-Erstellung",
      description:
        "Setzen Sie Ihr Unternehmen online ins richtige Licht mit maßgeschneiderten Webdesign-Lösungen. Wir entwickeln Websites, die nicht nur optisch beeindrucken, sondern auch auf die Bedürfnisse Ihrer Kunden zugeschnitten sind, um Ihre Markenidentität effektiv zu kommunizieren und Ihre Geschäftsziele zu erreichen.",
      link: "/service",
      buttonText: "Webseite gestalten lassen",
    },
  ];

  return (
    <>
      {/* CARD SECTION */}
      <section className={STYLE.sectionContainer}>
        <div className={CARD.container}>
          {/* Map through Card Information array */}
          {serviceCards.map((card, index) => {
            return (
              <animated.div
                style={slideInAnimation}
                key={index}
                className={CARD.box}
              >
                <div className={CARD.icon}>{card.icon}</div>
                <h3 className={CARD.title}>{card.title}</h3>
                <p>{card.description}</p>
                <a href={CARD.link} className={CARD.button}>
                  {card.buttonText}
                </a>
              </animated.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
