import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './FooterModule.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h2>About Us</h2>
        <p>We provide the best equipment for contractors.</p>
      </div>
      <div className="links">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rent">Rent</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="follow">
        <h2>Follow Us</h2>
        <ul>
          <li><Link to="#"><FaFacebookF /> Facebook</Link></li>
          <li><Link to="#"><FaTwitter /> Twitter</Link></li>
          <li><Link to="#"><FaInstagram /> Instagram</Link></li>
        </ul>
      </div>
      <div className="rights">
        © 2025 BuildRent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;