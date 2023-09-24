import { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MouseContext } from "../context/MouseContext";
import { ICards } from "types/interface";

const Proyect = ({
  title,
  imageSrc,
  techStack,
  resume,
  liveDemoLink,
}:ICards) => {
  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext) || {};
    const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  function assignRef(ref: any, index: number, value: any) {
		if (ref && ref.current) {
			ref.current[index] = value
		}
	}

  
  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-4 sm:mb-8 last:mb-0"
      >
        <a
          href={liveDemoLink}
          target="_blank"
          onMouseEnter={() => handleMouseEnter && handleMouseEnter(1, "div")}
          onMouseLeave={() => handleMouseLeave && handleMouseLeave(1, "div")}
          ref={(el) => (assignRef(divRefs,1,el))}
        >
          <section className="bg-gray-100 rounded-lg overflow-hidden  relative sm:h-[22rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 button hover:scale-105 duration-500 dark:hover:text-black">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:group-even:pl-10 sm:pr-8 justify-center sm:pt-10 mr-[30rem] flex flex-col h-full sm:group-even:ml-[30rem] group-even:mr-0">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-6 leading-relaxed font-extralight">{resume}</p>
              <ul className="flex flex-wrap gap-2 mt-10 justify-center">
                {techStack?.map((tag:string, index:number) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/80"
            
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={imageSrc}
              alt="Project I worked on" 
              className="absolute hidden sm:block top-0 -right-0 w-[30rem] transition group-even:right-[initial] group-even:-left-0"
            />
          </section>
        </a>
      </motion.div>
    </>
  );
};
export default Proyect;
