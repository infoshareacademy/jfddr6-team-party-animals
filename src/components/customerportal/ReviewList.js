import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../../db'
import React from 'react'
import { Column, Container } from './ReviewListStyles'

const ReviewListRender = () => {
	const defaultReviews = {
		myReviews: [],
		othersReviews: [],
	}
	const [reviews, setReviews] = useState(defaultReviews)

	const getAllReviews = async id => {
		const collectionReference = collection(db, 'reviews')
		const reviewsDocs = await getDocs(collectionReference)
		const allReviews = reviewsDocs.docs.reduce((a, doc) => {
			return id === doc.id
				? { ...a, myReviews: [...a.myReviews, doc.data()] }
				: { ...a, othersReviews: [...a.othersReviews, doc.data()] }
		}, defaultReviews)
		console.log(allReviews)
		setReviews(allReviews)
	}
	useEffect(
		() =>
			onAuthStateChanged(auth, jwt => {
				if (jwt === null) {
					return
				}

				getAllReviews(jwt.uid)
			}),
		[]
	)
	const renderReviews = reviews =>
		reviews.map((review, i) => (
			<Container key={i}>
				<Column>
					<h3>{review.name}</h3>
					{review.reviews.map(review => (
						<p key={review.date + review.petname}>
							<span>{review.date} </span>
							<span>
								Groomer: <em>{review.groomer}</em>,{' '}
							</span>
							<span>
								Owner: <em>{review.ownername}</em>,{' '}
							</span>
							<span>
								Pet: <em>{review.petname}</em>,{' '}
							</span>
							<span>
								Review: <em>{review.reviewtext}</em>,{' '}
							</span>
							<span>
								Stars: <em>{review.rating}</em>
							</span>
						</p>
					))}
				</Column>
			</Container>
		))

	return (
		<div>
			<h2>Your reviews:</h2>
			{renderReviews(reviews.myReviews)}
			<h2>All reviews:</h2>
			{renderReviews(reviews.othersReviews)}
		</div>
	)
}

export default ReviewListRender
