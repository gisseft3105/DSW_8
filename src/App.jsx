import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Diseño de sitios Web - Fase Final</h1>
      <div className="card">
        <h3>Nombre: Yefferson Mena Mena</h3>

        <h6>Enlace al proyecto</h6>
        <a href = "index.html">click</a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
