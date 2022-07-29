import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [nome, setNome] = useState('Wilber')

  useEffect(() => {
    alert('Cliqueiii')
  }, [nome])
  
  const handleClick = () => {
    setNome('José')
  }
  return (
    <div className="App">
      <div>Nome: {nome}</div>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}

export default App;
