import React, { useEffect , useState  } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { getAllPosts } from "../Home/actions"; // Import the getAllPosts action
import NavbarB from '../../components/NavbarB'
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useHistory
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '../../styles/AfterLogin.css'


const AfterLogin = () => {

  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate(); // Get the useNavigate hook for navigation


  useEffect(() => {
    // Dispatch the getAllPosts action when the component mounts
    dispatch(getAllPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.homeReducer.posts) || [];
  console.log(allPosts , 'Hasil POSTS')
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Filter the posts based on the searchQuery
  const filteredPosts = allPosts.filter((journey) =>
    journey.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    // Function to handle navigation to the Article component
    const navigateToArticle = (id) => {
      navigate(`/detail/${id}`);
    };
  

  console.log(allPosts , 'Hasil POSTS AFTER LOGIN')
  return (
    <div className='after-login-isi'>
    <NavbarB/>

    <div className="content-container">
        <div className="journey-header">
          <h2>Journey</h2>
          <div className="find-journey">
            <TextField
              label="Find Journey"
              variant="outlined"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className="search-button"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="isi-kartu">
        {filteredPosts.map((journey, index) => (
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
  )
}

export default AfterLogin
