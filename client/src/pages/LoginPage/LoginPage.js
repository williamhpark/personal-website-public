import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div id="login-page">
      <h1>Login</h1>
      {!props.loggedIn && (
        <LoginForm
          handleSubmit={handleSubmit}
          password={password}
          setPassword={setPassword}
        />
      )}
      {passwordCorrect === true && (
        <p className="form-msg success-msg">Login successful!</p>
      )}
      {passwordCorrect === false && (
        <p className="form-msg err-msg">Incorrect password, try again.</p>
      )}
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
