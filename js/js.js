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

updateTime();
setInterval(updateTime, 1000);

