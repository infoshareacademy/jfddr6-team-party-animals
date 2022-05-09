import React from 'react'
import Header from './header/Header'
import './../../css/Layout.css'

const Layout = ({ children}) => {
	return (
		<>
			<Header />
			<div className='container'>{children}</div>
		</>
	)
}

export default Layout
