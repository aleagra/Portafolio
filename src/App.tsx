import MouseContextProvider from './context/MouseContext'
import { About, Background, Footer, Home, Mouse, Navbar, Proyects, Skills } from './components'

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