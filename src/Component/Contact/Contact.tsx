import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Contact.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="content">
          <h2>Contact BuildRent</h2>
          <p>
            Have questions about our equipment, pricing, or rental process? We're here to help. Whether you're a contractor, homeowner, or business, BuildRent is committed to making your project a success.
          </p>
          <p>
            Reach out to us through any of the methods below. Our support team typically responds within 1 business day.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> support@buildrent.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
            <p><strong>Location:</strong> 123 Industrial Lane, Construct City, CA 90210</p>
            <p><strong>Hours:</strong> Mon–Sat: 8:00 AM – 6:00 PM</p>
          </div>

          <p>
            Prefer a face-to-face conversation? Visit our office or schedule an appointment with one of our rental specialists.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
