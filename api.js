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
       // const countryDetails = document.createElement('div');
        let countryDetails = "";
    
        const url = `https://restcountries.eu/rest/v2/name/${element.name}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                countryDetails += `
                <div id="${element.alpha2Code}-Details" 
                onmouseover="DetailsShow('${element.name}','${element.alpha2Code}')" onmouseout="DetailsOff('${element.name}','${element.alpha2Code}')">
                    <img src="${data[0].flag}" class="Flag-img" >
                    <h2>${element.name}</h2>
                    <p>${element.capital}</p>
                </div>
                `
                countryDivDetails.className = 'Country-Details';
                countryDivDetails.innerHTML = countryDetails;
                CountryDiv.appendChild(countryDivDetails);
    
            });
    });
}



function DetailsShow(name,code){
    const CountryDiv = document.getElementById(`${code}-Details`);    
    CountryDiv.style.display="none";

}
function DetailsOff(name,code){
    const CountryDiv = document.getElementById(`${code}-Details`);
   
    CountryDiv.style.display="block";

}
