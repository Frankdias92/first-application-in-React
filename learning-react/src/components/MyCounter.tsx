import { useState } from "react"


export function MyCounter() {
  const [ counter, setCounter ] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }
  function decrementCounter() {
    setCounter(counter - 1)
  }
    if (counter > 5) {
      return (
        <div className="wrapper">
          <p>Valor muito alto!</p>
          <div className="container">
            <button onClick={decrementCounter}>-</button>
            <button onClick={incrementCounter}>+</button>
          </div>
        </div>
      )
    } else if (counter < 0) {
      return (
        <div className="wrapper">
          <p>Valor muito baixo!</p>
          <div className="container">
            <button onClick={decrementCounter}>-</button>
            <button onClick={incrementCounter}>+</button>
          </div>
        </div>
      )
    }
  
  
  return (
    <div className="wrapper" >
        <p>Meu Contator: {counter}</p>
      <div className="container">
        <button onClick={decrementCounter}>-</button>
        <button onClick={incrementCounter}>+</button>
      </div>
    
    </div>
  )
}