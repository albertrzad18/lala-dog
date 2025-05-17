import Locator from "../components/Locator";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import FlashLogoTransition from "../components/FlashLogoTransition";

const ContactPage = () => {
  return (
    <>
      <FlashLogoTransition>
        <Navbar />
        <img
          src="dogs/dogWithPhone.jpg"
          alt="Dog Left"
          className="hidden md:block absolute left-84 -top-30 w-64 h-auto transform scale-200"
        />{" "}
        <div className="pt-20 md:pt-60 px-4 sm:px-8 md:px-32 flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 font-mono font-semibold">
          <div className="w-full sm:w-3/4 h-full bg-purple-300 rounded-3xl p-6 sm:p-8 space-y-4 sm:space-y-6 shadow-xl shadow-[#7e54f0] text-white z-20">
            <h2 className="text-3xl sm:text-4xl rowdies-bold text-center text-[#7e54f0]">
              Kontakt
            </h2>

            <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-base sm:text-lg md:text-xl rowdies-regular">
              <MapPin className="text-[#7e54f0] w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-white">Lotnicza 11, 20-435 Lublin</p>
            </div>

            <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-base sm:text-lg md:text-xl rowdies-regular">
              <Phone className="text-[#7e54f0] w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-white">+695 385 299</p>
            </div>

            <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-base sm:text-lg md:text-xl rowdies-regular">
              <Mail className="text-[#7e54f0] w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-white">lager@dorotka.pl</p>
            </div>

            <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-base sm:text-lg md:text-xl rowdies-regular">
              <Facebook className="text-[#7e54f0] w-5 h-5 sm:w-6 sm:h-6" />
              <a
                href="https://www.facebook.com/lala.dog.lublin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7e54f0] transition-colors text-white"
              >
                Nasz Facebook
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-base sm:text-lg md:text-xl rowdies-regular">
              <p className="text-white text-center">
                Godziny otwarcia uzależnione są od potrzeb klientów. Zapraszam
                do kontaktu.
              </p>
            </div>
          </div>

          <Locator />
        </div>
      </FlashLogoTransition>
    </>
  );
};

export default ContactPage;
