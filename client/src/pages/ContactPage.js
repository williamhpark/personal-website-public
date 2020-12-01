import React from "react";

import "../App.css";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
  const contactHero = {
    title: "Contact me",
    text: "If you have any inquiries, send me an email",
  };
  return (
    <div>
      <Hero title={contactHero.title} text={contactHero.text} />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
