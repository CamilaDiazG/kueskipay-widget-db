import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { supabase } from './supabaseClient'

function App() {
  const [screen, setScreen] = useState('login')
  const [usuario, setUsuario] = useState(null)

  const handleLogin = async (authUser) => {
    const { data } = await supabase
      .from('usuarios')
      .select('*')
      .eq('correo', authUser.email)
      .single()

    setUsuario(data)
    setScreen('dashboard')
  }

  const handleLogout = () => {
    setUsuario(null)
    setScreen('login')
  }

  return (
    <div className="widget">
      {screen === 'login' && <Login onLogin={handleLogin} />}
      {screen === 'dashboard' && <Dashboard usuario={usuario} onLogout={handleLogout} />}
    </div>
  )
}

export default App
