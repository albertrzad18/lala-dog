const TakeCareCard = () => {
  return (
    <>
      <div className="-mt-10 w-full bg-purple-300 rounded-xl shadow-xl p-8 space-y-2 text-white">
        <h1 className="text-3xl md:text-4xl rowdies-bold text-[#7e54f0] text-center mb-4 ">
          O co zadbać przed wizytą?
        </h1>
        <div className="text-lg space-y-4">
          <p className="text-center text-xl rowdies-bold">
            <strong>Wskazówki</strong>
          </p>
          <ol className="space-y-3 ">
            <li className="text-center rowdies-regular text-white">
              <span className="font-bold">1. </span>
              <strong>KRÓTKI SPACER PRZED WIZYTĄ</strong> – przed wejściem do
              salonu zadbaj o to, by psiak mógł spokojnie załatwić potrzeby
              fizjologiczne. Trochę ruchu pomoże mu się też zrelaksować.
            </li>
            <li className="text-center rowdies-regular text-white">
              <span className="font-bold">2. </span>
              <strong>NIE PODAWAJ POSIŁKU TUŻ PRZED WIZYTĄ</strong> – pełny
              brzuszek i stres to niezbyt dobre połączenie – najlepiej zjeść z
              lekkim wyprzedzeniem.
            </li>
            <li className="text-center rowdies-regular text-white">
              <span className="font-bold">3. </span>
              <strong>
                NIE PRZEJMUJ SIĘ, JEŚLI PIESEK PRZYJDZIE BRUDNY LUB MOKRY
              </strong>{" "}
              – zwłaszcza w deszczowy dzień – w końcu i tak czeka go porządna,
              profesjonalna kąpiel!
            </li>
            <li className="text-center rowdies-regular text-white">
              <span className="font-bold">4. </span>
              <strong>
                ZABIERZ KSIĄŻECZKĘ ZDROWIA (JEŚLI TO PIERWSZA WIZYTA)
              </strong>{" "}
              – szczególnie jeśli piesek ma alergie, przyjmuje leki lub ma inne
              potrzeby – warto o tym wspomnieć.
            </li>
            <li className="text-center rowdies-regular text-white">
              <span className="font-bold">5. </span>
              <strong>PRZYNIEŚ ULUBIONĄ ZABAWKĘ LUB KOCYK</strong> – znany
              zapach pomoże pupilowi poczuć się pewniej w nowym miejscu.
            </li>
            <li className="text-center rowdies-regular text-white">
              <span className="font-bold">6. </span>
              <strong>POINFORMUJ O WAŻNYCH KWESTIACH ZDROWOTNYCH</strong> –
              jeśli Twój pies ma np. wrażliwą skórę, lęk separacyjny albo nie
              lubi suszarki – daj nam znać! Podejdziemy do niego z odpowiednim
              wyczuciem.
            </li>
            <li className="text-center rowdies-regular text-white">
              <span className="text-2xl font-bold">7. </span>
              <strong>ZADBAJ O SPOKOJNE POŻEGNANIE</strong> – Twój spokój =
              spokój psa. Uśmiechnij się, pomachaj łapką i zostaw resztę nam.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default TakeCareCard;
