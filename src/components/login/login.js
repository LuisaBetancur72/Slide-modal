import React from 'react';
import './login.scss';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
