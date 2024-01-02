import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Details from './Page/Details'
import Categories from './Page/Categories'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/detail' element={<Details/>}></Route>
      <Route path='/category/:name' element={<Categories/>}/>
    </Routes>
  )
}
