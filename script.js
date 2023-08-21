//this script is responsible for icon, clock and information window

//variables for change of icon color depending on the browser theme
let iconElement = document.querySelector("link[rel='icon']");
const timeParagraph = document.querySelector('.time');

const closeInfoButton = document.querySelector('.close-window-btn');
const issInfoButton = document.querySelector('#open-info-btn');
const backdrop = document.querySelector('#backdrop');
const informationWindow = document.querySelector('.information-window')


const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const showInformation = () => {
  informationWindow.classList.add('visible');
  toggleBackdrop();
}

const closeInformation = () => {
  informationWindow.classList.remove('visible');
  toggleBackdrop();
}


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


const consoleLog = () => {
  console.log('button is working');
}

issInfoButton.addEventListener('click', showInformation);
backdrop.addEventListener('click', closeInformation)
closeInfoButton.addEventListener('click', closeInformation);

