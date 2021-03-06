import { clearSession, getToken } from '../../utils/sessionHelper';

const SIGN_UP = 'store/log_in/USER_SIGN_UP';
const SIGN_IN = 'store/log_in/USER_SIGN_IN';
const SIGN_OUT = 'store/log_in/USER_SIGN_OUT';
const BASE_URL = 'https://somarven.herokuapp.com';

const initialState = {
  isSignUp: false,
  isSignIn: !!getToken(),
  message: '',
  user_token: '',
};

const userSignUp = (status, message) => ({
  type: SIGN_UP,
  payload: { status, message },
});

const userSignIn = (status, message, token) => ({
  type: SIGN_IN,
  payload: { status, message, token },
});

const userSignOut = (message) => ({
  type: SIGN_OUT,
  payload: message,
});

export const handleSignIn = (username, password) => async (dispatch) => {
  const userDetails = { user: { username, password } };
  const user = await fetch(`${BASE_URL}/users/sign_in`, {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  });
  const response = await user.json();
  if (response.status === 200) {
    const token = user.headers.get('Authorization');
    dispatch(userSignIn(true, response, token));
    localStorage.setItem('session-status', true);
    localStorage.setItem('token', JSON.stringify(user.headers.get('Authorization')));
  } else {
    dispatch(userSignIn(false, response, ''));
  }
};

export const handleSignUp = (email, username, password) => async (dispatch) => {
  const userDetails = { user: { email, username, password } };
  const t = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const response = await t.json();
  if (response.status === 200) {
    dispatch(userSignUp(true, response.message));
  }
};

export const handleSignOut = () => async (dispatch) => {
  const token = getToken();
  const t = await fetch(`${BASE_URL}/users/sign_out`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  const response = await t.json();
  if (response.status === 200) {
    dispatch(userSignOut(response.message));
    clearSession();
  }
};

const sessionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignIn: action.payload.status,
        message: action.payload.message,
        user_token: action.payload.token,
      };
    case SIGN_UP:
      return {
        ...state,
        isSignUp: action.payload.status,
        message: action.payload.message,
      };
    case SIGN_OUT:
      return {
        ...state,
        user_token: '',
        isSignIn: false,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default sessionsReducer;
