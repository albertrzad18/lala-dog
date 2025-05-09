import FadeInOut from "../components/FadeInOut";
import FaqCard from "../components/FaqCard";
import Navbar from "../components/Navbar";
import StatuteCard from "../components/StatuteCard";
import TakeCareCard from "../components/TakeCareCard";

const Statute = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-16 md:pt-44  px-6 md:px-32 flex flex-col items-center justify-center gap-16 font-serif">
          <StatuteCard />
          <TakeCareCard />
          <FaqCard />
        </div>
      </FadeInOut>
    </>
  );
};

export default Statute;
