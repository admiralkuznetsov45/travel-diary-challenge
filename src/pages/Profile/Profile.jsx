import React, { useEffect  , useState} from "react";
import NavbarB from "../../components/NavbarB";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; // Icon for the button
import "../../styles/Profile.css"; // Make sure to create and import your Profile.scss for styling
import profileImage from "../../assets/profile-picture.png"; // Replace with path to your profile image
import "../../styles/Profile.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { getAllPostsProfile } from "../Profile/actions"; // Import the getAllPosts action

const Profile = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch(); // Get the dispatch function

  // Example data, replace with actual data source
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    imageUrl: profileImage // Default image or replace with actual path if you have the user's image in localStorage
  });

  useEffect(() => {
    // Dispatch the getAllPosts action when the component mounts
    dispatch(getAllPostsProfile());
    const storedUser = JSON.parse(localStorage.getItem('user'))
    console.log(storedUser, '<<<<<<<< STORED')
    const storedUserData = {
      name: storedUser.fullName,
      email: storedUser.email
      // If you have a user's image URL stored in localStorage, retrieve it as follows:
      // imageUrl: localStorage.getItem('imageUrl') || profileImage
    };

    setUserData(storedUserData);
    console.log(userData , 'Hasil User Data')
  }, [dispatch]);

  const navigateToArticle = (id) => {
    navigate(`/detail/${id}`);
  };



  // Use the useSelector to filter posts by the current user's name
  const allPosts = useSelector((state) =>
    state.profileReducer.posts.filter((post) => post.author === userData.name)
  );

  return (
    <div className="profile-isi">
      {" "}
      {/* Corrected className from 'profle-isi' to 'profile-isi' */}
      <NavbarB />
      <div className="content-container">
        <div className="profile-header">
          <h2>Profile</h2>
        </div>
        <div className="profile-konten-isi">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h3 className="profile-name">{userData.name}</h3>
          <p className="profile-email">{userData.email}</p>

          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            className="add-post-btn"
            onClick={() => navigate("./newPost")}
          >
            Add New Post
          </Button>
        </div>
      </div>
      <div className="isi-kartu">
        {allPosts.map((journey, index) => (
          <div key={journey.id} className="journey-card" onClick={() => navigateToArticle(journey.id)}>
          <div className="journey-image">
              <img src={journey.imageUrl} alt={journey.title} />
              <div className="bookmark-icon">
                <BookmarkIcon />
              </div>
            </div>
            <div className="journey-content">
              <h3>{journey.title}</h3>
              <p className="journey-date">
                {journey.date}, {journey.author}
              </p>
              <p className="journey-description">{journey.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
