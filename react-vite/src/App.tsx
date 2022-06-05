import { Pessoa } from './components/Pessoa'

const App = () => {
  let list = [
    {name: 'Wilber', age: 34},
    {name: 'Cristielly', age: 29},
    {name: 'Mariana', age: 4},
    {name: 'Pedro', age: 15}
  ]
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <Pessoa key={index} data={item} />
        ))}
      </ul>
    </div>
  )
}

export default App;