import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db";

const CreateAccount = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const registerUser = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    setInputEmail("");
    setInputPassword("");
    user && console.log("Rejestracja", user, user.email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(inputEmail, inputPassword);
  };

  return (
    <div>
      <h1>Create account</h1>
      <form onSubmit={handleRegister}>
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
