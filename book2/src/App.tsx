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

  const tmpRenderBooks = books.map((item) => {
    return <p key={item.id}>{item.id} {item.title}</p>
  })

  return (
    <div className="app">
      <BookList books={books}/>
      <BookCreate onCreateBook={handleCreateBook}/>
    </div>
  )
}

export default App
