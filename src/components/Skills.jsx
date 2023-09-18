import React, { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import { motion } from "framer-motion";
import Wrapper from "./wrapper/wrapper";
import { skills } from "../utilities/data";

function Skills() {
  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <section
      className="flex flex-col justify-center w-[1200px] px-[8rem]"
      id="Skills"
    >
      <div className="w-fit justify-center z-20 m-auto mx-auto flex flex-col py-16 text-center dark:text-white max-md:p-0 max-md:py-10">
        <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem] ">
          Habilidades
        </h1>
      </div>

      <div className="z-20 w-[850px] mx-auto grid grid-cols-4 grid-rows-3 justify-center gap-8">
        {skills.map(({ name, imgSrc }, index) => (
          <motion.li
            className="bg-white button list-none dark:hover:text-black borderBlack rounded-xl px-5 py-3 pt-5 dark:bg-white/10 dark:text-white/80 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <img src={imgSrc} alt="" className="mx-auto w-[50px] h-[50px]" />
            <h1 className="py-2 text-center dark:opacity-100 font-bold">
              {name}
            </h1>
          </motion.li>
        ))}
      </div>
    </section>
  );
}
export default Wrapper(Skills);
