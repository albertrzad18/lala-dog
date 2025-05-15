import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import FadeInOut from "../components/FadeInOut";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="flex justify-center items-center flex-col min-h-screen pt-16 md:pt-36 font-serif">
          <div className="text-4xl pt-24 rowdies-bold text-[#7e54f0]">
            Nasi klienci przed i po
          </div>
          <ImageCarousel
            images={[
              "gallery/beforeAndAfter/1.jpg",
              "gallery/beforeAndAfter/2.jpg",
              "gallery/beforeAndAfter/3.jpg",
              "gallery/beforeAndAfter/4.jpg",
              "gallery/beforeAndAfter/5.jpg",
              "gallery/beforeAndAfter/6.jpg",
              "gallery/beforeAndAfter/7.jpg",
            ]}
            width={"40%"}
          />
          <div className="text-4xl pt-8 rowdies-bold text-[#7e54f0]">
            Zdjęcia z kursu
          </div>
          <ImageCarousel
            images={[
              "gallery/course/1.jpg",
              "gallery/course/2.jpg",
              "gallery/course/3.jpg",
              "gallery/course/4.jpg",
              "gallery/course/5.jpg",
              "gallery/course/6.jpg",
              "gallery/course/7.jpg",
              "gallery/course/8.jpg",
              "gallery/course/9.jpg",
              "gallery/course/10.jpg",
              "gallery/course/11.jpg",
              "gallery/course/12.jpg",
            ]}
            width={"40%"}
          />
        </div>
      </FadeInOut>
    </>
  );
};

export default GalleryPage;
