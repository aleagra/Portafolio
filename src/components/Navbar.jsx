import React, { useEffect, useContext, useRef, memo, useState } from "react";
import { MouseContext } from "../context/MouseContext";
import { BarsIcon, HomeIcon, ThemeIcon } from "../utilities/icons";
import { links } from "../utilities/data";

export const Navbar = memo(() => {
  const [menu, setMenu] = useState(true);
  const { aRefs, liRefs, handleMouseEnter, handleMouseLeave, theme, setTheme } =
    useContext(MouseContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handelThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const aRef = useRef(null);

  const handleLinkClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed z-30 w-full ">
      <div className="flex w-full px-[8rem] justify-between p-4 py-6">
        <a
          href="#"
          className="z-30 max-md:ml-5"
          onMouseEnter={() => handleMouseEnter(0, "a")}
          onMouseLeave={() => handleMouseLeave(0)}
          ref={(a) => (aRefs.current[0] = a)}
        >
          <HomeIcon />
        </a>
        <p
          className={`z-30 max-md:ml-5 md:hidden ${menu ? "" : "hidden"}`}
          onMouseEnter={() => handleMouseEnter(0, "a")}
          onMouseLeave={() => handleMouseLeave(0)}
          ref={(a) => (aRefs.current[0] = a)}
          onClick={handelThemeSwitch}
        >
          <ThemeIcon />
        </p>
        <div
          className={`absolute flex w-full transition duration-500 dark:text-white md:static md:w-auto ${
            menu
              ? "top-[-70000px]"
              : "top-0 max-md:bg-[#ded3c3] max-md:shadow-lg"
          }`}
        >
          <ul className="text-lg mx-auto flex w-fit flex-col font-bold justify-center gap-10 text-center max-md:p-4 md:flex-row md:items-center md:gap-[4vw]">
            {links.map((item, index) => (
              <li
                key={index}
                className="z-30 cursor-pointer whitespace-nowrap"
                onMouseEnter={() => handleMouseEnter(index, "li")}
                onMouseLeave={() => handleMouseLeave(index, "li")}
                ref={(el) => (liRefs.current[index] = el)}
                onClick={handleLinkClick}
              >
                <a aria-label={item.arialabel} href={item.ref}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p
          className="pointer-events-auto z-30 cursor-pointer justify-center max-md:hidden max-md:pr-5 md:items-center"
          onClick={handelThemeSwitch}
          onMouseEnter={() => handleMouseEnter(0, "a")}
          onMouseLeave={() => handleMouseLeave(0)}
          ref={aRef}
        >
          <ThemeIcon />
        </p>
        <p
          className="pointer-events-auto z-30 cursor-pointer justify-center max-md:mr-5 md:hidden md:items-center"
          onClick={handleLinkClick}
          onMouseEnter={() => handleMouseEnter(0, "a")}
          onMouseLeave={() => handleMouseLeave(0)}
          ref={aRef}
        >
          <BarsIcon menu={menu} />
        </p>
      </div>
    </div>
  );
});
