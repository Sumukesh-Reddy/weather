 let weather={
    "api":"337e822ad82ee3693661794c6ca440b2",
    fetchweather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=337e822ad82ee3693661794c6ca440b2")
        .then((response)=>response.json())
        .then((data)=>this.displayweather(data))
    } ,
    displayweather: function (data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,feels_like}=data.main;
        const {humidity}=data.main;
        const {speed}=data.wind;
        document.querySelector(".city").innerText="weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".feel").innerText="feels like="+feels_like+"°C";
        document.querySelector(".humidity").innerText="humidity="+humidity+"%";
        document.querySelector(".wind").innerText="wind speed="+speed+"km/h";
    },
    search: function () {
        weather.fetchweather(document.querySelector(".search-bar").value)
    }
}
document.querySelector(".button").addEventListener("click",function (){
    weather.search()
})