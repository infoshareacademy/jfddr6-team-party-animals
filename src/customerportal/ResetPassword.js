import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../db";

const ResetPassword = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordReset, setPaswordReset] = useState(false);

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, emailInput).then(() => {
      setPaswordReset(true);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword();
  };

  return (
    <div>
      <h3>ResetPassword</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={emailInput}
          placeholder="Your email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit">Resetuj hasło</button>
      </form>
      {passwordReset && <div>Password was reset, check you email.</div>}
    </div>
  );
};

export default ResetPassword;
