const CountryFaves = ({favouriteCountries}) => {

    const favouriteListItems = favouriteCountries.map((country, index) => {
        return <li key={index}>{country.name}</li>
    }) 

    return(
        <ul>
            {favouriteListItems}
        </ul>
    )
}


export default CountryFaves