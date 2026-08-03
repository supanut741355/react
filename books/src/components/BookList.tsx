import '../style/bookList.css'
import BookShow from "./BookShow"

const BookList = ({books, onDeleteBook, onEditBook}) => {
  return (
    <div className="books-list">
      {books.map((item, idx) => {
        return <BookShow key={idx} book={item} onDeleteBook={onDeleteBook} onEditBook={onEditBook}/>
      })}
    </div>
  )
}

export default BookList