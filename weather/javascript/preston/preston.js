//Banner
var cur_date = new Date()
var weekday = cur_date.getDay()
if (weekday != 5) {
    document.getElementById("banner").style.display = "none"
}
//Weather Info
async function getWeatherHero() {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b0d07380ce5ea2770c47bb85b41d4544");
    let data = await response.json();
    let tempInfo = document.getElementById("temp-data")
    let tempIMG = document.createElement("img")
    currentIMGSRC= "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
    tempIMG.setAttribute("src", currentIMGSRC)
    tempIMG.setAttribute("alt", data.weather[0].description)
    tempInfo.appendChild(tempIMG)
    let tempCurrentDiv = document.createElement("div")
    tempCurrentDiv.setAttribute("id", "tempWeather")
    let currentTemp = document.createElement("p")
    currentTemp.setAttribute("id", "current-temp")
    currentTemp.textContent = Math.round(data.main.temp)+"\u00B0 F"
    tempCurrentDiv.appendChild(currentTemp)
    let currentWeather = document.createElement("p")
    currentWeather.setAttribute("id", "current-weather")
    currentWeather.textContent = data.weather[0].description
    tempCurrentDiv.appendChild(currentWeather)
    tempInfo.appendChild(tempCurrentDiv)
    let windchill = 35.74 + (0.6215*data.main.temp) - (35.75*(data.wind.speed**0.16)) + (0.4275*data.main.temp*(data.wind.speed**0.16))
    document.getElementById("wind-speed").innerText = "Wind Speed: " + data.wind.speed + " MPH"
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%"
    document.getElementById("wind-chill").innerText = "Wind Chill: " + Math.round(windchill) + "\u00B0 F"
}
async function getWeatherForecast (){
    let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b0d07380ce5ea2770c47bb85b41d4544")
    let data = await response.json();
    let forecastFive = document.getElementById("forecast-widget")
    let city = document.createElement("div")
    city.setAttribute("id", "forecast-city")
    city.innerHTML='<p class="stronger">PRESTON</p><p class="lighter">ID</p>'
    forecastFive.appendChild(city)
    data.list.forEach(forecast => {
       let date_time = forecast.dt_txt.split(" ")
       if (date_time[1] == "18:00:00"){
        let weekdayLong = new Date(date_time[0].replace(/-/g, '\/').replace(/T.+/, '')).toLocaleString('en-us', {  weekday: "long"})
        let weekday = document.createElement("p")
        weekday.textContent = weekdayLong
        let forecastDay = document.createElement("div")
        let currentIMGSRC = "http://openweathermap.org/img/wn/"+forecast.weather[0].icon+".png"
        let icon = document.createElement("img")
        icon.setAttribute("src", currentIMGSRC)
        icon.setAttribute("alt", forecast.weather[0].description)
        forecastDay.appendChild(weekday)
        forecastDay.appendChild(icon)
        let temps = document.createElement("p")
        temps.setAttribute("id", "temps-forecast")
        temps.textContent= `${Math.round(forecast.main.temp_max)}\u00B0 F`
        forecastDay.appendChild(temps)
        forecastFive.appendChild(forecastDay)
       }
    });
}
getWeatherHero()
getWeatherForecast()


//Event Info
const webJSON = "https://byui-cit230.github.io/weather/data/towndata.json"
async function populateCityInfo(webJSON){
    const response = await fetch(webJSON)
    const townsJSON = await response.json()
    const events = townsJSON.towns[6].events
    let otherevents = document.createElement("div")
    let othereventsheader = document.createElement("h2")
    othereventsheader.textContent = "Other Events"
    otherevents.appendChild(othereventsheader)
    events.forEach(event => {
        let eventelement = document.createElement("p")
        eventelement.textContent = event
        otherevents.appendChild(eventelement)
    });
    document.getElementById("upcoming-events").appendChild(otherevents)
}
populateCityInfo(webJSON)