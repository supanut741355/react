function BookShow({book, onDeleteBook}) {

  const handleDeleteBook = () => {
    onDeleteBook(book.id)
  }

  return (
    <div className="book-show">
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleDeleteBook}>X</button>
      </div>
    </div>
  )
}

export default BookShow
