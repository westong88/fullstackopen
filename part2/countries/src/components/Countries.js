import react from 'react'
import Country from './Country'
import CountryInfo from './CountryInfo'

const Countries = ({ countries }) => {
  const len = countries.length
  if(len == 0) return null
  if(len > 10){
    return <p>Too many matches, specify another filter</p>
  }else{
    return(
      <ul>
        {len == 1 ? <CountryInfo country={countries[0]}/> : countries.map(country => <Country country={country}/>)}
      </ul>
    )
  }
}

export default Countries