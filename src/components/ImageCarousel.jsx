import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = ["dog1.avif", "dog2.webp", "dog3.jpg", "dog4.jpg", "dog5.jpg"];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="flex items-center justify-center gap-4 p-6">
      <button
        onClick={prevImage}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="flex items-center justify-center relative w-[600px] h-[400px] overflow-hidden">
        <img
          src={images[getPrevIndex()]}
          alt="Previous"
          className="absolute left-0 w-1/3 h-full object-cover filter blur-sm opacity-50"
        />
        <img
          src={images[currentIndex]}
          alt="Current"
          className="w-2/3 h-full object-cover z-10 mx-auto rounded-lg shadow-lg"
        />
        <img
          src={images[getNextIndex()]}
          alt="Next"
          className="absolute right-0 w-1/3 h-full object-cover filter blur-sm opacity-50"
        />
      </div>

      <button
        onClick={nextImage}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
}
