import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import PostListItem from "../PostListItem/PostListItem";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.getPosts();
    console.log(this.state.posts);
  }

  async getPosts() {
    const res = await axios.get("http://localhost:5000/blog/");
    this.setState({ posts: res.data });
  }

  renderList() {
    return this.state.posts
      .slice(0)
      .reverse()
      .map((post) => {
        return <PostListItem post={post} key={post._id} />;
      });
  }

  render() {
    return (
      <div>
        <Container fluid={true}>{this.renderList()}</Container>
      </div>
    );
  }
}

export default PostList;
