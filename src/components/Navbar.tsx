import { useEffect, useContext, useRef, useState } from 'react'
import { MouseContext } from '../context/MouseContext'
import { links } from '../utilities/data'
import { BiSolidSun, BiSolidHome } from 'react-icons/bi'
import { MdNightlightRound } from 'react-icons/md'
import { assignRef } from '../hooks/useAsingRef'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar: React.FC = () => {
	const [menu, setMenu] = useState<boolean>(true)
	const { aRefs, liRefs, pRefs, handleMouseEnter, handleMouseLeave, theme, setTheme } = useContext(MouseContext) || {}

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark')
	}, [theme])

	const handelThemeSwitch = () => {
		if (setTheme) {
			setTheme(theme === 'dark' ? 'light' : 'dark')
		}
	}

	const aRef = useRef<HTMLParagraphElement>(null)

	const handleLinkClick = () => {
		setMenu(!menu)
	}

	return (
		<div className="fixed z-30 w-full ">
			<div className="flex w-full px-[8rem] max-md:px-6 justify-between p-4 py-6">
				<a
					href="#"
					className="z-30 max-md:ml-5"
					onMouseEnter={() => handleMouseEnter?.(0, 'a')}
					onMouseLeave={() => handleMouseLeave?.(0, 'a')}
					ref={a => assignRef(aRefs, 0, a)}
				>
					<BiSolidHome size={23} className="dark:fill-white" />
				</a>
				<p
					className={`z-30 max-md:ml-5 md:hidden ${menu ? '' : 'hidden'}`}
					onMouseEnter={() => handleMouseEnter?.(0, 'p')}
					onMouseLeave={() => handleMouseLeave?.(0, 'p')}
					ref={p => assignRef(pRefs, 0, p)}
					onClick={handelThemeSwitch}
				>
					{theme === 'dark' ? (
						<BiSolidSun size={23} className="dark:fill-white" />
					) : (
						<MdNightlightRound size={23} className="dark:fill-white" />
					)}
				</p>
				<div
					className={`absolute flex w-full transition duration-500 dark:text-white  md:static md:w-auto ${
						menu ? 'top-[-70000px]' : 'top-0 left-0 dark:bg-[#1c1c1c] bg-white  max-md:shadow-lg w-full'
					}`}
				>
					<ul className="text-lg mx-auto flex w-fit flex-col font-bold justify-center gap-10 text-center max-md:p-4 max-md:py-6 md:flex-row md:items-center md:gap-[4vw]">
						{links.map((item, index) => (
							<li
								key={index}
								className="z-30 cursor-pointer whitespace-nowrap"
								onMouseEnter={() => handleMouseEnter?.(index, 'li')}
								onMouseLeave={() => handleMouseLeave?.(index, 'li')}
								ref={el => assignRef(liRefs, index, el)}
								onClick={handleLinkClick}
							>
								<a aria-label={item.arialabel} href={item.ref}>
									{item.title}
								</a>
							</li>
						))}
					</ul>
				</div>
				<p
					className="pointer-events-auto z-30 cursor-pointer justify-center max-md:hidden max-md:pr-5 md:items-center"
					onClick={handelThemeSwitch}
					onMouseEnter={() => handleMouseEnter?.(0, 'a')}
					onMouseLeave={() => handleMouseLeave?.(0, 'a')}
					ref={aRef}
				>
					{theme === 'dark' ? (
						<BiSolidSun size={23} className="dark:fill-white" />
					) : (
						<MdNightlightRound size={23} className="dark:fill-white" />
					)}
				</p>
				<p
					className="pointer-events-auto z-30 cursor-pointer justify-center max-md:mr-5 md:hidden md:items-center"
					onClick={handleLinkClick}
					onMouseEnter={() => handleMouseEnter?.(0, 'a')}
					onMouseLeave={() => handleMouseLeave?.(0, 'a')}
					ref={aRef}
				>
					{menu ? <FaBars size={20} className="dark:fill-white" /> : <IoCloseSharp size={27} className="dark:fill-white" />}
				</p>
			</div>
		</div>
	)
}
export default Navbar
