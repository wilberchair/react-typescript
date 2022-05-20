type Props = {
  //A interrogação é utilizada para tornar a prop opcional. Se eu chamar o header sem title o typescript n vai reclamar
  title?: string;
  subtitle?: string;
}

// const Header = (props: Props) => {
//Desta forma embaixo não preciso chamar props em todos lugares
const Header = ({ title, subtitle }: Props) => {
  return (
    <header>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
      <hr/>
    </header>
  )
}

export default Header;