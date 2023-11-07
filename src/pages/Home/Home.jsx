import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { getAllPosts } from "../Home/actions"; // Import the getAllPosts action
import NavbarA from "../../components/NavbarA";
import { getBookmarks, addBookmark, removeBookmark } from "../Bookmark/actions"; // Import the necessary actions
import { Button, TextField } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"; // Import the outline bookmark icon
import { useNavigate } from "react-router-dom"; // Import useHistory
import "../../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate(); // Get the useNavigate hook for navigation


  useEffect(() => {
    // Dispatch the getAllPosts action when the component mounts
    dispatch(getAllPosts());
  }, [dispatch]);

  const allPosts = useSelector((state) => state.homeReducer.posts) || [];
  console.log(allPosts , 'Hasil POSTS')
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const bookmarks = useSelector((state) => state.bookmarkReducer.bookmarks) || [];


  const handleBookmarkClick = (journey) => {
    if (isBookmarked(journey.id)) {
      // The post is already bookmarked, so remove it from bookmarks
      dispatch(removeBookmark(journey.id));
    } else {
      // The post is not bookmarked, so add it to bookmarks
      const { id, author, date, imageUrl, title , description } = journey;
      dispatch(addBookmark({ id, author, date, imageUrl, title, description}));
    }
  };
  

  const isBookmarked = (postId) => {
    return bookmarks.includes(postId);
  };

  // Filter the posts based on the searchQuery
  const filteredPosts = allPosts.filter((journey) =>
    journey.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

   // Function to handle navigation to the Article component
   const navigateToArticle = (id) => {
    navigate(`/detail/${id}`);
  };


  return (
    <div className="isi-home">
      <div className="header-atas">
        <NavbarA />
        <h1>The Journey</h1>
        <h1>you ever dreamed of.</h1>
        <p>We made a tool so you can easily keep & share your travel memories.</p>
        <p>But there is a lot more</p>
      </div>

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
            <Button variant="contained" color="primary" className="search-button">
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
              <div className="bookmark-icon" onClick={() => handleBookmarkClick(journey.id)}>
                {isBookmarked(journey.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
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

export default Home;
