import React, { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarStyles'
import { publicNavbarData, privateNavbarData } from './../../data/NavbarData'
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({ isLogged }) => {
	const [show, setShow] = useState(false)

	const navigate = useNavigate()
	const { pathname } = useLocation()

	const navbarData = isLogged ? privateNavbarData : publicNavbarData

	const scrollTo = id => {
		const element = document.querySelector(id)
		element.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const logingOut = async () => {
		const auth = getAuth()
		await signOut(auth)
		navigate('/')
	}

	const closeMobileMenu = id => {
		scrollTo(id)
		setShow(false)
	}

	return (
		<>
			<IconContext.Provider value={{ color: '1a1a1a' }}>
				<Nav transparent={pathname === '/'}>
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
							{isLogged && (
								<NavItem>
									<NavLinks to='#' onClick={logingOut}>
										Log Out
									</NavLinks>
								</NavItem>
							)}
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}
export default Navbar
