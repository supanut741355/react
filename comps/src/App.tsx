import Button from "./components/Button"

function App() {

  return (
    <>
      <Button primary secondary >Primary</Button>
      <Button secondary rounded>Secondary</Button>
      <Button success rounded outline>Success</Button>
      <Button warn>Warn</Button>
      <Button danger outline>Danger</Button>
    </>
  )
}

export default App
