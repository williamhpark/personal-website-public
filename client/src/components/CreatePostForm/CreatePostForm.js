import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CreatePostForm = (props) => {
  const [title, setTitle] = useState("");
  const [tagsStr, setTagsStr] = useState("");
  const [body, setBody] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [postPublished, setPostPublished] = useState(null);

  const getTagsArr = () => {
    return tagsStr.split(", ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      createdAt: props.createdAt,
      tags: getTagsArr(),
      html: `<h1 style='font-size:250%'; margin-bottom:2rem;'>${title}</h1><h3 style='margin-bottom:4rem;'>Posted: ${props.createdAt}</h3><p style='font-size:125%;'>${body}</p>`,
    };
    axios
      .post("/api/blog", data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setDisabled(true);
          setPostPublished(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setDisabled(true);
        setPostPublished(false);
      });
  };

  return (
    <div>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="tagsStr">Tags (comma-seperated)</Form.Label>
            <Form.Control
              id="tagsStr"
              name="tagsStr"
              type="text"
              value={tagsStr}
              onChange={(e) => setTagsStr(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="body">Body</Form.Label>
            <Form.Control
              id="body"
              name="body"
              as="textarea"
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={disabled}
          >
            Post
          </Button>
        </Form>
      </div>
      {postPublished === true && (
        <p className="form-msg success-msg">Post was published!</p>
      )}
      {postPublished === false && (
        <p className="form-msg err-msg">Sorry, something went wrong.</p>
      )}
    </div>
  );
};

export default CreatePostForm;
