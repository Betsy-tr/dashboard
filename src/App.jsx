import { useState , useEffect } from 'react'
import './App.css'
import Public from './Public'
import Private from './Private'


// Importation Firebase
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

function App() {

  const [isConnect, setIsConnect] = useState(false)

  useEffect(() => {
  
    console.log("app chargé") ;

    // Inscription au changement d'état
    onAuthStateChanged(auth , (user) =>{
      user != null ? setIsConnect(true) : setIsConnect(false)
      console.log('user :' , user ) ;
    })
  
  }, []) // au chargement de mon application
  


  return (
    <> 
 
      {/* Si l'utilisateur est connecter alors la page private sera affiché sinon c'est la page public qui le sera */}
      {isConnect ? <Private/> : <Public/>}
    </>
  )
}

export default App
