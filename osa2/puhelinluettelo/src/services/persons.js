import axios from 'axios'
const listAddress = 'http://localhost:3001/persons'

const loadPersons = () => {
  return axios.get(listAddress)
}

const addPerson = newPerson => {
  return axios.post(listAddress, newPerson)
}

export default { 
  loadPersons: loadPersons,
  addPerson: addPerson
}