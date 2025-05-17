import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import FlashLogoTransition from "../components/FlashLogoTransition";

const DogsPage = () => {
  return (
    <>
      <FlashLogoTransition>
        <Navbar />
        <div className="pt-20 md:pt-32 xl:pt-52 px-6 md:px-32 flex flex-col md:flex-row xl:flex-col items-center justify-center gap-16 font-serif">
          <div className="w-3/4 bg-purple-300 rounded-xl p-8 space-y-6 text-white shadow-xl shadow-[#7e54f0] text-normal">
            <h1 className="text-3xl md:text-4xl rowdies-bold text-[#7e54f0] text-center">
              Lager i Dorotka
            </h1>

            <p className="rowdies-regular text-white text-center">
              Prywatnie “psia mama” dwóch najcudowniejsze kundelków pod słońcem
              – Lager i Dorotka – ale jestem pewna, że zmieści się w nim jeszcze
              cała gromada innych futrzastych przyjaciół!
            </p>

            <p className="rowdies-regular text-white text-center">
              Lager to 4 letni pies, który w wieku szczenięcym został przeze
              mnie adoptowany z Fundacji dla Szczeniąt - Judyta. Jego historia
              nie jest mi znana, ale może to i lepiej.
            </p>

            <p className="rowdies-regular text-white text-center">
              Dorotka postanowiła cichutko pozostać na działce pod samochodem i
              zaczekać, aż ktoś okaże jej kawałek serca, a przede wszystkim
              zapewni dom pełen ciepła i miłości. Ma 1,6 roku i stara się ze
              wszystkich sił sprostać trudnemu dla niej światu.
              Najprawdopodobniej została podrzucona przez człowieka bez empatii,
              który na pewno wiedzie przykre życie.
            </p>

            <p className="rowdies-regular text-white text-center">
              Jest szansa, że odwiedzając salon Wasi "kudłaci goście" nie będą
              zupełnie sami w trakcie wizyty. O doborową atmosferę zadbam razem
              z Lagerem i Dorotką!
            </p>
          </div>
        </div>
        <div className="pt-8">
          <ImageCarousel
            images={[
              "dogs/dog1.jpeg",
              "dogs/dog2.jpeg",
              "dogs/dog3.jpeg",
              "dogs/dog4.jpeg",
              "dogs/dog5.jpeg",
            ]}
          />
        </div>
      </FlashLogoTransition>
    </>
  );
};

export default DogsPage;
