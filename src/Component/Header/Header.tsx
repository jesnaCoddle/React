import { Link, useNavigate } from 'react-router-dom';
import './HeaderModule.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/login');
  };

  return (
    <header>
      <div className="main">
        <Link to="/" className="brand">
          <span className="brand-yellow">Build</span>
          <span className="brand-blue">Rent</span>
        </Link>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rent">Rent</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        {localStorage.getItem("token") && (
          <div className="logout">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;