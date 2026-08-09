import { useEffect, useState } from "react"
import BookCreate from "./components/BookCreate";
import './index.css'
import BookList from "./components/BookList";
import axios from "axios";
export interface Book {
  id: number;
  title: string;
}

function App() {

  const [books, setBooks] = useState<Book[]>([])




  const url = 'http://localhost:3001'


  
  useEffect( () => {
    const fetchBooks = async() => {
      const resposen = await axios.get(`${url}/books`)
      setBooks(resposen.data)
    }
    fetchBooks()
  }, [])

  const handleCreateBook = async (newBook: Book) => {

    const response = await axios.post(`${url}/books`, {
      title: newBook.title
    })
    const updatedBook = [...books, response.data]    
    setBooks(updatedBook)
    
  }

  



  const handleDeleteBookById = (id: number) => {
    const updatedBook = books.filter((item) => {
      return item.id !== id
    })
    setBooks(updatedBook)
  }

  const handleEditBookById = (id: number, newTitle: string) => {
    const updatedBook = books.map( (item) => {
      if(item.id === id) {
        return {...item, title: newTitle}
      }
      return item
    })
    setBooks(updatedBook)
  }

  return (
    <div className="app">
      <h3>Reading lists</h3>
      <BookList books={books} onDeleteBook={handleDeleteBookById} onEditBook={handleEditBookById}/>
      <BookCreate onCreateBook={handleCreateBook}/>
    </div>
  )
}

export default App
