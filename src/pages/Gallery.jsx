import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import BeforeAndAfterCarousel from "../components/BeforeAndAfterCarousel";
import FlashLogoTransition from "../components/FlashLogoTransition";

const GalleryPage = () => {
  const images = [];
  for (let i = 1; i <= 37; i++) {
    images.push(`gallery/beforeAndAfter/${i}.jpg`);
  }

  return (
    <>
      <FlashLogoTransition>
        <Navbar />
        <div
          className="flex justify-center items-center flex-col min-h-screen pt-4 md:pt-36 font-serif"
          translate="no"
        >
          <div className="text-4xl pt-16 rowdies-bold text-[#7e54f0] text-center">
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
          <div className="text-4xl pt-8 rowdies-bold text-[#7e54f0] text-center">
            Nasi klienci przed i po
          </div>
          <BeforeAndAfterCarousel images={images} width={"40%"} />
        </div>
      </FlashLogoTransition>
    </>
  );
};

export default GalleryPage;
