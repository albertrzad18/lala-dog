import HoverLink from "./HoverLink";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-12 w-full h-18 bg-[#7e54f0] z-50 shadow-md hidden md:block">
        <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-wrap items-center justify-between py-4 px-4 md:px-6 relative">
          <ul className="flex flex-row gap-24 md:gap-8 text-sm md:text-xl whitespace-nowrap">
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

          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 hidden md:block">
            <img
              src="logo.jpg"
              className="w-24 md:w-38 rounded-full border-8 border-[#7e54f0]"
              alt="Logo"
            />
          </div>

          <ul className="flex flex-row gap-24 md:gap-8 text-sm md:text-xl whitespace-nowrap">
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
