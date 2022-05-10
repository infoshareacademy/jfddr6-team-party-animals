import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../db';

const VisitListRender = () => {
  const signOutUser = () => {
    signOut(auth);
  };
  const [visits, setVisits] = useState([]);
  const [users, setUsers] = useState([]);

  const getVisits = async () => {
    const collectiona = collection(db, 'users');
    // const quer = query(collectiona, where(name.id, '==', user.id));
    const usersCollection = await getDocs(collectiona);

    const users = usersCollection.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    console.log(users);

    const user = users.map((el) => ({
      id: el.id,
      data: el.data,
    }));

    console.log(user);

    setUsers(user[0].data.name);
    setVisits(users[0].data.visits);
    console.log(user[0].data.name); // Bartek
    console.log(users[0].data.visits); //0: {name: 'burek', date: at}     1: {name: 'reksio', date: at}
    console.log(users[0].id);
  };

  useEffect(() => {
    getVisits();
  }, []);
  const renderVisits = () =>
    visits.map((visit) => {
      const dateVisit = new Date(visit.date.toMillis());
      return (
        <div key={users[0].id}>
          <h3>Your puppy name: {visit.name}</h3>

          <span>
            Your visits:
            <p>
              Time: {dateVisit.getHours()}:{dateVisit.getMinutes()}
              {dateVisit.getMinutes()}
            </p>
            <p>
              Date: {dateVisit.getDate()} - {'0' + (dateVisit.getMonth() + 1)} -{' '}
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
