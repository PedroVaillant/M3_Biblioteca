import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import API from "../model/API";
import BotaoLivros from "../components/BotaoLivros";

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

  // const postDelete = async (id) => {
  //   await API.delete(`/livros/${id}`)
  //     .then(res => console.log('Deletado com Sucesso', res))
  //     .catch(err => console.log(err))
  //   setPosts(posts.filter(post => post.id !== id))
  // };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <BotaoLivros />
      
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
              {/* <div>
              <button onClick={() => postDelete(post.id)} className={styles.autor}>Deletar</button>
              </div> */}
            </Link>
          </div>

        ))
      )}
      </div>
    </div>
  );
};

export default CatalogoLivros;