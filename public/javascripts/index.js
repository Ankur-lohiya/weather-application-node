var button = document.querySelector(".submit");
var city = document.querySelector(".city_name");
var nam = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind_speed");
    var d=new Date().getHours();
    if(d>=4 && d<=18){
        $("body").css({
            'background-image':'url("/images/day.jpg")'
        });
    }
    else{
        $("body").css({
            'background-image':'url("/images/night.jpg")',
            'color':'#fff'
        });
    }
// Event Handler
button.addEventListener('click', function (e) {
    e.preventDefault();
    loadData();
})
function loadData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7d41670d45f073831566c8c9fc4cbeed')
        .then(response => response.json())
        .then(data => {
            var a=parseInt(data['main']['temp'])-273;
            nam.innerHTML = "City Name : " + data['name'];
            desc.innerHTML = "Temperature : " + a + " &degC";
            temp.innerHTML = "Description : " + data['weather']['0']['description'];
            wind.innerHTML = "Wind Speed : " + data['wind']['speed'] + "m/s";
        });
}