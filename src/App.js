import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import GlobalStyle from './globalStyles'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import CustomerPortal from './components/customerportal/CustomerPortal'
import Offer from './pages/Offer'
import PriceList from './pages/PriceList'

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path='/' component={HomePage} />
			</Routes>

			<Footer />
		</Router>
	)
}

export default App;
