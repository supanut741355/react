import { useState } from "react"

const BookCreate = ({onCreateBook}) => {

  const [book, setBook] = useState('')

  const handleOnChange = (event) => {
    setBook(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onCreateBook(book)
    setBook('')
  }

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleFormSubmit}>
        <p>Title</p>
        <input value={book} onChange={handleOnChange}/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate