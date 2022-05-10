import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../db.js";
import { useState } from "react";

const BookAVisit = () => {
  const [inputGroomer, setGroomer] = useState("Tommy");
  const [inputDate, setDate] = useState("");

  const bookNewVisit = async () => {
    const groomer = inputGroomer;
    const date = inputDate;

    await setDoc(doc(db, "users", userId, `${visits}`), {
      groomer: groomer,
      date: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookedVisit = { groomer, date };
    console.log(bookedVisit);
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
