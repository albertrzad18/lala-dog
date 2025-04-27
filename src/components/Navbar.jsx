import HoverLink from "./HoverLink";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-72 md:h-36 bg-gray-300 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
        <ul className="flex flex-row gap-6 md:gap-32 text-2xl">
          <li>
            <HoverLink text="Informacje" link="/informations" />
          </li>
          <li>
            <HoverLink text="Galeria" link="/gallery" />
          </li>
        </ul>

        <div className="my-4 md:my-0">
          <img
            src="dog.jpg"
            className="w-24 md:w-48 rounded-full border-4 border-green-600"
            alt="Logo"
          />
        </div>

        <ul className="flex flex-row gap-6 md:gap-32 text-2xl">
          <li>
            <HoverLink text="Cennik" link="/pricing" />
          </li>
          <li>
            <HoverLink text="Kontakt" link="/contact" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
