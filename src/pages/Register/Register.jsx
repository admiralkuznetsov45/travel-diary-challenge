import React , {useState} from 'react';
import './../../styles/Register.css';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, setNewUser } from './actions';
import Button from '@mui/material/Button';

function Register() {

  const dispatch = useDispatch();
  
  // Use useSelector to access form input values from Redux store
  // Use useState to manage form input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });
  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a user object with the form input values
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    };

    // Dispatch the registration action with the user data
    dispatch(registerUser(userData));
  };

    // Update form input values when they change
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
