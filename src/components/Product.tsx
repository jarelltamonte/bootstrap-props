import React from "react";
import "./Product.css";

interface ProductProps {
  productName: string;
  price: number;
  description: string;
  image: string; 
}

const Product: React.FC<ProductProps> = ({ productName, price, description, image }) => {
  return (
    <div className="product1-card">
      <img src={image} alt={`${productName}`} className="product-img" />
      <p className="product-name">{productName}</p>
      <p className="product-price">${price / 100}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default Product;