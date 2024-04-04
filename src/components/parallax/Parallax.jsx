/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div
      ref={ref}
      className={`relative flex h-[100%] w-[100%] items-center justify-center overflow-hidden text-white `}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)",
      }}
    >
      <motion.h1 className="text-[100px] " style={{ y: yText }}>
        {" "}
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="absolute z-30 h-full w-full bg-[url('../../../public/mountains.png')] bg-cover bg-bottom"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url('${type === "services" ? "/planets.png" : "/sun.png"}')`,
        }}
        className={`absolute z-20 h-full w-full  bg-cover bg-bottom`}
      >
        {" "}
      </motion.div>
      <motion.div
        style={{ x: yBg }}
        className="absolute z-10 h-full w-full bg-[url('../../../public/stars.png')] bg-cover bg-bottom"
      ></motion.div>
    </div>
  );
};

export default Parallax;
