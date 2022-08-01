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

  // fetch tradicional.. e embaixo da forma mais simples com async await
  // const loadMovies = () => {
  //   fetch('https://api.b7web.com.br/cinema/')
  //     .then((response)=>{
  //       return response.json();
  //     }).then((json)=>{
  //       setMovies(json)
  //     }).catch((e)=>{
  //       setLoading(false)
  //       setMovies([])
  //       console.error(e)
  //     })
  // }

  const loadMovies = async () => {
    try{
      setLoading(true)
      const response = await fetch('https://api.b7web.com.br/cinema')
      const json = await response.json()  
      setLoading(false)
      setMovies(json)
    } catch(e) {
      setLoading(false);
      setMovies([])
      console.error(e);
    }
  }

  return (
    <div className="App">
      {/* <button className='button-movie' onClick={loadMovies}>Carregar Filmes...</button> */}
      {loading &&
        <div>Carregando...</div>
      }

      {!loading && movies.length > 0 &&
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

      {!loading && movies.length === 0 &&
        <div>Tente mais tarde novamente.</div>
      }
    </div>
  );
}

export default App;
