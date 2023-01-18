import axios from "axios";
import React from "react";

import BotaoLivros from "../components/BotaoLivros";

const baseURL = "https://m3jsonserver.onrender.com/sessaoRomance/4";

export default function GetLivros() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.titulo}</h1>
      <p>{post.descrição}</p>
      <p>{post.preco}</p>
      <p>{post.autor}</p>
      <br />
      <BotaoLivros />
    </div>
  );
}
