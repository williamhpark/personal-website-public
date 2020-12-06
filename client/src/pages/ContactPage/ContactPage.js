import React from "react";

import "../../App.css";
import Hero from "../../components/Hero/Hero";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactPage = (props) => {
  const contactHero = {
    title: "Contact me",
    subtitle: "If you have any inquiries, send me an email",
  };
  return (
    <div>
      <Hero title={contactHero.title} subtitle={contactHero.subtitle} />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
