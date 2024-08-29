import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Form/Registration";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
