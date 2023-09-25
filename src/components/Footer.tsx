import { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import Wrapper from "./wrapper";
import { footer } from "../utilities/data";
import Contact from "./Contact";
import { assignRef } from "hooks/useAsingRef";

const Footer: React.FC = () => {
  const { liRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext) || {};

   
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
            onMouseEnter={() => handleMouseEnter?.(item.index, "li")}
            onMouseLeave={() => handleMouseLeave?.(item.index, "li")}
            ref={(el) => (assignRef(liRefs,item.index,el))}
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
export default () => (
  <Wrapper Component={Footer} idName="Contact" title="Contacto" />
);

