const QuestionCard = ({ question, answer }) => {
  return (
    <>
      <div className="w-full h-full bg-purple-300 p-4 rounded-lg border-2 border-[#7e54f0] shadow-md shadow-[#7e54f0] text-center">
        <p className="text-xl rowdies-bold font-medium text-black">
          {question}
        </p>
        <p className="rowdies-regular font-light text-white pt-2">{answer}</p>
      </div>
    </>
  );
};

export default QuestionCard;
