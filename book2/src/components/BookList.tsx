import BookShow from "./BookShow"
import { useBookContext } from "../hooks/useBookContext"

function BookList() {
  const {books} = useBookContext()
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
