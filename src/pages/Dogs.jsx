import FadeInOut from "../components/FadeInOut";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";

const DogsPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-16 md:pt-44 px-6 md:px-32 flex flex-col items-center justify-center gap-16 font-serif">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-200 rounded-xl p-8 space-y-6 border-4 border-black font-bold text-black shadow-xl shadow-[#7e54f0]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#7e54f0] text-center">
              Lager i Dorotka
            </h1>

            <p>
              Prywatnie “psia mama” dwóch najcudowniejsze kundelków pod słońcem
              – Lager i Dorotka – ale jestem pewna, że zmieści się w nim jeszcze
              cała gromada innych futrzastych przyjaciół!
            </p>

            <p>
              Lager to 4 letni pies, który w wieku szczenięcym został przeze
              mnie adoptowany z Fundacji dla Szczeniąt - Judyta. Jego historia
              nie jest mi znana, ale może to i lepiej.
            </p>

            <p>
              Dorotka postanowiła cichutko pozostać na działce pod samochodem i
              zaczekać, aż ktoś okaże jej kawałek serca, a przede wszystkim
              zapewni dom pełen ciepła i miłości. Ma 1,6 roku i stara się ze
              wszystkich sił sprostać trudnemu dla niej światu.
              Najprawdopodobniej została podrzucona przez człowieka bez empatii,
              który na pewno wiedzie przykre życie.
            </p>

            <p>
              Jest szansa, że odwiedzając salon Wasi "kudłaci goście" nie będą
              zupełnie sami w trakcie wizyty. O doborową atmosferę zadbam razem
              z Lagerem i Dorotką!
            </p>
          </div>
          <ImageCarousel
            images={[
              "dog1.jpeg",
              "dog2.jpeg",
              "dog3.jpeg",
              "dog4.jpeg",
              "dog5.jpeg",
            ]}
            width={"40%"}
          />
        </div>
      </FadeInOut>
    </>
  );
};

export default DogsPage;
