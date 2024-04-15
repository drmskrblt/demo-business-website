import { FaCheck } from "react-icons/fa6";

const Products = () => {
  const consultingPricing = [
    {
      heading: "Basic",
      preis: "400€",
      beschreibung: {
        1: "Einstündige Beratungssitzung via Telefon oder Video",
        2: "Einführung in die Grundlagen der Branchenspezifikationen",
        3: "E-Mail-Support für Nachfragen bis zu einer Woche nach der Sitzung",
      },
    },
    {
      heading: "Advanced",
      preis: "899€",
      beschreibung: {
        1: "Bis zu drei Beratungssitzungen jeweils 1 Stunde",
        2: "Analyse bestehender Geschäftsstrategien und Vorschläge zur Optimierung",
        3: "Bereitstellung von Vorlagen und Checklisten für spezifische Geschäftsprozesse",
        4: "Zwei Wochen E-Mail- und Telefon-Support nach den Sitzungen",
        5: "Ein detaillierter schriftlicher Bericht der Analyseergebnisse",
      },
    },
    {
      heading: "Premium",
      preis: "2000€",
      beschreibung: {
        1: "Umfassende Beratung mit bis zu fünf Sitzungen jeweils 1 Stunde",
        2: "Detaillierte Branchen- und Wettbewerbsanalyse",
        3: "Entwicklung individueller Strategien zur Geschäftsoptimierung und Wachstumsförderung",
        4: "Einmonatiger Vollzugriff auf alle Beratungsressourcen und -tools",
        5: "Kontinuierlicher Support über einen Monat via E-Mail und Telefon",
        6: "Präsentation und Diskussion der Ergebnisse in einer Abschlusssitzung",
        7: "Nachbereitungs- und Follow-up-Planung",
      },
    },
  ];

  const webdesignPricing = [
    {
      heading: "Basic",
      preis: "400€",
      beschreibung: {
        1: "Erstellung einer einfachen statischen Website mit einer Seite",
        2: "Basis-Design nach vorgegebenen Templates",
        3: "Grundlegende SEO-Optimierung",
        4: "Hosting-Einrichtung und Domain-Registrierung (Hostingkosten nicht inbegriffen)",
      },
    },
    {
      heading: "Advanced",
      preis: "899€",
      beschreibung: {
        1: "Design und Entwicklung einer dynamischeren Website mit bis zu fünf Seiten",
        2: "Anpassbare Templates und Einbindung von Multimedia-Elementen",
        3: "Erweiterte SEO-Optimierung und Google Analytics-Integration",
        4: "Social Media Integration und einfache Content Management System (CMS) Einrichtung",
        5: "Zwei Entwurfsrevisionen inklusive",
      },
    },
    {
      heading: "Premium",
      preis: "2000€",
      beschreibung: {
        1: "Entwicklung einer umfangreichen Unternehmenswebsite mit maßgeschneidertem Design",
        2: "Integration von fortgeschrittenen Funktionen wie E-Commerce, personalisiertem Benutzerbereich",
        3: "Hochleistungs-SEO und fortschrittliche Analysetools",
        4: "Vollständige Responsivität für alle Geräte",
        5: "Content-Erstellung und Management für Erstcontent",
        6: "Dauerhafter technischer Support und drei Entwurfsrevisionen",
        7: "Schulung zur Nutzung und Verwaltung des CMS",
      },
    },
  ];

  return (
    <>
      {/* IT-Beratung */}

      <section className="bg-[#121212] h-full p-4">
        {/* Ueberschrift Produkte */}
        <div className="text-center text-white p-4">
          <h1 className="font-bold text-3xl">IT Beratung</h1>
          <p className=" mt-3 mx-auto">Ein Plan für IT-Beratungen auswählen</p>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-10">
            {consultingPricing.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative p-6 border border-gray-200 rounded-lg bg-[#161616] shadow-sm flex flex-col"
                >
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {item.heading}
                  </h3>
                  <p className="flex items-baseline text-white mb-4">
                    <span className="text-4xl font-extrabold">
                      {item.preis}
                    </span>
                    <span className="text-sm font-semibold ml-1">
                      /monatlich
                    </span>
                  </p>
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Bestellen
                  </button>

                  {/* Plan Beschreibung */}
                  <ul className="mt-6 overflow-hidden">
                    {Object.values(item.beschreibung).map(
                      (beschreibung, index) => (
                        <li
                          key={index}
                          className="mb-3 flex items-center text-gray-400"
                        >
                          <FaCheck className="text-green-500 mr-3" />
                          {beschreibung}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEBDESIGN */}

      <section className="bg-[#121212] w-full p-6 text-white">
        {/* Ueberschrift Produkte */}
        <div className="text-center text-white p-4">
          <h1 className="font-bold text-3xl">Webdesign & Erstellung</h1>
          <p className=" mt-3 mx-auto">
            Ein Plan für Webdesign & Erstellung auswählen
          </p>
        </div>
        <div className="p-4">
          <div className="grid gap-8 grid-cols-1 mt-10">
            {webdesignPricing.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-6 border-2 border-gray-200 rounded-xl bg-[#161616] shadow-lg flex flex-col"
                >
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {item.heading}
                  </h3>
                  <p className="flex items-baseline text-white mb-4">
                    <span className="text-4xl font-extrabold">
                      {item.preis}
                    </span>
                    <span className="text-sm font-semibold ml-1">
                      /monatlich
                    </span>
                  </p>
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Bestellen
                  </button>

                  {/* Plan Beschreibung */}
                  <ul className="mt-6">
                    {Object.values(item.beschreibung).map(
                      (beschreibung, index) => (
                        <li
                          key={index}
                          className="mb-3 flex items-center text-gray-400"
                        >
                          <FaCheck className="mr-2 text-[24px] text-green-700" />
                          <p>{beschreibung}</p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
