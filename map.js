let map = L.map('issMap').setView([0, 0], 3); // 


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);

recieveData();

async function recieveData() {
  const latitudeRecieved = sessionStorage.getItem('latitudeFromAPI'); //szerokość
  const longitudeRecieved = sessionStorage.getItem('longitudeFromAPI'); //długość
  updatePostion(latitudeRecieved, longitudeRecieved);
  console.log(latitudeRecieved, longitudeRecieved);
}

const updatePostion = (latitude, longitude) => {  
  L.marker([latitude, longitude]).addTo(map); 
};

// function updatePostion(latitude, longitude) {
//     L.marker([latitude, longitude]).addTo(map);
// };

//setInterval(recieveData, 1000);


// dane które otrzymuje funkcja są ,,spóźnione'' o sekunde względem tych które są wyświetlane na stronie, czy jest jakiś sposób żeby to wyeliminować?
// funkcja updatePosition gdy jest zapisana strzałkowo wyrzuca błąd w konsoli związany z dostępem do niej, gdy zapisana przez function nie wyświetla błędu, z czego to wynika?
