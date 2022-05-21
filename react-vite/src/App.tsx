import { useState } from 'react'

const App = () => {
  let [numero, setNumero] = useState(0)
  let [nome, setNome] = useState('Wilber')
  //Se eu criar uma funcao para usar no evento, eu so passso a referencia
  //Agora se eu nao quiser, é só criar uma funcao anonima e executar ela direto no onClick
  
  const handleClick = () => {
    // return alert('Cliquei');
    setNome('Wilber2')
  }

  const handleClickNumber = () => {
    // return alert('Cliquei');
    setNumero(numero++)
  }

  return (
    <div>
      O meu nome é {nome}
      O meu numero é {numero}
      {/* caso nao tenha unma funcao para passar a referencia no evento, crio uma funcao para executar */}
      {/* <button onClick={() => alert('Oi')}>Clique aqui</button> */}
      <button onClick={handleClickNumber}>Clique aqui</button>
    </div>
  )
}

export default App;