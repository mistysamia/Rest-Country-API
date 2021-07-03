fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        CountrySet(json);
    });

const CountrySet = (CountryArray) => {
    CountryArray.forEach(element => {
    
        const CountryDiv = document.getElementById('Country-Div');
        const countryDivDetails = document.createElement('div');
        const countryHoverDetails = document.createElement('div');
        let countryDetails = "";
    
        const url = `https://restcountries.eu/rest/v2/name/${element.name}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                countryDetails += `
                <div id="${element.alpha2Code}" 
                onmouseover="DetailsShow('${element.name}','${element.alpha2Code}')" onmouseout="DetailsOff('${element.name}','${element.alpha2Code}')">
                    <img src="${data[0].flag}" class="Flag-img" >
                    <h3 class="text-md-center">${element.name}</h3>
                </div>
                <div id="${element.alpha2Code}-Details"  class="Country-Hover-Details"
                onmouseover="DetailsShow('${element.name}','${element.alpha2Code}')" onmouseout="DetailsOff('${element.name}','${element.alpha2Code}')">
                    <h2 class="text-md-center">Capital:  ${element.capital}</h2>
                    &nbsp;<h4>Region: ${data[0].region}</h4>
                    <h4 class="text-md-center">Area:  ${data[0].area}</h4>
                    <h4 class="text-md-center">Population:${data[0].population}</h4>
                </div>

                `
                countryDivDetails.className = 'Country-Details';
                countryDivDetails.innerHTML = countryDetails;
                CountryDiv.appendChild(countryDivDetails);

            });
    });
}



function DetailsShow(name,code){
    const CountryDiv = document.getElementById(`${code}`);    
    const CountryHoverDiv = document.getElementById(`${code}-Details`); 
    CountryDiv.style.display="none";
    CountryHoverDiv.style.display="block";
}
function DetailsOff(name,code){
    const CountryDiv = document.getElementById(`${code}`);
    const CountryHoverDiv = document.getElementById(`${code}-Details`);
    CountryDiv.style.display="block";
    CountryHoverDiv.style.display="none";
}
