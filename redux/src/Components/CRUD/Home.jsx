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
      <h2 className="text-center mt-3">
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
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <Button variant="outline-primary" className="m-2">Edit</Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    className="m-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
