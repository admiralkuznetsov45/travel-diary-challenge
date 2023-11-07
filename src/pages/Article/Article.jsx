import React , { useEffect, useState }from 'react';
import '../../styles/Article.css'; // Make sure you have the corresponding SCSS file
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostRequest } from './actions'; // Adjust the import path as needed
import NavbarB from '../../components/NavbarB'; // Import your Navbar component

const Article = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articleReducer.post);
  console.log(id , "ID Article") 
  console.log(article , 'Hasil Article.jsx ')
  useEffect(() => {
    if (id) {
      dispatch(fetchPostRequest(id));
    }
  }, [id, dispatch]);

  if (!article) return <div>Loading...</div>;

  // Format the date to a more friendly format if necessary
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const stripHtml = html => {
    return html.replace(/<[^>]*>?/gm, '');
  };

  const contentWithoutHtml = article?.content ? stripHtml(article.content) : '';

  if (!article) return <div>Loading...</div>;
  
  return (
    <>
      <NavbarB />
      <div className="article-container">
        <div className="article-header">
          <h1>{article.title}</h1>
          <div className="article-metadata">
            <span className="article-date">{formatDate(article.date)}</span>
            <span className="article-author">{article.author}</span>
          </div>
        </div>
        {article.imageUrl && (
          <div className="article-image-container">
            <img src={article.imageUrl} alt={article.title} />
          </div>
        )}
        <div className="article-content">
          <p>{contentWithoutHtml}</p>
          {/* Additional content and elements can be added here */}
        </div>
      </div>
    </>
  );
};

export default Article;
