import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../components/functional/Navbar'

export default function Projetos({ history, location, match}) {
  const { idProjeto } = useParams()

  console.log(match.params.idProjeto)

  return (
    <div>
      <Navbar />
      projetos
      <br />
      {idProjeto}
      <br />
      {location.state?.id}
    </div>
  )
}
