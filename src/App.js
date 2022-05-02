import Home from './pages/Home'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Layout from './components/layout/Layout'
import Logo from './components/layout/logo'
import CreateAccount from './customerportal/CreateAccount'
import CustomerPortal from './customerportal/CustomerPortal'
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'
import Offer from './pages/Offer'
import Contact from './pages/Contact'
import PriceList from './pages/PriceList'

function App() {
	return (
		<div className='App'>
			<Router>
				<Logo />
				<Header />
				<Footer />
				<div className='container'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/' element={<Offer />} />
						<Route path='/' element={<PriceList />} />
						<Route path='/' element={<CustomerPortal />} />
						<Route path='/' element={<Contact />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}

export default App
