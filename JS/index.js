var weatherData
var searchinput = document.getElementById("searchInput")


async function getData(key) {


    var response = await fetch(`https://api.weatherapi.com/v1//forecast.json?key=25b7a66640ba4a8b9ae155704242004&q=${key}&days=3`)

    var finalData = await response.json()




    return finalData

}



async function startapp(key) {


    weatherData = await getData(key)
    todayWeather()
    tomoroWeather()
    afterTomoroWeather()

}


function todayWeather() {

    date1 = new Date(weatherData.location.localtime)

    document.getElementById('city').innerHTML = weatherData.location.name
    document.getElementById('degree').innerHTML = weatherData.current.temp_c + '°C'
    document.getElementById('weatherCondition').innerHTML = weatherData.current.condition.text 
    document.querySelector('#humidity').innerHTML = weatherData.current.humidity + '%'
    document.querySelector('#winds').innerHTML = weatherData.current.wind_kph +'km/h'
    document.querySelector('#weatherTrend').innerHTML = weatherData.current.wind_dir
    document.querySelector('#todayImg').setAttribute('src', 'https:' + weatherData.current.condition.icon)

    document.querySelector('#day').innerHTML = date1.toLocaleDateString('en-us', { weekday: 'long' })
   document.querySelector('#date').innerHTML = date1.toLocaleDateString('en-us', { day: 'numeric' })
    document.querySelector('#Month').innerHTML = date1.toLocaleDateString('en-us', { month: 'long' })




}


function tomoroWeather() {

    date2 = new Date(weatherData.forecast.forecastday[1].date)

    document.getElementById('maxTemperature').innerHTML = weatherData.forecast.forecastday[1].day.maxtemp_c
    document.getElementById('minTemperature').innerHTML = weatherData.forecast.forecastday[1].day.mintemp_c
    document.getElementById('weatherCondition').innerHTML = weatherData.forecast.forecastday[1].day.condition.text
    document.getElementById('tommorowday').innerHTML = date2.toLocaleDateString('en-us', { weekday: 'long' })
    
    document.querySelector('#tomImg').setAttribute('src', 'https:' + weatherData.forecast.forecastday[1].day.condition.icon)








}


function afterTomoroWeather() {

    date3 = new Date(weatherData.forecast.forecastday[2].date)


    document.getElementById('AftertomorrowmaxTemperature').innerHTML = weatherData.forecast.forecastday[2].day.maxtemp_c
    document.getElementById('AftertomorrowminTemperature').innerHTML = weatherData.forecast.forecastday[2].day.mintemp_c
    document.getElementById('AftertomorrowweatherCondition').innerHTML = weatherData.forecast.forecastday[2].day.condition.text

    document.querySelector('#afterimage').setAttribute('src', 'https:' + weatherData.forecast.forecastday[2].day.condition.icon)


    document.getElementById('Aftertomorrowday').innerHTML = date3.toLocaleDateString('en-us', { weekday: 'long' })




    
}


searchinput.addEventListener("keyup", function () {


    startapp(searchinput.value)


})