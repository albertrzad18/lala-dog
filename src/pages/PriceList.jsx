import React from "react";
import Navbar from "../components/Navbar";
import FadeInOut from "../components/FadeInOut";

const PriceList = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-44 px-6 md:px-32 flex flex-col lg:flex-col items-center justify-center gap-12 lg:gap-16">
          <div className="w-full lg:w-3/5 bg-gray-100 rounded-xl shadow-lg p-8 space-y-4 border-4 border-green-500 text-gray-800 h-full flex flex-col items-center justify-center text-center text-lg">
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold">CENNIK</h1>
              <p className="text-gray-600 mt-2">obowiązujący od 1.02.2025 r.</p>
            </div>

            <div className="max-w-5xl mx-auto text-gray-700 mb-16 px-4">
              <p className="text-lg mb-6">
                Cena wizyty ustalana jest indywidualnie. Uzależniona jest od
                gęstości sierści, wielkości i zachowania psa.
              </p>
              <ul className="list-disc list-inside text-base space-y-3">
                <li>
                  Przy psach agresywnych i niewspółpracujących naliczana jest
                  dodatkowa opłata (+50%).
                </li>
                <li>
                  Przy bardzo zaniedbanej sierści (kołtuny, filce) może być
                  naliczona dodatkowa opłata 70 zł lub odmowa rozczesania.
                </li>
                <li>
                  W przypadku suczek w trakcie cieczki – dodatkowa opłata
                  (+50%).
                </li>
              </ul>
            </div>

            <section className="max-w-6xl mx-auto mb-16 px-4">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Psy krótkowłose - dwuetapowa pielęgnacja
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 border">Rozmiar</th>
                      <th className="p-4 border">Przykłady</th>
                      <th className="p-4 border">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border">Małe</td>
                      <td className="p-4 border">
                        Pinczer, Chihuahua, Jamnik, Jack Russel Terrier
                      </td>
                      <td className="p-4 border">120 zł</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-4 border">Średnie</td>
                      <td className="p-4 border">
                        Buldog Francuski, Mops, Beagle, Buldog Angielski
                      </td>
                      <td className="p-4 border">130-200 zł</td>
                    </tr>
                    <tr>
                      <td className="p-4 border">Duże</td>
                      <td className="p-4 border">
                        Basset, Amstaff, Doberman, Cane Corso, Labrador
                      </td>
                      <td className="p-4 border">130 zł/h</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="max-w-4xl mx-auto mb-16 px-4">
              <h2 className="text-3xl font-semibold mb-6 text-center">
                Psy długowłose - dwuetapowa pielęgnacja
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 border">Rasa</th>
                      <th className="p-4 border">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border">Yorkshire Terrier</td>
                      <td className="p-4 border">150-180 zł</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </FadeInOut>
    </>
  );
};

export default PriceList;
