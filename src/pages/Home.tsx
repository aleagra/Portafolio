import { useContext, useRef, useEffect } from 'react'
import lottie from 'lottie-web'
import { MouseContext } from '../context/MouseContext'
import animationData from '../assets/lottie.json'
import { motion } from 'framer-motion'
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Home: React.FC = () => {
	const { handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}
	const animationContainer = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (animationContainer.current) {
			const animation = lottie.loadAnimation({
				container: animationContainer.current,
				animationData,
				renderer: 'svg',
				loop: true,
				autoplay: true,
			})

			return () => {
				animation.destroy()
			}
		}
	}, [])

	return (
		<section className="relative z-[1] flex select-none flex-col items-center pt-24 max-md:pt-[8rem] 2xl:mb-20" id="Home">
			<div className="flex flex-col items-center 2xl:mt-40 mt-5  mb-10 max-xl:w-[100%] max-lg:flex-col md:pt-0 2xl:w-[85%]">
				<div className="mt-[-5.5rem] flex w-full flex-col justify-center outline-none 2xl:w-1/2">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<div ref={animationContainer} className="mx-auto max-2xl:w-[40%] max-sm:w-[85%] 2xl:w-[75%]" />
					</motion.div>
				</div>
				<div className="flex w-full flex-col justify-center items-center text-center 2xl:w-1/2">
					<div className="z-20 w-fit flex flex-col justify-center items-center max-2xl:px-10 max-2xl:mx-auto max-md:px-0">
						<motion.span
							className="m-0 p-0  text-[5rem] font-bold leading-[6rem] text-black dark:text-white max-2xl:text-[4rem] max-lg:text-[4rem] max-sm:text-[2rem] max-sm:leading-[5rem]"
							onMouseEnter={() => handleMouseEnter?.(1, 'p')}
							onMouseLeave={() => handleMouseLeave?.(1, 'p')}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								type: 'spring',
								stiffness: 60,
								delay: 0.1,
								duration: 0.5,
							}}
						>
							Alejandro Agra
						</motion.span>
						<motion.span
							className="2xl:text-[2rem] text-[1.5rem] text-black/80 dark:text-[#dfd3c3]/80 font-bold max-sm:text-lg"
							onMouseEnter={() => handleMouseEnter?.(2, 'p')}
							onMouseLeave={() => handleMouseLeave?.(2, 'p')}
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								type: 'spring',
								stiffness: 60,
								delay: 0.1,
								duration: 0.5,
							}}
						>
							Full Stack Developer
						</motion.span>
					</div>

					<motion.div
						className="flex sm:flex-row items-center justify-center gap-3 px-4 mt-4 text-lg font-medium"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.1,
						}}
					>
						<a
							href="#Proyects"
							className="dark:bg-white/10 border-2 border-black/20 bg-black/60 shadow-md dark:text-white font-bold hover:text-white max-md:text-sm dark:hover:text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none button"
						>
							Ver proyectos
						</a>
						<a
							className="dark:bg-white/10 border-2 border-black/20 bg-[#dfd3c3] shadow-md p-4 max-md:p-2 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer button"
							href="https://linkedin.com"
							target="_blank"
						>
							<span className="icon-container">
								<BiLogoLinkedin size={25} className="icon max-md:w-4" />
							</span>
						</a>
						<a
							className="dark:bg-white/10 border-2 border-black/20 bg-[#dfd3c3] shadow-md p-4 max-md:p-2 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer button"
							href="https://github.com"
							target="_blank"
						>
							<span className="icon-container">
								<BiLogoGithub size={25} className="icon max-md:w-4" />
							</span>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
export default Home
