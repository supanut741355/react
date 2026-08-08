import BookShow from "./BookShow"

function BookList({books, onDeleteBook}) {

  const renderedBooks = books.map((item) => {
    return <BookShow key={item.id} book={item} onDeleteBook={onDeleteBook}/>
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  )
}

export default BookList
