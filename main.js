

function addCity(){
    let cityValue = document.getElementById('cityInput').value;
    let city = document.querySelector('.city');
    city.innerHTML = cityValue;
    
    // Weather details
    let tempf = document.querySelector('.tempf');
    let condition = document.querySelector('.condition');
    let highTemp = document.querySelector('.highTemp');
    let lowTemp = document.querySelector('.lowTemp');
    // Forcast Days
    // let today = Array(1);

// Current
    fetch(`http://api.weatherapi.com/v1/current.json?key=70943001098a430eada205245230801&q=${cityValue}&aqi=no`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            tempf.innerHTML = data.current.temp_f
            condition.innerHTML = data.current.condition.text
        });
// 1 day Forecast
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=70943001098a430eada205245230801&q=${cityValue}&days=1&aqi=no&alerts=no`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            highTemp.innerHTML = data.forecast.maxtemp_f
            lowTemp.innerHTML = data.forecast.mintemp_f
        });
     
}
