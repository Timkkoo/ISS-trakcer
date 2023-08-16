// variables for checkVisibility
const issVisibilityParagraph = document.querySelector('#iss-vis');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

//variables for updateData
const longitude = document.querySelector('#longitude');
const latitude = document.querySelector('#latitude');
const velocity = document.querySelector('#velocity');
const altitude = document.querySelector('#altitude');

const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544'; //25544 stands for ISS

let dataToSend = null;

getData();

async function getData() {
  //fetching data from API
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const issData = await response.json();
      dataToSend = null;
      sessionStorage.setItem('longitudeFromAPI', issData.longitude);
      sessionStorage.setItem('latitudeFromAPI', issData.latitude);
      checkVisibility(issData);
      updateData(issData);
    } else {
      response.text().then((text) => {
        throw new Error(text);
      });
    }
  } catch (error) {
    console.log(error);
  }
}



const checkVisibility = (issData) => {
  //updating data on site
  let issVisibility = issData.visibility;
  const issVisibilityText = 'ISS is in ';
  if (issVisibility == 'daylight') {
    issVisibilityParagraph.textContent = issVisibilityText + issVisibility;
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';

    return;
  }
  issVisibilityParagraph.textContent = issVisibilityText + `Earth's shadow`;
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
};

const updateData = (issData) => {
  latitude.textContent = issData.latitude.toFixed(5);
  longitude.textContent = issData.longitude.toFixed(5);
  velocity.textContent =
    issData.velocity.toFixed(2).toLocaleString('pl-PL') + ' km/h';
  altitude.textContent = issData.altitude.toFixed(5) + ' km';
};


setInterval(getData, 1000); //refreshing the position every second
