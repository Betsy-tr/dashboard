import React, { useEffect , useState } from 'react'
import { firestore } from '../firebase'
import { doc , getDoc } from 'firebase/firestore'

const Compte = () => {

  const [userData, setUserData] = useState([])

  const getDataUser = async () =>{
    // Récupération des données de l'utilisateur

    console.log('lecture des données')

    const docUserRef = doc(firestore , 'user' , 'JrrsHSnWDabCnJAu19BQB2wik7k1') ; // Document référence utilisateur
    const snapUser = await getDoc(docUserRef) ;

    console.log('snapUser' , snapUser.exists()) ;

    if (snapUser.exists()) {

      setUserData(snapUser.data()) ; 
    
    }

  }

  useEffect(() =>{
    // Lecture des données après le chargement du composant

    getDataUser() ; 

  }, [])
  
  

  return (
    <div>
        <h1 className='text-2xl text-pink-500 font-semibold font-serif'>Vous êtes actuellement sur votre espace personnel</h1>
        <br/>
        Bonjour {userData.userNom}
        <p>Retourner vers la page <a href="/">Accueil</a></p>
    </div>
  )
}

export default Compte