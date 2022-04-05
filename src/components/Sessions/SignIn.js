/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleSignIn } from '../../redux/signin/login';
import loginImg from './login.png';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signInUser = (e) => {
    e.preventDefault();
    dispatch(handleSignIn(userName, password));
  };

  return (
    <div className="signedIn">
      <div className="loginImage">
        <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
      </div>
      <form className="loginform">
        <h2 className="headerTitle">Login</h2>
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
        <button
          type="submit"
          className="submit-btn sign"
          onClick={(e) => signInUser(e)}
        >
          Sign In
        </button>
      </form>
      <div className="newUser">
        <h5>New User?</h5>
        <Link to="/signup">Sign up here</Link>
      </div>
    </div>
  );
};

export default SignIn;
