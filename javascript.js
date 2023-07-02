const apikey="90d27417da35782b3506f180490d5ad7";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".search-icon")
async function checkweather(city){
    const response =await fetch(apiurl + city +`&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }else{
        var data= await response.json();
        document.querySelector(".city").innerHTML =data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".hum").innerHTML =data.main.humidity + "%";
        document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";
        if(data.weather=[0].main=="clouds"){
            weathericon.src="clouds.png";
        
        }else if(data.weather=[0].main=="clear"){
            weathericon.src="clear.png";
        }else if(data.weather=[0].main=="Rain"){
            weathericon.src="rain.png";
        }else if(data.weather=[0].main=="Drizzle"){
            weathericon.src="drizzle.png";
        }
        }
    }

searchbtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})




