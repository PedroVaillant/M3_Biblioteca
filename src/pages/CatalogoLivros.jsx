import API from "../model/API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./Catalogo.module.css"

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

      
      <div className={styles.catalogo}>
      {posts.length === 0 ? (
        <p>Procurando Livros...</p>
      ) : (

        posts.map((post) => (
          
          
          <div className={styles.item} key={post.id}>
            <Link to={`/Livro/${post.id}`}>
              <img src={`${post.capa}`} className={styles.imgItem}/>
              <h2 className={styles.tituloH2}>{post.titulo}</h2>
            </Link>
              <p className={styles.autor}>{post.autor}</p>
            <Link to={`/livros/editarlivro/${post.id}`}>  
              <button className={styles.editar}>Editar</button>
            </Link>
          </div>

        ))
      )}
      </div>
    </div>
  );
};

export default CatalogoLivros;