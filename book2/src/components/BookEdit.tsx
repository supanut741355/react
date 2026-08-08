import { useState } from "react"
import type { Book } from "../App"
interface BookEditProp {
  onCreateBook: (newBook: Book) => void
}

function BookEdit(props: BookEditProp) {
  const {onCreateBook} = props
  const [newBook, setNewbook] = useState<Book>({id:0, title: ''})

  const handleOnChange = (event) => {
    
    setNewbook({id: Math.floor(Math.random() * 100000) + 1, title: event.target.value})
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    onCreateBook(newBook)
    setNewbook({id: 0, title: ''})
  }


  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Title</label>
        <input value={newBook.title} onChange={handleOnChange}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default BookEdit
