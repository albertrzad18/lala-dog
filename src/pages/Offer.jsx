import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import FlashLogoTransition from "../components/FlashLogoTransition";

const Offer = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const [activeTab, setActiveTab] = useState("offer");

  const openLightbox = (src) => {
    setLightboxImg(src);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "offer":
        return (
          <>
            <FadeInOut>
              <img
                src="dogs/lookingDog1.jpg"
                alt="Dog Left"
                className="hidden md:block absolute -left-48 top-1/3 lg:top-86 w-64 h-auto z-20 transform scale-200"
              />
              <img
                src="dogs/lookingDog2.jpg"
                alt="Dog Right"
                className="hidden md:block absolute top-3/5 lg:top-210 md:right-12 w-64 h-auto transform scale-200"
              />
              <div
                className="px-6 md:px-32 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-12 lg:gap-16 font-serif mb-8 pb-16"
                translate="no"
              >
                <div
                  className="w-full h-full bg-purple-300 rounded-xl font-semibold p-8 space-y-4.5  flex flex-col items-center justify-center text-center text-white
          "
                >
                  <h2 className="text-2xl md:text-4xl rowdies-bold text-[#7e54f0] mb-4">
                    Dlaczego Lala Dog?
                  </h2>
                  <p className="text-white rowdies-regular">
                    W Lala Dog najważniejsze jest dla mnie to, żeby Twój pupil
                    czuł się bezpiecznie i spokojnie. Każdego psiaka traktuję
                    indywidualnie, bez pośpiechu – pracuję w jego tempie,
                    poświęcając tyle czasu, ile potrzeba.
                  </p>
                  <p className="text-white rowdies-regular">
                    Dbam o to, by wizyta przebiegła w możliwie najmniej
                    stresujący sposób. Pomaga w tym nie tylko przyjazna
                    atmosfera i cierpliwość, ale też profesjonalny sprzęt –
                    ciche suszarki i precyzyjne narzędzia, które pozwalają
                    skrócić czas zabiegów do minimum, nie tracąc przy tym na
                    jakości.
                  </p>
                  <p className="text-white rowdies-regular">
                    Używam wyłącznie certyfikowanych kosmetyków groomerskich,
                    dostosowanych do potrzeb każdego psa – uwzględniam rodzaj
                    sierści, stan skóry oraz indywidualne wymagania
                    pielęgnacyjne.
                  </p>
                  <p className="text-white rowdies-regular">
                    Korzystam z kosmetyków posiadających certyfikat{" "}
                    <strong>Safe Pet Cosmetics®</strong>
                    (Certyfikat nr 18001), co daje pewność, że są one
                    bezpieczne, delikatne i skuteczne.
                  </p>
                </div>

                <div className="w-full md:w-1/2 lg:w-3/4 bg-purple-300 rounded-xl p-8 text-gray-800 h-full flex flex-col items-center justify-center text-center z-20">
                  <div>
                    <h2 className="text-2xl md:text-4xl rowdies-bold text-[#7e54f0] mb-4 ">
                      Oferta
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-xl">
                      <li className="rowdies-regular text-white">
                        Kąpiele i pielęgnacja sierści
                      </li>
                      <li className="rowdies-regular text-white">
                        SPA dla psów
                      </li>
                      <li className="rowdies-regular text-white">
                        Strzyżenie psów
                      </li>
                      <li className="rowdies-regular text-white">Trymowanie</li>
                      <li className="rowdies-regular text-white">
                        Wizyta szczeniaczkowa
                      </li>
                      <li className="rowdies-regular text-white">
                        Rozczesywanie skołtunionej sierści
                      </li>
                      <li className="rowdies-regular text-white">
                        Czyszczenie oczu i uszu
                      </li>
                      <li className="rowdies-regular text-white">
                        Obcinanie pazurków
                      </li>
                      <li className="rowdies-regular text-white">
                        Usługa express
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInOut>
          </>
        );
      case "priceList":
        return (
          <>
            <FadeInOut>
              <div
                className="mt-24 hidden md:flex flex-col items-center justify-center px-6 md:px-32"
                translate="no"
              >
                <div className="pl-128 flex flex-row items-center justify-center mb-8">
                  <img
                    src="priceList/cennik1.jpg"
                    alt="Price List"
                    className="mt-8 max-w-xl rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0] scale-[3.2] xl:scale-[1.2] "
                    onClick={() => openLightbox("priceList/cennik1.jpg")}
                  />
                </div>
              </div>
              {lightboxImg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                  >
                    <img
                      src={lightboxImg}
                      alt="Large preview"
                      className="max-w-full max-h-full rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </FadeInOut>
            <FadeInOut>
              <div className="mt-24 hidden md:flex  flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center mb-8">
                  <img
                    src="priceList/cennik2.jpg"
                    alt="Price List"
                    className="mt-8 mr-160 max-w-xl rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0] scale-[3.2] xl:scale-[1.2]"
                    onClick={() => openLightbox("priceList/cennik2.jpg")}
                  />
                </div>
              </div>
              {lightboxImg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                  >
                    <img
                      src={lightboxImg}
                      alt="Large preview"
                      className="max-w-full max-h-full rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </FadeInOut>

            <div className="flex flex-col md:hidden -mt-1">
              <FadeInOut>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center mb-8">
                    <img
                      src="priceList/cennik1.jpg"
                      alt="Price List"
                      className="max-w-l rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0]"
                      onClick={() => openLightbox("priceList/cennik1.jpg")}
                    />
                  </div>
                </div>
                {lightboxImg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div
                      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                      onClick={closeLightbox}
                    >
                      <img
                        src={lightboxImg}
                        alt="Large preview"
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </motion.div>
                )}
              </FadeInOut>
              <FadeInOut>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center mb-8">
                    <img
                      src="priceList/cennik2.jpg"
                      alt="Price List"
                      className="max-w-l rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0]"
                      onClick={() => openLightbox("priceList/cennik2.jpg")}
                    />
                  </div>
                </div>
                {lightboxImg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div
                      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                      onClick={closeLightbox}
                    >
                      <img
                        src={lightboxImg}
                        alt="Large preview"
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </motion.div>
                )}
              </FadeInOut>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <FlashLogoTransition>
        <Navbar />
        <div
          className="pt-20 md:pt-54 px-6 md:px-16 flex flex-col items-center font-mono gap-8"
          translate="no"
        >
          <div className="flex gap-4 -mb-12">
            <button
              className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium font-mono transition-all bg-[#7e54f0] group px-2.5 mb-8 ${
                activeTab === "offer"
                  ? "bg-purple-400 text-white"
                  : "bg-purple-200 text-white"
              }`}
              onClick={() => setActiveTab("offer")}
            >
              <span className="w-56 h-48 rounded bg-[#d6c9fe] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black font-medium rowdies-bold transition-colors duration-300 ease-in-out group-hover:text-[#6342bd] p-2">
                Oferta
              </span>
            </button>
            <button
              className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium font-mono transition-all bg-[#7e54f0] group px-2.5 mb-8 ${
                activeTab === "priceList"
                  ? "bg-purple-400 text-white"
                  : "bg-purple-200 text-white"
              }`}
              onClick={() => setActiveTab("priceList")}
            >
              <span className="w-56 h-48 rounded bg-[#d6c9fe] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black font-medium rowdies-bold transition-colors duration-300 ease-in-out group-hover:text-[#6342bd] p-2">
                Cennik
              </span>
            </button>
          </div>

          <div className="w-full flex justify-center flex-colmd:flex-row">
            {renderContent()}
          </div>
        </div>
      </FlashLogoTransition>
    </>
  );
};

export default Offer;
