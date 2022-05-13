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
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [inputEmail, setInputEmail] = useState('')
	const [inputPassword, setInputPassword] = useState('')
	const navigate = useNavigate()

	const loginUser = async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password)

		setInputEmail('')
		setInputPassword('')
	}

	const handleSubmit = e => {
		e.preventDefault()
		loginUser(inputEmail, inputPassword)
		navigate('/panel')
	}

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Jump To Your Account </FormTitle>
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
							<FormButton type='submit'>Log In </FormButton>
							<FormButton type='submit'>Log Out</FormButton>
						</FormWrapper>
						<ResetPassword />
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	)
}

export default Login
