import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getDoc, doc, collection, CollectionReference, query, getDocs } from 'firebase/firestore'
import { auth, db } from './../../db'
import React from 'react'

const ReviewListRender = () => {
	const signOutUser = () => {
		signOut(auth)
	}
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
	useEffect(() => {
		onAuthStateChanged(auth, jwt => {
			if (jwt === null) {
				return
			}
			console.log('jwt', jwt.uid)
			getAllReviews(jwt.uid)
		})
	}, [])
	const renderReviews = (reviews = []) => {
		return reviews.map((review, i) => {
			return (
				<React.Fragment key={i}>
					<p>Client name:{review.name}</p>
					{review.reviews.map(review => {
						return (
							<div key={review.date + review.petname}>
								<span>
									<p>Date: {review.date}</p>
									<h3>Groomer name: {review.groomer}</h3>
									<h3>Owner name: {review.ownername}</h3>
									<h3>Pets name: {review.petname}</h3>
									<h3>Review: {review.reviewtext}</h3>
									<h3>Rating: {review.rating}</h3>
								</span>
							</div>
						)
					})}
				</React.Fragment>
			)
		})
	}

	return (
		<div>
			<h2>You are logged in as: </h2>
			<h2>Your reviews:</h2>
			{renderReviews(reviews.myReviews)}
			<h2>All reviews:</h2>
			{renderReviews(reviews.othersReviews)}
			<div>
				<button onClick={signOutUser}>Wyloguj się</button>
			</div>
		</div>
	)
}

export default ReviewListRender
