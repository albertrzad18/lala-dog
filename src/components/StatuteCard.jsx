const StatuteCard = () => {
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-lg p-8 space-y-6 border-4 border-black font-bold text-gray-700">
        <h1 className="text-3xl md:text-3xl font-bold text-[#7e54f0] text-center">
          Regulamin
        </h1>
        <div className="text-lg space-y-4">
          <p className="text-center text-xl">
            <strong>Regulamin Salonu Groomerskiego Lala Dog</strong>
          </p>
          <p className="text-center text-lg">
            <strong>
              Umówienie zwierzęcia na wizytę oznacza zapoznanie się oraz
              akceptację regulaminu Lala Dog
            </strong>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 space-x-4 text-sm font-semibold ">
            <ol className="space-y-3">
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">1. </span>
                <strong className="text-[#7e54f0]">Rezerwacja wizyty</strong> –
                Wizyty przyjmowane są wyłącznie po wcześniejszym umówieniu się
                telefonicznie lub na miejscu w salonie.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">2. </span>
                <strong className="text-[#7e54f0]">
                  Bezpłatne odwołanie wizyty
                </strong>{" "}
                – Może nastąpić nie później niż 24h przed umówionym terminem.
                Jeżeli klient nie odwoła wizyty w możliwym terminie, zobowiązany
                jest do dokonania wpłaty w wysokości 100 zł. Jeżeli tego nie
                wykona, nie ma możliwości ponownego umówienia wizyty w salonie
                Lala Dog.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">3. </span>
                <strong className="text-[#7e54f0]">Punktualność</strong> –
                Prosimy o punktualne przybycie. Spóźnienie powyżej 15 minut może
                skutkować odwołaniem wizyty.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">4. </span>
                <strong className="text-[#7e54f0]">
                  Stan zdrowia zwierzęcia
                </strong>{" "}
                – Przyjmujemy wyłącznie zdrowe zwierzęta. Właściciel zobowiązany
                jest poinformować o problemach zdrowotnych, alergiach, cieczce
                lub agresji. Groomer może odmówić wykonania usługi, jeśli stan
                psa zagraża jego zdrowiu lub bezpieczeństwu. Każde zwierzę, a w
                szczególności pies powinien mieć wpis potwierdzający posiadanie
                aktualnego szczepienia przeciwko wściekliźnie.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">5. </span>
                <strong className="text-[#7e54f0]">
                  Szczeniaczki / kocięta
                </strong>{" "}
                – Szczeniaczki i kocięta są przyjmowane do salonu po wykonaniu
                wszystkich niezbędnych szczepień.
              </li>
            </ol>

            <ol className="space-y-3">
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">4. </span>
                <strong className="text-[#7e54f0]">
                  Obecność właściciela
                </strong>{" "}
                – Wizyta odbywa się bez obecności właściciela. Wyjątek stanowią
                psy starsze lub chore – po wcześniejszym ustaleniu.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">5. </span>
                <strong className="text-[#7e54f0]">Zaniedbana sierść</strong> –
                W przypadku bardzo dużych kołtunów lub filcu groomer może
                odmówić ich rozczesywania – dla dobra psa zostaną one wycięte.{" "}
                <br />
                <strong className="text-[#7e54f0]">
                  Rozczesywanie silnie skołtunionej sierści:
                </strong>{" "}
                dodatkowa opłata 70 zł <br />
                <strong className="text-[#7e54f0]">
                  Golenie filcu/silnie skołtunionej sierści:
                </strong>{" "}
                dodatkowa opłata 30 zł
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">8. </span>
                <strong className="text-[#7e54f0]">
                  Psy agresywne i niewspółpracujące
                </strong>{" "}
                – W przypadku psów wykazujących agresję lub brak współpracy
                naliczana jest dodatkowa opłata w wysokości +50%. Obowiązkiem
                właściciela jest poinformowanie groomera o skłonnościach
                zwierząt do przejawiania agresji. W takim przypadku warto zabrać
                kaganiec.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">9. </span>
                <strong className="text-[#7e54f0]">
                  Suczki w trakcie cieczki
                </strong>{" "}
                – Ze względu na komfort zwierzęcia i groomera prosimy o
                przełożenie wizyty suczki w trakcie cieczki. W przypadku
                zatajenia tej informacji naliczana jest dodatkowa opłata (+50%).
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">10. </span>
                <strong className="text-[#7e54f0]">
                  Brak usługi bez kąpieli
                </strong>{" "}
                – Wszystkie zabiegi pielęgnacyjne (strzyżenie, trymowanie itp.)
                wykonywane są wyłącznie po kąpieli wykonanej w salonie.
              </li>
            </ol>

            <ol className="space-y-3">
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">3. </span>
                <strong className="text-[#7e54f0]">
                  Usługi, których nie wykonuję
                </strong>{" "}
                – Nie wykonuję czyszczenia zębów ani oczyszczania gruczołów
                okołoodbytowych u psów.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">6. </span>
                <strong className="text-[#7e54f0]">Usługa express</strong> – W
                przypadku skorzystania z usługi express do ceny bazowej
                pielęgnacji doliczana jest opłata w wysokości 100 zł.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">13. </span>
                <strong className="text-[#7e54f0]">Odbiór zwierzęcia</strong> –
                Zwierzę należy odebrać bezpośrednio po zakończeniu usługi. Za
                opiekę po godzinach pracy może zostać naliczona dodatkowa
                opłata. 30 minut – 50 zł.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">14. </span>
                <strong className="text-[#7e54f0]">Płatności</strong> – Cennik
                dostępny jest w salonie i na stronie internetowej. Płatność
                następuje po wykonaniu usługi – GOTÓWKĄ.
              </li>
              <li className="bg-white p-4 rounded-lg shadow-md border-2 border-[#7e54f0] shadow-[#7e54f0]">
                <span className="font-bold">15. </span>
                <strong className="text-[#7e54f0]">Reklamacje</strong> – Uwagi
                dotyczące usługi należy zgłaszać w ciągu 24 godzin od jej
                wykonania.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatuteCard;
