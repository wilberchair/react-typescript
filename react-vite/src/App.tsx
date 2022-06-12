import { useState } from 'react'

const App = () => {
  // const [color, setColor] = useState('#FF0000')
  const [padding, setPadding] = useState(0)

  // const handleClick = () => {
  //   setColor('#00FF00')
  // }
  const handleClick = () => {
    setPadding(20)
  }
  return (
    <div>
      <button onClick={handleClick} style={{
        backgroundColor: '#FF0000',
        color: '#FFF',
        border: 0,
        padding
      }}>Clique Aqui</button>
    </div>
  )
}

export default App;