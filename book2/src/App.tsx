import { useState } from "react"
import BookEdit from "./components/BookEdit";

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


  return (
    <>
      {books.map((item) => {
        return <p key={item.id}>{item.id} {item.title}</p>
      })}
      <BookEdit onCreateBook={handleCreateBook}/>
    </>
  )
}

export default App
