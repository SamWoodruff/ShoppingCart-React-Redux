import React from "react";
import { connect } from "react-redux";
import { removeFromCart, updateQuantity, CONFIRM_CHECKOUT } from "../redux/actions";

const Cart = props => {
    let total = 0;
    props.cart.forEach(product => {
      total += product.price * product.quantity;
    });
    
  const handleUpdateQuantity = (i, newQuantity) => {
    if (newQuantity >= 1) {
      let tempCart = [...props.cart];
      tempCart[i].quantity = newQuantity;

      props.updateQuantity(tempCart);
    }
  };

  return (
    <div>
      <div className="center"><i className="material-icons medium cart-icon">shopping_cart</i></div>
      {props.cart.map((product, i) => (
        <div key={product.id} className='center'>
          <br/>
          {product.productName} ${product.price}
          <br />
       
          <a className="btn-small #d32f2f red darken-2" onClick={() => props.removeFromCart(product)}>Remove</a>
          <br />
          <br />
          <a onClick={() => handleUpdateQuantity(i, product.quantity - 1)} class="#ffcc80 orange lighten-3 btn-small"><i class="material-icons">remove</i></a>
          <span className="item-quantity">{product.quantity}</span>
          <a onClick={() => handleUpdateQuantity(i, product.quantity + 1)} class="#ffcc80 orange lighten-3 btn-small"><i class="material-icons">add</i></a>
          <hr/>
        </div>
      ))}<br/>
      ${total.toFixed(2)}<br/>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch(removeFromCart(item)),
  updateQuantity: cart => dispatch(updateQuantity(cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
