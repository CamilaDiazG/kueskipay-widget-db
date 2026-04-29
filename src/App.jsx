import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [screen, setScreen] = useState('login')

  return (
    <div className="widget">
      {screen === 'login' && (
        <Login onLogin={() => setScreen('dashboard')} />
      )}
      {screen === 'dashboard' && (
        <div style={{ padding: 24, textAlign: 'center' }}>
          <p>Dashboard — próxima pantalla</p>
        </div>
      )}
    </div>
  )
}

export default App
