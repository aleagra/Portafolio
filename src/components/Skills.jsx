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
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <>
      <div className="z-20 w-[850px] mx-auto grid grid-cols-4 grid-rows-4 justify-center gap-8">
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
            onMouseEnter={() => handleMouseEnter(index, "div")}
            onMouseLeave={handleMouseLeave}
            ref={divRefs}
          >
            <img src={imgSrc} alt="" className="mx-auto w-[50px] h-[50px]" />
            <h1 className="py-2 text-center dark:opacity-100 font-bold select-none">
              {name}
            </h1>
          </motion.li>
        ))}
      </div>
    </>
  );
}
export default Wrapper(Skills, "Skills", "Habilidades");
