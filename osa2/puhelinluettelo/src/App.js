
import React, { useState } from 'react'

const Name = ({persons}) => {
  return (
    <li>{persons.name} {persons.number}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter  ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    var checkPersons = persons.map(persons => persons.name)

    const newEntry = {
      name: newName,
      number: newNumber
    }

    console.log('newEntry is', newEntry)

    function skipEntry() {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      console.log('entry has been skipped');
    }

    function addEntry() {
      setPersons(persons.concat(newEntry))
      setNewName('')
      setNewNumber('')
      console.log('entry has been added');
    }

    function conditionalAdd() {
      return (checkPersons.includes(newName) ? skipEntry() : addEntry() )
    }

    conditionalAdd()
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = filter.length < 1
    ? persons
    : persons.filter(persons => persons.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      Show results that contain <input
        value={filter}
        onChange={handleFilterChange}
      />
      <h2>Add a new number</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number: < input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type="submit">Add Entry</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(persons =>
          <Name key={persons.name} persons={persons} />
        )}
      </ul>
    </div>
  )

}

export default App
