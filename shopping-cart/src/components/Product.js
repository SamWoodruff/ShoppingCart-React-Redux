import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import { updateQuantity } from "../redux/actions";

const Product = ({ product, addToCart, cart, updateQuantity }) => {
  const [quantityField, setQuantityField] = useState(1);

  const handleOnClick = product => {
    const index = cart.findIndex(item => item.id === product.id);
    setQuantityField(1);
    if (index === -1) {
      product = { ...product, quantity: quantityField };
      addToCart(product);
    } else {
      let tempCart = [...cart];
      tempCart[index].quantity = tempCart[index].quantity + quantityField;

      updateQuantity(tempCart);
    }
  };

  return (
    <div className="col s6 m4 l2">
      <div className="card">
        <div className=" product-img card-image">
          <img src={product.image} alt="Not Found" />
        </div>
        <div className="card-content">
          <p className=".tileText">
            {" "}
            {product.productName} ${product.price}
          </p>
        </div>
        <div className="card-action">
          <div>
            <input
              type="number"
              min="1"
              value={quantityField}
              onChange={e => setQuantityField(parseInt(e.target.value))}
            />
          </div>

          <button
            onClick={() => handleOnClick(product)}
            className="btn-small #ff7043 deep-orange lighten-1 waves-effect waves-light center"
            type="submit"
            name="action"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
  updateQuantity: cart => dispatch(updateQuantity(cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
