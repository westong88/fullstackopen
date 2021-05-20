import react from 'react'
import Countries from './Countries'
import WeatherInfo from './WeatherInfo'

const CountryInfo = ({ country }) => {
  return (
      <>
    <h2>{country.name}</h2>
      <p>
        Capital: {country.capital}
      </p>
      <p>
        Population: {country.population}
      </p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={`Flag of ${country.name}`}
        style={{ maxWidth: 150, height: 'auto' }}
      />
      <WeatherInfo country={country}/>
  </>
  )
}

export default CountryInfo