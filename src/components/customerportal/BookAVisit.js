import { arrayUnion, updateDoc, doc } from 'firebase/firestore'
import { db } from './../../db'
import { useState } from 'react'
import { FormInput, FormInputRow, FormWrapper } from '../form/FormStyles'
import { FormTitle, FormTitle2, FormTitle3, FormButton, Container, FormSection, FormRow } from './BookVisitsStyles'

const BookAVisit = ({ userUid }) => {
	const [inputGroomer, setGroomer] = useState('Tommy')
	const [inputDate, setDate] = useState('')

	// const bookNewVisit = async () => {
	//   const groomer = inputGroomer;
	//   const date = inputDate;
	// };

	const handleSubmit = async e => {
		e.preventDefault()
		const groomer = inputGroomer
		const date = inputDate

		const bookedVisit = { groomer, date }
		console.log(bookedVisit)

		await updateDoc(doc(db, 'users', userUid), {
			visits: arrayUnion({ date: date, groomer: groomer }),
		})
		setGroomer(inputGroomer)
		setDate(inputDate)
	}
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormTitle3>Choose groomer</FormTitle3>
					<FormWrapper onSubmit={handleSubmit}>
						<select value={inputGroomer} onChange={e => setGroomer(e.target.value)}>
							<option value='Tommy'>Tommy</option>
							<option value='Zeannete'>Zeannete</option>
							<option value='Bartolo'>Bartolo</option>
						</select>
						<span> </span>
						<FormTitle>Book a Visit</FormTitle>
						<FormTitle2>Choose date:</FormTitle2>
						<FormInputRow>
							<FormInput
								type='date'
								required
								value={inputDate}
								onChange={e => setDate(e.target.value)}
								placeholder='peek a date'
							/>
						</FormInputRow>

						<FormButton>Book a visit</FormButton>
					</FormWrapper>
				</FormRow>
			</Container>
		</FormSection>
	)
}

export default BookAVisit
