import { useContext } from "react"
import BookShow from "./BookShow"
import BookContext from "../contexts/books"

function BookList() {
  const {books} = useContext(BookContext)
  const renderedBooks = books.map((item) => {
    return <BookShow key={item.id} book={item}/>
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  )
}

export default BookList
