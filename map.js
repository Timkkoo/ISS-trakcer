let map = L.map('issMap').setView([0, 0], 4); //

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);


var iconOptions = {
  iconUrl: 'images/iss-marker.png',
  iconSize: [100, 60],
  iconAnchor: [25, 16]
}

var issIcon = L.icon(iconOptions);

var issMarkerOptions = {
  icon: issIcon
}



const updatePostion = (latitude, longitude) => {
  L.marker([latitude, longitude], issMarkerOptions).addTo(map);
};

recieveData();

async function recieveData() {
  const latitudeRecieved = sessionStorage.getItem('latitudeFromAPI'); //szerokość
  const longitudeRecieved = sessionStorage.getItem('longitudeFromAPI'); //długość
  updatePostion(latitudeRecieved, longitudeRecieved); 
}

setInterval(recieveData, 1000);
