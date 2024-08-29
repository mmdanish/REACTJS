import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteUser } from "./userSlice";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);

  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div className="container">
      <h2 className="text-center">
        <u>Crud App with JSON server</u>
      </h2>
      <Link to="/create">
        <button className="btn btn-success my-3">Create</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <Button className="m-2 btn-primary">Edit</Button>
              <Button
                className="m-2 btn-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
