import { motion } from "framer-motion";

const FadeInOut = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOut;
