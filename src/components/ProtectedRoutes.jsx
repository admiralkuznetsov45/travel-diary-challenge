// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Attempt to retrieve the user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // If there is a user, render the children (protected content), otherwise redirect to login
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
