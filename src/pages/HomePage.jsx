import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";
import FlashLogoTransition from "../components/FlashLogoTransition";
import { MapPin, Phone } from "lucide-react";

const cardStyle =
  "rowdies-regular bg-white text-center text-lg sm:text-xl md:text-2xl rounded-3xl p-4 shadow-md shadow-[#7e54f0] hover:no-underline hover:transform-none hover:text-shadow-none border-purple-400 border-4";

const HomePage = () => {
  return (
    <>
      <FlashLogoTransition>
        <Navbar showLogo={false} />
        <div className="flex flex-col items-center justify-center w-full md:px-14  px-4 py-6 mt-12 md:mt-32">
          <div className="flex flex-col md:flex-row w-full items-center justify-start gap-8 ">
            <div className="flex flex-col items-center md:items-center text-center md:text-left flex-1 md:gap-y-8">
              <h1 className="flex flex-row md:flex-row items-center text-center justify-center md:gap-x-8">
                <div className="flex flex-col flex-1/3 gap-2 items-center md:items-start ml-6 md:ml-0">
                  <h1 className="rowdies-bold text-6xl sm:text-7xl md:text-9xl text-white ">
                    Lala Dog
                  </h1>
                  <h2 className="text-xl sm:text-3xl md:text-4xl mt-2 quote-italic text-white hover:no-underline hover:shadow-none hover:text-shadow-none text-center">
                    Ulubiony fryzjer twojego psa i kota w Lublinie
                  </h2>
                </div>

                <img
                  src="/logo.png"
                  className="w-56 sm:w-60 md:w-24 flex-2/3"
                  alt="Lala Dog logo"
                />
              </h1>
              <div className="flex sm:flex-row md:flex-row text-lg sm:text-xl md:text-2xl gap-x-4 w-full justify-center mt-2 md:mt-0 items-stretch md:mb-3">
                <div className="rowdies-bold flex flex-col text-center items-center text-black bg-white p-4 rounded-3xl border-purple-400 border-4 shadow-md shadow-[#7e54f0] hover:no-underline hover:transform-none hover:text-shadow-none ">
                  <Phone className="w-7 h-7 sm:w-7 sm:h-7 mt-2 md:mt-0" />
                  <a className="flex flex-col text-nowrap">
                    <a>Zadzwoń:</a>
                    <a>533 994 390</a>
                  </a>
                </div>

                <div className="rowdies-bold flex flex-col  items-center text-center text-black bg-white p-4 rounded-3xl border-purple-400 border-4 shadow-md shadow-[#7e54f0] hover:no-underline hover:transform-none hover:text-shadow-none">
                  <a
                    href="https://www.google.com/maps/place/Lotnicza+11,+20-354+Lublin"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Otwórz trasę w Google Maps"
                    aria-label="Otwórz trasę w Google Maps"
                    className="md:ml-3 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <MapPin className="w-8 h-8 sm:w-8 sm:h-8" />
                  </a>
                  <a className="flex flex-col">
                    <a>Odwiedź nas:</a>
                    <a>ul. Lotnicza 11, Lublin</a>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 mt-2 gap-y-2 md:gap-y-8">
              <h1 className={cardStyle}>
                Szukasz doświadczonego psiego fryzjera w Lublinie? W Lala Dog od
                lat dbam o wygląd i komfort Twojego pupila. Oferuję
                profesjonalne strzyżenie, trymowanie, kąpiele i pielęgnację psów
                oraz kotów w Lublinie – zawsze z indywidualnym podejściem do
                rasy, wieku i temperamentu czworonoga.
              </h1>

              <h1 className={cardStyle}>
                W salonie groomerskim Lala Dog w Lublinie stawiam na
                bezpieczeństwo, spokój i najwyższą jakość usług. Niezależnie od
                tego, czy Twój pies potrzebuje delikatnego podcięcia sierści,
                kompleksowego strzyżenia, czy odświeżającej kąpieli, zapewniam
                mu komfort i piękny wygląd. Jako psi a także koci fryzjer w
                Lublinie dbam o to, aby wizyta w moim salonie była dla pupila
                spokojnym i przyjemnym doświadczeniem.
              </h1>

              <h1 className={cardStyle}>
                Umów wizytę i przekonaj się, jak profesjonalny groomer w
                Lublinie potrafi odmienić wizerunek Twojego pupila! 🐾
              </h1>
            </div>
          </div>
        </div>
      </FlashLogoTransition>
    </>
  );
};

export default HomePage;
