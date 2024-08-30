import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import { deleteUser } from "../userSlice";

const Home = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={8} className="table-container">
          <h2 className="text-center">User Data Table</h2>

          <Table bordered className="table">
            <thead>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>CONTACT</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td className="action-buttons">
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
              ))}
            </tbody>
          </Table>
          <div className="button-wrapper">
            <Link to="/form">
              <Button variant="success">Add User</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
