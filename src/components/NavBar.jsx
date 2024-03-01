import '../styles/navbar.css'

const NavBar = ({children}) => {
  return <nav className="navbar">
    <ul>
      {children}
    </ul>
  </nav>
};
export default NavBar;
