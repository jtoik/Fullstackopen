
import React, { useState } from 'react'

const Name =({ name }) => {
  return (
    <li>{name}</li>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    var checkPersons = persons.map(persons => persons.name)

    const newEntry = {
      name: newName
    }

    function skipEntry() {
      setNewName('')
      console.log('entry has been skipped');
    }

    function addEntry() {
      setPersons(persons.concat(newEntry))
      setNewName('')
      console.log('entry has been added');
    }

    function conditionalAdd() {
      return (checkPersons.includes(newName) ? skipEntry() : addEntry() )
    }

    conditionalAdd()
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input 
          value={newName}
          onChange={handleNoteChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(persons =>
            <Name key={persons.name} name={persons.name} />
          )}
      </ul>
    </div>
  )

}

export default App
