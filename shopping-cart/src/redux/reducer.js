import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CONFIRM_CHECKOUT
} from "./actions";

const initialState = {
  cart: []
};

export const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            quantity: 1,
            ...action.payload
          }
        ]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id)
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: action.payload
      };
    case CONFIRM_CHECKOUT:
      return initialState;
    default:
      return state;
  }
};
