import { image } from "motion/react-client";
import FadeInOut from "../components/FadeInOut";
import Locator from "../components/Locator";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <img
          src="dogWithPhone.jpg"
          alt="Dog Left"
          className="hidden md:block absolute left-82 top-28 w-64 h-auto transform scale-200"
        />{" "}
        <div className="pt-16 md:pt-44 px-32 flex flex-col md:flex-row items-center justify-center gap-16 font-mono font-semibold">
          <div className="w-full h-full mx-auto bg-purple-300 rounded-3xl p-8 space-y-6 shadow-xl shadow-[#7e54f0] text-white z-20">
            <h2 className="text-2xl font-bold text-center text-[#7e54f0]">
              Kontakt
            </h2>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <MapPin className="text-[#7e54f0] w-6 h-6" />
              <p>Lotnicza 11, 20-435 Lublin</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <Phone className="text-[#7e54f0] w-6 h-6" />
              <p>+695 385 299</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <Mail className="text-[#7e54f0] w-6 h-6" />
              <p>lager@dorotka.pl</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <Facebook className="text-[#7e54f0] w-6 h-6" />
              <a
                href="https://facebook.com/twojafirma"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7e54f0] transition-colors"
              >
                Nasz Facebook
              </a>
            </div>
          </div>
          <Locator />
        </div>
      </FadeInOut>
    </>
  );
};

export default ContactPage;
