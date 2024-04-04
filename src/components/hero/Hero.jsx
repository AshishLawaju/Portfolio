import { motion } from "framer-motion";
const textVarient = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
  scrollBUtton: {
    opacity: 0,
    y: 18,
    transition: {
      delay: 2,
      duration: 3,
      repeat: Infinity,
    },
  },
};
const sliderVarient = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: "-330%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div
      className="container relative overflow-hidden "
      style={{
        height: "calc(100vh - 100px)",
        marginBottom: "-100px",
        background: "linear-gradient(180deg , #0c0c1d ,#111132)",
      }}
    >
      <motion.div
        variants={textVarient}
        initial="initial"
        animate="animate"
        className="flex h-[100%] w-[50%] flex-col justify-center gap-10 text-white"
      >
        <motion.h2
          variants={textVarient}
          className="text-[30px] tracking-[10px] text-purple-800"
        >
          ASHISH LAWAJU
        </motion.h2>
        <motion.h1 variants={textVarient} className="text-[50px]">
          Full Stack Developer
        </motion.h1>
        <motion.div variants={textVarient} className="text-sm">
          <motion.button
            variants={textVarient}
            className="mr-5 rounded-lg border border-white p-3"
          >
            See the Lateest Works
          </motion.button>
          <motion.button
            variants={textVarient}
            className="rounded-lg border border-white p-3"
          >
            Contact Me
          </motion.button>
        </motion.div>
        <motion.img
          variants={textVarient}
          animate="scrollBUtton"
          src="/scroll.png"
          className="h-[50px] w-[50px]"
          alt=""
        />
      </motion.div>
      <div>
        <motion.div
          variants={sliderVarient}
          // initial="initial"
          animate="animate"
          className="absolute -bottom-36  w-[100%] whitespace-nowrap text-[50vh] text-[#ffffff09]"
        >
          React Node Express Mongoo SQL
        </motion.div>
        <img
          src="/hero.png"
          className="absolute right-0 top-0 h-[100%]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
