import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName])
  
  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" placeholder='Digite seu NOME' value={name} onChange={handleChangeName}/>
      <input type="text" placeholder='Digite seu SOBRENOME' value={lastName} onChange={handleChangeLastName}/>
      <p>Nome completo: {fullName}</p>
    </div>
  );
}

export default App;
