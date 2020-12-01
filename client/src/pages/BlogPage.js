import React from "react";

import "../App.css";
import Hero from "../components/Hero/Hero";
import PostList from "../components/PostList/PostList";

const BlogPage = (props) => {
  const blogHeroText = {
    title: "My Blog",
    text: "Sharing my experiences in programming and other parts of my life",
  };

  return (
    <div>
      <Hero title={blogHeroText.title} text={blogHeroText.text} />
      <PostList />
    </div>
  );
};

export default BlogPage;
