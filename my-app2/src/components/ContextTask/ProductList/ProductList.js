import React, { useContext } from "react";
import { cartContext } from "../contexts/CartProvider";
import "./ProductList.css";
import product1 from "../images/Samsung.jpeg";
import product2 from "../images/iPhone.jpeg";
import product3 from "../images/Pixel.jpeg";

const ProductList = () => {
  const { addItemToCart } = useContext(cartContext);

  const products = [
    { id: 1, name: "Samsung", price: 130000, image: product1 },
    { id: 2, name: "iPhone", price: 119900, image: product2 },
    { id: 3, name: "Pixel", price: 43900, image: product3 },
  ];

  return (
    <div className="product-list">
      <h1>Smartphones</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${(product.price / 100).toFixed(2)}</p>
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
