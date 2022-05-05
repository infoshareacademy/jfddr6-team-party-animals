import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Banner from './components/layout/banner/Banner'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import './css/Layout.css'
import CustomerPortal from './customerportal/CustomerPortal'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Offer from './pages/Offer'
import PriceList from './pages/PriceList'

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />

				<div className='container'>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/offer' element={<Offer />} />
						<Route path='/priceList' element={<PriceList />} />
						<Route path='/customerPortal' element={<CustomerPortal />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
				<Footer />

			</Router>
		</div>
	)
}

export default App
