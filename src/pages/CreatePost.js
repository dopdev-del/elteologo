import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, Collection } from "firebase/firestore";
import { auth, db } from "../firebase-configs";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [img, setImg] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      img,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Crear publicacion</h1>

        <div className="imagenPost">
          <label>Imagen: </label>
          <input
            placeholder="link de la imagen..."
            onChange={(event) => {
              setImg(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Titulo: </label>
          <input
            placeholder="Titulo..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="inputGp">
          <label>Publicacion: </label>
          <textarea
            placeholder="Publicacion..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Publicar</button>
      </div>
    </div>
  );
}

export default CreatePost;
