const TakeCareCard = () => {
  return (
    <>
      <div className="w-full bg-purple-300 rounded-xl shadow-xl p-8 space-y-2 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7e54f0] text-center mb-4 ">
          O co zadbać przed wizytą?
        </h1>
        <div className="text-lg space-y-4">
          <p className="text-center text-xl">
            <strong>Wskazówki</strong>
          </p>
          <ol className="space-y-3 ">
            <li className="text-center">
              <span className="font-bold">1. </span>
              <strong>Krótki spacer przed wizytą</strong> – przed wejściem do
              salonu zadbaj o to, by psiak mógł spokojnie załatwić potrzeby
              fizjologiczne. Trochę ruchu pomoże mu się też zrelaksować.
            </li>
            <li className="text-center">
              <span className="font-bold">2. </span>
              <strong>Nie podawaj posiłku tuż przed wizytą</strong> – pełny
              brzuszek i stres to niezbyt dobre połączenie – najlepiej zjeść z
              lekkim wyprzedzeniem.
            </li>
            <li className="text-center">
              <span className="font-bold">3. </span>
              <strong>
                Nie przejmuj się, jeśli piesek przyjdzie brudny lub mokry
              </strong>{" "}
              – zwłaszcza w deszczowy dzień – w końcu i tak czeka go porządna,
              profesjonalna kąpiel!
            </li>
            <li className="text-center">
              <span className="font-bold">4. </span>
              <strong>
                Zabierz książeczkę zdrowia (jeśli to pierwsza wizyta)
              </strong>{" "}
              – szczególnie jeśli piesek ma alergie, przyjmuje leki lub ma inne
              potrzeby – warto o tym wspomnieć.
            </li>
            <li className="text-center">
              <span className="font-bold">5. </span>
              <strong>Przynieś ulubioną zabawkę lub kocyk</strong> – znany
              zapach pomoże pupilowi poczuć się pewniej w nowym miejscu.
            </li>
            <li className="text-center">
              <span className="font-bold">6. </span>
              <strong>Poinformuj o ważnych kwestiach zdrowotnych</strong> –
              jeśli Twój pies ma np. wrażliwą skórę, lęk separacyjny albo nie
              lubi suszarki – daj nam znać! Podejdziemy do niego z odpowiednim
              wyczuciem.
            </li>
            <li className="text-center">
              <span className="text-2xl font-bold">7. </span>
              <strong>Zadbaj o spokojne pożegnanie</strong> – Twój spokój =
              spokój psa. Uśmiechnij się, pomachaj łapką i zostaw resztę nam.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default TakeCareCard;
