import React, { useState } from "react";
import "./Reg.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { addUser } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newUserId, name, email, contact }));
    alert("Succesfully Registered");
    navigate("/");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6} className="form-container">
          <h2 className="text-center">User Registeration Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formContact" className="mt-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                placeholder="Enter your contact number"
                required
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Register User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
