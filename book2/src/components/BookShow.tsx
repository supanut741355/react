import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({book, onDeleteBook, onEditBook}) {

  const handleDeleteBook = () => {
    onDeleteBook(book.id)
  }

  const [showEdit,setShowEdit] = useState(false) 

  const handleShowEdit = () => {
    setShowEdit(!showEdit) 
  } 

  const handleSubmit = (id: number, title: string) => {
    setShowEdit(false) 
    onEditBook(id, title)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit currentBook={book} onSubmit={handleSubmit}/>
  }


  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit"  onClick={handleShowEdit}>Edit</button>
        <button className="delete" onClick={handleDeleteBook}>X</button>
      </div>
    </div>
  )
}

export default BookShow
