import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Post.css";

const Post = (props) => {
  const [post, setPost] = useState({});

  // Have to pass [] as second argument so that it only executes on the first rendering (error otherwise)
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const res = await axios.get(
      `http://localhost:5000/blog/${props.match.params.id}`
    );
    setPost(res.data);
  };

  const renderHTML = () => {
    return { __html: post.html };
  };

  // Render HTML in this way instead of directly in the code to avoid cross-site scripting attack
  const renderPost = () => {
    return <div dangerouslySetInnerHTML={renderHTML()}></div>;
  };

  return <div className="post shadow-sm">{renderPost()}</div>;
};

export default Post;
