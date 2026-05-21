import { useState } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Головна', icon: '🏠' },
  { id: 'search', label: 'Пошук', icon: '🔍' },
  { id: 'favorites', label: 'Улюблені', icon: '💖' }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button 
              className={`navbar-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => setActiveItem(item.id)}
            >
              <span className="navbar-icon">{item.icon}</span>
              <span className="navbar-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;