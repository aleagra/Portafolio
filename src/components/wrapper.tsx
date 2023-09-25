import { useContext } from "react";
import { MouseContext } from "../context/MouseContext";
import { IWrapper } from "types/interface";

const Wrapper: React.FC<IWrapper> = ({ Component, idName, title }) => {
  const { pRefs,handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {};

  function assignRef(ref: any, index: number, value: any) {
    if (ref && ref.current) {
      ref.current[index] = value
    }
  }

  return (
    <>
      <section className="flex min-h-screen flex-col items-center" id={idName}>
        <section id={idName} className="w-[1200px] flex justify-center items-center flex-col">
          <div className="w-fit grid-rows-[150px_1fr] justify-center z-20 m-auto mx-auto flex flex-col py-14 text-center dark:text-white max-md:p-0 max-md:py-10">
            <div className="row-start-1 mt-16">
              <h1
                className=" uppercase
                border-black text-[2rem] font-bold dark:border-white 2xl:text-[2.5rem] select-none"
                onMouseEnter={() => handleMouseEnter?.(2, "p")}
                onMouseLeave={() => handleMouseLeave?.(2, "p")}
                ref={(el) => (assignRef(pRefs,2,el))}
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