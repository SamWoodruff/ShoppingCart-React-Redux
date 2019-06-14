import React from "react";
import { connect } from "react-redux";
import { addToCart } from '../redux/actions';

const Product = ({ product, addToCart, cart }) => 
  (
  
    <div className='col s6 m4 l2'>
      <div className="card">
        <div className=" product-img card-image">
          <img src={product.image} alt="Not Found"/>
        </div>
        <div className="card-content">
          <p className=".tileText"> {product.productName} ${product.price}</p>
        </div>
        <div className="card-action">
        <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
 
  );


const mapStateToProps = ({cart}) => ({
  cart
});

export default connect(
  mapStateToProps,
  { addToCart }
)(Product);
