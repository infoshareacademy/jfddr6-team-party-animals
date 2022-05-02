import React from 'react'
import Header from './header/Header'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className={Layout.container}>{children}</div>
		</>
	)
}

export default Layout
