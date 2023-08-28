import React, { useState , useEffect } from 'react'
import Navbar from './Navbar'
import { collection , addDoc , serverTimestamp , getDoc , doc , updateDoc} from 'firebase/firestore'
import { firestore } from '../firebase'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../common/Loading'


const Modifier = () => {

  let {idtask} = useParams() ; // Récupération de l'id d'une tache dans l'url
  const [isLoading , setIsLoading] = useState(false) ;
  const [task , setTask] = useState({})

  const navigate = useNavigate()

  const enregistrer = async (event) => { 

    event.preventDefault() ;

    console.log('enregistrement')

    // Lecture de la valeur de l'input task
    const { task } = event.target;
    console.log('task', task.value)

    if (task.value != '') {

      // Formatage de la donnée
      const dataTask = {
        name : task.value ,
        
      }
      console.log('dataTask' , dataTask)

      // Save data
      await updateDoc(doc(firestore , 'tasks' , idtask) , dataTask)

      navigate('/crud/lister') ;

    }

  }

  const getTask = async () => { 

    setIsLoading(true)

    const rqTask = doc(firestore , 'tasks' , idtask) ;
    const snapTask = await getDoc(rqTask) ;


    if (snapTask.exists) {

      setTask(snapTask.data()) ; 
    
    }
    setIsLoading(false)
  }

  useEffect(() => {
    
    getTask()

  }, [])
  

  return (
    <div>
      <h1 className='font-serif font-semibold text-accent text-3xl py-10 text-start'>Modifier la tâche sélectionnée</h1>

      <div className='flex flex-wrap gap-10'>
      
        <div>
          <Navbar/>
        </div>
        
        {isLoading ? <Loading/> : <form onSubmit={enregistrer}>

          <div className='flex flex-row gap-2'>
            <input type="text" name='task' defaultValue={task?.name} placeholder="Type here" className="input input-bordered input-accent w-full py-4" />
            <button type='submit' className="inline-block cursor-pointer rounded-md bg-accent font-serif text-white py-3 px-5 text-xl">Modifier</button>
          </div>
          
        </form>}
      
      </div>

    </div>
  )
}

export default Modifier