import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      dispatch(addUser({ name, email }));
      setName("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Register
      </button>
    </form>
  );
};

export default UserForm;
