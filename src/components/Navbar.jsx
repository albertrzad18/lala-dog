import { useState } from "react";
import HoverLink from "./HoverLink";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full h-15 bg-[#D3D324] z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center md:justify-between py-2 px-4 md:px-6">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 hidden md:block">
            <img
              src="logo.jpg"
              className="w-24 md:w-36 rounded-full border-8 border-[#D3D324]"
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
          <div className="md:hidden bg-[#D3D324] px-4 pb-4 space-y-3 text-lg shadow-md flex flex-col items-center">
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
