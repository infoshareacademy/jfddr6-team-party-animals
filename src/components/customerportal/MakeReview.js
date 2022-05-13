import { arrayUnion, updateDoc, doc } from 'firebase/firestore'
import { db } from './../../db'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, ContentRow } from './MakeReviewStyles'

const MakeReview = ({ userUid }) => {
	const [inputGroomer, setGroomer] = useState('Tommy')
	const [inputDate, setDate] = useState('')
	const [inputText, setText] = useState('')
	const [inputPetName, setPetName] = useState('')
	const [inputOwnerName, setOwnerName] = useState('')
	const [inputRating, setRating] = useState('5')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		const date = inputDate
		const groomer = inputGroomer
		const reviewtext = inputText
		const petname = inputPetName
		const ownername = inputOwnerName
		const rating = inputRating

		const addedReview = { groomer, date, reviewtext, petname, rating }
		console.log(addedReview)

		await updateDoc(doc(db, 'reviews', userUid), {
			reviews: arrayUnion({
				date: date,
				groomer: groomer,
				reviewtext: reviewtext,
				petname: petname,
				ownername: ownername,
				rating: rating,
			}),
		})
		setGroomer('')
		setDate('')
		setText('')
		setPetName('')
		setOwnerName('')
		setRating('')
		navigate('/panel')
	}
	const dateChangeHandler = e => setDate(e.target.value)
	const groomerChangeHandler = e => setGroomer(e.target.value)
	const inputTextChangeHandler = e => setText(e.target.value)
	return (
		<>
			<Container>
				<ContentRow>
					<div className='bookingform'>
						<form onSubmit={handleSubmit}>
							<h2>Add review</h2>
							<label>Choose date:</label>
							<input type='date' required value={inputDate} onChange={dateChangeHandler}></input>
							<label>Choose groomer:</label>
							<select value={inputGroomer} defaultValue='Tommy' onChange={groomerChangeHandler}>
								<option value='Tommy'>Tommy</option>
								<option value='Zeannete'>Zeannete</option>
								<option value='Bartolo'>Bartolo</option>
							</select>
							<label>Write review:</label>
							<textarea required value={inputText} onChange={inputTextChangeHandler}></textarea>
							<label>Pet name:</label>
							<input type='text' required value={inputPetName} onChange={e => setPetName(e.target.value)}></input>
							<label>Owner name:</label>
							<input type='text' required value={inputOwnerName} onChange={e => setOwnerName(e.target.value)}></input>
							<label>Rate our service(0-5 STARS): {inputRating} STARS </label>
							<input
								type='range'
								min='0'
								max='5'
								defaultValue='5'
								required
								value={inputRating}
								onChange={e => setRating(e.target.value)}></input>

							<button type='submit'>Add review</button>
						</form>
					</div>
				</ContentRow>
			</Container>
		</>
	)
}

export default MakeReview
