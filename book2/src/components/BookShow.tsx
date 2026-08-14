import { useContext, useState } from "react"
import BookEdit from "./BookEdit"
import BookContext from "../contexts/books"

function BookShow({book}) {

  const {handleDeleteBookById, handleEditBookById} = useContext(BookContext)

  const handleDeleteBook = () => {
    handleDeleteBookById(book.id)
  }

  const [showEdit,setShowEdit] = useState(false) 

  const handleShowEdit = () => {
    setShowEdit(!showEdit) 
  } 

  const handleSubmit = (id: number, title: string) => {
    setShowEdit(false) 
    handleEditBookById(id, title)
  }

  let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit currentBook={book} onSubmit={handleSubmit}/>
  }


  return (
    <div className="book-show">
      <img alt='book'src={`https://picsum.photos/seed/${book.id}/200/300`}/>
      <div>{content}</div>
      <div className="actions">
        <button className="edit"  onClick={handleShowEdit}>Edit</button>
        <button className="delete" onClick={handleDeleteBook}>X</button>
      </div>
    </div>
  )
}

export default BookShow
