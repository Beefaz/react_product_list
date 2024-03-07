import '../styles/logo.css'

// eslint-disable-next-line react/prop-types
const Logo = ({text}) => {
  return (
    <a className="logo" href="#">
      {text}
    </a>
  );
}

export default Logo;
