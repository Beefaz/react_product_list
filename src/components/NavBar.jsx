import '../styles/navbar.css'
import {Link} from "react-router-dom";

const renderLinks = (links) => links.map(({path, name}, index) => <li key={index}><Link to={path}>{name}</Link></li>)

const NavBar = ({links}) => {

  return <header>
    <nav className="navbar">
      <ul>
        {renderLinks(links)}
    </ul>
  </nav>
</header>
};
export default NavBar;
