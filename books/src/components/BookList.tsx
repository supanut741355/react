const BookList = ({books}) => {
  return (
    <div>
      {books.map((item, idx) => {
        return <p key={idx}>{item}</p>
      })}
    </div>
  )
}

export default BookList