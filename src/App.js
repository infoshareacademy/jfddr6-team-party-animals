import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import GlobalStyle from './globalStyles'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar/Navbar'
import CustomerPortal from './components/customerportal/CustomerPortal'
import PriceList from './pages/PriceList'
import './fontello/css/fontello.css'
import Login from './components/customerportal/login/Login'
import Offers from './pages/Offers'
import NavbarUser from './components/customerportal/NavbarUser'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './db'
import NavbarWrapp from './components/NavbarWrapp'
import MakeReview from './components/customerportal/MakeReview'
import Offer from './components/Offer'

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [userUid, setUserUid] = useState(false)
	onAuthStateChanged(auth, user => {
		if (user) {
			setUserUid(user.uid)
			setIsAuth(user.email)
		} else {
			setIsAuth(false)
			setUserUid(false)
		}
	})
	return (
		<Router>
			<GlobalStyle />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/offer' element={<Offers />} />
				<Route path='/pricelist' element={<PriceList />} />
				<Route path='/panel' element={<CustomerPortal userUid={userUid} />} />
				<Route path='/login' element={<Login />} />
				<Route path='/makereview' element={<MakeReview userUid={userUid} />} />
			</Routes>

			<Footer />
		</Router>
	)
}

export default App
