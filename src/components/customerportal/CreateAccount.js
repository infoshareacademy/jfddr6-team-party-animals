import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./../../db";

const authUser = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response.user;
};

const createUserMetadata = async ({ id, name, visits }) => {
  await setDoc(doc(db, "users", id), {
    name,
    visits,
  });
};

const createUserInitialReview = async ({ id, name, reviews }) => {
  await setDoc(doc(db, "reviews", id), {
    name,
    reviews,
  });
};

const CreateAccount = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputName, setInputName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const registeredUser = await authUser(inputEmail, inputPassword);
    const userId = registeredUser.uid;
    console.log(userId);
    await createUserMetadata({
      id: userId,
      name: inputName,
      visits: [],
    });
    await createUserInitialReview({
      id: userId,
      name: inputName,
      reviews: [],
    });
    setInputEmail("");
    setInputPassword("");
    setInputName("");
  };

  return (
    <div>
      <h1>Create account</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={inputName}
          placeholder="Name"
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          value={inputEmail}
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <input
          type="password"
          value={inputPassword}
          placeholder="Password"
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button type="submit">Create account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
