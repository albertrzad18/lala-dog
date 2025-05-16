const QuestionCard = ({ question, answer }) => {
  return (
    <div className="w-full h-full min-h-[300px] bg-purple-300 p-4 rounded-lg border-2 border-[#7e54f0] shadow-md shadow-[#7e54f0] text-center break-words flex flex-col justify-center">
      <p className="text-lg md:text-xl font-medium text-black rowdies-bold">
        {question}
      </p>
      <p className="text-sm md:text-base font-light text-white pt-2 rowdies-regular">
        {answer}
      </p>
    </div>
  );
};
