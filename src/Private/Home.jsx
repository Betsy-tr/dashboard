import React, { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth, firestore } from '../firebase'
import { collection , query , getDocs } from "firebase/firestore";
import Loading from '../common/Loading'

import InfoStagiaire from '../common/InfoStagiaire';


const Home = () => {

  const [stagiaires , setStagiaires] = useState([]) ;

  const [isLoading, setIsLoading] = useState(true) // Lancer le chargement

  const getStagiaires = async () =>{

    console.log('start') ;

    setIsLoading(true) ; // Début du chargement

    const rqStagiaires = query(collection(firestore, 'stagiaires'))
    const snapStagiaires = await getDocs(rqStagiaires);

    console.log(snapStagiaires.empty) ;

    if (!(snapStagiaires.empty)) { // Vérifie si snapStagiaires n'est pas vide

      // Formatage de la liste des stagiaires dans dataStagiaire
      const dataStagiaires = snapStagiaires.docs.map(item =>{

        return {
          id: item.id , 
          ...item.data()
        
        };

      })
      console.log("dataStagiaires :" , dataStagiaires)

      // Mise à jour de la liste des stagiaires
      setStagiaires(dataStagiaires)

      
    }
    setIsLoading(false) ; // Fin du chargement
  }

  useEffect(() => {

    getStagiaires() ;

  }, [])

  const logout = async () => {
    
    await signOut(auth) ;

    console.log('logout') ; 
  }

  return (
    <div>
        <h1 className='text-2xl text-purple-700 font-semibold font-serif'>Bienvenue sur la page d'accueil</h1>
        <br/>

        {/*  je suis entrain de charger afficher Loading */}
        {isLoading ? <Loading/> :
        
          stagiaires.map(itemStagiaire =><InfoStagiaire key={itemStagiaire.id} data={itemStagiaire}/>)
        
        }

        <br/>

        <div>
          <button onClick={logout} className='inline-block cursor-pointer rounded-md bg-purple-700 px-4 py-3 text-center text-xl font-semibold text-white font-serif'>Se déconnecter</button>
        </div>
        <br/>
        <p>Accéder à <a href="/compte">mon compte</a></p>
        
    </div>
  )
}

export default Home