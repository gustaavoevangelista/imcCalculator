import './app.css' 
import { useState } from "react"

export default function App(){
  return(
    <div className='app'>
      <h1>
        IMC CALCULATOR
      </h1>
      <span>Let's calculate your IMC</span>

      <div className='inputs'>
        <input type="text" placeholder='weight (kg)' />
          
        <input type="text" placeholder='height (cm)'/>

        <button >Calculate</button>
      </div>

      <h2>Result</h2>
    </div>
  )
}
