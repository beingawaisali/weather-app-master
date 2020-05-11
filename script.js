let sunnyImages = [
    "url(images/background-images/sunny-day.webp)",
    "url(https://media.giphy.com/media/paMdZlRXlc96o/giphy.gif)",
    "url(https://media.giphy.com/media/yVJmFTkwnsWFq/giphy.gif)",
    "url(https://media.giphy.com/media/Zjb1abUKrAyFW/giphy.gif)",
    "url(https://media.giphy.com/media/QCsEPhEd8PpEA/giphy.gif)",
    "url(https://media.giphy.com/media/3oriNWslJ6lqL5CTZu/giphy.gif)"
]

let rainyImages = [
    "url(images/background-images/rainy-day-1.gif)",
    "url(images/background-images/rainy-day-2.gif)",
    "url(https://media.giphy.com/media/iBRHf2C64eZDa/giphy.gif)",
    "url(https://media.giphy.com/media/2ZqbXcaHnfqGQhwX6Zq/giphy.gif)",
    "url(https://media.giphy.com/media/NXOr01Y2w8SK4/giphy.gif)",
    "url(images/background-images/stormy-1.gif)",
    "url(images/background-images/stormy-2.gif)",
    "url(https://media.giphy.com/media/d1E1pZ1cdgWmY0hy/giphy.gif)",
    "url(https://media.giphy.com/media/nMT8FHxdwgCnS/giphy.gif)",
    "url(https://media.giphy.com/media/vS09bj1KrXwje/giphy.gif)",
    "url(https://media.giphy.com/media/6ZhkSxi5KvORq/giphy.gif)"
]

let cloudyImages = [
    "url(images/background-images/cloudy.gif)",
    "url(https://media.giphy.com/media/3o7TKqXTQfj2DbtNOU/giphy.gif)",
    "url(https://media.giphy.com/media/Ke7i5t6QDmDSO82Uga/giphy.gif)",
    "url(https://media.giphy.com/media/l0ExeM99XlABjdxo4/giphy.gif)",
    "https://media.giphy.com/media/lOkbL3MJnEtHi/giphy.gif"
]

let stormyImages = [
    "url(images/background-images/stormy-1.gif)",
    "url(images/background-images/stormy-2.gif)",
    "url(https://media.giphy.com/media/d1E1pZ1cdgWmY0hy/giphy.gif)",
    "url(https://media.giphy.com/media/nMT8FHxdwgCnS/giphy.gif)",
    "url(https://media.giphy.com/media/vS09bj1KrXwje/giphy.gif)",
    "url(https://media.giphy.com/media/6ZhkSxi5KvORq/giphy.gif)"
]

let foggyImages = [
    "url(images/background-images/foggy-1.gif)",
    "url(images/background-images/foggy-2.gif)",
    "url(images/background-images/foggy-3.gif)",
    "url(https://media.giphy.com/media/26xBG1iA99bCpqvSM/giphy.gif)",
    "url(https://media.giphy.com/media/l3q2Dh8USzU5rjjIk/giphy.gif)"
]

let snowyImages = [
    "url(images/background-images/snowy-1.gif)",
    "url(images/background-images/snowy-2.gif)",
    "url(images/background-images/snowy-3.gif)",
    "url(images/background-images/snowy-4.gif)",
    "url(images/background-images/snowy-5.gif)",
    "url(https://media.giphy.com/media/cyl4UbilbrQFa/giphy.gif)",
    "url(https://media.giphy.com/media/I6URTLaP9ZFS0/giphy.gif)"
]


let weatherIcons = {
    sunnyDay : "images/clear-day.png",
    rainyDay : "images/rainy.png",
    cloudyDay : "images/cloudy.png",
    stormyDay : "images/thunder.png",
    foggyDay : "images/foggy.png",
    snowyDay : "images/snowy.png"
}

// Weather Audios

let sunnyDay = ("audio/sunny-audio.mp3");
let rainyDay = ("audio/rainy-audio.mp3");
let cloudyDay = ("audio/cloudy-audio.mp3");
let stormyDay = ("audio/stormy-audio.mp3");
let foggyDay = ("audio/foggy-audio.mp3");
let snowyDay = ("audio/snowy-audio.mp3");

// 

let body = document.querySelector("#body");
document.querySelector(".weather-icon").src = weatherIcons.sunnyDay;


let showWeather = () => {

    // GEt Weather Info


    let cityName = document.querySelector("input").value;

    // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6d756641e34948d4aaea1ef1a9545977&mode=htmls&units=metric`)
        .then(function (response) {
            console.log(response);

            // Get Weather Info

            let weatherTemp = parseInt(response.data.main.temp);
            let CountryName = response.data.name;
            let currentWeather = response.data.weather[0].main;
            let weatherInfo = response.data.weather[0].description;
            let windSpeed = response.data.wind.speed;

            document.getElementById("city-name").innerHTML = CountryName + ", " + response.data.sys.country;
            document.getElementById("temprature").innerHTML = weatherTemp + "°c";
            document.getElementById("weather").innerHTML = currentWeather;
            document.getElementById("weather-description").innerHTML = weatherInfo;
            document.getElementById("wind-speed").innerHTML = windSpeed + " wind speed";
        
//         Correct City Name
        
            if(cityName != CountryName){
                alert(`${cityName} is not found`)
            };


            // Get background Images according to weather

            if(currentWeather == "Clear" || currentWeather == "Haze"){
                let randomindex = parseInt(Math.random() * sunnyImages.length);
                body.style.background = sunnyImages[randomindex];
                document.querySelector(".weather-icon").src = weatherIcons.sunnyDay;
            }else if(currentWeather == "Clouds"){
                let randomIndex = parseInt(Math.random() * cloudyImages.length);
                body.style.background = cloudyImages[randomIndex];
                document.querySelector(".weather-icon").src = weatherIcons.cloudyDay;
            }else if(currentWeather == "Rain"){
                let randomIndex = parseInt(Math.random() * rainyImages.length);
                body.style.background = rainyImages[randomIndex];
                document.querySelector(".weather-icon").src = weatherIcons.rainyDay;
            }else if(currentWeather == "Thunderstorm"){
                let randomIndex = parseInt(Math.random() * stormyImages.length);
                body.style.background = stormyImages[randomIndex];
                document.querySelector(".weather-icon").src = weatherIcons.stormyDay;
            }
            else if(currentWeather == "Smoke" || currentWeather == "Mist"){
                let randomIndex = parseInt(Math.random() * foggyImages.length);
                body.style.background = foggyImages[randomIndex];
                document.querySelector(".weather-icon").src = weatherIcons.foggyDay;
            }

            // klajd

            body.style.backgroundSize = "100%";
            body.style.backgroundPosition = "center center";
            body.style.margin = "0px";
            body.style.backgroundSize = "cover";
            body.style.backgroundAttachment = "fixed";
            body.style.width = "100%";
            body.style.padding = "9px 0px";
            body.style.paddingBottom = "100px";
            body.style.backgroundRepeat = "repeat";

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    // Get Background Image


   

}

// let showWeather = () => {
//     setInterval(showWeatherFunction, 2000)
// }
