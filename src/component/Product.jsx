import React from "react";
import ProductCard from "./ProductCard";
import { data } from "../data";
import "../assets/Product.style.css";
import ProductDetails from "./ProductDetails";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: true,
    });
  };
  render() {
    console.log("data", data);
    return (
      <div className="product-list">
        {data.map((item) =>
          this.state.clicked ? (
            <ProductDetails products={item.id} />
          ) : (
            <ProductCard products={item} handleClick={this.handleClick} />
          )
        )}
      </div>
    );
  }
}

export default Product;
