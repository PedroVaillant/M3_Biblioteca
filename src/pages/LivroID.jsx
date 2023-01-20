import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

import API from "../model/API";

import styles from '../styles/LivroID.module.css'


const LivroID = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await API.get(`/Livros/${id}`);
      const data = response.data;
      setPost(data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {!post.titulo ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.livro}>
          <img src={`${post.capa}`} className={styles.img} />
          <h2 className={styles.nome}>{post.titulo}</h2>
          <h3 className={styles.autor}>{post.autor}</h3>
          <hr />
          <p>País: {post.sinopse}</p>
          <p>Gênero: {post.genero}</p>
          <hr />
          <Link to={`/livros/editarlivro/${post.id}`}>
            <button className={styles.editar}>Editar</button>
          </Link>
          <Link to={`/`}>
            <input type="submit" className={styles.adicionar} value="Excluir" />
          </Link>

        </div>
      )}
    </div>
  );
};

export default LivroID;