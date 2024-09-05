//your JS code here.
const fetchBtn = document.getElementById("fetch");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const mapContainer = document.querySelector(".map");
var latVal = 0;
var longVal = 0;

fetchBtn.addEventListener("click", () => {
  let sections = document.querySelectorAll("section");
  sections.forEach((sec) => (sec.style.display = "flex"));
  let welcomeSection = document.querySelector(".welcome");
  welcomeSection.style.display = "none";
  document.body.style.justifyContent = "start";
  getLocation()
    .then(initMap)
    .then(() => console.log(latVal, longVal));
});

async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

async function showPosition(position) {
  latitude.innerHTML = "Lat: " + position.coords.latitude;
  longitude.innerHTML = "Long: " + position.coords.longitude;
  latVal = position.coords.latitude;
  longVal = position.coords.longitude;
}

// Initialize and add the map
let map;

async function initMap() {
  // The location
  const position = {
    lat: latVal,
    lng: longVal,
  };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at my place
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "",
  });
}

function getWeather() {
  let data = document.querySelector(".data");
  let arr = [
    ["location", "New Delhi"],
    ["Wind Speed", "100kmph"],
    ["Humidity", "10"],
    ["Time Zone", "GMT +5:30"],
    ["Pressure", "10atm"],
    ["Wind Direction", "North West"],
    ["UV Index", "500"],
    ["Feels Like", "30c"],
  ];
  for (let i of arr) {
    let span = document.createElement("span");
    span.innerHTML = i[0] + " : " + i[1];
    data.appendChild(span);
  }
}
getWeather();
