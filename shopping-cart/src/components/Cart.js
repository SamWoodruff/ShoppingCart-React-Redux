import React from "react";
import { connect } from "react-redux";
import { removeFromCart, updateQuantity, undo } from "../redux/actions";

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
      <br/>
      <button onClick={()=>props.undo()}>Undo</button>
      <div className="center"><i className="material-icons medium cart-icon">shopping_cart</i></div>
      <div className='bold center'>Your Cart</div>
      <hr/>
      {props.cart.map((product, i) => (
        <div>
           <div className='container'>
               <div className='row'>
        <div key={product.id} className='center'>
    
          <div className='bold'>{product.productName}:</div> 
          <div>${product.price}</div>
          <br />
          <a className="btn-small #d32f2f red darken-2 col s12" onClick={() => props.removeFromCart(product)}>Remove</a>
        </div>
          <br />
          <br />
          <a onClick={() => handleUpdateQuantity(i, product.quantity - 1)} class="#ffcc80 orange lighten-3 btn-small col s4"><i class="material-icons">remove</i></a>
          <span className="item-quantity col s4 center">{product.quantity}</span>
          <a onClick={() => handleUpdateQuantity(i, product.quantity + 1)} class="#ffcc80 orange lighten-3 btn-small col s4"><i class="material-icons">add</i></a>
          </div>
         
        </div>
         <hr/>
        </div>
      ))}
      <div className='center'>
      <div className='bold'>Total:</div>
      <div>${total.toFixed(2)}</div><br/>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: item => dispatch(removeFromCart(item)),
  updateQuantity: cart => dispatch(updateQuantity(cart)),
  undo: () => dispatch(undo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
