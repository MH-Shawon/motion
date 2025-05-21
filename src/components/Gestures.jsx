import { motion, MotionConfig } from "motion/react";
const Gestures = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MotionConfig
        transition={{
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.5,
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Click Me!
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.5,
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};
export default Gestures;
