import Home from './pages/Home'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Layout from './components/layout/Layout'
import Logo from './components/layout/logo'
import CreateAccount from './customerportal/CreateAccount'
import CustomerPortal from './customerportal/CustomerPortal'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Offer from './pages/Offer'
import Contact from './pages/Contact'
import PriceList from './pages/PriceList'
import Banner from './components/layout/banner/Banner'
import './css/Layout.css'
import './css/variables.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Logo />
				<Header />
				<Banner />
				<Footer />
				<div className='container'>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/offer' element={<Offer />} />
						<Route path='/priceList' element={<PriceList />} />
						<Route path='/customerPortal' element={<CustomerPortal />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App;
