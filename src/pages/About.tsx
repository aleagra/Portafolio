import { useContext } from 'react'
import { MouseContext } from '../context/MouseContext'
import Wrapper from '../components/wrapper'

const About: React.FC = () => {
	const { handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}

	return (
		<div className="w-full text-center">
			<span
				className="select-none text-[3rem]  mx-auto font-bold text-black dark:text-white/80 max-2xl:text-[2.5rem] max-md:text-[1.5rem]"
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
