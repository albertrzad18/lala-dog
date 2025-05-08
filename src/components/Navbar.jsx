import HoverLink from "./HoverLink";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-22 bg-gray-300 z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between py-4 px-4 md:px-6 relative">
          <ul className="flex flex-row gap-24 md:gap-18 text-sm md:text-xl whitespace-nowrap">
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

          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 hidden md:block">
            <img
              src="dog.jpg"
              className="w-24 md:w-38 rounded-full border-8 border-gray-300"
              alt="Logo"
            />
          </div>

          <ul className="flex flex-row gap-24 md:gap-18 text-sm md:text-xl whitespace-nowrap">
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
      </nav>
    </>
  );
};

export default Navbar;
