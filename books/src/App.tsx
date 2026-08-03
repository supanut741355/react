import { useState } from "react"
import BookCreate from "./components/BookCreate"

function App() {

  const [books, setBooks] = useState<string[]>([])

  const handleCreateBook = (newBook) => {
    setBooks(books => [...books, newBook])
    
    console.log(books);
  }

  return (
    <>
      <BookCreate onCreateBook={handleCreateBook}/>
      {books.map( (item) => {
        return <p>{item}</p>
      })}
    </>
  )
}

export default App
