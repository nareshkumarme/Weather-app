const input = document.getElementById('input');
const submit = document.getElementById('submit');
const inputCountry = document.getElementById('inpcountry');
const inputState = document.getElementById('inpstate');
const inputcity = document.getElementById('inpcity');
const outputHumidity = document.getElementById('outhumidity');
const windSpeed = document.getElementById('windSpeed');
const outputTemp = document.getElementById('outtemp');
const iconImg = document.createElement("img");
const climate = document.createElement("p");
climate.innerHTML =""


function weatherapp(inputvalue){
    fetch(`https://api.weatherapi.com/v1/current.json?key=0f39c9ffc7334a4282243153232302&q=${inputvalue}`).then(
        res => res.json().then(data =>{
            inputCountry.innerHTML = data.location.country;
            inputState.innerHTML = data.location.region;
            inputcity.innerHTML = data.location.name;
            outputHumidity.innerHTML = data.current.humidity;
            windSpeed.innerHTML = data.current.wind_kph;
            outputTemp.innerHTML = data.current.temp_c;
            let imageurl = data.current.condition.icon;
            iconImg.src = imageurl;
            iconImg.id = "iconImg";
            iconImg.width = 30; // Set the desired width in pixels
            iconImg.height = 30; // Set the desired height in pixels
            const iconContainer = document.getElementById("iconContainer");
            iconContainer.appendChild(iconImg);
            climate.id ="climate";
            const iconContainer1 = document.getElementById("iconContainer");
            iconContainer1.appendChild(climate)
            climate.innerHTML = data.current.condition.text;
        })
        )
}

submit.addEventListener('click', function(){
    inputvalue = input.value;
    weatherapp(inputvalue)
    
})






