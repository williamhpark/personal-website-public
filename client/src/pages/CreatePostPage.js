import React from "react";

import CreatePostForm from "../components/CreatePostForm/CreatePostForm";
import Timestamp from "../components/Timestamp/Timestamp";

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
    <div>
      <Timestamp createdAt={createdAt} />
      <CreatePostForm createdAt={createdAt} />
    </div>
  );
};

export default CreatePostPage;
