import React from "react";

const Locator = () => {
  return (
    <div className="w-[360px] md:w-3/4 h-[400px] flex justify-center items-center p-4 rounded-lg bg-white mb-8 shadow-xl shadow-[#7e54f0]">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.1363532190855!2d22.57835327671089!3d51.22557453396319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225774bc2c347d%3A0xf66a0a3ee63520e2!2sLotnicza%2011%2C%2020-435%20Lublin!5e0!3m2!1spl!2spl!4v1715161515624!5m2!1spl!2spl"
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
