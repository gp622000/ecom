import React from "react";
import "../assets/ProductCard.style.css";

class ProductCard extends React.Component {
  render() {
    console.log("props", this.props);
    const { products } = this.props;
    console.log("item", products);
    return (
      <div className="product-item">
        <div className="product-img">
          <img src={products.image} alt="" srcset="" />
        </div>
        <div className="title">
          {products.title.split(" ").splice(0, 4).join(" ")}
        </div>
        <div className="rating">Rating : {products.rating.rate}</div>
        <div className="price">Rs : {products.price}</div>
      </div>
    );
  }
}

export default ProductCard;
