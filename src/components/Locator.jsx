import React from "react";

const Locator = () => {
  return (
    <div className="w-3/4 h-[500px] flex justify-center items-center p-4 ">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.394631398733!2d22.281879076709696!3d51.171548040882755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722ec051028e90b%3A0x3c851eb5e39f1713!2sLubelska%20108%2C%2024-200%20Be%C5%82%C5%BCyce!5e0!3m2!1spl!2spl!4v1714227750215!5m2!1spl!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Locator;
