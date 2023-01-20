import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../model/API";
import BotaoAddLivros from "../components/BotaoAddLivros";

import styles from '../styles/LivrosCatalogo.module.css'


const CatalogoLivros = () => {


  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await API.get("/Livros");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <BotaoAddLivros />
      <br />

      <div className={styles.catalogo}>
        {posts.length === 0 ? (
          <div className={styles.loading}>
          </div>
        ) : (

          posts.map((post) => (

            
            <div className={styles.livros} key={post.id}>
              <Link to={`/Livro/${post.id}`}>
                <img src={`${post.capa}`} className={styles.imgItem} />
                <h2 className={styles.tituloH2}>{post.titulo}</h2>
              </Link>
              <p className={styles.autor}>{post.autor}</p>
            </div>

          ))
        )}
      </div>
      <br /><br />
    </div>
  );
};

export default CatalogoLivros;