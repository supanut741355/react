function SearchBar({onSubmit}) {
  const handleClick = () => {
    onSubmit('cars')
  }
  return (
    <div>
      <input />
      <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default SearchBar
