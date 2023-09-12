import axios from 'axios'
const listAddress = 'http://localhost:3001/persons'

const loadPersons = () => {
  return axios.get(listAddress)
}

const addPerson = newPerson => {
  return axios.post(listAddress, newPerson)
}

const removePerson = personID => {
  return axios.delete(listAddress + '/' + personID)
}

const personFunctions = { 
  loadPersons,
  addPerson,
  removePerson
}

export default personFunctions