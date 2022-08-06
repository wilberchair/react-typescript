import { useState, ChangeEvent } from 'react'

type Props = {
  onAdd: (title: string, body: string) => void
}

export const PostForm = ({onAdd}: Props) => {
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }

  const handleAddClick = ()=> {
    if(addTitleText && addBodyText) {
      onAdd(addTitleText, addBodyText);
    } else {
      alert('Preencha os campos!');
    }
  }

  return (
    <fieldset className="fieldset">
        <legend>Adicionar novo Post</legend>
        <input type="text" onChange={handleAddTitleChange} value={addTitleText} placeholder='Digite um título' />
        <textarea onChange={handleAddBodyChange} value={addBodyText}></textarea>
        <button onClick={handleAddClick}>Adicionar</button>
      </fieldset>
  )
}