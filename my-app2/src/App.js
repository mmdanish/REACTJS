// import { useEffect, useRef, useState } from "react";
import "./App.css";
// import { Cars } from "./components/Cars";
// import Forms from "./components/Forms";
// import StudentReg from "./components/StudentReg";
// import Keys from "./components/Keys";
// import Product from "./components/Products/Product";

import CartProvider from "./components/ContextTask/contexts/CartProvider";
import Navbar from "./components/ContextTask/NavBar/Navbar";
import ProductList from "./components/ContextTask/ProductList/ProductList";

// import Header from "./components/useContext/Header";
// import Layout from "./components/useContext/Layout";
// import ThemeProvider from "./components/useContext/ThemeProvider";

// import PropDatas from "./components/PropDatas";
// import ChildA from "./components/useContext/ChildA";

function App() {
  // const [count, setCount] = useState(0);
  // const [preCount, setPreCount] = useState(0);

  // const inputRef = useRef(null);

  // function handleClick() {
  //   inputRef.current.style.backgroundColor = "Red";
  //   inputRef.current.style.padding = "10px"
  // }

  // useEffect(() => {
  //   if (count > preCount) {
  //     console.log("Value Incremented");
  //   } else if (count < preCount) {
  //     console.log("Value Decremented");
  //   }
  //   setPreCount(count);
  // }, [preCount, count]);

  // let increment = () => {
  //   setCount(count + 1);
  // };

  // let decrement = () => {
  //   if (count !== 0) {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <div>
      {/* <div className="navbar">
        <h2>Softroniics</h2>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="counter">
        <button onClick={increment}>+</button>&nbsp;&nbsp;
        <h1>{count}</h1>&nbsp;&nbsp;
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleClick}>Click</button>
      </div> */}
      <div>
        {/* <Product /> */}

        {/* Wrapping other components into themeContext */}
        {/* <ThemeProvider>
          <Header />
          <Layout />
        </ThemeProvider> */}

        <CartProvider>
          <Navbar />
          <ProductList />
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
