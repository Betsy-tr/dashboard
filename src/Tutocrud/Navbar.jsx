import React from 'react'

const Navbar = () => {
  return (
    <ul className="bg-white w-full py-10 px-5">
      <li className='font-serif text-accent text-2xl'><a href='/crud/lister'>Accueil</a></li>
      <br/>
      <li className='font-serif text-accent text-2xl'><a href='/crud/ajouter'>Ajouter</a></li>
    </ul>
  )
}

export default Navbar