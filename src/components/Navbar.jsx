import HoverLink from "./HoverLink";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-72 md:h-24 bg-gray-300 z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
          <ul className="flex flex-row gap-16 text-xl md:text-2xl mb-24">
            <li>
              <HoverLink text="O mnie" link="/aboutMe" />
            </li>
            <li>
              <HoverLink text="Oferta" link="/offer" />
            </li>
            <li>
              <HoverLink text="Cennik" link="/priceList" />
            </li>
          </ul>
          <div className="my-4 md:my-0 absolute top-2 left-1/2 transform -translate-x-1/2">
            <img
              src="dog.jpg"
              className="w-24 md:w-38 rounded-full border-8 border-gray-300 block md:block"
              alt="Logo"
            />
          </div>
          <ul className="flex flex-row gap-16 text-xl md:text-2xl mb-24">
            <li>
              <HoverLink text="Galeria" link="/gallery" />
            </li>
            <li>
              <HoverLink text="Zasady" link="/statute" />
            </li>
            <li>
              <HoverLink text="Kontakt" link="/contact" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
