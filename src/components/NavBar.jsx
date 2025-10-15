import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='container'>
        <div className="logo">
          <img src="../brand_logo.png" alt="hi" />
        </div>

          <ul className='nav-links'>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}

export default NavBar
