import '../styles/blog.css'
import {initStorage, syncStorage} from "../constants/helpers.js";
import {useState} from "react";
import Posts from "../components/Posts.jsx";
import NewPost from "../components/NewPost.jsx";


const storagePosts = initStorage('posts');

const Blog = () => {
  const [posts, setPosts] = useState([...storagePosts]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = formData.entries().reduce((acc, [key, value]) => {
      return {...acc, [key]: value};
    }, {});
    const newPosts = [...posts, formDataObject];
    setPosts([...newPosts]);
    syncStorage('posts', [...newPosts]);
  }

  return (
    <div className="blog">
      <Posts posts={posts}/>
      <hr/>
      <NewPost onSubmit={(e) => handleSubmit(e)}/>
    </div>
  );
}

export default Blog;
