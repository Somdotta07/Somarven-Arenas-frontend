const FETCH_ITEMS_DETAILS = 'final-capstone-front-end/items/FETCH_ITEMS_DETAILS';
const FETCH_RESERVATION_DATES = 'final-capstone-front-end/items/FETCH_RESERVATION_DATES';
const CONTROL_MODAL = 'final-capstone-front-end/items/CONTROL_MODAL';

export const fetchItemsDetails = (payload) => ({
  type: FETCH_ITEMS_DETAILS,
  payload,
});

export const fetchReservationDates = (payload) => ({
  type: FETCH_RESERVATION_DATES,
  payload,
});

export const controlModal = (payload) => ({
  type: CONTROL_MODAL,
  payload,
});

const initialState = {
  items: [],
  loading: false,
  error: null,
  isModalOpen: false,
  dates: [],
};

const itemsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_DETAILS:
      return { ...state, items: action.payload };
    case FETCH_RESERVATION_DATES:
      return { ...state, dates: action.payload };
    case CONTROL_MODAL:
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
};

export default itemsDetailsReducer;
