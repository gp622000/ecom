import React from "react";

class ProductDetails extends React.Component {
  state = {};
  render() {
    console.log("product details component render");
    return (
      <div className="product-detail-container">
        <div className="product-detail-left-side">
          <div className="big-image"></div>
          <div className="small-image">
            <div className="small-1"></div>
            <div className="small-2"></div>
            <div className="small-3"></div>
            <div className="small-4"></div>
          </div>
        </div>
        <div className="product-details-right-side">
          <div className="title"></div>
          <div className="prod-price"></div>
          <div className="prod-size"></div>
          <div className="prod-qty"></div>
          <button className="add-to-cart">Add to Cart</button>
          <h3>Product Details</h3>
          <div className="prod-description"></div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
