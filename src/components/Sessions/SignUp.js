/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleSignUp } from '../../redux/signin/login';
import loginImg from './login.png';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signUpUser = (e) => {
    e.preventDefault();
    dispatch(handleSignUp(email, userName, password));
  };

  return (
    <div className="signedIn">
      <div className="loginImage">
        <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
      </div>
      <form className="loginform">
        <h3 className="headerTitle">Sign Up</h3>
        <input
          type="text"
          name="username"
          className="username"
          value={userName}
          required
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          className="email"
          value={email}
          required
          placeholder="Enter an email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          required
          className="password"
          value={password}
          placeholder="Password must be greater than 6 characters"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn sign" onClick={(e) => signUpUser(e)}>Sign Up</button>
      </form>
      <div>
        <h4>Existing User?</h4>
        <Link to="/">Sign in here</Link>
      </div>
    </div>
  );
};

export default SignUp;
