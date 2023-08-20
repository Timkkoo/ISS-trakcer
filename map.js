// this script is responsible for map 

const map = L.map('issMap').setView([0, 0], 4); //

const southWest = L.latLng(-180, -360),
northEast = L.latLng(180, 360);
const bounds = L.latLngBounds(southWest, northEast);
map.setMaxBounds(bounds);

map.setMinZoom(1);


let terminator = L.terminator().addTo(map);

const centerButton = document.querySelector('.center-button');

let firsTime = true;
let isClicked = false;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap, contributor: Timkoo',
}).addTo(map);

let iconOptions = {
  iconUrl: 'images/iss-marker.png',
  iconSize: [110, 70],
  iconAnchor: [55, 35],
};

let issIcon = L.icon(iconOptions);

let issMarkerOptions = {
  icon: issIcon,
};

const marker = L.marker([0, 0], issMarkerOptions).addTo(map);



const updatePostion = (latitude, longitude) => {
  marker.setLatLng([latitude, longitude]);
  if (firsTime) {
    map.setView([latitude, longitude], 3);
    firsTime = false;
  } else if (isClicked) {
    map.setView([latitude, longitude], 4);
    isClicked = false;
  }
};

recieveData();

async function recieveData() {
  const latitudeRecieved = sessionStorage.getItem('latitudeFromAPI'); //szerokość
  const longitudeRecieved = sessionStorage.getItem('longitudeFromAPI'); //długość
  updatePostion(latitudeRecieved, longitudeRecieved);
}


const refreshDayNight = () => {
  terminator.setTime();
}


const clickHandler = () => {
  isClicked = true;
};


centerButton.addEventListener('click', clickHandler);

setInterval(recieveData, 1000);
setInterval(refreshDayNight, 60000)
