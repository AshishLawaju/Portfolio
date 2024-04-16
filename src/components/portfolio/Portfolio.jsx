/* eslint-disable react/prop-types */
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1073785/pexels-photo-1073785.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "This is description",
  },
  {
    id: 2,
    title: "Tailwind Commerce",
    img: "https://images.pexels.com/photos/17070821/pexels-photo-17070821/free-photo-of-pair-of-puffins-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolores, amet ab laudantium tenetur vitae ea harum illo eaque, quis ipsam recusandae neque nulla omnis optio consequatur deserunt saepe vel   ",
  },
  {
    id: 3,
    title: "Music APp Commerce",
    img: "https://images.pexels.com/photos/17070821/pexels-photo-17070821/free-photo-of-pair-of-puffins-sitting-in-grass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolores, amet ab laudantium tenetur vitae ea harum illo eaque, quis ipsam recusandae neque nulla omnis optio consequatur deserunt saepe vel   ",
  },
  {
    id: 4,
    title: "Node mmerce",
    img: "https://images.pexels.com/photos/19696764/pexels-photo-19696764/free-photo-of-young-woman-in-a-white-shirt-showing-her-hand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus dolores, amet ab laudantium tenetur vitae ea harum illo eaque, quis ipsam recusandae neque nulla omnis optio consequatur deserunt saepe vel   ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start" ,"end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-300px", "300px"]);

  return (
    <section  className="h-[100vh] flex overflow-hidden">
      <div className="container flex items-center justify-center">
        <div className="h-[50vh] flex-1 border-4 border-red-600 object-cover" ref={ref}>
          <img src={item.img} className=" h-[100%] " alt="" />
        </div>
        <motion.div className="flex flex-1 flex-col gap-10" style={{y}}>
          <h2 className="text-[72px]">{item.title}</h2>
          <p className="text-gray-500">{item.desc}</p>
          <button className="max-w-[200px] rounded-lg bg-orange-400 px-3 py-1">
            See Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} className="relative text-white ">
      <div className="sticky left-0 top-0">
        <h1 className="pt-[50px] text-center text-[36px] text-orange-400">
          Featured Works
        </h1>
        <motion.div
          style={{ scaleX }}
          className="
        h-[10px] bg-white
        "
        ></motion.div>
      </div>
      <div className="">
        {items.map((item) => {
          return <Single item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
