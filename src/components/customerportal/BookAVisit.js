import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "./../../db";
import { useState } from "react";

const BookAVisit = ({ userUid }) => {
  const [inputGroomer, setGroomer] = useState("Tommy");
  const [inputDate, setDate] = useState("");

  // const bookNewVisit = async () => {
  //   const groomer = inputGroomer;
  //   const date = inputDate;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const groomer = inputGroomer;
    const date = inputDate;

    const bookedVisit = { groomer, date };
    console.log(bookedVisit);

    await updateDoc(doc(db, "users", userUid), {
      visits: arrayUnion({ date: date, groomer: groomer }),
    });
  };
  return (
    <>
      <div className="bookingform">
        <form onSubmit={handleSubmit}>
          <h2>Book a visit</h2>
          <label>Choose groomer:</label>
          <select
            value={inputGroomer}
            onChange={(e) => setGroomer(e.target.value)}
          >
            <option value="Tommy">Tommy</option>
            <option value="Zeannete">Zeannete</option>
            <option value="Bartolo">Bartolo</option>
          </select>
          <label>Choose date:</label>
          <input
            type="date"
            required
            value={inputDate}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <button>Book a visit</button>
        </form>
      </div>
    </>
  );
};

export default BookAVisit;
