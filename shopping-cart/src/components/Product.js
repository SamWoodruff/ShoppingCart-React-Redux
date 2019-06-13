import React from "react";
import { connect } from "react-redux";
import { addToCart } from '../redux/actions';
import {updateQuantity} from '../redux/actions';

const Product = ({ product, addToCart, cart, updateQuantity }) => {
  const handleOnClick = (product) => {
    const index = cart.findIndex(item=>item.id === product.id)
    if(index === -1){
      addToCart(product);
    } else {
      let tempCart = [...cart]
      tempCart[index].quantity = tempCart[index].quantity + 1
      
      updateQuantity(tempCart)
    }
  }



  return (
  
    <div className='col s6 m4 l2'>
      <div className="card">
        <div className=" product-img card-image">
          <img src={product.image} alt="Not Found"/>
        </div>
        <div className="card-content">
          <p className=".tileText"> {product.productName} ${product.price}</p>
        </div>
        <div className="card-action">
        <button onClick={() => handleOnClick(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
 
  );
};

const mapStateToProps = ({cart}) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item)),
    updateQuantity: (cart) => dispatch(updateQuantity(cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
