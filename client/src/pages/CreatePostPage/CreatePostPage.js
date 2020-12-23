import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../App.css";
import "./CreatePostPage.css";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
import Timestamp from "../../components/Timestamp/Timestamp";

const CreatePostPage = (props) => {
  const renderDate = (dateString) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };
  const createdAt = renderDate(new Date());
  return (
    <div id="create-post-page">
      <Timestamp createdAt={createdAt} />
      <CreatePostForm createdAt={createdAt} />
      <div id="logout-btn">
        <Link to="/blog">
          <Button variant="warning" onClick={props.handleLogout}>
            Logout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePostPage;
