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
const Form = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)
	const handleSubmit = e => {
		e.preventDefault()
		const resultError = validateForm({ name, email })
		if (resultError !== null) {
			setError(resultError)
			return
		}
		setName('')
		setEmail('')
		setError(null)
		setSuccess('Sign up was correct!')
	}
	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	}
	const formData = [
		{ label: 'Name', value: name, onChange: e => setName(e.target.value), type: 'text' },
		{ label: 'Email', value: email, onChange: e => setEmail(e.target.value), type: 'email' },

	]
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Sign Up</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label} *</FormLabel>
									<FormInput type={el.type} value={el.value} onChange={el.onChange} />
								</FormInputRow>
							))}
							<FormButton type='submit'>Let's start</FormButton>
						</FormWrapper>
						{error && (
							<FormInput variants={messageVariants} initial='hidden' animate='animate' error>
								{error}
							</FormInput>
						)}
						{success && (
							<FormInput variants={messageVariants} initial='hidden' animate='animate'>
								{success}
							</FormInput>
						)}
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	)
}
export default Form
