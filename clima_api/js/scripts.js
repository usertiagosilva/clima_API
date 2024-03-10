//Chave API ba2fb2e98f0c01467c57bc7f1ddb182e

// Variáveis e seleção de elementos
const apiKey = "ba2fb2e98f0c01467c57bc7f1ddb182e";
const apiCountryURL = "https://flagsapi.com/BE/flat/64.png";
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherElement = document.querySelector("#weather-data");


// FUNÇÕES
//Acessa API
const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data
};
//  Exibe os dados
const showWeatherData = async (city) => {

    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
    weatherElement.classList.remove("hide");
};

// Eventos 
searchBtn.addEventListener("click", (e) => {
   
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);

});

cityInput.addEventListener("keyup", (e) =>{

    if(e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }

})