import './header.css'
import { MenuItem } from '../menuItem/MenuItem'
import Logo from '../logo'
import logo from '../../../content/logo.png'
import HomeLogo from '../homeLogo/HomeLogo'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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

	const ctaClickHandler = () => {
		menuToggleHandler()
	}

	return (
		<header className='header'>
			<div className='header-content'>
				<p>
					<span></span>
				</p>
				<section>
					<Logo src='./content/logo.png' />
				</section>
				<span></span>
				<section>
					<HomeLogo src='./content/logo_home.png' />
				</section>

				<nav className='header_content_nav'>
					<ul>
						<li>
							<Link to='/home' onClick={menuToggleHandler}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/offer' onClick={menuToggleHandler}>
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
		</header>
	)
}

export default Header
