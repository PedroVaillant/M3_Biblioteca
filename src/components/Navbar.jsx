import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

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
          <Link to="/livros">
            <li>Livros</li>
          </Link>
          <Link to="/sobre">
            <li>Sobre nós</li>
          </Link>
          <li>
            <input type="search" placeholder="Busque por um livro" />
            <button type="subimit">
              <BiSearchAlt2 />
            </button>
          </li>
          <li>
            <Link to="/login">
              <li>LOGIN</li>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
