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
              "gallery/photo9.jpeg",
              "gallery/photo10.jpeg",
              "gallery/photo11.jpeg",
              "gallery/photo12.jpeg",
              "gallery/photo13.jpeg",
              "gallery/photo14.jpeg",
              "gallery/photo15.jpeg",
              "gallery/photo16.jpeg",
            ]}
            width={"40%"}
          />
          <div className="text-4xl pt-8 font-extrabold text-[#7e54f0]">
            Zdjęcia z kursu
          </div>
          <ImageCarousel
            images={[
              "gallery/photo1.jpeg",
              "gallery/photo2.jpeg",
              "gallery/photo3.jpeg",
              "gallery/photo4.jpeg",
              "gallery/photo5.jpeg",
              "gallery/photo6.jpeg",
              "gallery/photo7.jpeg",
              "gallery/photo8.jpeg",
            ]}
            width={"40%"}
          />
        </div>
      </FadeInOut>
    </>
  );
};

export default GalleryPage;
