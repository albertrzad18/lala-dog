import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-12 md:pt-36 flex flex-col items-center justify-end gap-24 relative text-white">
          <div className="flex flex-row justify-center flex-wrap w-screen h-[550px] md:h-[350px]">
            <div className="w-full md:w-2/3 lg:w-1/2 h-full rounded-xl p-8 space-y-6 overflow-auto">
              <h1 className="text-3xl md:text-4xl rowdies-bold text-[#7e54f0] text-center">
                pSIEMKA! Tu Ala – albo po prostu Lala
              </h1>
              <p className="text-center text-white font-mono text-xl">
                Tak mówią do mnie w rodzinie od dziecka i tak już zostało.
                Zwierzętami interesowałam się odkąd tylko pamiętam. Mówią, że
                miałam kota na punkcie psów — i to całkiem dosłownie! Przez całe
                życie towarzyszyły mi zwierzęta. Miłością do nich zaraził mnie
                Dziadzio. Gdy w przedszkolu pytano, kim chcę zostać, odpowiedź
                była zawsze ta sama: „Będę pracować ze zwierzętami!”
              </p>
            </div>
            <img
              src="dogs/dogShelter1.webp"
              className="w-72 h-72 rounded-full p-8 hidden md:block"
              alt="Lala"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap w-screen bg-purple-400 h-[450px] md:h-[290px]">
          <img
            src="/alaWithDog.jpeg"
            className="w-72 h-72 rounded-full p-8 hidden md:block"
            alt="Lala"
          />
          <div className="w-full md:w-2/3 lg:w-1/2 h-full rounded-xl p-8 space-y-6 overflow-auto">
            <p className="pt-12 text-center text-white font-mono text-xl">
              Jako nastolatka postanowiłam pójść za głosem serca — wyprowadziłam
              się z rodzinnego miasta, by zdobywać wiedzę i doświadczenie.
              Skończyłam technikum weterynaryjne w Trzcianie koło Rzeszowa, a
              uzyskany tytuł technika weterynarii tylko utwierdził mnie w
              przekonaniu, że to właśnie moja droga.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center flex-wrap w-screen bg-purple-800 h-[810px] md:h-[460px]">
            <div className="w-full md:w-2/3 lg:w-1/2 h-full rounded-xl p-8 space-y-6 overflow-auto">
              <p className="text-center text-white font-mono text-xl">
                Później wróciłam do rodzinnego miasta i ukończyłam studia
                magisterskie na kierunku analityka weterynaryjna na
                Uniwersytecie Przyrodniczym w Lublinie. Przez kilka lat
                pracowałam w laboratorium, ale czegoś mi brakowało. Brakowało
                mi... zwierząt!
              </p>

              <p className="text-center text-white font-mono text-xl">
                I tak, trochę z marzeń, a bardziej z serca, trafiłam do
                groomingu. Ukończyłam podstawowy kurs groomerski w Dog House
                Grooming Academy w Krakowie i poczułam, że jestem dokładnie tam,
                gdzie powinnam być już dawno.
              </p>

              <p className="text-center text-white font-mono text-xl">
                Od tamtej pory nieustannie się szkolę, poszerzam wiedzę i
                zdobywam nowe kwalifikacje, żeby każdy pies oraz kot wychodził z
                mojego salonu piękny, szczęśliwy i merdający ogonem.
              </p>
            </div>
            <img
              src="dogs/dogShelter3.webp"
              className="w-88 h-88 rounded-full p-8 hidden md:block"
              alt="Lala"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-screen bg-purple-950 h-[1080px] md:h-[535px]">
            <img
              src="dogs/dogShelter4.jpg"
              className="w-88 h-88 rounded-full p-8 hidden md:block"
              alt="Lala"
            />
            <div className="w-full md:w-2/3 lg:w-1/2 h-full rounded-xl p-8 space-y-6overflow-auto">
              <p className="text-center text-white font-mono text-xl">
                Tytuł technika weterynarii i studia z analityki weterynaryjnej
                dają mi solidne zaplecze – wiem, jak zadbać nie tylko o wygląd
                pupila, ale i o jego zdrowie, komfort i dobre samopoczucie. Na
                co dzień nie tylko pielęgnuję, ale też chętnie doradzam – jak
                dbać o sierść, jak poprawić komfort pupila, co warto zmienić,
                żeby wszystkim żyło się lepiej.
              </p>
              <p className="text-center text-white font-mono text-xl">
                Nie tylko psy rasowe wymagają i zasługują na profesjonalną
                pielęgnację w salonie groomerskim — każdy pies, bez względu na
                “rasę”, powinien czuć się zadbany i kochany, a że sama jestem
                “psią mamą” dwóch kundelków to właśnie kundelki zajmują w moim
                sercu szczególne miejsce.Lagera i Dorotkę możecie poznać
                wirtualnie na ich własnej podstronie (tak, mają więcej fanów niż
                ja!), a jeśli będziecie mieć szczęście, przywitają Was też
                osobiście w salonie — w końcu czasem wpadają ze mną do pracy,
                żeby pilnować porządku i czy po prostu się obijać i cieszyć
                psim, beztroskim życiem.
              </p>
              <p className="text-center text-white font-mono text-xl">
                Z miłości do psiej i kociej urody właśnie powstał ten salon –
                Lala Dog.
              </p>
            </div>
          </div>
        </div>
      </FadeInOut>
    </>
  );
};

export default AboutPage;
