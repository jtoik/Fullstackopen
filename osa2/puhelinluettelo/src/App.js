
import React, { useState } from 'react'

const Name = ({persons}) => {
  return (
    <li>{persons.name} {persons.number}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '0444-797-9978'
  }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(persons =>
            <Name key={persons.name} persons={persons}/>
          )}
      </ul>
    </div>
  )

}

export default App
