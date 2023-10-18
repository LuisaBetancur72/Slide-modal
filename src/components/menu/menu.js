import React, { Component } from 'react';
import './stylesMenu.scss';
import Logo from '../../assets/images/logo.png';
import Avatar from '../../assets/images/avatar.png';
import 'font-awesome/css/font-awesome.min.css';
import homeIcon from '../../assets/images/home.png';
import contactIcon from '../../assets/images/contact.png';
import menuIcon from '../../assets/images/menu.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isIconMode: false, // Estado para controlar el modo de iconos
    };
  }

  handleToggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  toggleIconMode = () => {
    this.setState((prevState) => ({ isIconMode: !prevState.isIconMode }));
  };

  // Función para desplazar suavemente a una sección
  scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    this.handleToggleMenu(); // Cierra el menú después de hacer clic en un enlace
  };

  handleHomeClick = () => {
    this.scrollToSection('Flexbox'); // Ir a la sección "Flexbox"
    this.setState({ isIconMode: false }); // Desactivar el modo de iconos
  };

  render() {
    const { isMenuOpen, isIconMode } = this.state;

    return (
      <div className="menu">
        <div className="navbar-toggle" onClick={this.handleToggleMenu}>
          <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <img src={Logo} alt="Logo UAM" className="logo" />
        {isIconMode && (
          <div className={`navbar-options-icon-mode ${isMenuOpen ? 'active' : ''}`}>
            <div className="iconM" onClick={this.handleHomeClick}>
              <img src={homeIcon} alt="Home" />
            </div>
            <div className="iconM" onClick={() => this.scrollToSection('Contact')}>
              <img src={contactIcon} alt="Contact"/>
            </div>
            <div className="iconM" onClick={() => this.scrollToSection('Products')}>
              <img src={menuIcon} alt="Product"/>
            </div>
          </div>
        )}

        {/* Modo normal */}
        {!isIconMode && (
          <ul className={`navbar-options ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a href="#Flexbox" onClick={this.toggleIconMode} className="flex-button">
                Flexbox
              </a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Products">Products</a>
            </li>
          </ul>
        )}

        <div className="avatar-container">
          <img src={Avatar} className="avatar" alt="Foto de perfil" />
        </div>
      </div>
    );
  }
}

export default Navbar;
