import { useState } from "react"

function BookEdit({currentBook, onSubmit}) {

  const [title,setTitle] = useState(currentBook.title)

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(currentBook.id, title)
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
