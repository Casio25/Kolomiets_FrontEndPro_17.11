let url = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

let xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Accept", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.response);
        let data = JSON.parse(xhr.response);
        let result = document.getElementById('result');
        document.querySelector
        result.innerHTML = "City: " + data.name + '</br>' +
            "Temperature: " + data.main.temp + '</br>' +
            "Pressure: " + data.main.pressure + '</br>' + 
            "Humidity: " + data.main.humidity + '</br>' +
            "Speed: " + data.wind.speed + '</br>' + 
            "Degree: " + data.wind.deg + '</br>'+ 
            "Icon: " + '<img src="https://openweathermap.org/img/wn/'+ data.weather[0].icon +'@2x.png">' +'</br>';
    }
};

xhr.send();