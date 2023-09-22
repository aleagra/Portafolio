import { useEffect, useContext, useRef, memo, useState } from 'react'
import { MouseContext } from '../context/MouseContext'
import { links } from '../utilities/data'
import { BiSolidSun, BiSolidHome } from 'react-icons/bi'
import { MdNightlightRound } from 'react-icons/md'

export const Navbar = memo(() => {
	const [menu, setMenu] = useState<boolean>(true)
	const { aRefs, liRefs, pRefs, handleMouseEnter, handleMouseLeave, theme, setTheme } = useContext(MouseContext) || {}

	function assignRef(ref: any, index: number, value: any) {
		if (ref && ref.current) {
			ref.current[index] = value
		}
	}

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
			<div className="flex w-full px-[8rem] justify-between p-4 py-6">
				<a
					href="#"
					className="z-30 max-md:ml-5"
					onMouseEnter={() => handleMouseEnter && handleMouseEnter(0, 'a')}
					onMouseLeave={() => handleMouseLeave && handleMouseLeave(0, 'a')}
					ref={a => assignRef(aRefs, 0,a)}
				>
					<BiSolidHome size={23} className="dark:fill-white" />
				</a>
				<p
					className={`z-30 max-md:ml-5 md:hidden ${menu ? '' : 'hidden'}`}
					onMouseEnter={() => handleMouseEnter && handleMouseEnter(0, 'p')}
					onMouseLeave={() => handleMouseLeave && handleMouseLeave(0, 'p')}
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
					className={`absolute flex w-full transition duration-500 dark:text-white md:static md:w-auto ${
						menu ? 'top-[-70000px]' : 'top-0 max-md:bg-[#ded3c3] max-md:shadow-lg'
					}`}
				>
					<ul className="text-lg mx-auto flex w-fit flex-col font-bold justify-center gap-10 text-center max-md:p-4 md:flex-row md:items-center md:gap-[4vw]">
						{links.map((item, index) => (
							<li
								key={index}
								className="z-30 cursor-pointer whitespace-nowrap"
								onMouseEnter={() => handleMouseEnter && handleMouseEnter(index, 'li')}
								onMouseLeave={() => handleMouseLeave && handleMouseLeave(index, 'li')}
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
					onMouseEnter={() => handleMouseEnter && handleMouseEnter(0, 'a')}
					onMouseLeave={() => handleMouseLeave && handleMouseLeave(0, 'a')}
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
					onMouseEnter={() => handleMouseEnter && handleMouseEnter(0, 'a')}
					onMouseLeave={() => handleMouseLeave && handleMouseLeave(0, 'a')}
					ref={aRef}
				>
					<BiSolidHome size={23} className="dark:fill-white" />
				</p>
			</div>
		</div>
	)
})
