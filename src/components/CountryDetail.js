const CountryDetail = ({country, addFavourite, findCountryCode}) => {

    const handleClick = (event) => {
        addFavourite(country)
    }

    const neighbourCountries = () => {
        const neighbouringCountries = country.borders
        return neighbouringCountries.map((countryCode) => {
            return findCountryCode(countryCode)
        })
    }

    const neighbourList = () => {
        console.log(neighbourCountries())
        return neighbourCountries().map((country, index) => {
            return <li key={index}>{country.name}</li>
        })
    }


    return(
        <div>
            <h3>{country.name}</h3>
            <img src={country.flag} id='flag'></img>
            <ul>Bordered by: {neighbourList()}</ul>
            <button onClick={handleClick}>Add Favourite</button>
        </div>
    )
}

export default CountryDetail;