import { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import { motion } from "framer-motion";
import Wrapper from "./wrapper/wrapper";
import { footer } from "../utilities/data";
import Contact from "./Contact";

function Footer() {
  const { liRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);

  return (
    <section className="flex flex-col justify-center" id="Contact">
      <div className="z-20 mx-auto flex w-fit flex-col px-20 text-center dark:text-white max-md:px-0 max-md:pt-8 xl:mt-[5.5rem]">
        <p
          className="cursor-pointer whitespace-nowrap text-lg opacity-40 2xl:text-xl"
          onClick={() => {
            window.location.href =
              "mailto:aleagrat5@gmail.com?subject=Asunto del correo electrónico&body=";
          }}
        >
          Aleagrat5@gmail.com
        </p>
        <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem]">
          Contacto
        </h1>
      </div>

      <Contact />
      <div className="d flex w-full flex-wrap items-end justify-center gap-8 py-6 dark:text-white 2xl:pt-20">
        {footer.map((item) => (
          <a
            key={item.index}
            href={item.href}
            aria-label={item.arialabel}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center">
              {item.icon}
              <h1
                className="z-30 mx-4"
                onMouseEnter={() => handleMouseEnter(item.index, "li")}
                onMouseLeave={() => handleMouseLeave(item.index, "li")}
                ref={(el) => (liRefs.current[item.index] = el)}
              >
                {item.text}
              </h1>
            </div>
          </a>
        ))}
        <div className="z-30 flex w-full justify-center">
          <h1 className="select-none">Hecho por Alejandro Agra.</h1>
        </div>
      </div>
    </section>
  );
}

export default Wrapper(Footer, { id: "Contact" });
