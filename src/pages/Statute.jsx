import { useState } from "react";
import FadeInOut from "../components/FadeInOut";
import FaqCard from "../components/FaqCard";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import TakeCareCard from "../components/TakeCareCard";

const Statute = () => {
  const [activeTab, setActiveTab] = useState("statute");
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (src) => {
    setLightboxImg(src);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "statute":
        return (
          <>
            <FadeInOut>
              <div className="hidden md:flex flex-col items-center justify-center px-6 md:px-32 mt-2 ">
                <div className="pl-128 flex flex-row items-center justify-center mb-8">
                  <img
                    src="statute/statute1.jpg"
                    alt="Price List"
                    className="mt-8 max-w-xl rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0] scale-[3.2] xl:scale-[1.2]"
                    onClick={() => openLightbox("statute/statute1.jpg")}
                  />
                </div>
              </div>
              {lightboxImg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                  >
                    <img
                      src={lightboxImg}
                      alt="Large preview"
                      className="max-w-full max-h-full rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </FadeInOut>
            <FadeInOut>
              <div className="hidden md:flex  flex-col items-center justify-center  mt-2">
                <div className="flex flex-row items-center justify-center mb-8">
                  <img
                    src="statute/statute2.jpg"
                    alt="Price List"
                    className="mt-8 mr-144 max-w-xl rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0] scale-[3.2] xl:scale-[1.2]"
                    onClick={() => openLightbox("statute/statute2.jpg")}
                  />
                </div>
              </div>
              {lightboxImg && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div
                    className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                  >
                    <img
                      src={lightboxImg}
                      alt="Large preview"
                      className="max-w-full max-h-full rounded-lg shadow-2xl"
                    />
                  </div>
                </motion.div>
              )}
            </FadeInOut>

            <div className="flex flex-col md:hidden -mt-8">
              <FadeInOut>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center mb-8">
                    <img
                      src="statute/statute1.jpg"
                      alt="Price List"
                      className="max-w-l rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0]"
                      onClick={() => openLightbox("statute/statute1.jpg")}
                    />
                  </div>
                </div>
                {lightboxImg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div
                      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                      onClick={closeLightbox}
                    >
                      <img
                        src={lightboxImg}
                        alt="Large preview"
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </motion.div>
                )}
              </FadeInOut>
              <FadeInOut>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center mb-8">
                    <img
                      src="statute/statute2.jpg"
                      alt="Price List"
                      className="max-w-l rounded-xl cursor-pointer shadow-xl shadow-[#7e54f0]"
                      onClick={() => openLightbox("statute/statute2.jpg")}
                    />
                  </div>
                </div>
                {lightboxImg && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div
                      className="fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50"
                      onClick={closeLightbox}
                    >
                      <img
                        src={lightboxImg}
                        alt="Large preview"
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                      />
                    </div>
                  </motion.div>
                )}
              </FadeInOut>
            </div>
          </>
        );
      case "tips":
        return (
          <>
            <FadeInOut>
              <TakeCareCard />
            </FadeInOut>
          </>
        );
      case "faq":
        return (
          <>
            <FadeInOut>
              <FaqCard />
            </FadeInOut>
          </>
        );
    }
  };

  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-20 md:pt-38 px-6 md:px-16 flex flex-col items-center font-mono gap-8">
          <div className="flex gap-4">
            <button
              className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium font-mono transition-all bg-[#7e54f0] group px-2.5  border-black mb-8 ${
                activeTab === "statute"
                  ? "bg-purple-400 text-white"
                  : "bg-purple-200 text-white"
              }`}
              onClick={() => setActiveTab("statute")}
            >
              <span className="w-56 h-48 rounded bg-[#d6c9fe] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-[#6342bd] p-2">
                Regulamin
              </span>
            </button>
            <button
              className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium font-mono transition-all bg-[#7e54f0] group px-2.5  border-black mb-8 ${
                activeTab === "tips"
                  ? "bg-purple-400 text-white"
                  : "bg-purple-200 text-white"
              }`}
              onClick={() => setActiveTab("tips")}
            >
              <span className="w-56 h-48 rounded bg-[#d6c9fe] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-[#6342bd] p-2">
                Wskazówki
              </span>
            </button>
            <button
              className={`btn relative inline-flex items-center justify-start overflow-hidden font-medium font-mono transition-all bg-[#7e54f0] group px-2.5  border-black mb-8 ${
                activeTab === "faq"
                  ? "bg-purple-400 text-white"
                  : "bg-purple-200 text-white"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              <span className="w-56 h-48 rounded bg-[#d6c9fe] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-[#6342bd] p-2">
                FAQ
              </span>
            </button>
          </div>

          <div className="w-full flex justify-center">{renderContent()}</div>
        </div>
      </FadeInOut>
    </>
  );
};

export default Statute;
