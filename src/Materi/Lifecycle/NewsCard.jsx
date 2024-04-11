import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsCard = ({ article }) => (
  <div className="card mb-3">
    <img src={article.urlToImage || 'https://via.placeholder.com/150'} className="card-img-top" alt={article.title} />
    <div className="card-body">
      <h5 className="card-title">{article.title}</h5>
      <p className="card-text">{article.description}</p>
      <a href={article.url} className="btn btn-primary opacity-75" target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  </div>
);

export default NewsCard;
