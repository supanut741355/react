import {  useState } from "react"
import type { Book } from "../App"
import { useBookContext } from "../hooks/useBookContext"

function BookCreate() {
  const {handleCreateBook} = useBookContext()
  const [newBook, setNewbook] = useState<Book>({id:0, title: ''})

  const handleOnChange = (event) => {
    
    setNewbook({id: Math.floor(Math.random() * 100000) + 1, title: event.target.value})
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    handleCreateBook(newBook)
    setNewbook({id: 0, title: ''})
  }

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleOnSubmit}>
        <label>Title</label>
        <input className="input" value={newBook.title} onChange={handleOnChange}></input>
        <button className="button">Create!</button>
      </form>
    </div>
  )
}

export default BookCreate
