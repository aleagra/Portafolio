import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import { MouseContext } from "../context/MouseContext";
import { GitIcon, LinkedinIcon, MailIcon } from "../utilities/icons";
import { motion } from "framer-motion";
import Wrapper from "./wrapper/wrapper";
function Footer() {
  const [message, setMessage] = useState(null);
  const { divRefs, liRefs, handleMouseEnter, handleMouseLeave } =
    useContext(MouseContext);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ccbjvsj",
        "template_qehuqna",
        e.target,
        "4pYds05KBhAOwyuvQ"
      )
      .then(() => {
        setMessage("El mensaje se envio correctamente.");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
  }

  return (
    <>
      <section
        className=" flex flex-col justify-center p-10 max-md:p-4 sm:px-10 xl:px-16"
        id="Contact"
      >
        <div className="z-20 mx-auto flex w-fit flex-col px-20 text-center  dark:text-white max-md:px-0 max-md:pt-8 xl:mt-[5.5rem]">
          <p
            className="cursor-pointer whitespace-nowrap text-lg opacity-40 2xl:text-xl"
            onClick={(e) => {
              window.location.href =
                "mailto:aleagrat5@gmail.com?subject=Asunto del correo electrónico&body=";
            }}
          >
            Aleagrat5@gmail.com
          </p>

          <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem] ">
            Contacto
          </h1>
        </div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="z-10 mx-auto flex w-full gap-10 p-10 max-sm:w-full max-sm:p-6">
            <form
              onSubmit={sendEmail}
              className=" mt-4 flex w-[100%] flex-col justify-center gap-y-6 max-lg:w-full"
            >
              {message && (
                <p className="-mb-2 rounded-md bg-emerald-400 py-2 text-center text-white">
                  {message}
                </p>
              )}
              <input
                autoComplete="off"
                type="text"
                className="rounded-md p-3 px-6 py-3 shadow-lg outline-none focus:bg-[#282828] focus:text-white dark:bg-[#282828]/30 dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
                placeholder="Nombre"
                name="name"
                onMouseEnter={() => handleMouseEnter(1, "div")}
                onMouseLeave={handleMouseLeave}
                ref={divRefs}
                required
              />
              <input
                autoComplete="off"
                type="text"
                className="rounded-md p-3 px-6 py-3 shadow-lg outline-none focus:bg-[#282828] focus:text-white dark:bg-[#282828]/30 dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
                placeholder="Email"
                name="email"
                onMouseEnter={() => handleMouseEnter(1, "div")}
                onMouseLeave={handleMouseLeave}
                ref={divRefs}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Ingresa una direccion de correo valido"
              />
              <textarea
                autoComplete="off"
                className="h-[150px] resize-none rounded-md px-6 py-3 shadow-lg  outline-none focus:bg-[#282828] focus:text-white dark:bg-[#282828]/30 dark:text-white dark:focus:bg-white/30 dark:focus:text-black max-lg:w-full max-sm:h-[240px] 2xl:h-[220px]"
                name="message"
                id="message"
                placeholder="Descripción"
                onMouseEnter={() => handleMouseEnter(1, "div")}
                onMouseLeave={handleMouseLeave}
                ref={divRefs}
                required
              ></textarea>
              <button
                type="submit"
                className="transition-color mx-auto rounded-md bg-black py-2 text-white hover:bg-[#dfd3c3] hover:text-white dark:border-0 dark:bg-white dark:text-black dark:hover:bg-[#dfd3c3]  dark:hover:text-white max-md:mx-0 md:w-[35%] 2xl:w-[50%]"
                onMouseEnter={() => handleMouseEnter(1, "div")}
                onMouseLeave={handleMouseLeave}
                ref={divRefs}
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="d flex w-full flex-wrap  items-end justify-center gap-8 py-6 dark:text-white  2xl:pt-20 ">
            <a
              href="https://www.linkedin.com/in/alejandro-agra/"
              target="_blank"
            >
              <div className="flex items-center">
                <LinkedinIcon />
                <h1
                  className="z-30 mx-4"
                  onMouseEnter={() => handleMouseEnter(6, "li")}
                  onMouseLeave={() => handleMouseLeave(6, "li")}
                  ref={(el) => (liRefs.current[6] = el)}
                >
                  Linkedin
                </h1>
              </div>
            </a>
            <a href="https://github.com/aleagra" target="_blank">
              <div className="flex items-center">
                <GitIcon />
                <h1
                  className="z-30 mx-4"
                  onMouseEnter={() => handleMouseEnter(7, "li")}
                  onMouseLeave={() => handleMouseLeave(7, "li")}
                  ref={(el) => (liRefs.current[7] = el)}
                >
                  Github
                </h1>
              </div>
            </a>

            <div
              className="flex cursor-pointer items-center"
              onClick={(e) => {
                window.location.href =
                  "mailto:aleagrat5@gmail.com?subject=Asunto del correo electrónico&body=";
              }}
            >
              <MailIcon />
              <h1
                className="z-30 mx-4"
                onMouseEnter={() => handleMouseEnter(8, "li")}
                onMouseLeave={() => handleMouseLeave(8, "li")}
                ref={(el) => (liRefs.current[8] = el)}
              >
                Correo
              </h1>
            </div>

            <div className="z-30 flex w-full justify-center">
              <h1 className="">Hecho por Alejandro Agra.</h1>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default Wrapper(Footer, { id: "Contact" });
