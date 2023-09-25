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
			<div className="z-20 w-[850px] mx-auto grid grid-cols-4 grid-rows-4 justify-center gap-8">
				{skills.map(({ name, imgSrc }, index) => (
					<motion.li
						className="bg-white button flex flex-col justify-between items-center list-none dark:hover:text-black borderBlack rounded-xl px-5 py-3 pt-5 dark:bg-white/10 dark:text-white/80 "
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
						<h1 className="py-2 text-center dark:opacity-40 font-bold select-none">{name}</h1>
					</motion.li>
				))}
			</div>
		</>
	)
}
export default () => <Wrapper Component={Skills} idName="Skills" title="Habilidades" />
