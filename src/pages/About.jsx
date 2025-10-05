import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";
import FlashLogoTransition from "../components/FlashLogoTransition";

const AboutPage = () => {
  return (
    <>
      <FlashLogoTransition>
        <Navbar />
        <div className="pt-12 md:pt-28" translate="no">
          <div className="w-full h-full font-semibold p-4 pt-8 space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left md:gap-8">
            <div className="w-full md:w-2/3 lg:w-1/2 space-y-4 break-words text-pretty text-center">
              <h1 className="text-2xl md:text-4xl rowdies-bold text-[#7e54f0] mb-4">
                pSIEMKA! Tu Ala – albo po prostu Lala
              </h1>
              <p className="rowdies-regular text-white text-center">
                Tak mówią do mnie w rodzinie od dziecka i tak już zostało.
                Zwierzętami interesowałam się odkąd tylko pamiętam. Mówią, że
                miałam kota na punkcie psów — i to całkiem dosłownie! Przez całe
                życie towarzyszyły mi zwierzęta. Miłością do nich zaraził mnie
                Dziadzio. Gdy w przedszkolu pytano, kim chcę zostać, odpowiedź
                była zawsze ta sama:„Będę pracować ze zwierzętami!”
              </p>
            </div>
            <img
              src="about/circle1.png"
              className="md:w-1/5 md:h-1/5 sm:w-1/4 sm:h=1/4 lg:w-1/5 lg:h=1/5 rounded-lg shadow-xl shadow-[#7e54f0] mb-8"
              alt="Lala"
            />
          </div>
        </div>
        <div
          className="w-full h-full font-semibold p-4 pt-4 space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center bg-purple-400 text-white text-center md:text-left md:gap-8"
          translate="no"
        >
          <img
            src="about/circle2.jpeg"
            className="order-2 md:order-1 md:w-1/4 md:h-1/4 sm:w-1/3 sm:h=1/3 lg:w-1/4 lg:h=1/4 rounded-lg shadow-xl shadow-[#7e54f0]"
            alt="Lala"
          />

          <div className="order-1 md:order-2 w-full md:w-2/3 lg:w-1/2 space-y-4 break-words text-pretty">
            <p className="text-white rowdies-regular text-center">
              Jako nastolatka postanowiłam pójść za głosem serca — wyprowadziłam
              się z rodzinnego miasta, by zdobywać wiedzę i doświadczenie.
              Skończyłam technikum weterynaryjne w Trzcianie koło Rzeszowa, a
              uzyskany tytuł technika weterynarii tylko utwierdził mnie w
              przekonaniu, że to właśnie moja droga. Później wróciłam do
              rodzinnego miasta, ukończyłam studia magisterskie na kierunku
              analityka weterynaryjna na Uniwersytecie Przyrodniczym w Lublinie.
            </p>
          </div>
        </div>

        <div
          className="w-full h-full font-semibold p-4 pt-8 space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center bg-purple-600 text-white text-center md:text-left md:gap-8"
          translate="no"
        >
          <div className="w-full md:w-2/3 lg:w-1/2 space-y-4 break-words text-pretty">
            <p className="text-white rowdies-regular text-center">
              Przez kilka lat pracowałam w laboratorium, ale czegoś mi
              brakowało. Brakowało mi... zwierząt! I tak, trochę z marzeń, a
              bardziej z serca, trafiłam do groomingu. Ukończyłam podstawowy
              kurs groomerski w Dog House Grooming Academy w Krakowie i
              poczułam, że jestem dokładnie tam, gdzie powinnam być już dawno.
              Od tego czasu nieustannie się szkolę, poszerzam wiedzę i zdobywam
              nowe kwalifikacje, żeby każdy pies oraz kot wychodził z salonu
              piękny, szczęśliwy i merdający ogonem.
            </p>
          </div>
          <img
            src="about/circle3.jpg"
            className="md:w-1/4 md:h-1/4 sm:w-1/3 sm:h=1/3 lg:w-1/4 lg:h=1/4 rounded-lg shadow-xl shadow-[#7e54f0]"
            alt="Lala"
          />
        </div>

        <div
          className="w-full h-full font-semibold p-4 pt-8 space-y-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center bg-purple-800 text-white text-center md:text-left md:gap-8"
          translate="no"
        >
          <img
            src="about/circle4.png"
            className="order-2 md:order-1 md:w-1/3 md:h-1/3 sm:w-1/2 sm:h=1/2 lg:w-1/3 lg:h=1/3 rounded-lg shadow-xl shadow-[#7e54f0]"
            alt="Lala"
          />
          <div className="order-1 md:order-2 w-full md:w-2/3 lg:w-1/2 space-y-4 break-words text-pretty">
            <p className="text-white rowdies-regular text-center">
              Tytuł technika weterynarii i studia z analityki weterynaryjnej
              dają mi solidne zaplecze – wiem, jak zadbać nie tylko o wygląd
              pupila, ale i o jego zdrowie, komfort i dobre samopoczucie. Na co
              dzień nie tylko pielęgnuję, ale też chętnie doradzam – jak dbać o
              sierść, jak poprawić komfort pupila, co warto zmienić, żeby
              wszystkim żyło się lepiej. Nie tylko psy rasowe wymagają i
              zasługują na profesjonalną pielęgnację w salonie groomerskim —
              każdy pies, bez względu na “rasę”, powinien czuć się zadbany i
              kochany, a że sama jestem “psią mamą” dwóch kundelków to właśnie
              kundelki zajmują w moim sercu szczególne miejsce.
            </p>
            <p className="text-white rowdies-regular text-center">
              Lagera i Dorotkę możecie poznać wirtualnie na ich własnej
              podstronie (tak, mają więcej fanów niż ja!), a jeśli będziecie
              mieć szczęście, przywitają Was też osobiście w salonie. W końcu
              czasem wpadają ze mną do pracy, żeby pilnować porządku i czy po
              prostu się obijać i cieszyć psim, beztroskim życiem.
            </p>
            <p className="text-white rowdies-regular text-center">
              Z miłości do psiej i kociej urody właśnie powstał ten salon – Lala
              Dog.
            </p>
          </div>
        </div>
      </FlashLogoTransition>
    </>
  );
};

export default AboutPage;
