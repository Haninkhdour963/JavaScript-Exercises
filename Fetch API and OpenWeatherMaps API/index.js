//display data on page
function renderWeather(weather){
    console.log(weather);
    const resultsContainer=document.querySelector("#weather-results");
    //create h4 for name
    const city=document.createElement("h4");
    city.textContent=weather.name;
    resultsContainer.append(city);

    //create p for humidity,wind,description,temp
    const temps=document.createElement("p");
    temps.textContent="temp "+ weather.main.temp + " F" ;
    resultsContainer.append(temps);

    const humidity=document.createElement("p");
    humidity.textContent="humidity "+ weather.main.humidity + " %" ;
    resultsContainer.append(temps);

    const wind=document.createElement("p");
    wind.textContent="wind "+ weather.wind.speed +" mph"+ weather.wind.deg + " °"  ;
    resultsContainer.append(wind);

   
    const weatherDetails=weather.weather[0];
    if(weatherDetails && weatherDetails.description){

         const description=document.createElement("p");
         description.textContent=weatherDetails.description ;
         resultsContainer.append(description);

    }






}




//fetch weather data for city

async function fetchWeather(query) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=imperial&appid=1b8ddc022130f7bc294b86122df1d564"; // Move URL construction here
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        renderWeather(json);
    } catch (error) {
        console.error(error.message);
    }
}
fetchWeather("San Diego");
