// import axios from "axios";
// import React from "react";

// import BotaoLivros from "..0/components/BotaoLivros";

// const baseURL = "https://m3bibliotecadb.onrender.com/Livros/2";

// export default function GetLivros() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.titulo}</h1>
//       <p>{post.genero}</p>
//       <p>{post.autor}</p>
//       <p>{post.sinopse}</p>
//       <br />
//       <BotaoLivros />
//     </div>
//   );
// }

import API from "../model/Config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Livros.module.css"

const Catalogo = () => {

  
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
            <Link to={`/LivroID/${post.id}`}>
              <img src={`${post.capa}`} className={styles.capalivro}/>
              <h2 className={styles.tituloH2}>{post.titulo}</h2>
            </Link>
              <p className={styles.autor}>{post.autor}</p>
            <Link to={`/LivroID/editar/${post.id}`}>  
              <button className={styles.editar}>Editar</button>
            </Link>
          </div>

        ))
      )}
      </div>
    </div>
  );
};

export default Catalogo;