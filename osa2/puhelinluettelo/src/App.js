
import React, { useState, useEffect } from 'react'
import personHandler from './services/persons'

const Name = ({persons, removeName}) => {
  return (
    <li>
      {persons.name}
      {' '}
      {persons.number}
      {' '} 
      <button onClick={removeName}>Remove entry</button>
    </li>
  )
}

const Filter = (props) => {
  return (
    <div>
      Show results that contain <input
        value={props.filter}
        onChange={props.handleFilterChange}
      />
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.removeName}>
        Remove Entry
      </button>
    </div>
  )
}

const Form = (props) => {
  return(
    <div>
      <form onSubmit={props.addName}>
        <div>
          Name: <input 
            value={props.newName}
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          Number: < input
            value={props.newNumber}
            onChange={props.handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">Add Entry</button>
        </div>
      </form>
    </div>
  )
}

const List = (props) => {
  return(
    <div>
      <ul>
        {props.filteredPersons.map(persons =>
          <Name 
            key={persons.name} 
            persons={persons}

          />
        )}
      </ul>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter  ] = useState('')

  useEffect(() => {   
    console.log('start effect hook')
    personHandler
      .loadPersons()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


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
      
      personHandler  
        .addPerson(newEntry)
        .then(response => {
          console.log(response)
        })
        console.log('entry addition has been logged')
    }

    function conditionalAdd() {
      return (checkPersons.includes(newName) ? skipEntry() : addEntry() )
    }

    conditionalAdd()
  }

  const removeName = (personId) => {

    function removeEntry() {
      
      personHandler
        .removePerson(personId)
        .then(response => {
          console.log(response)
          console.log(response.data)
          personHandler
          .loadPersons()
          .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
          })
        })
        console.log('entry deletion complete')
      }

    removeEntry()
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
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <h2>Add a new number</h2>
      <Form 
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Button
        removeName={removeName}  
      />
      <h2>Numbers</h2>
      <List 
        filteredPersons={filteredPersons}
        removeName={() => removeName(persons.id)}  
      />
    </div>
  )

}

export default App
