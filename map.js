const map = L.map('issMap').setView([0, 0], 4); //

let globalLatitude;
let globalLongitude;
let firsTime = true;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);


var iconOptions = {
  iconUrl: 'images/iss-marker.png',
  iconSize: [110, 70],
  iconAnchor: [55, 35]
}

var issIcon = L.icon(iconOptions);

var issMarkerOptions = {
  icon: issIcon
}

const marker = L.marker([0,0], issMarkerOptions).addTo(map);

const updatePostion = (latitude, longitude) => {
  marker.setLatLng([latitude, longitude]);
  if(firsTime) 
  {
    map.setView([latitude, longitude], 3);
    firsTime = false;
  } 
};

recieveData();

async function recieveData() {
  const latitudeRecieved = sessionStorage.getItem('latitudeFromAPI'); //szerokość
  const longitudeRecieved = sessionStorage.getItem('longitudeFromAPI'); //długość
  updatePostion(latitudeRecieved, longitudeRecieved); 
}

setInterval(recieveData, 1000);
