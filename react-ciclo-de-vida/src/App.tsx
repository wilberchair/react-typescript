import { useState, useEffect } from 'react';
import './App.css';
import { Movie } from './types/Movie'

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
 
  //caso eu queira carregar os filmes logo que a tela carregar!
  useEffect(()=>{
    loadMovies()
  }, [])

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
    setLoading(true)
    const response = await fetch('https://api.b7web.com.br/cinema/')
    const json = await response.json()  
    setLoading(false)
    setMovies(json)
  }

  return (
    <div className="App">
      {/* <button className='button-movie' onClick={loadMovies}>Carregar Filmes...</button> */}
      {!loading &&
        <>
          <div>Total de Filmes: {movies.length}</div>
          <div className='movies-block'>
            {movies.map((movie, index)=>(
              <div key={index} className='movies'>
                <p className='movies-title'>{movie.titulo}</p>
                <img className='movies-image' src={movie.avatar} alt={movie.titulo} />
              </div>
            ))}
          </div>
        </>
      }

      {loading &&
        <div>Carregando...</div>
      }
    </div>
  );
}

export default App;
