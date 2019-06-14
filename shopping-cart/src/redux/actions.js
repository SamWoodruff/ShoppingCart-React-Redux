export const ADD_TO_CART= "ADD_TO_CART"
export const addToCart = item => dispatch => dispatch({type:ADD_TO_CART, payload:item})

export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const removeFromCart = item => dispatch => dispatch({type:REMOVE_FROM_CART, payload:item})

export const UPDATE_QUANTITY = "UPDATE_QUANTITY"
export const updateQuantity = cart => dispatch => dispatch({type:UPDATE_QUANTITY,payload:cart})

export const CONFIRM_CHECKOUT = "CONFIRM_CHECKOUT"
export const confirmCheckout = () => dispatch => dispatch({type:CONFIRM_CHECKOUT})