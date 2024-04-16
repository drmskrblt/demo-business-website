import { FaCheck } from "react-icons/fa6";
import { consultingPricing, webdesignPricing } from "../data/planData";
import { Reveal } from "../utils/Reveal";

const Products = () => {
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
                <Reveal key={index}>
                  <div className="relative p-6 border border-gray-200 rounded-lg bg-[#161616] shadow-sm flex flex-col">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {item.heading}
                    </h3>
                    <p className="flex items-baseline text-white mb-4">
                      <span className="text-4xl font-extrabold">
                        {item.preis}
                      </span>
                      {/* <span className="text-sm font-semibold ml-1">
                        /monatlich
                      </span> */}
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
                </Reveal>
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
                <Reveal key={index}>
                  <div className="p-6 border-2 border-gray-200 rounded-xl bg-[#161616] shadow-lg flex flex-col">
                    <h3 className="text-white text-xl font-semibold mb-1">
                      {item.heading}
                    </h3>
                    <p className="flex items-baseline text-white mb-4">
                      <span className="text-4xl font-extrabold">
                        {item.preis}
                      </span>
                      {/* <span className="text-sm font-semibold ml-1">
                        /monatlich
                      </span> */}
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
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
