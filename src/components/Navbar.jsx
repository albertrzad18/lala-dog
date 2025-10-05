import { useState } from "react";
import HoverLink from "./HoverLink";
import { X, Menu } from "lucide-react";

const Navbar = ({ showLogo = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="absolute top-0 w-full h-15 bg-transparent md:bg-white z-50 md:shadow-md"
        translate="no"
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-center md:justify-between py-2 px-4 md:px-6">
          {!isOpen && (
            <button
              className="md:hidden absolute top-4 bg-white p-2 rounded-full shadow-md"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} className="text-black" />
            </button>
          )}

          {showLogo && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden md:block">
              <a href="https://example.com">
                <img
                  src="logo.png"
                  className="w-16 sm:w-24 md:w-32 lg:w-48 rounded-full"
                  alt="Logo"
                ></img>
              </a>
            </div>
          )}

          <ul
            className={
              "hidden md:flex flex-row justify-center text-xl whitespace-nowrap " +
              (showLogo ? "gap-8" : "ml-56")
            }
          >
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

          <ul
            className={
              "hidden md:flex flex-row justify-center text-xl whitespace-nowrap " +
              (showLogo ? "gap-8" : "mr-56")
            }
          >
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
          <div
            className={
              "absolute top-0 left-0 w-full bg-white px-4 py-6 space-y-4 text-lg shadow-md flex flex-col items-center z-5"
            }
          >
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
