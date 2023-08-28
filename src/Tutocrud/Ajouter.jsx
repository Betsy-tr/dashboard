import React from 'react'
import Navbar from './Navbar'
import { collection , addDoc , serverTimestamp } from 'firebase/firestore'
import { firestore } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Ajouter = () => {

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
        state : false ,
        date : serverTimestamp()
      }
      console.log('dataTask' , dataTask)

      // Save data
      await addDoc(collection(firestore , 'tasks') , dataTask)

      navigate('/crud/lister') ;

    }

  }

  return (
    <div>
      <h1 className='font-serif font-semibold text-accent text-3xl py-10 text-start'>Ajouter une nouvelle tâche</h1>

      <div className='flex flex-wrap gap-10'>
      
        <div>
          <Navbar/>
        </div>
        
        <form onSubmit={enregistrer}>

          <div className='flex flex-row gap-2'>
            <input type="text" name='task' placeholder="Type here" className="input input-bordered input-accent w-full py-4" />
            <button type='submit' className="inline-block cursor-pointer rounded-md bg-accent font-serif text-white py-3 px-5 text-xl">Ajouter</button>
          </div>
          
        </form>
      
      </div>

    </div>
  )
}

export default Ajouter