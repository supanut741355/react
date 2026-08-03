import '../style/bookList.css'
import BookShow from "./BookShow"

const BookList = ({books, onDeleteBook}) => {
  return (
    <div className="books-list">
      {books.map((item, idx) => {
        return <BookShow key={idx} book={item} onDeleteBook={onDeleteBook}/>
      })}
    </div>
  )
}

export default BookList