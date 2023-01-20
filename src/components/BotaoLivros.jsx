import { Link } from "react-router-dom";

import Styles from '../styles/BotaoLivros.css'

const BotaoLivros = () => {
  return (
    <div className="botoeslivros">
        <Link to="/adicionarlivro">
          <button id="botaoamarelo"> ADICIONAR LIVRO </button>
        </Link>
    </div>
  );
};

export default BotaoLivros;
