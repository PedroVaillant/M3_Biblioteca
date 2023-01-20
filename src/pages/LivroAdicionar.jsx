import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../model/API";

import style from "../styles/LivroAdicionar.module.css"


const LivroAdicionar = () => {

  const navigate = useNavigate();

  const [capa, setCapa] = useState();
  const [titulo, setTitulo] = useState();
  const [genero, setGenero] = useState();
  const [autor, setAutor] = useState();
  const [sinopse, setSinopse] = useState();


  const createPost = async (e) => {
    e.preventDefault();
    const post = { titulo, genero, autor, sinopse, capa };
    await API.post("/Livros", post);
    navigate("/catalogolivros");

  };

  return (
    <div>
      <form onSubmit={(e) => createPost(e)} className={style.createPost}>
       <h1 className={style.h2createPost}>Cadastro de novos livros</h1>
       <div className={style.cols}>
        <section className={style.col1}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" name="titulo" id="titulo" placeholder="Digite o título" onChange={(e) => setTitulo(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="genero">Gênero:</label>
          <input type="text" name="genero" id="genero" placeholder="Escolha o gênero" onChange={(e) => setGenero(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="autor_a">Autor:</label>
          <input type="text" name="autor" id="autor" placeholder="Digite o nome do autor" onChange={(e) => setAutor(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="sinopse">Sinopse:</label>
          <input type="text" name="sinopse" id="sinopse" placeholder="Digite a sinopse" onChange={(e) => setSinopse(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="capa">Capa:</label>
          <input type="text" name="capa" id="capa" placeholder="Digite o link da capa" onChange={(e) => setCapa(e.target.value)}/>
        </div>
        </section>
        </div>
        <input type="submit" value="Cadastrar" className={style.botaoCreatePost} />
        <input type="reset" value="Limpar" className={style.botaoResetPost} />
      </form>
      <br />
    </div>
  );
};

export default LivroAdicionar;