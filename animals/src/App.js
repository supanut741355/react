import { useState } from "react";
import { AnimalShow } from "./components/AnimalShow";
import './App.css'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'ant', 'bat', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

  const [animals, setAnimal] = useState([])
  const handleAddAnimal = () => {
    setAnimal([...animals, getRandomAnimal()])
    
  }

  const renderAnimal = animals.map( (animal, idx) => {
    return <AnimalShow type={animal} key={idx} />
  })
  return (
    <div className="app">
      <button onClick={handleAddAnimal}>Add animal</button>
      {renderAnimal}
    </div>
  )  
}

export default App;
