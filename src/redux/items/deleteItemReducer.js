const DELETE_ITEM = 'final-capstone-front-end/reservations/DELETE_RESERVATIONS';

export const deleteItemFromState = (payload) => ({
  type: DELETE_ITEM,
  payload,
});

const initialState = {
  data: [],
  DeleteReservation: false,
  error: null,
};

const deleteReservedReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return { ...state, data: action.payload, DeleteItem: true };
    default:
      return state;
  }
};

export default deleteReservedReducer;
