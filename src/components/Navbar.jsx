import { useState } from "react";
import HoverLink from "./HoverLink";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 w-full h-15 bg-transparent md:bg-white z-50 md:shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center md:justify-between py-2 px-4 md:px-6">
          {!isOpen && (
            <button
              className="md:hidden absolute top-0"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <img src="logo.png" className="w-16 rounded-full" alt="Logo" />
            </button>
          )}

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
            <img
              src="logo.png"
              className="w-24 md:w-52 rounded-full"
              alt="Logo"
            />
          </div>

          <ul className="hidden md:flex flex-row justify-center gap-8 text-xl whitespace-nowrap">
            <li>
              <HoverLink text="O mnie" link="/aboutMe" />
            </li>
            <li>
              <HoverLink text="Oferta i cennik" link="/offer" />
            </li>
            <li>
              <HoverLink text="Kontakt" link="/contact" />
            </li>
          </ul>

          <ul className="hidden md:flex flex-row gap-8 text-xl whitespace-nowrap">
            <li>
              <HoverLink text="Galeria" link="/gallery" />
            </li>
            <li>
              <HoverLink text="Zasady" link="/statute" />
            </li>
            <li>
              <HoverLink text="Lager i Dorotka" link="/dogs" />
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-white px-4 py-6 space-y-4 text-lg shadow-md flex flex-col items-center z-50 min-h-screen">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4"
            >
              <X size={28} />
            </button>
            <HoverLink text="O mnie" link="/aboutMe" />
            <HoverLink text="Oferta i cennik" link="/offer" />
            <HoverLink text="Kontakt" link="/contact" />
            <HoverLink text="Galeria" link="/gallery" />
            <HoverLink text="Zasady" link="/statute" />
            <HoverLink text="Lager i Dorotka" link="/dogs" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
