fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((json) => {
        CountrySet(json);
    });

const CountrySet = (CountryArray) => {
    CountryArray.forEach(element => {
  
        const CountryDiv = document.getElementById('Country-Div');
        const countryDivDetails = document.createElement('div');

        const url = `https://restcountries.eu/rest/v2/name/${element.name}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
         
                const countryDetails = `
                    <img src="${data[0].flag}" class="Flag-img">
                    <h2>${element.name}</h2>
                    <p>${element.capital}</p>
                    `
                countryDivDetails.className = "Country-Details";
                countryDivDetails.innerHTML = countryDetails;
                CountryDiv.appendChild(countryDivDetails);
            });
    });
}
