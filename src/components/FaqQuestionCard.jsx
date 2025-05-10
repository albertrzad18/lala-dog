const QuestionCard = ({ question, answer }) => {
  return (
    <>
      <div className="w-full h-full bg-white p-4 rounded-lg border-2 border-[#7e54f0] shadow-md shadow-[#7e54f0]">
        <p className="text-xl font-bold text-[#7e54f0]">{question}</p>
        <p className="text-lg font-serif">{answer}</p>
      </div>
    </>
  );
};

export default QuestionCard;
