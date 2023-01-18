import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const baseURL = "https://m3jsonserver.onrender.com/sessaoRomance";

export default function Remover() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/2`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function deletePost() {
    axios
      .delete(`${baseURL}/2`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/livros"><button>Voltar</button></Link>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}