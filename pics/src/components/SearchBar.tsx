import { useState } from "react"
import '../style/searchBar.css'

function SearchBar({onSubmit}) {

  const [term, setTerm] = useState('')
  const handleFormSubmit = (event) => {
    event.preventDefault()

    // console.log('I need to tell the parent about term', event.va);
    onSubmit(term) 
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
