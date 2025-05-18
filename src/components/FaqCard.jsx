import QuestionCarousel from "./FaqCarousel";

const FaqCard = () => {
  const questions = [
    {
      question: "Czy mogę wykonać usługę bez kąpieli?",
      answer: `Nie ma takiej możliwości — każda prawidłowa pielęgnacja zaczyna się od kąpieli. Pozwala ona odpowiednio przygotować sierść, a także zapobiega niszczeniu sprzętu.`,
    },
    {
      question: "Co zawiera kompleksowa pielęgnacja?",
      answer: `Kompleksowa pielęgnacja to higiena pazurków i uszu, dwuetapowa kąpiel (oczyszczająca i dopasowana do sierści), wyczesanie, suszenie, modelowanie, strzyżenie i zapach dobrany do charakteru pupila.`,
    },
    {
      question: "Czy mogę zostać z psem podczas zabiegu?",
      answer: `Dla komfortu i bezpieczeństwa pupila zabiegi wykonujemy bez obecności opiekunów. Obecność właściciela może rozpraszać zwierzaka i utrudniać pracę groomera.`,
    },
    {
      question: "Ile trwa wizyta?",
      answer: `Czas trwania zależy od wielkości pupila, rodzaju usługi i stanu sierści, ale zazwyczaj zajmuje od 1,5 do 3 godzin. Pracuję dokładnie, ale spokojnie — bez pośpiechu.`,
    },
    {
      question: "Czy można obciąć pazurki?",
      answer: `Tak, pazurki mogę skrócić bez umawiania pełnej usługi — najlepiej wcześniej się umówić, by uniknąć kolejek.`,
    },
    {
      question: "Co jeśli pies/kot się boi lub nie współpracuje?",
      answer: `Dla każdego zwierzaka podchodzę indywidualnie. Staram się budować zaufanie i pracować spokojnie. Jeśli stres będzie zbyt duży, wspólnie ustalimy dalsze kroki — komfort pupila zawsze jest najważniejszy.`,
    },
    {
      question: "Dlaczego warto umawiać kota do groomera?",
      answer: `Koty, choć same dbają o swoją higienę, przez nadmierne wylizywanie często zakłaczają się, dlatego regularne wizyty u groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i minimalizując ryzyko problemów skórnych.`,
    },
  ];

  return (
    <>
      <div className="w-full bg-purple-400 rounded-xl shadow-xl p-8 space-y-6 font-bold -mt-10">
        <h1 className="text-3xl md:text-3xl rowdies-bold text-[#7e54f0] text-center">
          Najczęstsze pytania i odpowiedzi
        </h1>
        <QuestionCarousel questions={questions} />
      </div>
    </>
  );
};

export default FaqCard;
