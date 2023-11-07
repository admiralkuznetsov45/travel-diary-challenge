import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the quill styles
import "../../styles/AddNewPost.css"; // Assuming you are using SCSS
import NavbarB from "../../components/NavbarB";
import { addNewPostRequest } from "./actions";

const AddNewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
    imageUrl: "",
  });

  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (content) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the user object from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    // Ensure we have the user data before attempting to submit the form
    if (!user) {
      // Handle the case where the user is not found in localStorage
      console.error("User not found");
      return;
    }

    // Add timestamp and author data to the formData
    const completeFormData = {
      ...formData,
      date: new Date().toISOString(), // Add the current timestamp in ISOString format
      author: user.fullName, // Assume there is a 'name' field in the user object
    };

    dispatch(addNewPostRequest(completeFormData));
  };

  return (
    <div className="add-new-post-container">
      <NavbarB />
      <div className="add-new-post-content">
        <form onSubmit={handleSubmit} className="add-new-post-form">
          <div className="form-section">
            <label htmlFor="post-title">Title</label>
            <input
              id="post-title"
              name="title"
              type="text"
              placeholder="Enter the title here"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Paste the image URL here"
              value={formData.imageUrl}
              onChange={handleChange}
              className="image-url-input"
            />
          </div>

          <div className="form-section">
            <label htmlFor="post-short-description">Short Description</label>
            <textarea
              id="post-short-description"
              name="description"
              placeholder="Enter a short description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-section">
            <label htmlFor="post-content">Content</label>
            <ReactQuill
              id="post-content"
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewPost;
