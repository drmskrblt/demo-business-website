// Icons for Cards
import {
  FaCompassDrafting,
  FaLaptopCode,
  FaTabletScreenButton,
} from "react-icons/fa6";
import { IoMdCloudDone } from "react-icons/io";

// Card Information
export const serviceCards = [
  {
    icon: <FaLaptopCode />,
    title: "Webdesign und Webseiten-Erstellung",
    description:
      "Setzen Sie Ihr Unternehmen online ins richtige Licht mit maßgeschneiderten Webdesign-Lösungen. Wir entwickeln Websites, die nicht nur optisch beeindrucken, sondern auch auf die Bedürfnisse Ihrer Kunden zugeschnitten sind, um Ihre Markenidentität effektiv zu kommunizieren und Ihre Geschäftsziele zu erreichen.",
    link: "/service",
    buttonText: "Webseite gestalten lassen",
  },
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
];
