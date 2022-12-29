//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi= {
    key : "7448c803b42d5187e6b81106783eed10",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

//Event listener function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
} );

//Get weather reprot

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}
//show weather report

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name},${weather.sys.country}`;

    let temperature =document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date(); 
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1595661671412-e20c4a3e65cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')";
    } else if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1525490829609-d166ddb58678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80')";
    }else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')";
    }else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1559504706-1c973cfe2355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
    }else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')";
    }else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')";
    } 
}
//date manage function

function dateManage(dateArg){
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}




