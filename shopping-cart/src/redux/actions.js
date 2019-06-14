export const UPDATE_QUANTITY = "UPDATE_QUANTITY"
export const updateQuantity = cart => dispatch => dispatch({type:UPDATE_QUANTITY,payload:cart})

export const ADD_TO_CART= "ADD_TO_CART"
export const addToCart = product => (dispatch, getState) => {
  const { cart } = getState();

  const index = cart.findIndex(item=>item.id === product.id)
  
  if(index === -1){
    dispatch({type: ADD_TO_CART, payload: product});
  } else {
    let tempCart = [...cart];
    tempCart[index].quantity = tempCart[index].quantity + 1;
    dispatch({type:UPDATE_QUANTITY, payload:tempCart});
  }
  
}

export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const removeFromCart = item => dispatch => dispatch({type:REMOVE_FROM_CART, payload:item})

export const CONFIRM_CHECKOUT = "CONFIRM_CHECKOUT"
export const confirmCheckout = () => dispatch => dispatch({type:CONFIRM_CHECKOUT})