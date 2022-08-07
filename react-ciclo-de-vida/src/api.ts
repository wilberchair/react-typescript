import axios from 'axios'

const BASE = 'https://jsonplaceholder.typicode.com'

export const api = {
  getAllPosts: async () => {
    const response = await axios.get(`${BASE}/posts`)
    return response.data;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await axios.post(`${BASE}/posts`, {
      title, body, userId
    })
    return response.data;
    
    // let response = await fetch(`${BASE}/posts`, {
    //   method: 'POST',
    //   body: JSON.stringify({ title, body, userId }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // const json = await response.json();
    
    // return json;
  }
}