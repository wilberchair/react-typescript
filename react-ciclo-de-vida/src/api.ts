import axios from 'axios'

// const BASE = 'https://jsonplaceholder.typicode.com'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  getAllPosts: async () => {
    // const response = await axios.get(`${BASE}/posts`)
    const response = await axiosInstance.get('/posts')
    return response.data;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await axiosInstance.post('/posts', {
      title, body, userId
    })
    return response.data;
  }
}