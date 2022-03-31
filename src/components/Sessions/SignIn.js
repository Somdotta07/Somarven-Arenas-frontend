/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleSignIn } from '../../redux/signin/login';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signInUser = (e) => {
    e.preventDefault();
    dispatch(handleSignIn(userName, password));
  };

  return (
    <div>
      <form>
        <label htmlFor="username" id="username" />
        <input
          type="text"
          name="username"
          className="username"
          value={userName}
          required
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password" id="password" />
        <input
          type="password"
          name="password"
          required
          className="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div>
        <h4>New User?</h4>
        <Link to="/signup">Sign up here</Link>
      </div>
      <button type="submit" className="submit-btn" onClick={(e) => signInUser(e)}>Sign In</button>
    </div>
  );
};

export default SignIn;
