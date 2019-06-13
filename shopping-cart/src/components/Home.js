import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
const Home = (props) => {
  return (
    <div className='row'>
  
   
      {props.items.map(product => (
        <div key={product.productName}>
          <Product
            product={product}
          />
        </div>
      ))}
      </div>
  );
};

const mapStateToProps = () => ({
 
});

// const mapDispatchToProps = () => {

// };

export default connect(
  mapStateToProps,
)(Home);
