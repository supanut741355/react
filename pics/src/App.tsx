
import SearchBar from "./components/SearchBar"
import searchImages from "./services/fetch"

function App() {
  const handleSubmit = (term) => {
    // console.log('Yo :', term)
    searchImages(term)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
    </>
  )
}

export default App
