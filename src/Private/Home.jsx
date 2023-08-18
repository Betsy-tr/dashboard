import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Home = () => {

  const logout = () => {
    
    signOut(auth)

    console.log('logout')
   }

  return (
    <div>
        <h1>Home</h1>
        <a href="/compte">Mon compte</a>
        <div>
          <button onClick={logout}>Se déconnecter</button>
        </div>
        
    </div>
  )
}

export default Home