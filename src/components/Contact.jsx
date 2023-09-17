import React, { useContext, useState } from "react";
import { MouseContext } from "../context/MouseContext";

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
    <div className="z-10 mx-auto flex w-full gap-10 p-10 max-sm:w-full max-sm:p-6">
      <form
        onSubmit={sendEmail}
        className="mt-4 flex w-[100%] flex-col justify-center gap-y-6 max-lg:w-full"
      >
        <p
          className={` mb-2 rounded-md bg-emerald-400 py-2 text-center text-white ${
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
            className="rounded-3xl text-xl fontbol p-3 px-6 py-3 shadow-lg outline-none focus:bg-[#282828] focus:text-white dark:bg-transparent border dark:border-white dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
            placeholder={placeholder}
            name={index === 0 ? "name" : "email"}
            onMouseEnter={() => handleMouseEnter(1, "div")}
            onMouseLeave={handleMouseLeave}
            ref={divRefs}
            required
            pattern={
              index === 1
                ? "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
                : undefined
            }
            title={
              index === 1 ? "Ingresa una dirección de correo válido" : undefined
            }
          />
        ))}
        <textarea
          autoComplete="off"
          className="h-[150px] resize-none rounded-3xl px-6 py-3 text-xl shadow-lg outline-none focus:bg-[#282828] focus:text-white dark:bg-[#282828] dark:text-white dark:focus:bg-white/30 dark:focus:text-black font-bold max-lg:w-full max-sm:h-[240px] 2xl:h-[220px]"
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
          transition
          className="flex h-[3rem] w-fit mx-auto px-16 mt-2 button items-center gap-2 whitespace-nowrap rounded-3xl border-2 border-black bg-transparent dark:border-white text-xl font-bold dark:text-white transition-all duration-500 hover:text-white dark:hover:text-black uppercase"
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
