import React from 'react'

const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.push('/')
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-outline-primary"
        onClick={ handleLogin }>
          Ingresar
      </button>
    </div>
  )
}

export default LoginScreen
