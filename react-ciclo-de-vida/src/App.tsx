import { useState, useEffect } from 'react';
import './App.css';
import { Movie } from './types/Movie'

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
 
  //caso eu queira carregar os filmes logo que a tela carregar!
  // useEffect(()=>{
  //   loadMovies()
  // }, [])

  //fetch tradicional.. e embaixo da forma mais simples com async await
  // const loadMovies = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((response)=>{
  //       return response.json();
  //     }).then((json)=>{
  //       setMovies(json)
  //     })
  // }

  const loadMovies = async () => {
    const response = await fetch('https://api.b7web.com.br/cinema/')
    const json = await response.json()  
    
    setMovies(json)
  }

  return (
    <div className="App">
      <button className='button-movie' onClick={loadMovies}>Carregar Filmes...</button>
      Total de Filmes: {movies.length}
      <div className='movies-block'>
        {movies.map((movie, index)=>(
          <div className='movies'>
            <p key={index} className='movies-title'>{movie.titulo}</p>
            <img className='movies-image' src={movie.avatar} alt={movie.titulo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
