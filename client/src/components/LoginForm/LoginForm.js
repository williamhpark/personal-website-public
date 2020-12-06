import React from "react";
import { Button, Form } from "react-bootstrap";

import "./LoginForm.css";

const LoginForm = (props) => {
  return (
    <div id="form">
      <Form onSubmit={props.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="d-inline-block" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
