# Event system
steps to create event:
1. Decide what kind of event.
2. Create function to call handler or callback.
3. Naming function with pattern handle[EVENT_NAME] -> const handleAdd() {}
4. Pass function as a props -> onClick(handleAdd).
5. Make sure valid event name (onClick, onChange).
6. Make sure don't pass function_reference.

```
const handleAddAnimal = () => {}
```

# State system
- Data change as user interative.
- When data change -> react will update content on screen automatically.
- useState -> use only setter_func to assign the state value.
  - state
  - setter_function
  - initial_value

```
const [animals, setAnimal] = useState([])
```

# Event x State
```
const [animals, setAnimal] = useState([])

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'gator', 'dog', 'horse']
  return animals[Math.floor(Math.random() * animals.length)]
}

const handleAddAnimals = () => {
  setAnimal([...animals, getRandomAnimal])
}
```

# Help display state with map function

```
const animalsName = ['ant', 'bat', 'cat']

const renderAnimals = animals.map( (animal, idx)=> {
  return (
    <div
      key={idx}
    >
      <Animal type={animal}>
    </div>
  )
})
```