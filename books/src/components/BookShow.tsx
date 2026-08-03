import { useState } from 'react'
import '../style/bookShow.css'
const BookShow = ({book, onDeleteBook, onEditBook}) => {
  const [isEdit, setIsEdit ] = useState(false)
  const [newBookName, setNetBookName] = useState('')
  const handleDeleteBook = () => {
    onDeleteBook(book)
  }

  const handleEditBook = () => {
    onEditBook(book, newBookName)
    setIsEdit(false)
  }
  
  const handleIsEdit = () => {
    setIsEdit(!isEdit)
  }

  const handleChangeBookName = (event) => {
    setNetBookName(event.target.value)
  }

  return (
    <div className="card">
      {book}
      <button onClick={handleIsEdit}>Edit</button>
      {isEdit ? (
        <div>
          <input onChange={handleChangeBookName}/>
          <button onClick={handleEditBook}>Update</button>
        </div>
      ) : (
       <></>
      )}
      <button onClick={handleDeleteBook}>X</button>
    </div>
  )
}

export default BookShow