import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavbarB.scss';
import logoImage from '../assets/logo-dark.png'; // Replace with path to your logo image
import profileImage from '../assets/profile-picture.png'; // Replace with path to your profile image
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreateIcon from '@mui/icons-material/Create';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LogoutIcon from '@mui/icons-material/Logout';

const NavbarB = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbarB">
      <div className="navbarB-logo">
        <img src={logoImage} alt="Logo" onClick={() => navigate('/afterlogin')} />
      </div>
      <div className="navbarB-profile">
        <img src={profileImage} alt="Profile" onClick={toggleDropdown} />
        {dropdownOpen && (
          <div className="navbarB-dropdown">
            <div className="dropdown-item" onClick={() => navigate('/profile')}>
              <PersonOutlineIcon /> Profile
            </div>
            <div className="dropdown-item" onClick={() => navigate('/profile/newPost')}>
              <CreateIcon /> New Journey
            </div>
            <div className="dropdown-item" onClick={() => navigate('/bookmark')}>
              <BookmarksIcon /> Bookmark
            </div>
            <div className="dropdown-item" onClick={() => navigate('/')}>
              <LogoutIcon /> Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarB;
