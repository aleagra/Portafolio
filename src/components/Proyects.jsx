import React from "react";
import Proyect from "./Proyect";
import { proyectsData } from "../utilities/data";
import Wrapper from "./wrapper/wrapper";

function Proyects() {
  return (
    <section
      id="projects"
      className=" w-[1200px] flex justify-center items-center flex-col"
    >
      <div className="w-fit justify-center z-20 m-auto mx-auto flex flex-col py-16 text-center dark:text-white max-md:p-0 max-md:py-10">
        <h1 className="border-b-4 border-black text-[2rem] font-bold dark:border-white 2xl:text-[3rem]">
          Mis Proyectos
        </h1>
      </div>
      <div className="w-[850px]">
        {proyectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Proyect
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              techStack={project.techStack}
              resume={project.resume}
              hoverColor={project.hoverColor}
              liveDemoLink={project.liveDemoLink}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
export default Wrapper(Proyects, "Proyects");
