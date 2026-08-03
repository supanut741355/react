import { useState } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"

function App() {

  const [books, setBooks] = useState<string[]>([])

  const handleCreateBook = (newBook) => {
    setBooks(books => [...books, newBook])
    
    console.log(books);
  }

  return (
    <>
      <BookCreate onCreateBook={handleCreateBook}/>
      <BookList books={books}/>
    </>
  )
}

export default App
