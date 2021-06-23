
const CountrySelect = ({countries, onCountrySelected}) => {
    

    const handleChange = (event) => {
        onCountrySelected(countries[event.target.value])
    }

    const countrySelectOptions = countries.map((country, index) => {
        return <option key={index} value={index}>{country.name}</option>
    })

    
    return(
        <div>
            <select onChange={handleChange} defaultValue=''>
                <option value="">Choose a country.</option>
                {countrySelectOptions}
            </select>
            
        </div>
    )
}

export default CountrySelect;