import React , {useState} from 'react';
import { Link } from 'react-router-dom'; // This assumes you're using react-router for navigation
import { useDispatch } from 'react-redux';
import { loginUser } from './actions'; // Import the loginUser action
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './../../styles/Login.css';
import Button from '@mui/material/Button';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Get the navigate function

  const [formData , setFormData ] = useState({
    email: '',
    password: ''
  })

  // const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password matching

    // Handle form input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // // Check if passwords match
    // if (formData.password !== formData.confirmedPassword) {
    //   setPasswordsMatch(false);
    //   return; // Don't proceed with login if passwords don't match
    // }
  
    console.log('Submitting login form...');
  
    dispatch(loginUser(formData.email, formData.password , () => navigate('/afterLogin')))
  };
  


  return (
    <div className="login-container">
      <div className="login-card">
   
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email"  value={formData.email}  onChange={handleInputChange}  required />
          </div>
          <div className="form-group">
            <input type="password" name="password"
 placeholder="Password" value={formData.password} onChange={handleInputChange} required/>
          </div>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Click Here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
