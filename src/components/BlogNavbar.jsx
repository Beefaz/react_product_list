import '../styles/blog_navbar.css'
import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import Socials from "./Socials.jsx";
import Button from "./Button.jsx";
import Hamburger from "./Hamburger.jsx"
import {useState} from "react";
import {Link} from "react-router-dom";

const renderLinks = (links) => links.map(({path, name}, index) => <li key={index}><Link to={path}>{name}</Link></li>)

const NavBar = ({links}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="blog-navbar">
    <Search></Search>
    <Logo text="MAGDESIGN"></Logo>
    <div className="blog-navbar__right">
      <Socials></Socials>
      <Button onClick={()=>setMenuOpen(!menuOpen)}>
        <Hamburger></Hamburger>
        {menuOpen &&
          <nav className="menu">
            <ul>
            {renderLinks(links)}
            </ul>
          </nav>
        }
      </Button>
    </div>
  </header>
};
export default NavBar;
