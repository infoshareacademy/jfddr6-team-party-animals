import '../header/Header.css'
import Logo from '../logo'
import HomeLogo from '../homeLogo/HomeLogo'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../banner/Banner'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	})

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false)
		}
	}, [size.width, menuOpen])

	const menuToggleHandler = () => {
		setMenuOpen(p => !p)
	}

	return (
		<header className='header'>
			<div className='header__content'>
				<div className='__logo'>
					<Logo src='./content/logo.png' />
				</div>
				<div className='home__logo'>
					<HomeLogo src='./content/logo_home.png' />
				</div>

				<nav className='header__content__nav'>
					<ul>
						<li>
							<Link to='/Home' onClick={menuToggleHandler}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/Offer' onClick={menuToggleHandler}>
								Offer
							</Link>
						</li>
						<li>
							<Link to='/priceList' onClick={menuToggleHandler}>
								Price List
							</Link>
						</li>
						<li>
							<Link to='/customerPortal' onClick={menuToggleHandler}>
								Customer Portal
							</Link>
						</li>
						<li>
							<Link to='/contact' onClick={menuToggleHandler}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<div className='header-content-toggle'></div>
				{!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
			</div>
			<div className='banner'>
				<Banner src='./content/banner.jpg' />
			</div>
		</header>
	)
}

export default Header
