//variables for change of icon color depending on the browser theme
let iconElement = document.querySelector("link[rel='icon']");
const timeParagraph = document.querySelector('.time');

// variables for updatingData
const issVisibilityParagraph = document.querySelector('#iss-vis');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544'; //25544 stands for ISS

async function getData() { //fetching data from API
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      updateData(data);
      console.log(data);
    } else {
      response.text().then((text) => {
        throw new Error(text);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const updateData = (data) => {   //updating data on site 
  let issVisibility = data.visibility;
  const issVisibilityText = 'ISS is in '
  if(issVisibility == 'daylight') {
    issVisibilityParagraph.textContent = issVisibilityText + issVisibility;
    sunIcon.style.display = 'block';
  } else if (issVisibility == 'eclipsed') {
    issVisibilityParagraph.textContent = issVisibilityText + `Earth's shadow`;
    moonIcon.style.display = 'block';
  }
};

const darkModeSet = (event) => {  //setting the color of the icon depending on the browser theme
  if (event.matches) {
    IntersectionObserverlement.setAttribute(
      'href',
      'images/iss-dark-mode-icon.png'
    );
    console.log('dark mode');
  } else {
    iconElement.setAttribute('href', 'images/iss-light-mode-icon.png');
    console.log('light mode');
  }
};

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', darkModeSet);

//clock
setInterval(() => {
  let time = new Date().toLocaleTimeString();
  timeParagraph.textContent = time;
}, 1);

setInterval(getData, 1000);  //refreshing the position every second

