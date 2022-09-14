import { useState } from "react"
import './app.css' 

export default function App(){
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [message, setMessage] = useState('')

  function calculate(){
    const hei = height / 100
    const imc = weight / (hei * hei)

    if(imc< 18.6){
      setMessage("You are underweight! IMC: " + imc.toFixed(2))
    }
    else if (imc >= 18.6 && imc < 24.9){
      setMessage("Your weight is ideal! IMC: " + imc.toFixed(2))
    }
    else if(imc >= 24.9 && imc < 34.9){
      setMessage("Your weight is slightly high! IMC: " + imc.toFixed(2))
    }
    else if(imc > 34.9){
      setMessage("You are overweight! IMC: " + imc.toFixed(2))
    }
  }


  return(
    <div className='app'>
      <h1>
        IMC CALCULATOR
      </h1>
      <span>Let's calculate your IMC</span>

      <div className='inputs'>
        <input 
          type="text" 
          placeholder='weight (kg)' 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
          
        <input 
          type="text" 
          placeholder='height (cm)' 
          value={height} 
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculate}>Calculate</button>
      </div>

      <h2>{message}</h2>
    </div>
  )
}
