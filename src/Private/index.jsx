import React from 'react'
import Home from './Home'
import Compte from './Compte'
import { Route, Routes } from 'react-router-dom'


const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/compte' element={<Compte/>} />
    </Routes>
  )
}

export default index