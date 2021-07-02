fetch('https://restcountries.eu/rest/v2/all')
    .then((response) => response.json())
    .then((json) => {
        CountrySet(json);
    });

const CountrySet = (CountryArray) => {
    CountryArray.forEach(element => {
  
        const CountryDiv = document.getElementById('Country-Div');
        const countryDivDetails = document.createElement('div');
        const AddImage = document.createElement('div');
        const AllDetails = document.createElement('div');

        const url = `https://restcountries.eu/rest/v2/name/${element.name}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
         
                const countryDetails = `
                    <h2>${element.name}</h2>
                    <p>${element.capital}</p>
                  `
                const imageDetails=`
                     <img src="${data[0].flag}" class="Flag-img">
                `
                AddImage.className = "Image-Details";
                AddImage.innerHTML = imageDetails;
                AllDetails.appendChild(AddImage);

                countryDivDetails.className = "Country-Details";
                countryDivDetails.innerHTML = countryDetails;
                AllDetails.appendChild(countryDivDetails);
                
                AllDetails.className = "All-Details";
                CountryDiv.appendChild(AllDetails);

            });
    }); 
}

