import React from "react";

import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";

const BlogPage = (props) => {
  const blogHeroText = {
    title: "My Blog",
    subtitle:
      "Sharing my experiences in programming and other parts of my life",
  };

  return (
    <div>
      <Hero title={blogHeroText.title} subtitle={blogHeroText.subtitle} />
      <PostList />
    </div>
  );
};

export default BlogPage;
