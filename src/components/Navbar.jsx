import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="link-navbar" to="/">
        {' '}
        Home{' '}
      </Link>{' '}
      |{' '}
      <Link className="link-navbar" to="/favoritos">
        {' '}
        Favoritos{' '}
      </Link>
    </nav>
  )
}

export default Navbar
