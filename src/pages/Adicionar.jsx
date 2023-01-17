import { Link } from "react-router-dom"

const Adicionar = () => {
    return (
        <div className="addlivro">
            <br /><br />
            <h2>ADICIONAR UM LIVRO</h2>
            <br /><br />
            <div className="addlivroinput">
                <label for="nomelivro">Título</label>
                <br />
                <input id="nomelivro" type="text" />
                <br />
                <label for="nomeautor">Autor</label>
                <br />
                <input id="nomeautor" type="text" placeholder="Autor" />
                <br />
                <label for="genero">Gênero</label>
                <br />
                <select id="genero">
                    <option value="Romance">Romance</option>
                    <option value="Romance">Romance</option>
                    <option value="Romance">Romance</option>
                    <option value="Romance">Romance</option>
                </select>
                <br />
                <label for="sinopse">Sinopse</label>
                <br />
                <input id="sinopse" type="text" />
            </div>
            <br />
            <div className="addlivrosbotoes">
                <Link to="/livros">
                    <button id="addbutton1">VOLTAR</button>
                </Link>
                <Link to="/livros">
                    <button id="addbutton2">CONFIRMAR</button>
                </Link>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Adicionar