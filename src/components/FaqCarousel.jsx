import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuestionCard from "./FaqQuestionCard";

const QuestionCarousel = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevQuestion = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? questions.length - 1 : prev - 1));
  };

  const nextQuestion = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === questions.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 px-6">
      <button
        onClick={prevQuestion}
        className="p-2 rounded-full  hover:bg-[#7e54f0] z-20"
      >
        <ArrowLeft size={32} />
      </button>

      <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 150 : -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -150 : 150 }}
            transition={{
              x: { type: "spring", stiffness: 80, damping: 20 },
              opacity: { duration: 0.4 },
            }}
            className="absolute w-full h-full overflow-auto p-4"
          >
            <QuestionCard
              question={questions[currentIndex].question}
              answer={questions[currentIndex].answer}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={nextQuestion}
        className="p-2 rounded-full  hover:bg-[#7e54f0] z-20"
      >
        <ArrowRight size={32} />
      </button>
    </div>
  );
};

export default QuestionCarousel;
