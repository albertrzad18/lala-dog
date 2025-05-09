import { useState } from "react";
import FadeInOut from "../components/FadeInOut";
import FaqCard from "../components/FaqCard";
import Navbar from "../components/Navbar";
import StatuteCard from "../components/StatuteCard";
import TakeCareCard from "../components/TakeCareCard";

const Statute = () => {
  const [activeTab, setActiveTab] = useState("statute");

  const renderContent = () => {
    switch (activeTab) {
      case "statute":
        return (
          <>
            <FadeInOut>
              <StatuteCard />;
            </FadeInOut>
          </>
        );
      case "tips":
        return (
          <>
            <FadeInOut>
              <TakeCareCard />;
            </FadeInOut>
          </>
        );
      case "faq":
        return (
          <>
            <FadeInOut>
              <FaqCard />;
            </FadeInOut>
          </>
        );
    }
  };

  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-16 md:pt-48 px-6 md:px-32 flex flex-col items-center font-mono gap-8">
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
