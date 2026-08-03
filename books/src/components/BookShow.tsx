import '../style/bookShow.css'
const BookShow = ({book, onDeleteBook}) => {

  const handleDeleteBook = () => {
    onDeleteBook(book)
  }

  return (
    <div className="card">
      {book}
      <button>Edit</button>
      <button onClick={handleDeleteBook}>X</button>
    </div>
  )
}

export default BookShow