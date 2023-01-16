import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Home from './pages/Home'
import Livros from './pages/Livros'
import Sobre from './pages/Sobre'
import Adicionar from './pages/Adicionar'
import Editar from './pages/Editar'
import Remover from './pages/Remover'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='livros' element={<Livros />} />
          <Route path='sobre' element={<Sobre />} />
          <Route path='adicionar' element={<Adicionar />} />
          <Route path='editar' element={<Editar />} />
          <Route path='remover' element={<Remover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
