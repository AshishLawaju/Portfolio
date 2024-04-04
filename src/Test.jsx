import { motion } from "framer-motion";
import { useState } from "react";
const Test = () => {
  const variants = {
    visible: {
      opacity: 1,
      x: 30,
      transition: { staggerChildren: 0.25 },

      //   transition: { stiffness: 200, type: "spring", damping: 100 },
    },
    hidden: { opacity: 0 },
  };

  const [open, setOpen] = useState(false);

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="flex h-[100vh] items-center justify-center bg-background">
      {/* <motion.div
        variants={variants}
        // initial="hidden"
        // animate="visible"
        // transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
        className="h-[200px] w-[200px] bg-white "
      ></motion.div>

      <button onClick={() => setOpen((prev) => !prev)} className="text-white">
        {" "}
        Click
      </button>
 */}
      {/*   <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x: 300, y: 100 }}
        transition={{ duration: 2, delay: 0.3 }}
        //   while tap=click
        // drag

        // whileHover={{ opacity: 1, scale: 2, x: 200, y: 300 }}
        whileInView={{ opacity: 1, scale: 2, x: 200 }}
        className="h-[200px] w-[200px] bg-white "
      ></motion.div> */}

      <motion.ul
        variants={variants}
        initial="hidden"
        animate="visible"
        className="text-white"
      >
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
