import { useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MouseContext } from "../context/MouseContext";

const Proyect = ({
  title,
  imageSrc,
  techStack,
  resume,
  hoverColor,
  liveDemoLink,
}) => {
  const ref = useRef(null);
  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <>
      <motion.div
        ref={ref}
        id="Proyects"
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-4 sm:mb-10 last:mb-0"
      >
        <a href={liveDemoLink} target="_blank">
          <section
            className="bg-white button dark:hover:text-black hover:scale-105 duration-500 w-full rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 hover:text-white"
            onMouseEnter={() => handleMouseEnter("div")}
            onMouseLeave={handleMouseLeave}
            ref={divRefs}
          >
            <div className="pt-4 pb-7 px-8 sm:pr-2 sm:pt-10 sm:w-[40%] flex flex-col h-full justify-center">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-6 leading-relaxed">{resume}</p>
              <ul className="flex flex-wrap gap-2 mt-10 justify-center">
                {techStack?.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90"
                    style={{ backgroundColor: hoverColor }}
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={imageSrc}
              alt=""
              quality={95}
              className="absolute hidden sm:block top-0  right-0 w-[30rem] rounded-r-lg"
            />
          </section>
        </a>
      </motion.div>
    </>
  );
};
export default Proyect;
