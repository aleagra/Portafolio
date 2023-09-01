import { useContext, memo } from "react";
import { MouseContext } from "../context/MouseContext";
import wrapper from "./wrapper/wrapper";
import { motion } from "framer-motion";
const Proyects = memo(() => {
  const { divRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);
  const card = [
    {
      imageSrc: "./Eztranslate.png",
      title: "Eztranslate",
      description: "Traductor",
      techStack: ["React", "Tailwind", "Netlify"],
      repositoryLink: "https://github.com/aleagra/Proyecto-Wallet",
      liveDemoLink: "https://cryptowave.web.app",
      resume:
        "Single page de un traductor hecho con React para traducir textos de manera precisa, con una interfaz moderna y amigable",
      hoverColor: "#14203f",
    },
    {
      imageSrc: "./CryptoWave.png",
      title: "Cryptowave",
      description: "Crypto Wallet",
      techStack: ["React", "Tailwind", "Firebase"],
      repositoryLink: "https://github.com/aleagra/Proyecto-Wallet",
      liveDemoLink: "https://cryptowave.web.app",
      resume:
        "Landing page de una crypto wallet con React para gestionar criptomonedas de forma segura, con una interfaz moderna.",
      hoverColor: "#403985",
    },
    {
      imageSrc: "./Weatherme.png",
      title: "WeatherMe",
      description: "Pagina del clima",
      techStack: ["React", "Tailwind", "Firebase"],
      repositoryLink: "https://github.com/aleagra/WeatherMe-page",
      liveDemoLink: "https://weather-me.web.app/",
      resume:
        "Un sitio web sobre el clima hecho con React y Tailwind que utiliza una API para mostrar información meteorológica en tiempo real.",
      hoverColor: "#425bb4",
    },
    {
      imageSrc: "./socialapp.webp",
      title: "Social App",
      description: "Red social",
      techStack: ["React", "Node Js", "Tailwind", "MongoDB", "Firebase"],
      repositoryLink: "https://github.com/aleagra/SocialApp",
      liveDemoLink: "https://social-application.web.app",
      resume:
        "Una red social construida con React y Tailwind, respaldada por una base de datos de Node.js y MySql para conectarse con amigos.",
      hoverColor: "#e41714",
    },
  ];

  return (
    <>
      <section
        className="relative h-full w-[1200px] items-center justify-center"
        id="Proyects"
      >
        <div className="z-20 m-auto mx-auto flex w-fit flex-col justify-center py-14 text-center dark:text-white max-md:p-0 max-md:py-10">
          {/* <p className="whitespace-nowrap text-lg opacity-40 2xl:text-xl">
            Algunos de mis proyectos
          </p> */}
          <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[2.5rem]">
            Mis proyectos
          </h1>
        </div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-1 w-full h-full gap-y-10 gap-8 px-[8rem]">
            {card.map((item, index) => (
              <div
                key={index}
                className="relative flex w-full bg-[#f7f6f7]/30 shadow-lg hover:scale-105 transition-all duration-500 hover:bg-[#f7f6f7] hover:dark:bg-[#282828] cursor-pointer rounded-lg dark:bg-[#282828]/50
                "
                onMouseEnter={() => handleMouseEnter(index, "div")}
                onMouseLeave={handleMouseLeave}
                ref={divRefs}
              >
                <img
                  className="max-w-[550px] h-fit object-cover  rounded-md shadow-md"
                  src={item.imageSrc}
                  alt=""
                />
                <div className="flex flex-col px-5 justify-center">
                  <div className="px-8 flex flex-col justify-center items-center dark:text-white">
                    <h1 className="whitespace-nowrap font-bold sm:text-3xl 2xl:text-4xl ">
                      {item.title}
                    </h1>
                    <span className="text-md max-md:text-sm text-center dark:text-white text-black font-semibold pt-8 pb-12">
                      {item.resume}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 h-fit gap-y-4 gap-5 text-center text-sm px-8 w-full items-center justify-center">
                    {item.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-2xl shadow-sm w-full py-1 text-white"
                        style={{ backgroundColor: item.hoverColor }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div className="flex flex-col justify-center gap-y-4 items-center h-full text-black dark:text-white max-sm:p-4">
                  <p className="text-center text-xl font-bold uppercase">
                    {item.title}
                  </p>

                  <p className="whitespace-nowrap pb-2 text-center text-lg max-2xl:text-sm">
                    {item.description}
                  </p> */}
                {/* <div className=" flex max-md:gap-6 max-sm:text-sm pt-6">
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
                  </div> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
});
export default wrapper(Proyects, { id: "Proyects" });
