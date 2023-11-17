// ContactUs.js

import React, { useState } from 'react';
import '../styles/ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    // Add logic here to handle form submission, such as sending data to a server or updating state
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out.
      </p>
      <div className="contact-details">
        {/* ... (contact details) */}
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
