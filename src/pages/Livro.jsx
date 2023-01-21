import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { BiEdit, BiSubdirectoryLeft } from "react-icons/bi"
import { RiDeleteBin2Line } from "react-icons/ri"

import API from "../model/API";

import styles from '../styles/Livro.module.css'

const postDelete = async (id) => {
  await API.delete(`/livros/${id}`)
    .then(res => console.log('Deletado com Sucesso', res))
    .catch(err => console.log(err))
  setPosts(posts.filter(post => post.id !== id))
};

const Livro = () => {
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
      <br></br>

      {!post.titulo ? (
      <div className={styles.loading}>
      </div>
      ) : (
        <div className={styles.livroback}>

          <div className={styles.botoeslivro}>
            <Link to={`/catalogolivros`}>
              <button className={styles.botaoL1}><BiSubdirectoryLeft /></button>
            </Link>
            <Link to={`/livros/editarlivro/${post.id}`}>
              <button className={styles.botaoL2}><BiEdit /></button>
            </Link>
            <Link to={`/catalogolivros`}>
              <button onClick={() => postDelete(post.id)} className={styles.botaoL3}><RiDeleteBin2Line /></button>
            </Link>
          </div>

            <img src={post.capa} className={styles.capa} />
            <h1 className={styles.titulo}>{post.titulo}</h1>
            <h3 className={styles.genre}>{post.autor}</h3>
            <hr />
            <br />
            <div className={styles.livrodescricao}>
              <label for="genero">Gênero:</label>
              <p id="genero">{post.genero}</p>
              <br />
              <div className={styles.descricaosinopse}>
                <label for="sinopse">Sinopse:</label>
                <p id="sinopse">{post.sinopse}</p>
              </div>
            </div>

        </div>
      )}
      <br></br>
    </div>
  );
};

export default Livro;