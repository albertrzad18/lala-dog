import QuestionCarousel from "./FaqCarousel";

const FaqCard = () => {
  const questions = [
    {
      question: "Co jeśli pies/kot się boi lub nie współpracuje?",
      answer: `Do każdego zwierzaka podchodzę indywidualnie. Staram się budować zaufanie i pracować spokojnie. Jeśli stres będzie zbyt duży, wspólnie ustalimy dalsze kroki — komfort pupila zawsze jest najważniejszy.`,
    },
    {
      question: "Dlaczego warto umawiać kota do groomera?",
      answer: `Koty, choć same dbają o swoją higienę, przez nadmierne wylizywanie często zakłaczają się, dlatego regularne wizyty u groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i minimalizując ryzyko problemów skórnych.`,
    },
  ];

  return (
    <>
      <div className="w-full bg-purple-400 rounded-xl shadow-xl p-8 space-y-6  font-bold">
        <h1 className="text-3xl md:text-3xl font-bold text-[#7e54f0] text-center">
          Najczęstsze pytania i odpowiedzi
        </h1>
        <QuestionCarousel questions={questions} />
      </div>
    </>
  );
};

export default FaqCard;
