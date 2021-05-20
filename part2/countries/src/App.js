import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  var i = 1

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', countries.length, 'persons')

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }


  const filteredCountries = searchName == '' ? [] : countries.filter(country => country.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <Filter value={searchName} onChange={handleSearchChange}/>
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App