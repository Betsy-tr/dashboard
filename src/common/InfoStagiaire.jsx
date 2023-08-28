import React from 'react'

const InfoStagiaire = ({data}) => {
  return (
    <div>Stagiaire : {data.nom} , {data.prenom}</div>
  )
}

export default InfoStagiaire