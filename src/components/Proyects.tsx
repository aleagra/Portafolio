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
            imageSrc={project.imageSrc}
            techStack={project.techStack}
            resume={project.resume} 
            liveDemoLink={project.liveDemoLink}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default () => (
  <Wrapper Component={Proyects} idName="Proyects" title="Mis proyectos" />
);

