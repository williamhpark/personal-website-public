import React from "react";

import "../../App.css";
import "./BlogPage.css";
import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";

const BlogPage = (props) => {
  const blogHeroText = {
    title: "My Blog",
    subtitle:
      "Sharing my experiences in programming and other parts of my life",
  };

  return (
    <div id="blog-page">
      <Hero title={blogHeroText.title} subtitle={blogHeroText.subtitle} />
      <PostList />
    </div>
  );
};

export default BlogPage;
