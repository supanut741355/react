import '../style/bookList.css'
import BookShow from "./BookShow"

const BookList = ({books}) => {
  return (
    <div className="books-list">
      {books.map((item, idx) => {
        return <BookShow key={idx} book={item}/>
      })}
    </div>
  )
}

export default BookList