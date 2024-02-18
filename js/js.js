function updateTime (){
    let faroElement = document.querySelector("#faro");
    let faroDateElement=document.querySelector("#faroDate");
    let faroTimeElement=document.querySelector("#faroTime");
    let faroTime = moment().tz("Europe/Lisbon");

    faroDateElement.innerHTML=faroTime.format("MMMM Do YYYY");
    faroTimeElement.innerHTML=faroTime.format("h:mm:ss [<small>]A[</small>]");


    let torontoElement = document.querySelector("#toronto");
    let torontoDateElement=document.querySelector("#torontoDate");
    let torontoTimeElement=document.querySelector("#torontoTime");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML=torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML=torontoTime.format("h:mm:ss [<small>]A[</small>]");

}


function updateCity (event){
   let cityTimeZone=event.target.value;
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement=document.querySelector("#cities");
   citiesElement.innerHTML=` <div class="cities">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>`
}

 let citiesSelectElement =document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);


updateTime();
setInterval(updateTime, 1000);


