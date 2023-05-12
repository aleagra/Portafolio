import React from "react";
import { useEffect, useState, useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import { HomeIcon, ThemeIcon } from "../utilities/icons";
export function Navbar() {
  const [menu, setMenu] = useState(true);
  const { aRefs, liRefs, handleMouseEnter, handleMouseLeave, theme, setTheme } =
    useContext(MouseContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handelThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = [
    {
      ref: "#About",
      title: "Sobre mi",
    },
    {
      ref: "#Proyects",
      title: "Proyectos",
    },
    {
      ref: "#Skills",
      title: "Habilidades",
    },
    {
      ref: "#Contact",
      title: "Contacto",
    },
  ];
  return (
    <>
      <div className="fixed z-30 w-full">
        <div className="flex w-full justify-between p-4 max-md:px-0 md:px-20">
          <a
            href="#"
            className="z-30 max-md:ml-5"
            onMouseEnter={() => handleMouseEnter(0, "a")}
            onMouseLeave={() => handleMouseLeave(0)}
            ref={(a) => (aRefs.current[0] = a)}
          >
            <HomeIcon />
          </a>
          <a
            className={`z-30 max-md:ml-5 md:hidden ${menu ? "" : "hidden"} `}
            onMouseEnter={() => handleMouseEnter(0, "a")}
            onMouseLeave={() => handleMouseLeave(0)}
            ref={(a) => (aRefs.current[0] = a)}
            onClick={() => handelThemeSwitch()}
          >
            <ThemeIcon />
          </a>
          <div
            className={`absolute flex w-full bg-transparent transition duration-500 dark:text-white md:static md:w-auto ${
              menu
                ? "top-[-70000px]"
                : "top-0 max-md:bg-[#ded3c3] max-md:shadow-lg"
            }`}
          >
            <ul className="text-md mx-auto flex w-fit flex-col justify-center gap-10 text-center max-md:p-4 md:flex-row md:items-center md:gap-[4vw]">
              {links.map((item, index) => (
                <a href={item.ref} index={item} key={index}>
                  <li
                    className="z-30 cursor-pointer whitespace-nowrap font-bold"
                    onMouseEnter={() => handleMouseEnter(index, "li")}
                    onMouseLeave={() => handleMouseLeave(index, "li")}
                    ref={(el) => (liRefs.current[index] = el)}
                    onClick={() => setMenu(!menu)}
                  >
                    {item.title}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <a
            className="pointer-events-auto z-30 cursor-pointer justify-center max-md:hidden max-md:pr-5 md:items-center"
            onClick={() => handelThemeSwitch()}
            onMouseEnter={() => handleMouseEnter(0, "a")}
            onMouseLeave={() => handleMouseLeave(0)}
            ref={(a) => (aRefs.current[0] = a)}
          >
            <ThemeIcon />
          </a>
          <a
            className="pointer-events-auto z-30 cursor-pointer justify-center max-md:mr-5 md:hidden md:items-center"
            onClick={() => setMenu(!menu)}
            onMouseEnter={() => handleMouseEnter(0, "a")}
            onMouseLeave={() => handleMouseLeave(0)}
            ref={(a) => (aRefs.current[0] = a)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-6 stroke-black dark:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={` ${
                  menu
                    ? "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    : "M6 18L18 6M6 6l12 12"
                } `}
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
