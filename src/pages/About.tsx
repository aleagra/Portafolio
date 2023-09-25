import { useContext } from 'react'
import { MouseContext } from '../context/MouseContext'
import Wrapper from '../components/wrapper'

const About: React.FC = () => {
	const { handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}

	return (
		<div className="w-[850px] mx-auto text-center">
			<span
				className="select-none text-[3rem]  mx-auto font-bold text-black dark:text-[#dfd3c3] max-2xl:text-[3.2rem] max-sm:text-[2rem]"
				onMouseEnter={() => handleMouseEnter?.(5, 'p')}
				onMouseLeave={() => handleMouseLeave?.(5, 'p')}
			>
				Soy un joven programador de Argentina, apasionado por la tecnología. Disfruto encontrando soluciones creativas a los desafíos y
				trabajando en proyectos desafiantes que me permitan aplicar mis habilidades y conocimientos.
			</span>
		</div>
	)
}

export default () => <Wrapper Component={About} idName="About" title="Sobre mi" />
