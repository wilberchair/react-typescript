import React, { useState } from 'react'

const App = () => {
  let [name, setName] = useState('')

  //aqui especifico que se trata de um input element
  //Esse é o type para um item do formulario que teve algum evento: React.FormEvent<HTMLInputElement>
  //se quiser diretamente o de modificação usamos o ChangeEvent
  const changeName = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setName( event?.target.value )
  }
  

  return (
    <div>
      Nome:
      <input type="text" onChange={ changeName } />
      <hr/>
      Seu nome é: {name}
    </div>
  )
}

export default App;