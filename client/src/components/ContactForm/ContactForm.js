import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

import "../../App.css";
import "./ContactForm.css";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if (
          result.status === 200 &&
          name !== "" &&
          email !== "" &&
          subject !== "" &&
          message !== ""
        ) {
          setDisabled(true);
          setEmailSent(true);
        } else {
          setDisabled(false);
          setEmailSent(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setDisabled(true);
        setEmailSent(false);
      });
  };

  return (
    <div id="contact-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="full-name">Full Name</Form.Label>
          <Form.Control
            id="full-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setSubject(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
};

export default ContactForm;
