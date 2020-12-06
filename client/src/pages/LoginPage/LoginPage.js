import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = (props) => {
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === process.env.REACT_APP_AUTH_PASSWORD) {
      setPasswordCorrect(true);
      props.handleLogin();
    } else {
      setPasswordCorrect(false);
    }
    setPassword("");
  };

  return (
    <div id="login-container">
      <h1>Login</h1>
      {!props.loggedIn && (
        <div id="form">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="d-inline-block" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      )}
      <div id="msg">
        {passwordCorrect === true && (
          <p className="success-msg font-weight-bold">Login successful!</p>
        )}
        {passwordCorrect === false && (
          <p className="err-msg font-weight-bold">
            Incorrect password, try again.
          </p>
        )}
      </div>
      {props.loggedIn && (
        <div id="link">
          <p>
            <Link to="/auth/createpost">Create a new post</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
