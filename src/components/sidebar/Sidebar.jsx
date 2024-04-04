import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px) ",
      transition: {
        type: "spring  ",
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={open ? "open" : "closed"}
      className="fixed left-0 top-0 flex h-full w-[400px] flex-col bg-white  "
    >
      <motion.div
        variants={variants}
        className="flex  h-full w-full flex-col items-center justify-center gap-20 "
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
