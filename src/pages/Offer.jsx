import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

const Offer = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (src) => {
    setLightboxImg(src);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-16 md:pt-44 px-6 md:px-32 flex flex-row items-center justify-center gap-12 lg:gap-16 font-serif">
          <div
            className="w-full lg:w-1/2 bg-purple-300 rounded-xl font-semibold p-8 space-y-4.5 h-full flex flex-col items-center justify-center text-center text-white shadow-xl shadow-[#7e54f0]
          "
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#7e54f0] mb-4">
              Dlaczego Lala Dog?
            </h2>
            <p>
              W Lala Dog najważniejsze jest dla mnie to, żeby Twój pupil czuł
              się bezpiecznie i spokojnie. Każdego psiaka traktuję
              indywidualnie, bez pośpiechu – pracuję w jego tempie, poświęcając
              tyle czasu, ile potrzeba.
            </p>
            <p>
              Dbam o to, by wizyta przebiegła w możliwie najmniej stresujący
              sposób. Pomaga w tym nie tylko przyjazna atmosfera i cierpliwość,
              ale też profesjonalny sprzęt – ciche suszarki i precyzyjne
              narzędzia, które pozwalają skrócić czas zabiegów do minimum, nie
              tracąc przy tym na jakości.
            </p>
            <p>
              Używam wyłącznie certyfikowanych kosmetyków groomerskich,
              dostosowanych do potrzeb każdego psa – uwzględniam rodzaj sierści,
              stan skóry oraz indywidualne wymagania pielęgnacyjne.
            </p>
            <p>
              Korzystam z kosmetyków posiadających certyfikat{" "}
              <strong>Safe Pet Cosmetics®</strong>
              (Certyfikat nr 18001), co daje pewność, że są one bezpieczne,
              delikatne i skuteczne.
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-8 border-4 border-black text-gray-800 h-full flex flex-col items-center justify-center text-center shadow-xl shadow-[#7e54f0]">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#7e54f0] mb-4">
                Oferta
              </h2>
              <ul className="list-disc list-inside space-y-2 text-xl font-semibold">
                <li>Kąpiele i pielęgnacja sierści</li>
                <li>SPA dla psów</li>
                <li>Strzyżenie psów</li>
                <li>Trymowanie</li>
                <li>Wizyta szczeniaczkowa</li>
                <li>Rozczesywanie skołtunionej sierści</li>
                <li>Czyszczenie oczu i uszu</li>
                <li>Obcinanie pazurków</li>
                <li>Usługa express</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-16 px-6 md:px-32 ">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#7e54f0]">
            Cennik
          </h2>
          <div className="pt-6 px-6 md:px-32 flex flex-row items-center justify-center gap-12 lg:gap-16 mb-8">
            <img
              src="mergedPriceList.jpg"
              alt="Price List"
              className="w-full  rounded-xl border-4 border-black cursor-pointer shadow-xl shadow-[#7e54f0]"
              onClick={() => openLightbox("/mergedPriceList.jpg")}
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
    </>
  );
};

export default Offer;
