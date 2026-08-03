import '../style/bookShow.css'
const BookShow = ({book}) => {
  return (
    <div className="card">
      {book}
      <button>Edit</button>
      <button>X</button>
    </div>
  )
}
 
export default BookShow