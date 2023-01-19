import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://m3bibliotecadb.onrender.com/Livros";

export default function Adicionar() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        id: 1,
        title: "dadasdad",
        body: "Tasdasdasdasdhiadsadasasdd is a adasdad."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h2>ADICIONAR LIVRO</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/livros"><button>Voltar</button></Link>
      <button onClick={createPost}>Create Post</button>
      
    </div>
  );
}