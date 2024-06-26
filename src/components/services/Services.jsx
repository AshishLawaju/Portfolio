import {  motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      // whileInView="animate"
      animate={isInView && "animate"}
      className="flex h-full flex-col justify-between text-white"
      style={{ background: "linear-gradient(180deg , #0c0c1d ,#111132)" }}
    >
      <motion.div
        variants={variants}
        className="flex basis-1/4 items-center gap-5 self-end"
      >
        <p className="text-right text-[20px] font-light">
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className="w-[300px] border-[0.5px] border-gray-500" />
      </motion.div>

      <div className="flex basis-1/2 flex-col items-center">
        <div className="flex items-center  gap-5">
          <img
            className="h-[100px] w-[300px] rounded-3xl object-cover"
            src="/people.webp"
            alt=""
          />
          <h1 className="text-[96px] font-thin">
            {" "}
            <b className="font-bold hover:text-orange-400">Unique</b> Ideas
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <h1 className="text-[96px]">
            {" "}
            <b>For Your</b> Business.
          </h1>
          <button className="h-[100px] w-[300px] rounded-full bg-orange-400 text-[24px] uppercase text-black/95">
            What we do?
          </button>
        </div>
      </div>

      <motion.div
        className="container flex basis-1/2 gap-5"
        variants={variants}
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            //   whileHover={{ background: "lightgray", color: "white" }}
            key={index}
            className="flex flex-col gap-5 border-[0.5px] border-gray-500 p-[50px] hover:bg-gray-400 hover:text-black"
          >
            <h2 className="font-semibold">Branding</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident libero modi tenetur inventore neque nulla magni esse,
              ratione quibusdam harum nemo quod iure doloremque repellendus ut
              culpa et error molestias.
            </p>
            <button className="w-full bg-orange-400 p-[10px]">go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
