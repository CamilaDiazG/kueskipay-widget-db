import { useState } from 'react'
import './Login.css'
import logo from '../assets/KueskiPay-Logo.png'

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'laura@kueski.com' && password === 'kueski123') {
      setError('')
      onLogin()
    } else {
      setError('Correo o contraseña incorrectos.')
    }
  }

  return (
    <div className="login">
      <img src={logo} alt="Kueski" width="120" />

      <h1 className="login__title">Inicia sesión</h1>

      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <input
          className="login__input"
          type="email"
          placeholder="Correo electrónico*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <div className="login__password-wrapper">
          <input
            className="login__input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Contraseña*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="login__eye"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>

        <a href="#" className="login__forgot">¿Olvidaste tu contraseña?</a>

        {error && <p className="login__error">{error}</p>}

        <button type="submit" className="login__btn">Iniciar sesión</button>
      </form>

      <p className="login__register">
        ¿Aún no tienes cuenta?{' '}
        <a href="#">Crear una cuenta</a>
      </p>
    </div>
  )
}

export default Login
