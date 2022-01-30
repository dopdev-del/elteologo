import React from "react";
import './style.css'

const Card = ({ img, title, deletePost, postText, authName }) => {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="imgPost">
          <img src={img} />
        </div>
        &nbsp; &nbsp;
        <br />
        <div className="title">
          <h1>{title} </h1>
        </div>
        &nbsp; &nbsp;
        <br />
        <div className="deletePost">
          <button onClick={deletePost && deletePost}>&#128465;</button>
        </div>
      </div>
      <div className="postTextContainer">
        {postText}
        <h3>@{authName}</h3>
      </div>
    </div>
  );
};

export default Card;
