import { useEffect, useState } from 'react';
import { setDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../db';
import { collection, Firestore, getDocs } from 'firebase/firestore';

const VisitListRender = ({ id, users }) => {
  const [visit, setVisit] = useState(['']);

  const getVisits = async () => {
    const Collection = collection(db, 'users');
    const usersCollection = await getDocs(Collection);

    const data1 = usersCollection.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    const visit = data1.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    console.log(visit);
    setVisit(visit);
  };
  useEffect(() => {
    getVisits();
  });

  const renderVisits = () => (
    <ul>
      {users.map((user) => (
        <li key={users.id}>1.{visit}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Wizyty użytkownika: bartek-ciupa@o2.pl </h2>
      <>{renderVisits()}</>
      <div>
        <button>Wyloguj się</button>
      </div>
    </div>
  );
};

export default VisitListRender;
