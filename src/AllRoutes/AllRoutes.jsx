import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Css from '../pages/Css'
import Home from '../pages/Home'
import Html from '../pages/Html'
import Javascript from '../pages/Javascript'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/html' element={<Html/>}></Route>
        <Route path='javascript' element={<Javascript/>}></Route>
        <Route path='css' element={<Css/>}></Route>
    </Routes>
  )
}

export default AllRoutes