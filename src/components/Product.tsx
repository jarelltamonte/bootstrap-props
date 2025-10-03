import React from "react";
import "./Product.css";

interface ProductProps {
  productName: string;
  price: number;
  description: string;
}

const Product: React.FC<ProductProps> = ({ productName, price, description }) => {
  return (
    <div className="product1-card">
      <p className="product-name">{productName}</p>
      <p className="product-price">${price / 100}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default Product;