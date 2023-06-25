import React, { useContext, useMemo } from "react";
import { MouseContext } from "../context/MouseContext";
import Wrapper from "./wrapper/wrapper";
import { motion } from "framer-motion";

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

  const skillItems = useMemo(
    () =>
      skills.map(({ name, imgSrc }, key) => (
        <div
          className="cursor-pointer rounded-xl bg-white p-4 shadow-lg transition-colors  hover:bg-[#1c1c1c]/70 hover:text-white dark:bg-[#282828] dark:text-white dark:hover:bg-white/70 dark:hover:text-black max-md:w-[55%] max-sm:w-[45%] max-sm:p-0 sm:w-[44%] lg:w-[23%] "
          onMouseEnter={() => handleMouseEnter(1, "div")}
          onMouseLeave={handleMouseLeave}
          ref={divRefs}
          key={key}
        >
          <img
            src={imgSrc}
            alt=""
            className="card m-auto h-12 w-12 p-2 2xl:h-20 2xl:w-20"
          />
          <h1 className="my-2 text-center dark:opacity-100">{name}</h1>
        </div>
      )),
    [skills, handleMouseEnter, handleMouseLeave, divRefs]
  );

  return (
    <>
      <section
        className="mb-[9rem] flex flex-col justify-center p-10 max-md:p-4 sm:px-10 xl:px-16"
        id="Skills"
      >
        <div className="w-fitjustify-center z-20 m-auto mx-auto flex flex-col py-16 text-center dark:text-white max-md:p-0 max-md:py-10 2xl:p-20">
          <p className="whitespace-nowrap text-lg opacity-40 2xl:text-xl">
            Lenguajes y Frameworks
          </p>
          <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem] ">
            Habilidades
          </h1>
        </div>

        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="z-20 flex h-fit items-center justify-center">
            <div className="flex flex-wrap justify-center gap-6">
              {skillItems}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Wrapper(Skills);
