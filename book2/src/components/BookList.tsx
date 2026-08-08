import BookShow from "./BookShow"

function BookList({books, onDeleteBook, onEditBook}) {
  const renderedBooks = books.map((item) => {
    return <BookShow key={item.id} book={item} onDeleteBook={onDeleteBook} onEditBook={onEditBook}/>
  })

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  )
}

export default BookList
