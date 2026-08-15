import { createContext, useState, useCallback } from "react";
import { type Book } from "../App";
import axios from "axios";
interface BookContextType {
  books: Book[];
  fetchBooks: () => Promise<void>;
  handleCreateBook: (newBook: Book) => Promise<void>;
  handleDeleteBookById: (id: number) => Promise<void>;    
  handleEditBookById: (id: number, newTitle: string) => Promise<void>;
}

const BookContext = createContext<BookContextType>({} as BookContextType)

const url = 'http://localhost:3001'
const Provider = ({children}) => {

  const [books, setBooks] = useState<Book[]>([])
  const fetchBooks = useCallback(async() => {
    const resposen = await axios.get(`${url}/books`)
    setBooks(resposen.data)
  },[])



  const handleCreateBook = async (newBook: Book) => {
    const response = await axios.post(`${url}/books`, {
      title: newBook.title
    })
    const updatedBook = [...books, response.data]    
    setBooks(updatedBook)
  }

  const handleDeleteBookById = async(id: number) => {
    await axios.delete(`${url}/books/${id}`)
    const updatedBook = books.filter((item) => {
      return item.id !== id
    })
    setBooks(updatedBook)
  }

  const handleEditBookById = async(id: number, newTitle: string) => {
    const response = await axios.put(`${url}/books/${id}`, {
      title: newTitle
    })
    const updatedBook = books.map( (item) => {
      if(item.id === id) {
        return {...item, ...response.data}
      }
      return item
    })
    setBooks(updatedBook)
  }

  const vauleToShare = {
    books,
    fetchBooks,
    handleCreateBook,
    handleDeleteBookById,
    handleEditBookById
  }

  return (
    <BookContext.Provider value={vauleToShare}>
      {children}
    </BookContext.Provider>
  )
}

export { Provider }

export default BookContext