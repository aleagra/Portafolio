import { ReactNode, RefObject, createContext, useCallback, useRef, useState } from 'react'
import { IMouseContextValue } from 'types/interface'

export const MouseContext = createContext<IMouseContextValue | null>(null)

function MouseContextProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState('dark')
	const liRefs = useRef([])
	const pRefs = useRef([])
	const aRefs = useRef([])
	const divRefs = useRef<HTMLDivElement[]>([]);
	const dropletRef: RefObject<HTMLDivElement | null> = useRef(null)
	const sizeRef = useRef({ width: '20px', height: '20px' })

	const handleMouseEnter = useCallback((index: any, type: string) => {
		if (dropletRef.current) {
			if (type === 'li') {
				dropletRef.current.style.transition = 'all 0.4s'
				dropletRef.current.style.transform = 'scale(4)'
				dropletRef.current.style.backgroundColor = '#dfd3c3'
			} else if (type === 'p') {
				dropletRef.current.style.transition = 'all 0.4s'
				dropletRef.current.style.transform = 'scale(4)'
				dropletRef.current.classList.add('inverted')
			} else if (type === 'div') {
				dropletRef.current.classList.add('transparent')
			} else if (type === 'a') {
				dropletRef.current.style.transition = 'all 0.4s'
				dropletRef.current.style.transform = 'scale(4)'
				dropletRef.current.style.backgroundColor = '#dfd3c3'
			}
		}
	}, [])

	const handleMouseLeave = useCallback((index: any, type: string) => {
		if (dropletRef.current) {
			if (type === 'li') {
			} else if (type === 'div') {
				dropletRef.current.style.backgroundColor = ''
			}
			dropletRef.current.style.transition = 'all 0.4s'
			dropletRef.current.style.transform = 'scale(1)'
			dropletRef.current.classList.remove('grande')
			dropletRef.current.classList.remove('transparent')
			dropletRef.current.classList.remove('inverted')
			dropletRef.current.style.backgroundColor = ''
		}
	}, [])

	return (
		<MouseContext.Provider
			value={{
				liRefs,
				aRefs,
				theme,
				setTheme,
				divRefs,
				pRefs,
				dropletRef,
				sizeRef,
				handleMouseEnter,
				handleMouseLeave,
			}}
		>
			{children}
		</MouseContext.Provider>
	)
}

export default MouseContextProvider
