const FETCH_ITEMS_DETAILS = 'final-capstone-front-end/items/FETCH_ITEMS_DETAILS';

export const fetchItemsDetails = (payload) => ({
  type: FETCH_ITEMS_DETAILS,
  payload,
});

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_DETAILS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default itemsDetailsReducer;
