import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Layout = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h4>Layout</h4>
      <button onClick={toggleTheme}>Change Theme!</button>
    </div>
  );
};

export default Layout;
