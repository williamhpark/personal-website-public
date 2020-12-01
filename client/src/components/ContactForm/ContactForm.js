import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if (
          result.status === 200 &&
          this.state.name !== "" &&
          this.state.email !== "" &&
          this.state.subject !== "" &&
          this.state.message !== ""
        ) {
          this.setState({
            disabled: true,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    const { name, email, subject, message, disabled, emailSent } = this.state;
    return (
      <Container fluid={true} className="mb-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control
                  id="subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="3"
                  value={message}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Button
                className="d-inline-block"
                variant="primary"
                type="submit"
                disabled={disabled}
              >
                Send
              </Button>
              {emailSent === true && (
                <p className="d-inline success-msg font-weight-bold">
                  Email was sent! I'll get back to you as soon as I can.
                </p>
              )}
              {emailSent === false && (
                <p className="d-inline err-msg font-weight-bold">
                  Sorry, the email didn't send. Try contacting me directly at
                  william.h.park@gmail.com.
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactForm;
