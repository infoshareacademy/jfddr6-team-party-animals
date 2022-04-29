import React from 'react'
import './header.css'
import { MenuItem } from '../menuItem/MenuItem'
import Logo from '../logo'
import logo from '../../../content/logo.png'
import HomeLogo from '../homeLogo/HomeLogo'

const Header = () => {
	return (
		<section className='header'>
			<section className='header-top'>
				<section className='header-top__logo'></section>
				<section className='header-top__menuitem'>
					<section className='header-top__menuitem'>{/* <Navbar /> */}</section>
					<hr className='header-top__seperator' />
					<Logo src='./content/logo.png' />
				</section>

				<HomeLogo src='./content/logo_home.png' />
			</section>
			<section className='header-bottom'>
				<section className='header-bottom__phone'>99999999999</section>
				<section className='header-bottom__email'>shop.info@gmail.com</section>
			</section>
		</section>
	)
}

export default Header
