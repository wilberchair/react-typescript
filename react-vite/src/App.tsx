import { Button } from './components/Button'
import React, { useState } from 'react'

const App = () => {
  let textButton = 'Clicar no Botão'

  const buttonEventAction = (txt: string) => {
    alert('Frase do App: ' +txt)
  }
  return (
    <Button text={textButton} clickFn={buttonEventAction} />
  )
}

export default App;