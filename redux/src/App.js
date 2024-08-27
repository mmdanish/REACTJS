import "./App.css";
import Form from "./Components/Form/Form";
import { useSelector } from "react-redux";
// import Counter from "./Components/Counter/Counter";
// import Theme from "./Components/ThemeChanger/Theme";

function App() {
  const { name, email, password } = useSelector((state) => state.form);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Theme /> */}
      <Form />

      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
}

export default App;
