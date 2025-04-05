import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Createbook from './pages/Createbook'
import Deletebook from './pages/Deletebook'
import Editbook from './pages/Editbook'
import Showbook from './pages/Showbook'
import Home from './pages/home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<Createbook/>} />
      <Route path='/books/delete/:id' element={<Deletebook/>} />
      <Route path='/books/show/:id' element={<Showbook/>} />
      <Route path='/books/edit/:id' element={<Editbook/>} />
    </Routes>
  )
}

export default App
