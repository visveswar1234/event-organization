import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const handleClick = (url) => {
    if (url === '/service') {
      // Navigate to the service page
      navigate('/service');
    }
    setClicked(!clicked);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn'); // Remove login status from sessionStorage
    sessionStorage.clear(); // Clear other session data if needed
    navigate('/login'); // Redirect to login page after logout
  };

  const isLoggedIn = sessionStorage.getItem('isLoggedIn'); // Check login status
  const isAdmin = sessionStorage.getItem('userrole')==='admin'

  const MenuData = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },
    {
      title: "Events",
      url: "/events",
      cName: "nav-links",
    },
    {
      title: "Filter Events",
      url: "/filter-events",
      cName: "nav-links",
    },
    {
      title: "About",
      url: "/about",
      cName: "nav-links",
    },
    {
      title: "Service",
      url: "/service", // Update URL to match the route
      cName: "nav-links",
    },
    {
      title: "Contact",
      url: "/contact",
      cName: "nav-links",
    },
    ...(isLoggedIn ? [
      ...(isAdmin ? [
        {
          title: "Add Events",
          url: "/add-events",
          cName: "nav-links",
        }
      ] : []),
      {
        title: "Logout",
        url: "/login",
        cName: "nav-links",
        onClick:handleLogout,
      }
    ] : [
      {
        title: "Login",
        url: "/login",
        cName: "nav-links",
      }
    ]),
  ];

  return (
    <nav className="NavbarItems">
      <div className="theme-toggle" onClick={toggleMode}>
        {theme === 'light' ? <FaMoon className="toggle-icon white" /> : <FaSun className="toggle-icon white" />}
      </div>
      <div className="menu-icons">
        {clicked ? (
          <span className="close-icon" onClick={handleClick}>×</span>
        ) : (
          <FaBars className="ico white" onClick={handleClick} />
        )}
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName} onClick={item.onClick ? item.onClick : () => handleClick(item.url)}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
