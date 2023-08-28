import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase'
import { collection , query , getDocs } from 'firebase/firestore'
import Loading from '../common/Loading'
import Table from './common/Table'
import Navbar from './Navbar'

const Lister = () => {

  const [tasks , setTasks] = useState([]) ;
  const [isLoading , setIsLoading] = useState(false) ;

  const getAllTasks = async () => {

    setIsLoading(true) ; // Début du chargement

    // Préparation de ma requête sur tasks
    const rqTasks = query(collection(firestore, 'tasks'));
    // Lancement de ma requête
    const snapTasks = await getDocs(rqTasks) ;

    // Vérification de snapTasks, pour savoir s'il est vide ou pas
    if (!(snapTasks.empty)) { 

      const dataTemp = snapTasks.docs.map(task=>{

        return{ id: task.id , ...task.data() }

      })

      // Mise à jour de Tasks
      setTasks(dataTemp) ; 
      
    }
    setIsLoading(false) ; // Fin du chargement

  }

  useEffect(()=>{

    console.log('Charger')

    getAllTasks()

  }, [])

  return (
    <div className='flex flex-wrap  gap-10'>
      <div>
        <Navbar/>
      </div>
      
      <br/>
      <div>
        {
        isLoading ? <Loading/> : < Table data={tasks}/>
        }
      </div>
      
    </div>
  )
}

export default Lister