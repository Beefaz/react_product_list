import '../styles/button.css';

const Button = ({children, onClick}) => {
  return (
    <button className="btn-add-to-cart" onClick={onClick}>{children}</button>
  );
}
export default Button;
