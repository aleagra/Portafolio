import MouseContextProvider from './context/MouseContext'
import { Background, Navbar } from './components'
import { About, Footer, Home, Mouse, Proyects, Skills } from './pages'

export const App: React.FC = () => {
	return (
		<MouseContextProvider>
			<Background />
			<Navbar />
			<Home />
			<About />
			<Proyects />
			<Skills />
			<Footer />
			<Mouse />
		</MouseContextProvider>
	)
}
