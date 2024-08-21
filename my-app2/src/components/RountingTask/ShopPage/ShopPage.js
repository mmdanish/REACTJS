import React from "react";
import "./ShopPage.css";

const Shop = () => {
  const products = [
    {
      image:
        "https://cdn.chec.io/merchants/17851/images/cdae2365eff5a961dd838b0505a1142b656efdf95f08c2785b59a%7Clips.jpg",
      name: "Lip Fantastic",
      description:
        "A limited-edition, nourishing lip gel to top off your look and feel fantastic.",
      price: 24.0,
    },
    {
      image:
        "https://cdn.chec.io/merchants/17851/images/c3cf1b72aaa232ba2ab495bd7485efe29cee138b5f08c2f945173%7Cgel.jpg",
      name: "Eye Purity Gels",
      description:
        "Treat your skin with active pore enzymes that replenish sun damaged skin.",
      price: 18.0,
    },
    {
      image:
        "https://cdn.chec.io/merchants/17851/images/bf9cf6844f6febb697cbba7dcbbc048abc6c1cea5f08c2e616a7c%7Ccream.jpg",
      name: "Complexion Cream",
      description:
        "Anti-aging complexion cream for medium to dry skin. Nourish your face with a natural vitamin burst for that perfectly balanced glow.",
      price: 32.0,
    },
  ];

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Facial Products</h3>
        <p>
          Products <sup>3</sup>
        </p>
        <h3>Hair Products</h3>
        <p>
          Products <sup>3</sup>
        </p>
        <h3>Body Products</h3>
        <p>
          Products <sup>3</sup>
        </p>
      </div>
      <div className="product-section">
        <h2 className="section-heading">Facial Products</h2>{" "}
        {/* New heading added here */}
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
