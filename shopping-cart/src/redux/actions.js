export const ADD_TO_CART= "ADD_TO_CART"
export const addToCart = (item) =>({type:ADD_TO_CART, payload:item})

export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const removeFromCart = (item) =>({type:REMOVE_FROM_CART, payload:item})

export const UPDATE_QUANTITY = "UPDATE_QUANTITY"
export const updateQuantity = (cart) => ({type:UPDATE_QUANTITY,payload:cart})

export const CONFIRM_CHECKOUT = "CONFIRM_CHECKOUT"
export const confirmCheckout = () =>({type:CONFIRM_CHECKOUT})

export const UNDO = "UNDO"
export const undo = () =>({type:UNDO})