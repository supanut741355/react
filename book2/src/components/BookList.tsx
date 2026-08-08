import type { Book } from "../App"

function BookList({books}: {books: Book[]}) {

  const renderedBooks = books.map((item) => {
    return <p key={item.id}>{item.title}</p>
  })

  return (
    <>
      {renderedBooks}
    </>
  )
}

export default BookList
