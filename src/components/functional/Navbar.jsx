import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/projetos'>Projetos</Link>
      <br />
      <Link to='/sobre'>Sobre</Link>
      <br />
      <Link to='/dashboard'>Dashboard</Link>
      <br />
      <a href="/sobre">sobre</a>  {/* recarrega */}
    </div>
  )
}
