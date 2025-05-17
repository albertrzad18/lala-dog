// components/FlashLogoTransition.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlashLogoTransition = ({ children }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLogo && (
        <motion.img
          src="logo.png"
          alt="Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 w-1/2 h-auto -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none p-8"
        />
      )}
      {!showLogo && children}
    </>
  );
};

export default FlashLogoTransition;
