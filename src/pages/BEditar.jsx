import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://m3jsonserver.onrender.com/sessaoRomance";

export default function Editar() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/2`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost() {
    axios
      .put(`${baseURL}/2`, {
        title: "Hello World!",
        body: "This is an updated post."
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