import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="link-navbar" to="/react-context">
        {' '}
        Home{' '}
      </Link>{' '}
      |{' '}
      <Link className="link-navbar" to="/react-context/favoritos">
        {' '}
        Favoritos{' '}
      </Link>
    </nav>
  )
}

export default Navbar
