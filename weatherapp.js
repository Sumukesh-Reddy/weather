let weather = {
    api: "337e822ad82ee3693661794c6ca440b2",
    fetchweather: async function (city) {
        this.showLoading(); // Show loading indicator
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.api);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            this.displayweather(data);
        } catch (error) {
            alert(error.message);
        } finally {
            this.hideLoading(); // Hide loading indicator
        }
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, feels_like } = data.main;
        const { humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feel").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function () {
        const city = document.querySelector(".search-bar").value;
        if (city) {
            this.fetchweather(city);
        } else {
            alert("Please enter a city name.");
        }
    },
    showLoading: function () {
        document.querySelector(".city").innerText = "Loading...";
        document.querySelector(".icon").src = ""; 
    },
};

document.querySelector(".button").addEventListener("click", function () {
    weather.search();
});

// Allow Enter key to trigger the search
document.querySelector(".search-bar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        weather.search();
    }
});
