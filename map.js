let map = L.map('issMap').setView([0, 0], 2); //

var issIcon = L.Icon.extend({
  options: {
    // z dokumentacji
    iconURL: 'images/iss-marker.png',
    iconSize: [15, 15],
    iconAnchor: [25, 16]
  }}
);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);


// const updatePostion = (latitude, longitude) => {
//   // unikanie hoistingu
 
// };

map.addLayer(L.marker([0, 0], { icon: issIcon }).addTo(map));
recieveData();

async function recieveData() {
  const latitudeRecieved = sessionStorage.getItem('latitudeFromAPI'); //szerokość
  const longitudeRecieved = sessionStorage.getItem('longitudeFromAPI'); //długość
  // updatePostion(latitudeRecieved, longitudeRecieved); 
  
}

setInterval(recieveData, 1000);
