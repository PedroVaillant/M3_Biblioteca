import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import CatalogoLivros from './pages/LivrosCatalogo'
import LivroID from './pages/LivroID'
import LivroAdicionar from './pages/LivroAdicionar'
import LivroEditar from './pages/LivroEditar'
import Sobrenos from './pages/SobreNos'
import Login from './pages/Login'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/catalogolivros' element={<CatalogoLivros />} />
          <Route path='/livro/:id' element={<LivroID />}/>
          <Route path='/adicionarlivro' element={<LivroAdicionar />} />
          <Route path='/livros/editarlivro/:id' element={<LivroEditar />} />
          <Route path='/sobrenos' element={<Sobrenos />} />
          <Route path='/login' element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
