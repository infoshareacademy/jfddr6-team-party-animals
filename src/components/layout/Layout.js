import React from 'react'
import Header from './header/Header'
import './../../css/Layout.css'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={Layout.container}>{children}</div>
		</>
	)
}

export default Layout
