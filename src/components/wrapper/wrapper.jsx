import React, { useContext } from "react";
import { MouseContext } from "../../context/MouseContext";
const Wrapper = (Component, idName, title) =>
  function HOC() {
    const { pRefs, handleMouseEnter, handleMouseLeave } =
      useContext(MouseContext);

    return (
      <>
        <section
          className="flex min-h-screen flex-col items-center"
          id={idName}
        >
          <section
            id={idName}
            className="w-[1200px] flex justify-center items-center flex-col"
          >
            <div className="w-fit grid-rows-[150px_1fr] justify-center z-20 m-auto mx-auto flex flex-col py-16 text-center dark:text-white max-md:p-0 max-md:py-10">
              <div className="row-start-1 mt-10">
                <h1
                  className="border-b-4 uppercase
                  border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem] select-none"
                  onMouseEnter={() => handleMouseEnter(2, "p")}
                  onMouseLeave={() => handleMouseLeave(2, "p")}
                  ref={pRefs}
                >
                  {title}
                </h1>
              </div>
            </div>
            <Component />
          </section>
        </section>
      </>
    );
  };

export default Wrapper;
