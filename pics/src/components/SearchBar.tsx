import { useState } from "react"

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
