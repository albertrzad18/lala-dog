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
          src="dogs/dogWithPhone.jpg"
          alt="Dog Left"
          className="hidden md:block absolute left-84 -top-30 w-64 h-auto transform scale-200"
        />{" "}
        <div className="pt-20 md:pt-58 px-32 flex flex-col items-center justify-center gap-16 font-mono font-semibold">
          <div className="w-3/4 h-full  bg-purple-300 rounded-3xl p-8 space-y-6 shadow-xl shadow-[#7e54f0] text-white z-20">
            <h2 className="text-4xl rowdies-bold text-center text-[#7e54f0]">
              Kontakt
            </h2>

            <div className="flex items-center justify-center space-x-4 text-xl rowdies-regular">
              <MapPin className=" text-[#7e54f0] w-6 h-6" />
              <p className="text-white">Lotnicza 11, 20-435 Lublin</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl rowdies-regular">
              <Phone className="text-[#7e54f0] w-6 h-6" />
              <p className="text-white">+695 385 299</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl rowdies-regular">
              <Mail className="text-[#7e54f0] w-6 h-6" />
              <p className="text-white">lager@dorotka.pl</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl rowdies-regular">
              <Facebook className="text-[#7e54f0] w-6 h-6" />
              <a
                href="https://facebook.com/twojafirma"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7e54f0] transition-colors text-white"
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
