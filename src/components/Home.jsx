import React, { useContext } from "react";
import Lottie from "lottie-react";
import home from "../assets/home.json";
import { MouseContext } from "../context/MouseContext";
import { motion } from "framer-motion";
export function Home() {
  const { pRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);

  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <section
          className="relative z-[1] flex h-screen select-none flex-col justify-center pt-24 max-md:pt-[8rem]"
          id="Home"
        >
          <div className="mx-auto flex max-xl:w-[100%] max-lg:flex-col md:pt-0 2xl:w-[85%]">
            <div className="mx-auto  mt-[-5.5rem] flex w-full flex-col justify-center outline-none 2xl:w-1/2">
              <Lottie
                animationData={home}
                className="mx-auto max-xl:w-full max-lg:w-[80%] max-sm:w-full 2xl:w-[90%] "
              />
            </div>
            <div className=" flex w-full flex-col justify-center text-center 2xl:w-1/2">
              <div className="z-20 flex flex-col justify-center max-2xl:px-10 max-md:px-0">
                <span
                  className="m-0 p-0 text-[6rem] font-bold  leading-[8rem] text-black dark:text-[#dfd3c3] max-lg:text-[4rem] max-sm:text-[2rem] max-sm:leading-[5rem]"
                  onMouseEnter={() => handleMouseEnter(1, "p")}
                  onMouseLeave={() => handleMouseLeave(1, "p")}
                >
                  Alejandro Agra
                </span>

                <span
                  className="text-[2rem] dark:text-white max-sm:text-lg"
                  onMouseEnter={() => handleMouseEnter(2, "p")}
                  onMouseLeave={() => handleMouseLeave(2, "p")}
                >
                  Full Stack Developer
                </span>
              </div>

              <div className=" my-10 flex w-full justify-center gap-6">
                <a
                  href="#Proyects"
                  className="flex h-[4rem] items-center gap-2 whitespace-nowrap rounded-lg  border-2 border-black bg-transparent px-3 dark:border-white dark:text-white"
                >
                  <span>Ver proyectos</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
