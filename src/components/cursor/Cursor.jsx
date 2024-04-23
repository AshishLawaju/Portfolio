import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  },[]);
  
  console.log(position);
  return (
    <motion.div
    animate={{x:position.x+10, y:position.y+10}}
    className="fixed h-[50px] w-[50px] rounded-full border-2 border-white z-50"></motion.div>
  );
};

export default Cursor;
