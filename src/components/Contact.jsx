import React, { useContext, useState } from "react";
import { MouseContext } from "../context/MouseContext";
import emailjs from "emailjs-com";

function Contact() {
  const [message, setMessage] = useState(null);
  const { divRefs, handleMouseEnter, handleMouseLeave } =
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
        setMessage("El mensaje se envió correctamente.");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      });
  }
  return (
    <div className="z-10 mx-auto flex gap-10 max-sm:w-full max-sm:p-6">
      <form
        onSubmit={sendEmail}
        className="flex w-[850px] flex-col justify-center gap-y-5  max-lg:w-full"
      >
        <p
          className={` mb-2 rounded-md bg-emerald-400 py-1 text-center text-white ${
            message ? "opacity-100" : "opacity-0"
          }`}
        >
          {message}
        </p>
        {["Nombre", "Email"].map((placeholder, index) => (
          <input
            key={index}
            autoComplete="off"
            type="text"
            className="rounded-xl text-xl p-3 px-6 py-3 bg-slate-100 shadow-lg outline-none focus:bg-white focus:text-white dark:bg-white/10 dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
            placeholder={placeholder}
            name={index === 0 ? "name" : "email"}
            onMouseEnter={() => handleMouseEnter(1, "div")}
            onMouseLeave={handleMouseLeave}
            ref={divRefs}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title={
              index === 1 ? "Ingresa una dirección de correo válido" : undefined
            }
          />
        ))}
        <textarea
          autoComplete="off"
          className="h-[150px] resize-none rounded-xl px-6 py-3 bg-slate-100 text-xl shadow-lg outline-none focus:bg-white focus:text-white dark:bg-white/10 dark:text-white dark:focus:bg-white/30 dark:focus:text-black font-bold max-lg:w-full max-sm:h-[240px] 2xl:h-[220px]"
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
          className="flex h-[3rem] w-fit mx-auto px-16 mt-2 button bg-slate-100 shadow-lg items-center gap-2 dark:bg-white/10 whitespace-nowrap rounded-xl bg-transparent text-xl font-bold dark:text-white transition-all duration-500 hover:text-white dark:hover:text-black uppercase transform hover:scale-105"
          onMouseEnter={() => handleMouseEnter(1, "div")}
          onMouseLeave={handleMouseLeave}
          ref={divRefs}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
