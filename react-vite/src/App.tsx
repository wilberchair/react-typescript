const App = () => {

  //Se eu criar uma funcao para usar no evento, eu so passso a referencia
  //Agora se eu nao quiser, é só criar uma funcao anonima e executar ela direto no onClick
  
  const handleClick = () => {
    return alert('Cliquei');
  }

  return (
    //caso nao tenha unma funcao para passar a referencia no evento, crio uma funcao para executar
    // <button onClick={() => alert('Oi')}>Clique aqui</button>
    <button onClick={handleClick}>Clique aqui</button>
  )
}

export default App;