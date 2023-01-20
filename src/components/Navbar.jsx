import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import Styles from '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <div className="reactlibmarca">
          <h2>
            <img src="./img/icon.png" width="85" height="80" />
            <br />
            React Books
          </h2>
        </div>
      </Link>
      <div className="navbaropcoes">
        <ul>
          <Link to="/login">
            <li>LOGIN</li>
          </Link>
          <Link to="/catalogolivros">
            <li>LIVROS</li>
          </Link>
          <li>
            <Link to="/sobre">
              <li>SOBRE NÓS</li>
            </Link>
          </li>
          <li>
            <input type="search" placeholder="Busque por um livro" />
            <button type="subimit">
              <BiSearchAlt2 />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
