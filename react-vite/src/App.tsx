
const App = () => {
  let name: string = 'wilber';
  let lastName: string = 'lima'
  let n1: number = 12;
  let n2: number = 3;
  let link: string = 'https://b7web.com.br'


  function somar(n1: number, n2: number): number {
    return n1 + n2;
  }

  function maiuscula(texto: string) {
    return texto.charAt(0).toUpperCase() + texto.substr(1);
  }
  
  return (
    <>
      <div>
        Olá {name}, tudo bem?
      </div>
      <div>
        Multiplicação: {n1 * n2}
        Soma: {somar(n1, n2)}
      </div>
      <div>
        {`${maiuscula(name)} ${maiuscula(lastName)}`}
      </div>
      <a href={link}>Clique aqui para acessar</a>
    </>
  )
}

export default App;