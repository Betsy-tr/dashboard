import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Lister from '../Tutocrud/Lister'
import Ajouter from '../Tutocrud/Ajouter'
import Modifier from '../Tutocrud/Modifier'

const index = () => {
  return (
    <Routes>
       <Route path='/crud/lister' element={<Lister/>}/> 
       <Route path='/crud/ajouter' element={<Ajouter/>}/> 
       <Route path='/crud/modifier/:idtask' element={<Modifier/>}/> 
    </Routes>
  )
}

export default index