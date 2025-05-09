import QuestionCard from "./FaqQuestionCard";

const FaqCard = () => {
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6 border-4 border-black font-bold">
        <h1 className="text-3xl md:text-3xl font-bold text-[#7e54f0] text-center">
          Najczęstsze pytania i odpowiedzi
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <QuestionCard
              question={"Czy mogę wykonać usługę bez kąpieli?"}
              answer={`Nie ma takiej możliwości — każda prawidłowa pielęgnacja zaczyna się od kąpieli. Pozwala ona odpowiednio przygotować sierść, a także zapobiega niszczeniu sprzętu.`}
            />
            <QuestionCard
              question={"Co zawiera kompleksowa pielęgnacja?"}
              answer={`Kompleksowa pielęgnacja obejmuje: higienę pazurków i uszek, dwuetapową kąpiel (pierwszą oczyszczającą, drugą dobraną dorodzaju sierści), dokładne wyczesanie, suszenie oraz modelowaniesierści, strzyżenie oraz na koniec zapach dobrany do charakterku psa lub kota.`}
            />
            <QuestionCard
              question={"Czy mogę zostać z psem podczas zabiegu?"}
              answer={`Dla komfortu i bezpieczeństwa pupila zabiegi wykonujemy bez
                obecności opiekunów. Obecność właściciela może rozpraszać
                zwierzaka i utrudniać pracę groomera. Wiem, że zostawienie
                pupila u groomera to niełatwa sprawa — serce trochę ściska,
                myśli galopują... Dlatego w trakcie wizyty wysyłam krótkie wideo
                lub zdjęcie, żebyście mogli zobaczyć, że Wasz futrzak ma się
                świetnie, merda ogonem albo odpoczywa jak król na stoliku. To
                taka mała dawka spokoju, zanim znów się zobaczymy!`}
            />
            <QuestionCard
              question={"Ile trwa wizyta?"}
              answer={`Czas trwania zależy od wielkości pupila, rodzaju usługi i stanu
                sierści, ale zazwyczaj zajmuje od 1,5 do 3 godzin. Pracujemy
                dokładnie, ale spokojnie — bez pośpiechu.`}
            />
            <QuestionCard
              question={"Czy można obciąć pazurki?"}
              answer={`Tak, pazurki mogę skrócić bez umawiania pełnej usługi —
                najlepiej wcześniej się umówić, by uniknąć kolejek.`}
            />
          </div>

          <div className="space-y-6">
            <QuestionCard
              question={"Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Do każdego zwierzaka podchodzę indywidualnie. Staram się
                budować zaufanie i pracować spokojnie. Jeśli stres będzie zbyt
                duży, wspólnie ustalimy dalsze kroki — komfort pupila zawsze
                jest najważniejszy.`}
            />
            <QuestionCard
              question={"Dlaczego warto umawiać kota do groomera?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
          </div>

          <div className="space-y-6">
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
            <QuestionCard
              question={" Co jeśli pies/kot się boi lub nie współpracuje?"}
              answer={`Koty, choć same dbają o swoją higienę, przez nadmierne
                wylizywanie często zakłaczają się, dlatego regularne wizyty u
                groomera pomagają usunąć martwe włosy, zapobiegając kołtunom i
                minimalizując ryzyko problemów skórnych.`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
