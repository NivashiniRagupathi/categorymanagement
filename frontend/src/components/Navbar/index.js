import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Custom styling for navbar

const Navbar = ({ auth, logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard" className="navbar-item">Dashboard</Link>
        <Link to="/categories" className="navbar-item">Categories</Link>
      </div>
      <div className="navbar-actions">
        {auth.token ? (
          <button className="logout-button" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/signup" className="navbar-item">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;