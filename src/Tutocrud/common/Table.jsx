import React from 'react'

const ItemTable = ({item}) =>{

    return(
        <tr>
            <th></th>
            <td className='font-serif text-white text-xl'>{item.name}</td>
            <td></td>
            <td className='font-serif text-white text-xl'><a href={'/crud/modifier/'+ item.id}>Modifier</a></td>
        </tr>
    )

}

const NoTask = () => {

    return(
        <tr>
            <th></th>
            <td>Pas de taches</td>
            <td></td>
            <td></td>
        </tr>
    )

}

const Table = ({data}) => {
  return (
    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr className='bg-accent'>
                    <th className='font-serif text-white text-2xl'>N°</th>
                    <th className='font-serif text-white text-2xl'>Taches</th>
                    <th className='font-serif text-white text-2xl'>Statut</th>
                    <th className='font-serif text-white text-2xl'>Action</th>
                </tr>
            </thead>

            <tbody>
      
                {
                    data!= null ? data.map(task=><ItemTable key={task.id} item={task}/>) : <NoTask/>
                }
      
            </tbody>
        </table>
    </div>
  )
}

export default Table