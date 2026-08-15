import { useContext, useEffect } from "react"
import BookCreate from "./components/BookCreate";
import './index.css'
import BookList from "./components/BookList";
import BookContext from "./contexts/books";
export interface Book {
  id: number;
  title: string;
}

function App() {
  
  const {fetchBooks } = useContext(BookContext)

  useEffect( () => {
    fetchBooks()
  }, [fetchBooks])

  return (
    <div className="app">
      <h3>Reading lists</h3>
      <BookList/>
      <BookCreate/>
    </div>
  )
}

export default App

// somewhere in memory
// swim