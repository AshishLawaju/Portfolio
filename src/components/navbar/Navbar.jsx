import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className=" container  h-[100px]  ">
      {/* sidebar */}
      <Sidebar />
      {/* wrapper */}
      <div className="container flex  items-center justify-between ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          Ashish Dev
        </motion.span>
        <div className="flex gap-4">
          {" "}
          <img src="/facebook.png" alt="" className="h-[25px] w-[25px]" />{" "}
          <img src="/instagram.png" className="h-[25px] w-[25px]" alt="" />
          <img src="/youtube.png" className="h-[25px] w-[25px]" alt="" />
          <img src="/dribbble.png" className="h-[25px] w-[25px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
