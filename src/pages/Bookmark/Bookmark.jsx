import React from "react";
import NavbarB from "../../components/NavbarB";
import '../../styles/Bookmark.css'
import journeysData from "../../Journeys.json";
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Bookmark = () => {
  return (
    <div className="isi-bookmark">
      <NavbarB />

      <div className="bookmark-header">
          <h2>Bookmark</h2>
        </div>

      <div className="content-container">
      <div className="isi-kartu">
        {journeysData.map((journey, index) => (
          <div key={index} className="journey-card">
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
    </div>
  );
};

export default Bookmark;
