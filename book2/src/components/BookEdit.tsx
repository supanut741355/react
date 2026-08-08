import { useState } from "react"

function BookEdit({handleShowEdit, currentBook, onEditBook}) {

  const [title,setTitle] = useState(currentBook.title)

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onEditBook(currentBook.id, title)
    handleShowEdit()
  }

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChangeTitle} />
        <button className="button is-primary">save</button>
      </form>
    </div>
  )
}

export default BookEdit
