import {useState, useEffect} from 'react'
import CountrySelect from '../components/CountrySelect'
import CountryDetail from '../components/CountryDetail'
import CountryFaves from '../components/CountryFaves'

const CountryContainer = () => {

    const [countries, setCountries] = useState([]) 
    const [selectedCountry, setCountry] = useState(null)
    const [favouriteCountries, setFavouriteCountries] = useState([])

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

    const addFavourite = (selectedCountry) => {
        const updatedFavourites = [...favouriteCountries, selectedCountry]
        setFavouriteCountries(updatedFavourites)
    }

    const findCountryCode = (countryCode) => {
        const foundCountry = countries.find((country) => {
            return countryCode === country.alpha3Code
        })
        console.log(foundCountry.name)
        return foundCountry
    }

    return(
        <>
            <h1>Witty Title of App</h1>
            <h3>Population: {getTotalPopulation()}</h3>
            <div id='country-select'>
                <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
                {selectedCountry ? <CountryDetail country={selectedCountry} addFavourite={addFavourite} findCountryCode={findCountryCode}/> : null}    
            </div>
            <CountryFaves favouriteCountries={favouriteCountries} />
        </>
    )
}

export default CountryContainer;