import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './components/add';
import Todo from './components/Todo';
function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo/>}></Route>
          <Route path='/add' element={<Add/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
