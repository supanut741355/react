import { useState } from "react"

interface Book {
  id: number;
  title: string;
}

function App() {

  const [books, setBooks] = useState<Book[]>([
    {id: 1, title: 'ant'},
    {id: 2, title: 'bat'},
    {id: 3, title: 'cat'}
  ])



  return (
    <>
      {books.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </>
  )
}

export default App
