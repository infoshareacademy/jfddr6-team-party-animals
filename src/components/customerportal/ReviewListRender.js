import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "./../../db";

const ReviewListRender = () => {
  const signOutUser = () => {
    signOut(auth);
  };
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  const getReviews = async (docId) => {
    const docReference = doc(db, "reviews", docId);
    const userDocument = await getDoc(docReference);

    const user = {
      id: userDocument.id,
      data: userDocument.data(),
    };

    setUsers(user.data.name);
    setReviews(user.data.reviews);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (jwt) => {
      if (jwt === null) {
        return;
      }
      console.log("jwt", jwt.uid);
      getReviews(jwt.uid);
    });
  }, []);
  const renderReviews = () =>
    reviews.map((review) => {
      return (
        <div key={review.date + review.petname}>
          <span>
            <p>Date: {review.date}</p>
            <h3>Your groomer: {review.groomer}</h3>
            <h3>Your name: {review.ownername}</h3>
            <h3>Pets name: {review.petname}</h3>
            <h3>Review: {review.reviewtext}</h3>
            <h3>Rating: {review.rating}</h3>
          </span>
        </div>
      );
    });

  return (
    <div>
      <h2>You are logged in as: {users}</h2>
      <h2>Your reviews:</h2>
      {renderReviews()}
      <div>
        <button onClick={signOutUser}>Wyloguj się</button>
      </div>
    </div>
  );
};

export default ReviewListRender;
