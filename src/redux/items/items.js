const FETCH_ITEMS = 'final-capstone-front-end/items/FETCH_ITEMS';

export const fetchItems = (payload) => ({
  type: FETCH_ITEMS,
  payload,
});

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;
