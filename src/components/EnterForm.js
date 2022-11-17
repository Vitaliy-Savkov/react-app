import { useState } from "react";

const EnterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');     

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="login-form">
      <form>
        <label>
            Email:
            <input type="email" value={email} onChange={handleEmailInput} placeholder="Email" />
        </label>
        <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordInput} placeholder="Password" />
        </label>
        <button>Sign in</button>
        <button>Signup</button>
      </form>
    </div>
  );
};

export default EnterForm;
