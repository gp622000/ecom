import React from "react";
import ProductCard from "./ProductCard";
import { data } from "../data";
import "../assets/Product.style.css";

class Product extends React.Component {
  state = {};
  render() {
    console.log("data", data);
    return (
      <div className="product-list">
        {data.map((item) => (
          <ProductCard products={item} />
        ))}
      </div>
    );
  }
}

export default Product;
