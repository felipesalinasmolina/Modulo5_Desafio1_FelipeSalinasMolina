import React from 'react'
import {Link} from "react-router-dom"

const Navigation = () => {
  return (
    <div className='navbar'>
      <div>

    <Link to="/">🏡 Home</Link> 
    <Link to="/contacto">📬 Contacto</Link>
      </div>
    <h2>Happy Cake 🎂</h2>
    </div>
  )
}

export default Navigation