import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { id: 'home', label: 'Головна', icon: '🏠', path: '/' },
  { id: 'search', label: 'Пошук', icon: '🔍', path: '/search' },
  { id: 'favorites', label: 'Улюблені', icon: '💖', path: '/favorites' }
];

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">

        {NAV_ITEMS.map((item) => (

          <li key={item.id}>

            <Link
              to={item.path}
              className={`navbar-item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <span className="navbar-icon">{item.icon}</span>
              <span className="navbar-label">{item.label}</span>
            </Link>

          </li>

        ))}

      </ul>
    </nav>
  );
};

export default Navbar;