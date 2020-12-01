import React, { Component } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";

import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this.getPost();
    console.log(this.props);
  }

  async getPost() {
    const res = await axios.get(
      `http://localhost:5000/blog/${this.props.match.params.id}`
    );
    this.setState({ post: res.data });
  }

  renderHTML() {
    return { __html: this.state.post.html };
  }

  renderPost() {
    return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
  }

  render() {
    return <div className="post shadow-lg">{this.renderPost()}</div>;
  }
}

export default Post;
