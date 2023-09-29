import { useContext } from 'react'
import { MouseContext } from '../context/MouseContext'
import { motion } from 'framer-motion'
import { skills } from '../utilities/data'
import Wrapper from '../components/wrapper'
import { assignRef } from '../hooks/useAsingRef'

const Skills: React.FC = () => {
	const { divRefs, handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}

	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index,
			},
		}),
	}

	return (
		<>
			<ul className="mx-auto w-full grid grid-cols-4 grid-rows-4 justify-center gap-8 max-md:grid-cols-2">
				{skills.map(({ name, imgSrc }, index) => (
					<motion.li
						className="dark:bg-white hover:text-white shadow-lg bg-slate-100 text-black button flex flex-col justify-between items-center list-none dark:hover:text-black borderBlack rounded-xl px-2 2xl:py-3 pt-5 dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
						onMouseEnter={() => handleMouseEnter?.(index, 'div')}
						onMouseLeave={() => handleMouseLeave?.(index, 'div')}
						ref={el => assignRef(divRefs, 1, el)}
					>
						<div className="w-fit mx-auto">{imgSrc}</div>
						<h1 className="py-2 max-2xl:py-1 text-center dark:opacity-40 font-bold select-none max-md:text-sm">{name}</h1>
					</motion.li>
				))}
			</ul>
		</>
	)
}
export default () => <Wrapper Component={Skills} idName="Skills" title="Habilidades" />
