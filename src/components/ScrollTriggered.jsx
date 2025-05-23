import { motion } from "framer-motion";

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export default function ScrollTriggered() {
  return (
    <div className="max-w-[500px] mx-auto  pb-24 w-full">
      {food.map(([emoji, hueA, hueB], i) => (
        <Card key={emoji} i={i} emoji={emoji} hueA={hueA} hueB={hueB} />
      ))}
    </div>
  );
}

function Card({ emoji, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      className="overflow-hidden flex justify-center items-center relative pt-5 -mb-28"
    >
      <div
        className="absolute inset-0"
        style={{
          background,
          clipPath:
            'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")',
        }}
      />
      <motion.div
        className="text-[164px] w-[300px] h-[430px] flex justify-center items-center rounded-[20px] bg-gray-100 shadow-[0_0_1px_rgba(0,0,0,0.075),0_0_2px_rgba(0,0,0,0.075),0_0_4px_rgba(0,0,0,0.075),0_0_8px_rgba(0,0,0,0.075),0_0_16px_rgba(0,0,0,0.075)]"
        style={{ transformOrigin: "10% 60%" }}
        variants={cardVariants}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}
