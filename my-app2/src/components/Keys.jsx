import React, { useState } from "react";

const Keys = () => {
  const products = [
    { id: 1, name: "Mobile", brand: "Samsung", qty: 1 },
    { id: 2, name: "Mobile", brand: "Apple", qty: 1 },
    { id: 3, name: "Mobile", brand: "Moto", qty: 1 },
  ];
  const [items, setItems] = useState(products);

  function changeQty(id) {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItems(newItem);
  }

  return (
    <div>
      {items.map((product) => (
        <div key={product.id} style={{backgroundColor: "yellow", margin: "5px"}}>
          <h1>{product.name}</h1>
          <h3>Brand: {product.brand}</h3>
          <h4>Qty: {product.qty}</h4>
          <button onClick={() => changeQty(product.id)} type="button">
            +
          </button>
        </div>
      ))}
    </div>
  );
};

export default Keys;
