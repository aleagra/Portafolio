import { useContext, useState } from 'react'
import { MouseContext } from '../context/MouseContext'
import emailjs from 'emailjs-com'
import { assignRef } from '../hooks/useAsingRef'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact: React.FC = () => {
	const { divRefs, handleMouseEnter, handleMouseLeave } = useContext(MouseContext) || {}
	const [formData, setFormData] = useState({
		name: '',
		mail: '',
		message: '',
	})

	function sendEmail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		emailjs.sendForm('service_ccbjvsj', 'template_qehuqna', e.target as HTMLFormElement, '4pYds05KBhAOwyuvQ').then(() => {
			notify()
			setFormData({
				name: '',
				mail: '',
				message: '',
			})
		})
	}

	const notify = () =>
		toast.success(`El mensaje se envió correctamente.`, {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		})

	return (
		<div className="z-10 mx-auto flex gap-10 max-sm:w-full w-full">
			<form onSubmit={sendEmail} className="flex w-[850px] flex-col justify-center gap-y-6 max-lg:w-full">
				<input
					autoComplete="off"
					type="text"
					name="name"
					className="rounded-xl text-xl p-3 px-6 py-3 shadow-lg outline-none border-2 border-black/10 focus:bg-slate-100 bg-white/10 dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
					placeholder={'Nombre'}
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
					required
					value={formData.name}
					onChange={e => setFormData({ ...formData, name: e.target.value })}
				/>
				<input
					autoComplete="off"
					type="email"
					name="email"
					className="rounded-xl text-xl p-3 px-6 py-3 shadow-lg outline-none border-2 border-black/10 focus:bg-slate-100 bg-white/10 dark:text-white dark:focus:bg-white/30 dark:focus:text-black"
					placeholder={'Correo electronico'}
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
					required
					value={formData.mail}
					onChange={e => setFormData({ ...formData, mail: e.target.value })}
				/>
				<textarea
					autoComplete="off"
					className="h-[150px] resize-none rounded-xl px-6 py-3 shadow-lg text-xl border-2 border-black/10 outline-none focus:bg-slate-100 dark:bg-white/10 dark:text-white dark:focus:bg-white/30 focus:text-black max-lg:w-full max-sm:h-[240px] 2xl:h-[220px]"
					name="message"
					id="message"
					value={formData.message}
					placeholder="Descripción"
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
					onChange={e => setFormData({ ...formData, message: e.target.value })}
					required
				></textarea>
				<button
					type="submit"
					className="flex h-[3rem] w-fit shadow-lg mx-auto px-16 mt-2 button items-center bg-white border-2 border-black/10 gap-2 dark:bg-white/10 whitespace-nowrap rounded-xl text-xl font-bold dark:text-white transition-all duration-500 hover:text-white dark:hover:text-black uppercase transform hover:scale-105"
					onMouseEnter={() => handleMouseEnter?.(1, 'div')}
					onMouseLeave={() => handleMouseLeave?.(1, 'div')}
					ref={el => assignRef(divRefs, 1, el)}
				>
					Enviar
				</button>
				<ToastContainer />
			</form>
		</div>
	)
}

export default Contact
