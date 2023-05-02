import { useState } from "react";
const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter by name: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};
const Display = ({ persons, filter }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ol>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          <b>Name: </b>
          {person.name}
          <b> Num: </b>
          {person.number}
        </li>
      ))}
    </ol>
  );
};

const PersonForm = ({
  newName,
  newNumber,
  handleInputChange,
  handleNumChange,
  addNew,
}) => {
  return (
    <form onSubmit={addNew}>
      <div>
        name: <input value={newName} onChange={handleInputChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addNew = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      id: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} Already Exists`);
    } else {
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new contact</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleNumChange={handleNumChange}
        addNew={addNew}
      />
      <h3>Numbers</h3>
      <Display filter={filter} persons={persons} />
    </div>
  );
};

export default App;
