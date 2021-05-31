import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import AddForm from './components/AddForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState(null)
  const [notificationType, setNotificationType] = useState('')
  var i = 1

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
    setShowAll(false)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const target = persons.find(person => person.name === newName)
    if (target) {
      const result = window.confirm(newName + ' is already added to phonebook, replace the old number with a new one?')
      if(result){
        const updatedPerson = {name: newName, number: newNumber, id: target.id}
        personService.update(target.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(person => person.id == updatedPerson.id ? updatedPerson : person))
        })
        .catch(error => {
          setNotificationType('error')
          setMessage(
            `Information of ${updatedPerson.name} has already been removed from server`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id != updatedPerson.id))
        })
      }
    }
    else {
      const newPerson = {name: newName, number: newNumber}
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(newPerson))
          setNotificationType('success')
          setMessage(
            `Added ${newPerson.name}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setMessage(String(error.response.data))
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const confirmDelete = (person) =>{
    const result = window.confirm(`Delete ${person.name} ?`)
    if(result){
      personService.deletePerson(person.id)
      .then(response => setPersons(persons.filter(p => p.id != person.id)))
    }
  }

  const show = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={notificationType}/>
        <Filter value={searchName} onChange={handleSearchChange}/>
      <h2>add a new</h2>
      <AddForm 
      submitAction={addPerson} name={newName} handleNameChange={handleNameChange} 
      number={newNumber} handleNumberChange={handleNumberChange}></AddForm>
      <h2>Numbers</h2>
      <ul>
        {show.map(person => <Phonebook key={i++} people={person} confirmDelete={() => confirmDelete(person)} />)}
      </ul>
    </div>
  )
}

export default App