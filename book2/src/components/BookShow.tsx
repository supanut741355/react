import type { Book } from "../App"

function BookShow({book}: {book: Book}) {

  return (
    <div className="book-show">
      {book.title}
    </div>
  )
}

export default BookShow
