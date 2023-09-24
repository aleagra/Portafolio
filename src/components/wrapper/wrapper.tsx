import { useContext,useRef } from "react";
import { MouseContext } from "../../context/MouseContext";
import { IWrapper } from "types/interface";
const Wrapper = ({Component, idName, title}:IWrapper) =>
  function HOC() {
    const { pRefs, handleMouseEnter, handleMouseLeave } =
      useContext(MouseContext) || {};
      const h1Ref = useRef<HTMLHeadingElement>(null);
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
            <div className="w-fit grid-rows-[150px_1fr] justify-center z-20 m-auto mx-auto flex flex-col py-14 text-center dark:text-white max-md:p-0 max-md:py-10">
              <div className="row-start-1 mt-16">
                <h1
                  className=" uppercase
                  border-black text-[2rem] font-bold dark:border-white 2xl:text-[2.5rem] select-none"
                  onMouseEnter={() => handleMouseEnter && handleMouseEnter(2, "p")}
                  onMouseLeave={() => handleMouseLeave && handleMouseLeave(2, "p")}
                  ref={h1Ref}
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
