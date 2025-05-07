import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-44 px-6 md:px-32 flex flex-col items-center justify-center gap-16">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-200 rounded-xl shadow-lg p-8 space-y-6 border-4 border-green-500  font-bold text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center">
              pSIEMKA! Tu Ala – albo po prostu Lala
            </h1>

            <p>
              Tak mówią do mnie w rodzinie od dziecka i tak już zostało.
              Zwierzętami interesowałam się odkąd tylko pamiętam. Mówią, że
              miałam kota na punkcie psów — i to całkiem dosłownie! Przez całe
              życie towarzyszyły mi zwierzęta. Miłością do nich zaraził mnie
              Dziadzio. Gdy w przedszkolu pytano, kim chcę zostać, odpowiedź
              była zawsze ta sama: „Będę pracować ze zwierzętami!”
            </p>

            <p>
              Jako nastolatka postanowiłam pójść za głosem serca — wyprowadziłam
              się z rodzinnego miasta, by zdobywać wiedzę i doświadczenie.
              Skończyłam technikum weterynaryjne w Trzcianie koło Rzeszowa, a
              uzyskany tytuł technika weterynarii tylko utwierdził mnie w
              przekonaniu, że to właśnie moja droga.
            </p>

            <p>
              Później wróciłam do rodzinnego miasta i ukończyłam studia
              magisterskie na kierunku analityka weterynaryjna na Uniwersytecie
              Przyrodniczym w Lublinie. Przez kilka lat pracowałam w
              laboratorium, ale czegoś mi brakowało. Brakowało mi... zwierząt!
            </p>

            <p>
              I tak, trochę z marzeń, a bardziej z serca, trafiłam do groomingu.
              Ukończyłam podstawowy kurs groomerski w Dog House Grooming Academy
              w Krakowie i poczułam, że jestem dokładnie tam, gdzie powinnam być
              już dawno.
            </p>

            <p>
              Od tamtej pory nieustannie się szkolę, poszerzam wiedzę i zdobywam
              nowe kwalifikacje, żeby każdy pies oraz kot wychodził z mojego
              salonu piękny, szczęśliwy i merdający ogonem.
            </p>

            <p>
              Tytuł technika weterynarii i studia z analityki weterynaryjnej
              dają mi solidne zaplecze – wiem, jak zadbać nie tylko o wygląd
              pupila, ale i o jego zdrowie, komfort i dobre samopoczucie. Na co
              dzień nie tylko pielęgnuję, ale też chętnie doradzam – jak dbać o
              sierść, jak poprawić komfort pupila, co warto zmienić, żeby
              wszystkim żyło się lepiej. Z miłości do psiej i kociej urody
              właśnie powstał ten salon – Lala Dog.
            </p>
          </div>
        </div>
      </FadeInOut>
    </>
  );
};

export default AboutPage;
