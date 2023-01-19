import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://m3bibliotecadb.onrender.com/Livro";

export default function Editar() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        capa: "https://m.media-amazon.com/images/I/51phf-WQthL._SY346_.jpg"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h2>EDITAR LIVRO</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    <Link to="/livros"><button>Voltar</button></Link>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}