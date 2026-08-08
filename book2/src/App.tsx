import { useState } from "react"
import BookCreate from "./components/BookCreate";
import './index.css'
import BookList from "./components/BookList";
export interface Book {
  id: number;
  title: string;
}

function App() {

  const [books, setBooks] = useState<Book[]>([])
  const handleCreateBook = (newBook: Book) => {
    const updatedBook = [...books, newBook]    
    setBooks(updatedBook)
  }
  const handleDeleteBookById = (id: number) => {
    const updatedBook = books.filter((item) => {
      return item.id !== id
    })
    setBooks(updatedBook)
  }

  return (
    <div className="app">
      <BookList books={books} onDeleteBook={handleDeleteBookById}/>
      <BookCreate onCreateBook={handleCreateBook}/>
    </div>
  )
}

export default App
