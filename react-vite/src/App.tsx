// import { useState } from 'react'
import * as C from './Appstyles';

const App = () => {
  return (
    <C.Container bgColor={'#BBC'}>
      Texto do componente
      <C.Button bg={'#FF0'} small>Clique aqui</C.Button>
      <C.Button bg={'#F52'}>Clique aqui</C.Button>
    </C.Container>
  )
}

export default App;