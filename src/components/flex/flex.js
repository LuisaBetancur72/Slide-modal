import React from 'react'

const flex = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="navbar-toggle">
          <i className="fas fa-bars"></i>
        </div>
        <img src="../assets/images/logo.png" alt="Logo UAM" className="logo" />
        <ul className="navbar-options">
          <li><a href="Flexbox">Flexbox</a></li>
          <li><a href="Contact">Contact</a></li>
          <li><a href="Products">Products</a></li>
        </ul>
        <div className="avatar-container">
          <img src="../assets/images/avatar.png" className="avatar" alt="Foto de perfil" />
        </div>
      </div>

      <div className="content">
        <h1>Insta</h1>
      </div>
      <div className="footer">
        <h1>Hola</h1>
      </div>
    </div>
  )
}

export default flex