import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const index = () => {
  return (
    <Routes>
       <Route path='/' element={<Login/>} /> 
       <Route path='/register' element={<Register/>} /> 
    </Routes>
  )
}

export default index