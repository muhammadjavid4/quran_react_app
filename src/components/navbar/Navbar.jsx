import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='logo'>Al-Quran</div>
      <ul className='list'>
        <li>
          <NavLink to='/' end>Home</NavLink>
        </li>
        <li>
          <NavLink to='/favourites'>Favourites</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
