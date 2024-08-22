import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login:', email, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="textbox"
          />
        </label>
        <label className="login-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="textbox"
          />
        </label>
        <button type="submit" className="button-85">
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
