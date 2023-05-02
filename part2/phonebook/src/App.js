import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const AddNew = (event) => {
    event.preventDefault()
    const newObject = {
      name: newName,
      id: newName,
      number: newNumber,
    }
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} Already Exists`)
    } else {
      setPersons(persons.concat(newObject))
      setNewName("")
      setNewNumber("")
    }
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit" onClick={AddNew}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {persons.map((person) => (
          <li key={person.id}>
            <b>Name: </b>
            {person.name}
            <b> Num: </b>
            {person.number}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
