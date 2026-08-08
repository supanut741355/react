import { useState } from "react"
import BookCreate from "./components/BookCreate";
import './index.css'
export interface Book {
  id: number;
  title: string;
}

function App() {

  const [books, setBooks] = useState<Book[]>([])
  const handleCreateBook = (newBook: Book) => {
    console.log('handleCreateBook call');
    
    setBooks([...books, newBook])
  }

  const tmpRenderBooks = books.map((item) => {
    return <p key={item.id}>{item.id} {item.title}</p>
  })

  return (
    <>
      {tmpRenderBooks}
      <BookCreate onCreateBook={handleCreateBook}/>
    </>
  )
}

export default App
