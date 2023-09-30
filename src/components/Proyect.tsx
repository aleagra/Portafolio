import { useContext, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MouseContext } from '../context/MouseContext'
import { ICards } from 'types/interface'
import { assignRef } from '../hooks/useAsingRef'

const Proyect = ({ title, imageSrc, techStack, resume, liveDemoLink }: ICards) => {
	const { divRefs, handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}
	const ref = useRef<HTMLDivElement | null>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	})
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	return (
		<>
			<motion.div
				ref={ref}
				style={{
					scale: scaleProgess,
					opacity: opacityProgess,
				}}
				className="group mb-4 sm:mb-8 last:mb-20"
			>
				<a
					href={liveDemoLink}
					target="_blank"
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
				>
					<section className="bg-gray-100 rounded-lg border-2 border-black/10 overflow-hidden relative h-[22rem] max-lg:h-[18rem] hover:text-white transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20 button dark:hover:text-black">
						<div className="pt-4 pb-7 px-5 max-md:py-4 max-2xl:px-0 sm:pl-10 sm:group-even:pl-10 sm:pr-8 sm:pt-10 justify-center mr-[30rem] max-lg:mr-[10rem] max-md:mx-10 flex flex-col h-full max-lg:group-even:ml-[10rem] group-even:ml-[30rem] max-md:group-even:mx-10 group-even:mr-0">
							<h3 className="text-2xl max-2xl:text-xl font-bold">{title}</h3>
							<p className="mt-6 leading-relaxed max-2xl:text-sm font-extralight">{resume}</p>
							<ul className="flex flex-wrap gap-2 mt-10 justify-center">
								{techStack?.map((tag: string, index: number) => (
									<li
										className="bg-black/[0.7] px-3 py-1 text-[0.7rem] max-2xl:text-[0.5rem] uppercase tracking-wider text-white rounded-full dark:text-white/80"
										key={index}
									>
										{tag}
									</li>
								))}
							</ul>
						</div>

						<img
							src={imageSrc}
							alt="Project I worked on"
							className="absolute hidden sm:block top-0 -right-0 w-[30rem] max-lg:w-[10rem] max-md:hidden transition group-even:right-[initial] group-even:-left-0"
						/>
					</section>
				</a>
			</motion.div>
		</>
	)
}
export default Proyect
