import React from "react";
import Proyect from "./Proyect";
import { proyectsData } from "../utilities/data";
import Wrapper from "./wrapper/wrapper";

function Proyects() {
  return (
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
  );
}
export default Wrapper(Proyects, "Proyects", "Mis proyectos");
