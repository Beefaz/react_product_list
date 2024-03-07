const Post = ({title, category, image, content, author, authorRole, authorImage}) => {
  return <div className="post">
    <div className="post--thumbnail">
      <img src={image} alt={`${title} image`}/>
    </div>
    <div className="post--text">
      <div className="category">{category}</div>
      <h2 className="title">{title}</h2>
      <div className="content">{content}</div>
      <div className="author-details">
        <div className="author-pic">
          <img src={authorImage} alt={`${author} image`}/>
        </div>
        <div>
          <div className="author-name">{author}</div>
          <div className="author-role">{authorRole}</div>
        </div>
      </div>
    </div>
  </div>
}
export default Post;
