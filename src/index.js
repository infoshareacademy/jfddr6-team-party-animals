import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Header from './components/layout/header/Header'
import Home from './pages/Home'
import PriceList from './pages/PriceList'
import Contact from './pages/Contact'
import CustomerPortal from './customerportal/CustomerPortal'
import Offer from './pages/Offer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
