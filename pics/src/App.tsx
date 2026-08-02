import { useState } from "react"
import ImageList from "./components/ImageList"
import SearchBar from "./components/SearchBar"
import searchImages from "./services/fetch"

function App() {
  const [searchData, setSearchData] = useState<string[]>([])
  const handleSubmit = async (term: string) => {
    const result = await searchImages(term)
    setSearchData(result)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList searchData={searchData}/>
    </>
  )
}

export default App
