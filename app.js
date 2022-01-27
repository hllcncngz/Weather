const apiKey = "f4a49209b293620f00aa994380d48abe"
const url = "https://api.openweathermap.org/data/2.5/"

const setQuery = (e) => {
    if (e.keyCode == "13")
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}
const displayResult = (weather) => {
    // console.log(weather) apiyi kontrol etme 
    
        let city = document.querySelector(".city")
        city.innerText = `${weather.name},${weather.sys.country} `;
        let temp = document.querySelector(".temp")
        const derece = `${weather.main.temp}`
        const tempValue = Math.round(derece)
        temp.innerText = tempValue + "°C";
        let desc = document.querySelector(".desc")
        desc.innerText = `${weather.weather[0].description}`
        let minmax = document.querySelector(".minmax")
        minmax.innerText = `${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`
        let feelTemp = document.querySelector(".feelTemp")
        feelTemp.innerText = `Hissedilen Sıcaklık${Math.round(weather.main.feels_like)}°C `
    
    

}
const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress", setQuery)
