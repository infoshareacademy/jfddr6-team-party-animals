import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../db';
import React from 'react';
import { Root, Review } from './ReviewListStyles';

const ReviewListRender = () => {
  const defaultReviews = {
    myReviews: [],
    othersReviews: [],
  };
  const [reviews, setReviews] = useState(defaultReviews);

  const getAllReviews = async (id) => {
    const collectionReference = collection(db, 'reviews');
    const reviewsDocs = await getDocs(collectionReference);
    const allReviews = reviewsDocs.docs.reduce((a, doc) => {
      return id === doc.id
        ? { ...a, myReviews: [...a.myReviews, doc.data()] }
        : { ...a, othersReviews: [...a.othersReviews, doc.data()] };
    }, defaultReviews);
    console.log(allReviews);
    setReviews(allReviews);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (jwt) => {
      if (jwt === null) {
        return;
      }

      getAllReviews(jwt.uid);
    });
  }, []);
  const renderReviews = (reviews) => {
    return reviews.map((review, i) => {
      return (
        <Root>
          <React.Fragment key={i}>
            <h3>{review.name}</h3>
            {review.reviews.map((review) => {
              return (
                <Review key={review.date + review.petname}>
                  <br />
                  <p>Date: {review.date}</p>

                  <p>Groomer name: {review.groomer}</p>
                  <p>Owner name: {review.ownername}</p>
                  <p>Pets name: {review.petname}</p>
                  <p>Review: {review.reviewtext}</p>
                  <p>Rating: {review.rating}</p>
                </Review>
              );
            })}
          </React.Fragment>
        </Root>
      );
    });
  };

  return (
    <div>
      <h2>Your reviews:</h2>
      {renderReviews(reviews.myReviews)}
      <h2>All reviews:</h2>
      {renderReviews(reviews.othersReviews)}
    </div>
  );
};

export default ReviewListRender;
