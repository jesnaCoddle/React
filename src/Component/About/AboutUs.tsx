import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="content">
          <h2>About BuildRent</h2>
          <p>
            Welcome to <strong>BuildRent</strong>, your trusted partner for construction equipment and tool rentals. We’re here to make heavy-duty gear accessible to contractors, DIYers, and professionals alike.
          </p>
          <p>
            At BuildRent, we pride ourselves on offering a wide range of high-quality, well-maintained equipment—from excavators and skid steers to power tools and scaffolding. Whether you’re building from the ground up or handling a small renovation, we’ve got the tools to help you succeed.
          </p>
          <p>
            What sets us apart is our commitment to reliability, safety, and service. Our knowledgeable staff is always ready to help you choose the right equipment and ensure you get the most out of your rental. With flexible plans, competitive pricing, and on-time delivery, BuildRent helps you build smarter, faster, and better.
          </p>
          <p>
            Join hundreds of satisfied customers who trust BuildRent to power their projects—big or small.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
