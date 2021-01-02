import React, { useState, useEffect } from "react";
import axios from "axios";

import PostListItem from "../PostListItem/PostListItem";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("/api/blog");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  });

  const renderList = () => {
    return posts
      .slice(0)
      .sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      })
      .map((post) => {
        return <PostListItem post={post} key={post._id} />;
      });
  };

  return <div>{renderList()}</div>;
};

export default PostList;
