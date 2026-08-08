import type { Book } from "../App"
import BookShow from "./BookShow"

function BookList({books}: {books: Book[]}) {

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
