import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './HomeModule.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <h2>Welcome to <span className="brand-yellow">Build</span><span className="brand-blue">Rent</span></h2>
        <p>Explore the largest platform for renting construction equipment.</p>
        <Link to="/rent">
          <button>Explore Equipment</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;