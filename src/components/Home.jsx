import { useContext, useRef, useEffect } from "react";
import lottie from "lottie-web";
import { MouseContext } from "../context/MouseContext";
import animationData from "../assets/lottie.json";

export function Home() {
  const { handleMouseEnter, handleMouseLeave } = useContext(MouseContext);
  const animationContainer = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      animationData,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <section
      className="relative z-[1] flex h-screen select-none flex-col items-center pt-24 max-md:pt-[8rem]"
      id="Home"
    >
      <div className="flex flex-col items-center mt-20 max-xl:w-[100%] max-lg:flex-col md:pt-0 2xl:w-[85%]">
        <div className="mt-[-5.5rem] flex w-full flex-col justify-center outline-none 2xl:w-1/2">
          <div
            ref={animationContainer}
            className="mx-auto max-xl:w-full max-lg:w-[80%] max-sm:w-full 2xl:w-[90%] player"
          />
        </div>
        <div className="flex w-full flex-col justify-center items-center text-center 2xl:w-1/2">
          <div className="z-20 w-fit flex flex-col justify-center items-center max-2xl:px-10 max-2xl:mx-auto max-md:px-0">
            <span
              className="m-0 p-0 mb-2 text-[6rem] font-bold leading-[7rem] text-black dark:text-white max-2xl:text-[5rem] max-lg:text-[4rem] max-sm:text-[2rem] max-sm:leading-[5rem]"
              onMouseEnter={() => handleMouseEnter(1, "p")}
              onMouseLeave={() => handleMouseLeave(1, "p")}
            >
              Alejandro Agra
            </span>
            <span
              className="text-[2rem] text-black/80 dark:text-white/80 font-semibold max-sm:text-lg"
              onMouseEnter={() => handleMouseEnter(2, "p")}
              onMouseLeave={() => handleMouseLeave(2, "p")}
            >
              Full Stack Developer
            </span>
          </div>
          <div className="my-6 flex w-full justify-center gap-6">
            <a
              href="#Proyects"
              aria-label="Proyectos"
              className="flex h-[4rem] px-10 button items-center gap-2 whitespace-nowrap rounded-3xl border-2 border-black bg-transparent dark:border-white text-xl font-bold dark:text-white transition-all duration-500 hover:text-white dark:hover:text-black uppercase "
              onMouseEnter={() => handleMouseEnter(2, "p")}
              onMouseLeave={() => handleMouseLeave(2, "p")}
            >
              <span>Ver proyectos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
