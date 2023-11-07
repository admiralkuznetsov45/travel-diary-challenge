import React from 'react';
import { Button } from '@mui/material';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={logo} alt="The Journey logo" />
      </a>
      <div className="navbar-links">
        <Button className="custom-button outlined" href="/login">
          Login
        </Button>
        <Button className="custom-button contained" href="/register">
          Register
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
