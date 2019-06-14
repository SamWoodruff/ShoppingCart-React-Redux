import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CONFIRM_CHECKOUT,
  UNDO
} from "./actions";

const initialState = {
  cart: [],
  carts: [[]]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        carts: [...state.carts, [...state.cart, action.payload]]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id),
        carts: [...state.carts, [...state.cart.filter(product => product.id !== action.payload.id)]]
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: action.payload
      };
    case CONFIRM_CHECKOUT:
      return initialState;
    case UNDO:
      const testCarts = [...state.carts];
      if(testCarts.length > 1){
        testCarts.pop()
        return {
          ...state,
          cart: testCarts[testCarts.length-1],
          carts: testCarts
        }
      }
      return state;
    default:
      return state;
  }
};
