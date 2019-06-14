import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { confirmCheckout } from "../redux/actions";

const Checkout = (props) => {
  return (
    <div>
      <Cart />
      <Link onClick={props.confirmCheckout} to="/"><button className="btn-small #ff7043 deep-orange lighten-1 waves-effect waves-light" type="submit" name="action">Confirm
    <i className="material-icons right"></i>
  </button></Link>
    </div>
  );
};

export default connect(null, { confirmCheckout })(Checkout);
