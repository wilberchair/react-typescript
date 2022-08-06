import { Post } from '../types/Post'

type Props = {
  data: Post
}

export const PostItem = ({data}: Props) => {
  return (
    <div className='posts'>
      <h4>{data.title}</h4>
      <small>#{data.id} - Usuário: {data.userId}</small>
      <p>{data.body}</p>
    </div>
  )
}