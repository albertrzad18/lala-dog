const HoverLink = ({ text, link }) => {
  return (
    <>
      <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium font-mono transition-all group px-2.5  border-black mb-8 ">
        <span className="w-56 h-48 rounded bg-[#b5b510] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white p-2">
          <a href={link}>{text}</a>
        </span>
      </button>
    </>
  );
};

export default HoverLink;
