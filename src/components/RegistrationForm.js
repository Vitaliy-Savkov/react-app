import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import PasswordUtil from "../utils/password";

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');     

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const isPasswordValid = PasswordUtil.validatePassword(password);

    if (!isPasswordValid) {
      setError('Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
      setPassword('');
      return;
    }

    const hashedPassword = PasswordUtil.hashPassword(password);

    createUserWithEmailAndPassword(auth, email, hashedPassword)
        .then(() => {
          setError('');
        })
        .catch(err => {
          setError(err);
        })
    
    setEmail('');
    setPassword('');
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={handleEmailInput} placeholder="Email" />
      <input type="password" value={password} onChange={handlePasswordInput} placeholder="Password" />
        <button>Signup</button>
      </form>
      {error ? <div>{`${error}`}</div> : null}
    </div>
  );
};

export default RegistrationForm;
