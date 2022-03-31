/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleSignUp } from '../../redux/signin/login';

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
    <div>
      <form>
        <label htmlFor="username" id="username">Username</label>
        <input
          type="text"
          name="username"
          className="username"
          value={userName}
          required
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="email" id="email">Email</label>
        <input
          type="email"
          name="email"
          className="email"
          value={email}
          required
          placeholder="Enter an email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" id="password">Enter Password</label>
        <input
          type="password"
          name="password"
          required
          className="password"
          value={password}
          placeholder="Password must be greater than 6 characters"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div>
        <h4>Existing User?</h4>
        <Link to="/">Sign in here</Link>
      </div>
      <button type="submit" className="submit-btn" onClick={(e) => signUpUser(e)}>Sign Up</button>
    </div>
  );
};

export default SignUp;
