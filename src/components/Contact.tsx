import { useContext, useState } from 'react'
import { MouseContext } from '../context/MouseContext'
import emailjs from 'emailjs-com'
import { assignRef } from '../hooks/useAsingRef'

const Contact: React.FC = () => {
	const [message, setMessage] = useState('')
	const { divRefs, handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}

	function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		emailjs.sendForm('service_ccbjvsj', 'template_qehuqna', e.target as HTMLFormElement, '4pYds05KBhAOwyuvQ').then(() => {
			setMessage('El mensaje se envió correctamente.')
			setTimeout(() => {
				setMessage('')
			}, 2000)
		})
	}

	return (
		<div className="z-10 mx-auto flex gap-10 max-sm:w-full w-full">
			<form onSubmit={sendEmail} className="flex w-[850px] flex-col justify-center gap-y-6 max-lg:w-full">
				{['Nombre', 'Email'].map((placeholder, index) => (
					<input
						key={index}
						autoComplete="off"
						type="text"
						className="rounded-xl text-xl p-3 px-6 py-3 shadow-lg outline-none border-2 border-black/10 focus:bg-slate-100 transition-colors duration-300 focus:text-white dark:bg-white/10 dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
						placeholder={placeholder}
						name={index === 0 ? 'name' : 'email'}
						onMouseEnter={() => handleMouseEnter?.(1, 'div')}
						onMouseLeave={() => handleMouseLeave?.(1, 'div')}
						ref={el => assignRef(divRefs, 1, el)}
						required
						title={index === 1 ? 'Ingresa una dirección de correo válido' : undefined}
					/>
				))}
				<textarea
					autoComplete="off"
					className="h-[150px] resize-none rounded-xl px-6 py-3 text-xl border-2 border-black/10 outline-none focus:bg-slate-100 transition-colors duration-300 focus:text-white dark:bg-white/10 dark:text-white dark:focus:bg-white/30 dark:focus:text-black max-lg:w-full max-sm:h-[240px] 2xl:h-[220px]"
					name="message"
					id="message"
					placeholder="Descripción"
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
					required
				></textarea>
				<button
					type="submit"
					className="flex h-[3rem] w-fit mx-auto px-16 mt-2 button items-center bg-white border-2 border-black/10 gap-2 dark:bg-white/10 whitespace-nowrap rounded-xl text-xl font-bold dark:text-white transition-all duration-500 hover:text-white dark:hover:text-black uppercase transform hover:scale-105"
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
				>
					Enviar
				</button>
				<p className={` mb-2 rounded-md bg-emerald-400 py-2 text-center text-white ${message ? 'opacity-100' : 'opacity-0'}`}>{message}</p>
			</form>
		</div>
	)
}

export default Contact
