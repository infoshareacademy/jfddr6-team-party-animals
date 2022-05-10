import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../db';
import ResetPassword from './ResetPassword';

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then((response) => {
      console.log('login', response, response.user);
      setInputEmail('');
      setInputPassword('');
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(inputEmail, inputPassword);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <ResetPassword />
    </div>
  );
};

export default Login;
