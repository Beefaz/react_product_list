import '../styles/navbar.css'

const NavBar = ({children}) => {
  return <header>
    <nav className="navbar">
      <ul>
        {children}
      </ul>
    </nav>
  </header>
};
export default NavBar;
