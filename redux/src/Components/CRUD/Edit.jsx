import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./userSlice";

function Edit() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.find((user) => user.id === Number(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        id: Number(id),
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success" onClick={handleEdit}>
          Edit
        </button>
      </form>
    </div>
  );
}

export default Edit;
