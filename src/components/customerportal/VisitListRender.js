import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./../../db";

const VisitListRender = () => {
  const signOutUser = () => {
    signOut(auth);
  };
  const [visits, setVisits] = useState([]);
  const [users, setUsers] = useState([]);

  const getVisits = async (docId) => {
    const docReference = doc(db, 'users', docId);
    // const quer = query(collectiona, where(name.id, '==', user.id));
    const userDocument = await getDoc(docReference);

    const user = {
      id: userDocument.id,
      data: userDocument.data(),
    };

    setUsers(user.data.name);
    setVisits(user.data.visits);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (jwt) => {
      if (jwt === null) {
        return;
      }
      console.log('jwt', jwt.uid);
      getVisits(jwt.uid);
    });
  }, []);
  const renderVisits = () =>
    visits.map((visit) => {
      const dateVisit = new Date(visit.date.toMillis());
      return (
        <div>
          <h3>Your puppy name: {visit.name}</h3>
          <span>
            Your visits:
            <p>
              Time: {dateVisit.getHours()}:{dateVisit.getMinutes()}
            </p>
            <p>
              Date: {dateVisit.getDate()} - {"0" + (dateVisit.getMonth() + 1)} -{" "}
              {dateVisit.getFullYear()}
            </p>
          </span>
        </div>
      );
    });

  return (
    <div>
      <h2>You are log in as: {users}</h2>
      {renderVisits()}
      <div>
        <button onClick={signOutUser}>Wyloguj się</button>
      </div>
    </div>
  );
};

export default VisitListRender;
