import {useState, useEffect} from 'react'
import CountrySelect from '../components/CountrySelect'
import CountryDetail from '../components/CountryDetail'

const CountryContainer = () => {

    const [countries, setCountries] = useState([]) 
    const [selectedCountry, setCountry] = useState(null)

    const getCountries = function () {
        fetch('https://restcountries.eu/rest/v2/all').then(result => result.json()).then(countries => setCountries(countries))
    }

    useEffect(() => {
        getCountries()
    }, [])

    const onCountrySelected = function (country) {
        setCountry(country)
    }

    const getTotalPopulation = () => {
        let totalPopulation = 0
        for(let country of countries){
            totalPopulation += country.population
        }
        return totalPopulation
    }

    return(
        <>
            <h1>Witty Title of App</h1>
            <h3>Population: {getTotalPopulation()}</h3>
            <div id='country-select'>
                <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
                {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
                
            </div>
        </>
    )
}

export default CountryContainer;