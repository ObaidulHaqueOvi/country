const loadCountry =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data));
}

loadCountry();

const displayCountry=data=>{
    const countryContainer =document.getElementById('countryContainer');
    data.forEach(country => {
        //console.log(country.coatOfArms.png);
        //console.log(country.population);

        const div = document.createElement('div')
        div.classList.add('cnty')
        div.innerHTML=`
       
        <h1>Name: ${country.name.official}</h1>
        <p>Population: ${country.population}</p>
        <button onclick="displayCountryImage('${country.flags.png}')">View Flag</button>
        `
        countryContainer.appendChild(div);
        

    });

}

//<img style="width: 200px"; src="${country.flags.png}" alt="" srcset="">

const displayCountryImage=countryImage=>
{
    //console.log(countryImage);
    const countryImageContainer =document.getElementById('countryImageContainer');
    const countryFlag = document.createElement('div');
    countryFlag.classList.add('image')
    countryFlag.innerHTML=`<img style="width: 500px"src="${countryImage}" alt="" srcset="">`
    countryImageContainer.innerText ='';
    countryImageContainer.appendChild(countryFlag);
    
    
}