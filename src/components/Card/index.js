import React from 'react';
import './style.css';

const Card = ({ img, title, deletePost, postText, authName }) => {
  return (
    <div className="post">
      <div className="post-img-header">
        <div className="post-img-container">
          <img className="post-img" alt="Post" src={img} />
        </div>
      </div>

      <div className="deletePost">
        <button onClick={deletePost && deletePost}>&#128465;</button>
      </div>

      <div className="post-title">
        <h2>{title} </h2>
      </div>

      <div className="post-text-container">
        <p className="post-text">{postText}</p>
        <h3>@{authName}</h3>
      </div>
    </div>
  );
};

export default Card;
