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
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './db'
import MakeReview from './components/customerportal/MakeReview'

function App() {
	const [isLogged, setIsLogged] = useState(!!auth.currentUser)
	const [userUid, setUserUid] = useState(false)
	useEffect(
		() =>
			onAuthStateChanged(auth, user => {
				setIsLogged(!!user)
				setUserUid(user?.uid ?? null)
			}),
		[]
	)
	return (
		<Router>
			<GlobalStyle />
			<Navbar isLogged={isLogged} />
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
