import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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

    createUserWithEmailAndPassword(auth, email, password)
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
        <label>
            Email:
            <input type="email" value={email} onChange={handleEmailInput} placeholder="Email" />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordInput} placeholder="Password" />
        </label>
        <button>Signup</button>
      </form>
      {error ? <div>{`${error}`}</div> : null}
    </div>
  );
};

export default RegistrationForm;
