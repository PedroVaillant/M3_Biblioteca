import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai"

import Styles from '../styles/BotaoAddLivros.css'

const BotaoAddLivros = () => {
  return (
    <div className="botaoaddlivros">
        <Link to="/adicionarlivro">
          <button><AiFillPlusCircle /></button>
        </Link>
    </div>
  );
};

export default BotaoAddLivros;
