import { useState } from "react";
import { AnimalShow } from "./components/AnimalShow";


function App() {

  const [animalCounts, setAnimalCounts] = useState(0)


  const handleAddAnimal = () => {
    setAnimalCounts(animalCounts + 1)
  }

  return (
    <div>
      <button onClick={handleAddAnimal}>Add animal</button>
      <div>
        Animal count {animalCounts}
      </div>
    </div>
  );
}

export default App;
