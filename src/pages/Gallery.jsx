import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import FadeInOut from "../components/FadeInOut";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="flex justify-center items-center flex-col min-h-screen pt-16 md:pt-36 font-serif">
          <div className="text-4xl pt-2 font-extrabold text-[#7e54f0]">
            Nasi klienci przed i po
          </div>
          <ImageCarousel
            images={[
              "photo9.jpeg",
              "photo10.jpeg",
              "photo11.jpeg",
              "photo12.jpeg",
              "photo13.jpeg",
              "photo14.jpeg",
              "photo15.jpeg",
              "photo16.jpeg",
            ]}
            width={"40%"}
          />
          <div className="text-4xl pt-8 font-extrabold text-[#7e54f0]">
            Zdjęcia z kursu
          </div>
          <ImageCarousel
            images={[
              "photo1.jpeg",
              "photo2.jpeg",
              "photo3.jpeg",
              "photo4.jpeg",
              "photo5.jpeg",
              "photo6.jpeg",
              "photo7.jpeg",
              "photo8.jpeg",
            ]}
            width={"40%"}
          />
        </div>
      </FadeInOut>
    </>
  );
};

export default GalleryPage;
