// Import necessary components and libraries
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { routes } from './Components/routes'; // Import routes from separate file
import CardSlide from './Components/cardslide/cardslide'; // Import CardSlide component

const App = () => {
  // State for theme
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('current_theme');
    return storedTheme ? storedTheme : 'light';
  });

  // Effect to save theme to local storage
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Router>
        {/* Navbar component with theme props */}
        <Navbar theme={theme} setTheme={setTheme} />
        {/* Toast container for notifications */}
        <ToastContainer theme='colored' position='top-center'></ToastContainer>
        <Routes>
          {/* Map through routes and create Route components */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {/* Route for Home component */}
          <Route path='/' element={<Home theme={theme} />} />
          {/* Route for Login component */}
          <Route path='/login' element={<Login />} />
          {/* Route for Register component */}
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
