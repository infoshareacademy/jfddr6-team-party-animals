import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from './../../db';
import { Nav } from './VisitlListStyles';

const VisitList = () => {
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
      getVisits(jwt.uid);
    });
  }, []);
  const renderVisits = () =>
    visits.map((visit) => {
      return (
        <div key={visit.date + visit.groomer}>
          <span>
            <p>Date: {visit.date}</p>
            <h3>Your groomer: {visit.groomer}</h3>
          </span>
        </div>
      );
    });

  return (
    <Nav>
      <div>
        <h2>You are logged in as: {users}</h2>
        <h2>Your visits:</h2>
        {renderVisits()}
      </div>
    </Nav>
  );
};

export default VisitList;
