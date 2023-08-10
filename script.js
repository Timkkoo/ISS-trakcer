//change of icon color depending on the browser theme
let iconElement = document.querySelector("link[rel='icon']");
const timeParagraph = document.querySelector('.time');

const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544'; //25544 stands for ISS

async function getData() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
    } else {
      response.text().then((text) => {
        throw new Error(text);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const darkModeSet = (event) => {
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

setInterval(getData, 1000);

