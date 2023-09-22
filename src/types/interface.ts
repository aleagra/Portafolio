import { RefObject } from 'react'

export interface IMouseContextValue {
	liRefs: React.MutableRefObject<HTMLLIElement[]>
	aRefs: React.MutableRefObject<HTMLAnchorElement[]>
	theme: string
	setTheme: React.Dispatch<React.SetStateAction<string>>
	divRefs: React.MutableRefObject<HTMLDivElement[]>
	pRefs: React.MutableRefObject<HTMLParagraphElement[]>
	dropletRef: RefObject<any>
	sizeRef: RefObject<{ width: string; height: string }>
	handleMouseEnter: (index: number, type: string) => void
	handleMouseLeave: (index: number, type: string) => void
}
