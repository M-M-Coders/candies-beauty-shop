// ContactUs.js

import React from 'react';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! Whether you have a question about our products, need assistance with an order, or just want to say hello, feel free to reach out.
      </p>
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
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
