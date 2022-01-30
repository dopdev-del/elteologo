import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-configs";
import Card from "../components/Card";
import SideBar from "../components/SideBar";

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
            <Card
              key={post.id}
              title={post.title}
              authName={post.author.name}
              postText={post.postText}
              img={post.img}
              deletePost={() => {
                isAuth && post.author.id === auth.currentUser.uid &&
                deletePost(post.id);
              }}
            />
          );
        })}
      </div>
      <div className="hijo">
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
