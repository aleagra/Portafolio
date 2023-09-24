import MouseContextProvider from './context/MouseContext'
import { About, Background, Footer, Home, Mouse, Navbar, Proyects, Skills } from './components'
export function App() {

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
