import { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }
  
  return (
    <div>
      <button onClick={handleClick}>{show ? 'ocultar' : 'Mostrar'}</button>
      {show && <div>Bla bla bla!</div>}
    </div>
  )
}

export default App;