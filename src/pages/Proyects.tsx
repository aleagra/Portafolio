import React from 'react'
import Proyect from '../components/Proyect'
import { proyectsData } from '../utilities/data'
import Wrapper from '../components/wrapper'

const Proyects: React.FC = () => {
	return (
		<div className="w-[850px] max-2xl:w-[90%]">
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
	)
}

export default () => <Wrapper Component={Proyects} idName="Proyects" title="Mis proyectos" />
