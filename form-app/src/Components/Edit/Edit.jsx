import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Edit.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../userSlice";

const Edit = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const existingUser = users.find((user) => user.id === Number(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");
  const [ucontact, setContact] = useState(
    existingUser ? existingUser.contact : ""
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      editUser({
        id: Number(id),
        name: uname,
        email: uemail,
        contact: ucontact,
      })
    );
    navigate("/");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6} className="form-container">
          <h2 className="text-center">User Registeration Form</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={uname}
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
                value={uemail}
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
                value={ucontact}
                required
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              onClick={handleEdit}
            >
              Edit User
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
