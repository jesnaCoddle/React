import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../../utils/auth";
import './HomeModule.css';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="home-container">
      <header>
        <div className="main">
          <h1 className="brand">
            <span className="brand-yellow">Build</span>
            <span className="brand-blue">Rent</span>
          </h1>
          <nav className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Rent</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="logout">
            <button type="button" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </header>

      <div className="content">
        <h2>Welcome to BuildRent</h2>
        <p> Explore the largest platform for renting construction equipment. </p>
        <button>Explore Equipment</button>
      </div>

      <footer>
        <p>© 2025 BuildRent. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
