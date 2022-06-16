import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Login.css";

const LoginComponent = (props) => {
  const { loginInput, setLoginInput, loginClick } = props;

  return (
    <Container className="loginContainer">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) =>
              setLoginInput({ ...loginInput, username: e.target.value })
            }
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) =>
              setLoginInput({ ...loginInput, password: e.target.value })
            }
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={loginClick}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginComponent;
