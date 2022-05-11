import React, { useState, useEffect, useMemo } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from '../Navbar/NavbarStyles'
import './NavbarUserStyles'
import Login from './Login'
import { auth } from '../../db'
import { publicNavbarData, privateNavbarData } from './../../data/NavbarData'

const NavbarUser = () => {
	const [isLogged, setIsLogged] = useState(!!auth.currentUser)
	const navbarData = isLogged ? privateNavbarData : publicNavbarData
	const [show, setShow] = useState(false)

	const scrollTo = id => {
		const element = document.querySelector(id)
		element.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const closeMobileMenu = id => {
		scrollTo(id)

		setShow(false)
	}

	return (
		<>
			(
			<IconContext.Provider value={{ color: '1a1a1a' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to='/'>
							<NavIcon src={`${process.env.PUBLIC_URL}/images/logo.png`} />
							Party Animals
						</NavLogo>
						<MobileIcon onClick={() => setShow(!show)}>{show ? <FaTimes /> : <CgMenuRight />} </MobileIcon>
						<NavMenu show={show}>
							{navbarData.map((el, index) => (
								<NavItem key={index}>
									<NavLinks to={el.to} onClick={() => closeMobileMenu(el.to)}>
										{el.text}
									</NavLinks>
								</NavItem>
							))}
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
			)
		</>
	)
}
export default NavbarUser
