import { useContext, memo } from "react";
import { MouseContext } from "../context/MouseContext";
import wrapper from "./wrapper/wrapper";
import { motion } from "framer-motion";
const Proyects = memo(() => {
  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);
  const card = [
    {
      imageSrc: "./cryptowave.webp",
      title: "Cryptowave",
      description: "Crypto Wallet",
      techStack: ["React", "Tailwind"],
      repositoryLink: "https://github.com/aleagra/Proyecto-Wallet",
      liveDemoLink: "https://cryptowave.web.app",
      resume:
        "Landing page de una crypto wallet con React para gestionar criptomonedas de forma segura, con una interfaz moderna.",
      hoverColor: "#2d70fd",
    },
    {
      imageSrc: "./weatherme.webp",
      title: "WeatherMe",
      description: "Pagina del clima",
      techStack: ["React", "Tailwind"],
      repositoryLink: "https://github.com/aleagra/WeatherMe-page",
      liveDemoLink: "https://weather-me.web.app/",
      resume:
        "Un sitio web sobre el clima hecho con React y Tailwind que utiliza una API para mostrar información meteorológica en tiempo real.",
      hoverColor: "#2d70fd",
    },
    {
      imageSrc: "./socialapp.webp",
      title: "Social App",
      description: "Red social",
      techStack: ["React", "Node js", "Tailwind", "Mongo DB"],
      repositoryLink: "https://github.com/aleagra/SocialApp",
      liveDemoLink: "https://social-application.web.app",
      resume:
        "Una red social construida con React y Tailwind, respaldada por una base de datos de Node.js y MySql para conectarse con amigos.",
      hoverColor: "ffffff",
    },
  ];

  return (
    <>
      <section
        className="relative h-full items-center justify-center max-sm:px-4 sm:px-[1rem] md:p-10 lg:px-24"
        id="Proyects"
      >
        <div className="z-20 m-auto mx-auto flex w-fit flex-col justify-center p-20 text-center dark:text-white max-md:p-0 max-md:py-10">
          <p className="whitespace-nowrap text-lg opacity-40 2xl:text-xl">
            Algunos de mis proyectos
          </p>
          <h1 className="border-b-4 border-black text-[2rem] font-bold  dark:border-white 2xl:text-[3rem]">
            Mis proyectos
          </h1>
        </div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-wrap justify-center gap-8">
            {card.map((item, index) => (
              <div
                key={index}
                className="relative flex h-full flex-col rounded-lg bg-white/40  shadow-xl dark:bg-[#282828]/40 max-lg:m-auto max-sm:w-[95%] lg:w-[31%] xl:w-[26%] 
                "
                onMouseEnter={() => handleMouseEnter(index, "div")}
                onMouseLeave={handleMouseLeave}
                ref={divRefs}
              >
                <img
                  className="h-fit w-full rounded-lg max-2xl:h-[250px] max-md:object-cover"
                  src={item.imageSrc}
                  alt=""
                />
                <div
                  className={`absolute inset-0 top-0 flex flex-col  rounded-lg  bg-[#333333] text-white  opacity-0 transition-opacity  hover:opacity-100 `}
                >
                  <div className="p-4 text-center max-md:pt-12 3xl:pt-20 max-2xl:p-6 max-md:p-4  2xl:p-8">
                    <h1 className="whitespace-nowrap my-4 font-bold sm:text-3xl  2xl:text-4xl">
                      {item.title}
                    </h1>
                    <p className="whitespace-nowrap text-xl my-4 opacity-50 max-md:text-lg">
                      {item.description}
                    </p>
                    <span className="text-md max-md:text-sm ">
                      {item.resume}
                    </span>
                  </div>
                  <div className="flex h-fit flex-wrap justify-center gap-5 max-sm:px-3 xl:px-6">
                    {item.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-md bg-black/90 px-2 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-y-2 p-4 py-8 text-black dark:text-white max-sm:p-4">
                  <p className="text-center text-xl font-bold uppercase">
                    {item.title}
                  </p>
                  <div className="h-8 overflow-hidden">
                    <p className="whitespace-nowrap pb-2 text-center text-lg max-2xl:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="z-20 flex max-md:gap-6 max-sm:text-sm pt-6">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repositorio"
                      href={item.repositoryLink}
                      className="m-auto w-[46%] rounded-md bg-black p-2 text-white shadow-lg dark:bg-white dark:text-black max-sm:px-0"
                    >
                      <button className="w-full text-center">
                        Repositorio
                      </button>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Demo"
                      href={item.liveDemoLink}
                      className="m-auto w-[46%] rounded-md bg-black p-2 text-white shadow-lg dark:bg-white dark:text-black max-sm:px-0"
                    >
                      <button className="w-full text-center">Ver</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
});
export default wrapper(Proyects, { id: "Proyects" });
