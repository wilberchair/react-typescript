import { useState, useEffect } from 'react';
import './App.css';
import { Post } from './types/Post'
import { PostItem } from './components/PostItem'
import { PostForm } from './components/PostForm'

const App = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)
 
  //caso eu queira carregar os filmes logo que a tela carregar!
  useEffect(()=>{
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    setLoading(false)
    setPosts(json)
  }

  const handleAddPost = async (title: string, body: string) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body, userId: 1 }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      let json = await response.json()
      
      if(json.id) {
        alert('Post adicionado com sucesso!')
      } else {
        alert('Ocorreu algum erro!')
      }
  }

  return (
    <div className="App">
      {/* <button className='button-movie' onClick={loadMovies}>Carregar Filmes...</button> */}
      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((post, index)=>(
              <PostItem key={index} data={post} />
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
