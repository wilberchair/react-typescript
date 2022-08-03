import { useState, useEffect } from 'react';
import './App.css';
// import { Movie } from './types/Movie'
import { Post } from './types/Post'

const App = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
 
  //caso eu queira carregar os filmes logo que a tela carregar!
  useEffect(()=>{
    loadPosts()
  }, [])

  const loadPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    setPosts(json)
  }

  return (
    <div className="App">
      {/* <button className='button-movie' onClick={loadMovies}>Carregar Filmes...</button> */}
      {loading &&
        <div>Carregando...</div>
      }

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((post, index)=>(
              <div key={index} className='posts'>
                <h4>{post.title}</h4>
                <small>#{post.id} - Usuário: {post.userId}</small>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir.</div>
      }
    </div>
  );
}

export default App;
