import React, { useState } from 'react'
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
} from './FormStyles'
import { Container } from '../../globalStyles'
import validateForm from './validateForm'
import { auth, db } from './../../db'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const Form = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const registerUser = async (email, password) => {
		const response = await createUserWithEmailAndPassword(auth, email, password)
		return response.user.uid
	}

	const handleSubmit = e => {
		e.preventDefault()

		const resultError = validateForm({ name, email, password, confirmPassword })
		if (resultError !== null) {
			setError(resultError)

			return
		}
		setName('')
		setEmail('')
		setPassword('')
		setConfirmPassword('')
		setError(null)
		setSuccess('Sign up was correct!')

		registerUser(email, password).then(id => {
			const userDoc = doc(db, 'users', id)
			const reviewDoc = doc(db, 'reviews', id)
			setDoc(userDoc, {
				name,
				visits: [],
			})
			setDoc(reviewDoc, {
				name,
				reviews: [],
			})
		})
	}
	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	}
	const formData = [
		{ label: 'Name', value: name, onChange: e => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: e => setEmail(e.target.value), type: 'email' },
		{ label: 'Password', value: password, onChange: e => setPassword(e.target.value), type: 'password' },
		{
			label: 'Confirm Password',
			value: confirmPassword,
			onChange: e => setConfirmPassword(e.target.value),
			type: 'password',
		},
	]

	// console.log('formData', formData)
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Create Account</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label} *</FormLabel>
									<FormInput type={el.type} value={el.value} onChange={el.onChange} />
								</FormInputRow>
							))}
							<FormButton type='submit'>Create Account</FormButton>
						</FormWrapper>
						{error && (
							<>
								<FormInput variants={messageVariants} initial='hidden' animate='animate' />
								<p> {error}</p>
							</>
						)}
						{success && (
							<>
								<FormInput variants={messageVariants} initial='hidden' animate='animate' />
								<p> {success}</p>
							</>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	)
}
export default Form
