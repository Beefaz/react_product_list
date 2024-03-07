import Button from "./Button.jsx";
import '../styles/new_post.css'


const inputs = [
  {
    name: 'title',
    label: 'Post Title',
    type: 'text',
    required: true,
  },
  {
    name: 'category',
    label: 'Post Category',
    type: 'text',
    required: true,
  },
  {
    name: 'image',
    label: 'Post Image Url',
    type: 'text',
    required: true,
  },
  {
    name: 'content',
    label: 'Post Content',
    type: 'text',
    required: true,
  },
  {
    name: 'author',
    label: 'Post Author',
    type: 'text',
    required: true,
  },
  {
    name: 'authorRole',
    label: 'Post Author Role',
    type: 'text',
    required: true,
  },
  {
    name: 'authorImage',
    label: 'Post Author Image',
    type: 'text',
    required: true,
  },
]

const NewPost = ({onSubmit}) => {

  const generateInputs = (array) =>
    array.map(({name, label, type, required}, index) =>
      <div className="input-row" key={index}>
        <label htmlFor={name}>{label}</label>
        <input type={type} required={required} name={name} id={name}/>
      </div>
    );

  return <form onSubmit={onSubmit}>
    {generateInputs(inputs)}
    <Button type="submit" className="form-submit">SUBMIT</Button>
  </form>
}
export default NewPost;
