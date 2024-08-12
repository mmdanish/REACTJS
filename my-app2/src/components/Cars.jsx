import React, { useState } from "react";

export const Cars = () => {
  const cars = [
    { id: 1, brand: "Lexus", model: "LX470", qty: 1 },
    { id: 2, brand: "Bmw", model: "m5 competition", qty: 1 },
    { id: 3, brand: "Audi", model: "S8", qty: 1 },
    { id: 4, brand: "Toyota", model: "Camry", qty: 1 },
    { id: 5, brand: "RangeRover", model: "Defender", qty: 1 },
  ];

  const [items, setItems] = useState(cars);

  function addQty(id) {
    const newProduct = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newProduct);
  }

  return (
    <div>
      {items.map((product) => (
        <div key={product.id} className="products">
          <h1>{product.brand}</h1>
          <h3>Model: {product.model}</h3>
          <h4>Quantity: {product.qty}</h4>
          <button onClick={() => addQty(product.id)}>Quantity +</button>
        </div>
      ))}
    </div>
  );
};
