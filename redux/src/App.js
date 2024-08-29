// import "./App.css";
// import UserForm from "./Components/AddUser/UserForm";
// import UserList from "./Components/AddUser/UserList";
// import Form from "./Components/Form/Form";
// import { useSelector } from "react-redux";
// import Counter from "./Components/Counter/Counter";
// import Theme from "./Components/ThemeChanger/Theme";

// function App() {
  // const { name, email, password } = useSelector((state) => state.form);
  // return (
  //   <div className="App">
      // {/* <Counter /> */}

      // {/* <Theme /> */}

      // {/* <Form /> */}
      // {/* <p>{name}</p>
      // <p>{email}</p>
      // <p>{password}</p> */}

      
//     </div>
//   );
// }

// export default App;


// //User Management
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import UserListPage from "./Components/AddUser/UserList";
// import UserForm from "./Components/AddUser/UserForm";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <Router>
//       <div className="container mt-5">
//         <nav className="mb-4">
//           <Link to="/" className="btn btn-primary mr-2">Home</Link>
//           <Link to="/users" className="btn btn-secondary">User List</Link>
//           <button 
//                 className="btn btn-success" 
//                 onClick={() => setShowForm(!showForm)}
//               >
//                 {showForm ? "Hide Form" : "Add User"}
//               </button>
//         </nav>
//         <Routes>
//         <Route path="/" element={<Home showForm={showForm} />} />
//           <Route path="/users" element={<UserListPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// const Home = ({ showForm }) => (
//   <div>
//     <h2>Welcome to the User Management System</h2>
//     <p>Select an option from the navigation bar.</p>
//     {showForm && <UserForm />}
//   </div>
// );

// export default App;


//CRUD APP
import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Components/CRUD/Home'
import Create from './Components/CRUD/Create';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



