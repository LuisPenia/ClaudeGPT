/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GPTpokeAPI from './Component/GPTpokeAPI'
import CLAUDEpokeAPI from './Component/CLAUDEpokeAPI'

function App() {

  const [alternativa,setAlternativa] = useState(true)
 

  return (
    <>
      <div class="nav-links">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href=""><h1>Pokédex</h1></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

          <button onClick={() => setAlternativa(!alternativa)}>
            {alternativa? 'ChatGPT' : 'Claude' }
          </button>
 
      </div>
      
      <div className="card">

      </div>
    
      {alternativa? (<GPTpokeAPI />) : (< CLAUDEpokeAPI />)}
      
    </>
  )
}

export default App
