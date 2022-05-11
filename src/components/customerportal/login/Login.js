import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../db'
import ResetPassword from '../resetpassword/ResetPassword'
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormTitle,
	FormLabel,
	FormInputRow,
	FormButton,
} from './LoginStyles'
import { Container } from '../../../globalStyles'
import React, { useState, useEffect, useMemo } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './../../Navbar/NavbarStyles'
// import { auth } from '../../../db';
import { publicNavbarData, privateNavbarData } from './../../../data/NavbarData'

const Login = () => {
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

	const [inputEmail, setInputEmail] = useState('')
	const [inputPassword, setInputPassword] = useState('')

	const loginUser = async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password).then(response => {
			console.log('login', response, response.user)
			setInputEmail('')
			setInputPassword('')
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		loginUser(inputEmail, inputPassword)
	}

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Sign Up</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							<FormInputRow>
								<FormInput
									type='text'
									value={inputEmail}
									placeholder='Email'
									onChange={e => setInputEmail(e.target.value)}
								/>
								<FormInput
									type='password'
									value={inputPassword}
									placeholder='Password'
									onChange={e => setInputPassword(e.target.value)}
								/>
							</FormInputRow>
							<FormButton type='submit'>Sign Up</FormButton>
							<FormButton type='submit'>Sign Up</FormButton>
						</FormWrapper>
						<ResetPassword />
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	)
}

export default Login
