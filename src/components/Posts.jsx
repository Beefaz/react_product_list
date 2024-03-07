import '../styles/posts.css'
import Post from "./Post.jsx";

const Posts = ({posts}) => {

  const renderPosts = (posts) =>
    posts.map((props, index) =>
      <Post
        {...props}
        key={index}
      />
    )

  return <div className="posts">
    {renderPosts(posts)}
  </div>
}

export default Posts;
