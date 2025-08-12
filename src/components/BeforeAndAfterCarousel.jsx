import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BeforeAndAfterCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <>
      <div
        className="w-full flex items-center justify-center gap-4 px-6"
        translate="no"
      >
        <div className="relative flex items-center justify-center w-full max-w-[1400px] h-[600px] overflow-hidden">
          <button
            onClick={prevImage}
            className="p-2 rounded-full  hover:bg-[#7e54f0] z-20"
          >
            <ArrowLeft />
          </button>
          <img
            src={images[getPrevIndex()]}
            alt="Previous"
            className="absolute left-78 w-[18%] h-[80%] object-cover object-center filter blur-sm opacity-50 rounded-lg scale-90 hidden md:block"
          />

          <div
            className={`relative z-10 w-full md:w-[24%] h-[110%] rounded-xl overflow-hidden flex items-center justify-center bg-black/10  shadow-xl shadow-[#7e54f0] scale-90`}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Current"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 150 : -150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -150 : 150 }}
                transition={{
                  x: { type: "spring", stiffness: 80, damping: 20 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute w-full h-full object-cover object-center "
              />
            </AnimatePresence>
          </div>

          <img
            src={images[getNextIndex()]}
            alt="Next"
            className="absolute right-78 w-[18%] h-[80%] object-cover object-center filter blur-sm opacity-50 rounded-lg scale-90 hidden md:block"
          />
          <button
            onClick={nextImage}
            className="p-2 rounded-full  hover:bg-[#7e54f0] z-20"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default BeforeAndAfterCarousel;
