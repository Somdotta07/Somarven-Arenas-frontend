const GET_USER_SUCCESS = 'final-capstone-front-end/users/GET_USER_SUCCESS';

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

const initialState = {
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
