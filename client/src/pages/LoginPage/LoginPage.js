import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";

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
    <div className="page">
      <div id="login-page">
        <h1>Login</h1>
        {!props.loggedIn && (
          <LoginForm
            handleSubmit={handleSubmit}
            password={password}
            setPassword={setPassword}
          />
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
    </div>
  );
};

export default LoginPage;
