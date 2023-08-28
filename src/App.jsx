import { useState , useEffect } from 'react'
import './App.css'
import Public from './Public'
import Private from './Private'
import Loading from './common/Loading'
import Tutocrud from './Tutocrud'


// Importation Firebase
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'


function App() {

  const [isConnect, setIsConnect] = useState(false) // Utilisateur connecter ou pas

  const [isLoading, setIsLoading] = useState(true) // Lancer le chargement


  useEffect(() => {
  

    // Inscription au changement d'état
    onAuthStateChanged(auth , (user) =>{

      user != null ? setIsConnect(true) : setIsConnect(false) // Permet de savoir si l'utilisateur est connecter ou pas 
      setIsLoading(false) ; // Fin du chargement
      

    })
  
  }, []) // au chargement de mon application
  


  return (
    <> 
 
      {/* Si l'utilisateur est connecter alors la page private sera affiché sinon c'est la page public qui le sera */}
      {/* {isLoading ? <Loading/> : isConnect ? <Private/> : <Public/>} */}
      <Tutocrud/>
    </>
  )
}

export default App
