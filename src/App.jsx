import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        drag
        whileDrag={{
          scale: 1.2,
          rotate: 270,
        }}
        class="box"
      >
        {" "}
        Framer box{" "}
      </motion.div>

      <motion.div
        animate={{
          x:[0, 400,400,0,0],
          y:[0,0,200,200,0],
          rotate:[0,360,0,-360,0]
        }}
        transition={{
          duration: 20,

          ease: "anticipate",
          repeat: Infinity,
        }}
        class="circle"
      >
        Framer circle
      </motion.div>
    </div>
  );
};
export default App;
