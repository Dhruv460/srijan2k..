import { motion } from "framer-motion";

const TimeUnit = ({ value, label }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <span className="text-4xl font-bold text-yellow-300">{value}</span>
      <span className="text-lg text-white">{label}</span>
    </motion.div>
  );
};

export default TimeUnit;
