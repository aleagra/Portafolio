import React, { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import { motion } from "framer-motion";
import Wrapper from "./wrapper/wrapper";
import { skills } from "../utilities/data";

function Skills() {
  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);

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
        {skills.map(({ name, imgSrc }, key) => (
          <div
            className={`cursor-pointer rounded-3xl button bg-[#282828] dark:border-white border flex flex-col justify-center h-[150px] shadow-xl transition-colors hover:text-white dark:text-white dark:hover:text-black`}
            onMouseEnter={() => handleMouseEnter(1, "div")}
            onMouseLeave={handleMouseLeave}
            ref={divRefs}
            key={key}
          >
            <img src={imgSrc} alt="" className="mx-auto w-[50px]" />
            <h1 className="py-2 text-center dark:opacity-100 font-bold">
              {name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Wrapper(Skills);
