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
        <div>
          <p>Valor muito alto!</p>
          <button onClick={incrementCounter}>+</button>
          <button onClick={decrementCounter}>-</button>
        </div>
      )
    } else if (counter < 0) {
      return (
        <div>
          <p>Valor muito baixo!</p>
          <button onClick={incrementCounter}>+</button>
          <button onClick={decrementCounter}>-</button>
        </div>
      )
    }
  
  
  return (
    <>
      <div>
        <p>Meu Contator: {counter}</p>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
    
    </>
  )
}