import React from "react";
import { Link } from "react-router-dom";

import "./PostListItem.css";

const PostListItem = (props) => {
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

  const renderTags = (tags) => {
    return tags.map((tag) => {
      return (
        <span className="tag" key={tag}>
          {tag}
        </span>
      );
    });
  };

  const { post } = props;
  return (
    <Link to={`/blog/${post._id}`} className="post-list-item">
      <h3 className="title">{post.title}</h3>
      <span className="date">{renderDate(post.createdAt)}</span>
      <div className="tags">{renderTags(post.tags)}</div>
    </Link>
  );
};

export default PostListItem;
