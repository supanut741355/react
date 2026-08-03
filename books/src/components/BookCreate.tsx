import { useState } from "react"

const BookCreate = ({onCreateBook}) => {

  const [book, setBook] = useState('')

  const handleOnChange = (event) => {
    setBook(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onCreateBook(book)
  }

  return (
    <div>
      BookCreate
      <form onSubmit={handleFormSubmit}>
        <input value={book} onChange={handleOnChange}/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default BookCreate