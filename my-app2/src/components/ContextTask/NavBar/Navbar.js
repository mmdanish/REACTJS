import React, { useContext, useState } from "react";
import { cartContext } from "../contexts/CartProvider";
import "./Navbar.css";

function Navbar() {
  const { cart, removeItemFromCart, clearCart } = useContext(cartContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const totalItems = cart.length;
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-title">E-Commerce Site</div>
        <div className="navbar-cart">
          <i className="fa-solid fa-cart-shopping" onClick={toggleDropdown}></i>
          <span className="cart-count">{totalItems}</span>
          {dropdownVisible && (
            <div className="cart-dropdown">
              <h3>Shopping Cart</h3>
              {totalItems === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      {item.name} - ${(item.price / 100).toFixed(2)}
                      <button onClick={() => removeItemFromCart(item.id)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <div className="cart-footer">
                <div>Total: ${(totalAmount / 100).toFixed(2)}</div>
                <button onClick={clearCart} disabled={totalItems === 0}>
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
