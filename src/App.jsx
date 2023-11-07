import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import AfterLogin from './pages/Home/AfterLogin';
import Register from '../src/pages/Register/Register';
import Login from '../src/pages/Login/Login';
import Bookmark from './pages/Bookmark/Bookmark';
import Profile from './pages/Profile/Profile';
import { useSelector } from 'react-redux'; // Import useSelector to access the isLogged state from Redux
import Article from './pages/Article/Article'
import AddNewPost from './pages/AddNewPost/AddNewPost';
import ProtectedRoute from './components/ProtectedRoutes';
function App() {

  const loggedInUser = useSelector((state) => state.loginReducer.loggedInUser); // Access the loggedInUser state from Redux
  console.log(loggedInUser , 'Hasil Logged IN')


  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/afterlogin'  element={<ProtectedRoute><AfterLogin/></ProtectedRoute>}/> 
      <Route path='/profile/newPost' element={<ProtectedRoute><AddNewPost/></ProtectedRoute>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/bookmark' element={<ProtectedRoute><Bookmark/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/detail/:id' element={<Article/>}/>
    </Routes>
)
}

export default App