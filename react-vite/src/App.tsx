// import { useState } from 'react'
import * as C from './Appstyles';

const App = () => {
  return (
    <C.Container bgColor={'#BBC'}>
      <span>Texto do componente</span>
      <a href='https://google.com' className='link'>Clique aqui</a>
      <C.Button bg={'#FF0'} small>Clique aqui</C.Button>
      <C.Button bg={'#F52'}>Clique aqui</C.Button>
    </C.Container>
  )
}

export default App;