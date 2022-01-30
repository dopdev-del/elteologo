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
              <div className="postTextContainer">{post.postText}
              <h3>@{post.author.name}</h3>
              
              </div>
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
            <strong>CARLOS FERRERAS<br />
            Maestro, Abogado, Historiador, Locutor
            Columnista y Teologo Academico.</strong>
          </p>
          <div>
            <h3>Sigueme en las redes sociales</h3>
            <img src="https://www.pngitem.com/pimgs/m/296-2965005_logos-de-redes-sociales-png-transparent-png.png" width="180"/>
          </div>
          <div>
            <h3>Sigueme en Youtube</h3>
            <div>
            <iframe width="180" height="225" src="https://www.youtube.com/embed/hCVvq5DMWy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Home;
