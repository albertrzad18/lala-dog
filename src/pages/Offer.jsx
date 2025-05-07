import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";

const Offer = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-44 px-6 md:px-32 flex flex-col lg:flex-col items-center justify-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-8 space-y-4 border-4 border-green-500 text-gray-800 h-full flex flex-col items-center justify-center text-center text-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
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

          <div className="w-full lg:w-1/2 bg-gray-100 rounded-xl shadow-lg p-8 border-4 border-green-500 text-gray-800 h-full flex flex-col items-center justify-center text-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-4">
                Oferta
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg font-semibold">
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
      </FadeInOut>
    </>
  );
};

export default Offer;
