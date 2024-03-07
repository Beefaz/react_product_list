import '../styles/posts.css'
import Post from "./Post.jsx";

const Posts = ({posts}) => {

  const renderPosts = (posts) =>
    posts.map(({title, category, image, content, author, authorRole, authorImage}, index) =>
      <Post
        title={title}
        category={category}
        image={image}
        content={content}
        author={author}
        authorRole={authorRole}
        authorImage={authorImage}
        key={index}
      />
    )

  return <div className="posts">
    {renderPosts(posts)}
  </div>
}

export default Posts;
