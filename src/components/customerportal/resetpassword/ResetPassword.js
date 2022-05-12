import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../db'
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
} from './ResetPasswordStyles'
import { Container } from '../../../globalStyles'

const ResetPassword = () => {
	const [emailInput, setEmailInput] = useState('')
	const [passwordReset, setPaswordReset] = useState(false)

	const resetPassword = async () => {
		await sendPasswordResetEmail(auth, emailInput).then(() => {
			setPaswordReset(true)
		})
	}

	const handleSubmit = e => {
		e.preventDefault()
		resetPassword()
	}

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
						<FormTitle>Reset Password</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							<FormInputRow>
								<FormInput
									type='text'
									value={emailInput}
									placeholder='Your email'
									onChange={e => setEmailInput(e.target.value)}
								/>
								<FormButton type='submit'>Resetuj hasło</FormButton>
								{passwordReset && <div>Password was reset, check you email.</div>}
							</FormInputRow>
						</FormWrapper>
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	)
}

export default ResetPassword
