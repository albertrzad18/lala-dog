import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import FadeInOut from "../components/FadeInOut";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="flex justify-center items-center flex-col min-h-screen pt-32">
          <ImageCarousel />
        </div>
      </FadeInOut>
    </>
  );
};

export default GalleryPage;
