// ContactUsInfo.js

import React, { useState } from 'react';
import '../styles/ContactUs.css';

function ContactUsInfo() {
  const [formSubmission, setFormSubmission] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormSubmission((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${formSubmission.name}\nEmail: ${formSubmission.email}\nMessage: ${formSubmission.message}`);
    // You can add logic here to handle the form submission, such as sending data to a server or updating state
  };

  return (
    <div className="contact-us-info-container">
      <h1>Contact Information</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Visit Us</h2>
          <p>123 Beauty Street</p>
          <p>Cityville, Beautyland</p>
        </div>
        <div className="contact-info">
          <h2>Email Us</h2>
          <p>Email: info@yourbeautyshop.com</p>
        </div>
        <div className="contact-info">
          <h2>Call Us</h2>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" value={formSubmission.name} onChange={handleFormChange} required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" value={formSubmission.email} onChange={handleFormChange} required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" value={formSubmission.message} onChange={handleFormChange} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUsInfo;
