import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div
      variants={variants}
      className="flex h-[40%] flex-col  items-center justify-between"
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          variants={itemvariants}
          key={item}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.55 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
