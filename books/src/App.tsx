import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

function App() {

  const [books, setBooks] = useState<string[]>([])

  const handleCreateBook = (newBook) => {
    setBooks(books => [...books, newBook])
  }

  const handleDeleteBook = (bookName) => {
    setBooks(books => books.filter(book => book !== bookName));
  }

  return (
    <>
      <BookCreate onCreateBook={handleCreateBook}/>
      <BookList books={books} onDeleteBook={handleDeleteBook}/>
    </>
  )
}

export default App
