import { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import Wrapper from "./wrapper/wrapper";
import { footer } from "../utilities/data";
import Contact from "./Contact";

function Footer() {
  const { liRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);

  return (
    <>
      <Contact />
      <div className="flex w-full flex-wrap items-end justify-center gap-8 py-6 dark:text-white 2xl:pt-20">
        {footer.map((item) => (
          <a
            key={item.index}
            href={item.href}
            aria-label={item.arialabel}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => handleMouseEnter(item.index, "li")}
            onMouseLeave={() => handleMouseLeave(item.index, "li")}
            ref={(el) => (liRefs.current[item.index] = el)}
            className="z-30"
          >
            <div className="flex items-center">
              {item.icon}
              <h1 className="mx-4">{item.text}</h1>
            </div>
          </a>
        ))}
        <div className="flex w-full justify-center">
          <h1 className="select-none">Hecho por Alejandro Agra.</h1>
        </div>
      </div>
    </>
  );
}

export default Wrapper(Footer, "Contact", "Contacto");
