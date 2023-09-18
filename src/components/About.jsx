import { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import Wrapper from "./wrapper/wrapper";
import { motion } from "framer-motion";

function About() {
  const { handleMouseEnter, handleMouseLeave } = useContext(MouseContext);
  return (
    <div className="m-auto flex h-screen w-[850px] items-center justify-center text-center max-md:w-full max-md:px-4 ">
      <span
        className="select-none text-[3rem] font-bold text-black dark:text-white max-2xl:text-[3.2rem] max-sm:text-[2rem]"
        onMouseEnter={() => handleMouseEnter(5, "p")}
        onMouseLeave={() => handleMouseLeave(5, "p")}
      >
        Soy un joven programador de Argentina, apasionado por la tecnología.
        Disfruto encontrando soluciones creativas a los desafíos y trabajando en
        proyectos desafiantes que me permitan aplicar mis habilidades y
        conocimientos.
      </span>
    </div>
  );
}
export default Wrapper(About, "About");
