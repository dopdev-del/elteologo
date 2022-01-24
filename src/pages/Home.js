import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-configs";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      <div className="posts-container">
        {postLists.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="imgPost">
                  <img src={post.img} />
                </div>
                &nbsp; &nbsp;
                <br />
                <div className="title">
                  <h1>{post.title} </h1>
                </div>
                &nbsp; &nbsp;
                <br />
                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="postTextContainer">{post.postText}</div>
              <h5>@{post.author.name}</h5>
            </div>
          );
        })}
      </div>

      <div className="hijo">
        
        <div>
          <p className="tetocolor">
          <div>
          <img className="imgRedonda" src="https://elblogdecarlosferreras.files.wordpress.com/2017/02/564e3f42-e435-4b2c-b527-e7b3cf3786ba.jpg"/>
        </div>
            <strong>CARLOS FERRERAS</strong><br />
            Maestro, Abogado, Historiador, Locutor
            Columnista y Teologo Academico.
          </p>
        </div>
      <h5>Redes Sociales</h5>
        Facebook, Twitter , Instagram
      </div>
    </div>
  );
}

export default Home;
