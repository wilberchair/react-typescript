import { useState } from 'react'

const App = () => {
  let [numero, setNumero] = useState(0)
  
  const handleMore = () => {
    setNumero(numero + 1);
  }

  const handleMinus = () => {
    setNumero(numero - 1)
  }

  return (
    <div>
      <button onClick={handleMore}>+</button>
      <div>{numero}</div>
      <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default App;