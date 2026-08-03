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

  const handleEditBook = (bookName, newBookName) => {
    setBooks(prev =>
      prev.map(book =>
        book === bookName ? newBookName : book
      )
    );
  }

  return (
    <>
      <BookCreate onCreateBook={handleCreateBook}/>
      <BookList books={books} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook}/>
    </>
  )
}

export default App
