import react, {useState} from 'react'
import CountryInfo from './CountryInfo'

const Country = ({country}) => {
    const [showInfo, setShowInfo] = useState(false)
    
    const changeDisplay = ({country}) => {
        setShowInfo(!showInfo)
    }
    const msg = !showInfo ? "show" : "hide"
    return (<li>
        <div>
            {country.name}<button onClick={changeDisplay}>{msg}</button>
        </div>
        {showInfo && <CountryInfo country={country}/>}
    </li>)
}

export default Country