import FadeInOut from "../components/FadeInOut";
import Locator from "../components/Locator";
import Navbar from "../components/Navbar";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <FadeInOut>
        <div className="pt-42 px-32 flex flex-row items-center justify-center gap-16">
          <div className="w-1/2 h-full mx-auto mt-8 bg-white rounded-xl shadow-lg p-8 space-y-6 border-2 border-green-500">
            <h2 className="text-2xl font-bold text-center text-green-600">
              Kontakt
            </h2>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <MapPin className="text-green-500 w-6 h-6" />
              <p className="text-gray-700">Lubelska 108, 24-200 Bełżyce</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <Phone className="text-green-500 w-6 h-6" />
              <p className="text-gray-700">+48 123 456 789</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <Mail className="text-green-500 w-6 h-6" />
              <p className="text-gray-700">lager@dorotka.pl</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-xl">
              <Facebook className="text-green-500 w-6 h-6" />
              <a
                href="https://facebook.com/twojafirma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors"
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
