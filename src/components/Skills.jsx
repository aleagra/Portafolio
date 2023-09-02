import React, { useContext, useMemo } from "react";
import { MouseContext } from "../context/MouseContext";
import { motion } from "framer-motion";
import Wrapper from "./wrapper/wrapper";

function Skills() {
  const skills = [
    { name: "React JS", imgSrc: "react.svg" },
    { name: "HTML", imgSrc: "html.svg" },
    { name: "CSS", imgSrc: "css.svg" },
    { name: "Node JS", imgSrc: "node.svg" },
    { name: "JavaScript", imgSrc: "javascript.svg" },
    { name: "MySQL", imgSrc: "mysql.svg" },
    { name: "Mongo DB", imgSrc: "mongo.svg" },
    { name: "Tailwind", imgSrc: "tailwind.svg" },
    { name: "Bootstrap", imgSrc: "bootstrap.svg" },
    { name: "SASS", imgSrc: "sass.svg" },
  ];

  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);

  return (
    <section
      className="flex flex-col justify-center w-[1200px] px-[8rem] proyects"
      id="Skills"
    >
      <div className="w-fitjustify-center z-20 m-auto mx-auto flex flex-col py-16 text-center dark:text-white max-md:p-0 max-md:py-10">
        <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem] ">
          Habilidades
        </h1>
      </div>

      <div className="z-20 grid grid-cols-3 grid-rows-3 justify-center gap-8">
        {skills.map(({ name, imgSrc }, key) => (
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 1 }}
            key={key}
          >
            <div
              className={`cursor-pointer rounded-3xl bg-[#282828] flex flex-col justify-center h-[120px] shadow-xl transition-colors hover:bg-[#1c1c1c]/70 hover:text-white dark:text-white dark:hover:bg-white/70 dark:hover:text-black`}
              onMouseEnter={() => handleMouseEnter(1, "div")}
              onMouseLeave={handleMouseLeave}
              ref={divRefs}
              key={key}
            >
              <img src={imgSrc} alt="" className="m-auto w-[50px]" />
              <h1 className="py-5 text-center dark:opacity-100 font-bold">
                {name}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Wrapper(Skills);
