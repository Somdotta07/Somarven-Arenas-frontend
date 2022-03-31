const DELETE_RESERVED = 'final-capstone-front-end/reservations/DELETE_RESERVATIONS';

export const deleteReserved = (payload) => ({
  type: DELETE_RESERVED,
  payload,
});

const initialState = {
  data: [],
  DeleteReservation: false,
  error: null,
};

const deleteReservedReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RESERVED:
      return { ...state, data: action.payload, DeleteReservation: true };
    default:
      return state;
  }
};

export default deleteReservedReducer;
