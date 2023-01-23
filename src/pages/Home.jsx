import { useState, useEffect } from "react";

import Carrossel from "../components/Carrossel";
import API from "../model/API";

import styles from "../styles/LivrosCatalogo.module.css";

const CatalogoLivros = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await API.get("/Livrarias");

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
      <Carrossel />
      <br />

      <div className={styles.catalogo}>
        {posts.length === 0 ? (
          <div className={styles.loading}></div>
        ) : (
          posts.map((post) => (
            <div className={styles.livros} key={post.id}>
              <img src={`${post.foto}`} className={styles.imgItem} />
              <h2 className={styles.titulo}>{post.loja}</h2>
              <h2 className={styles.titulo}>{post.endereço}</h2>
            </div>
          ))
        )}
      </div>
      <br />
      <br />
    </div>
  );
};

export default CatalogoLivros;
