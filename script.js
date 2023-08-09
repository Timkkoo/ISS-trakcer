//zmiana koloru ikony strony w zależności od motywu przeglądarki 
var element = document.querySelector("link[rel='icon']");

const darkModeSet = (event) => {
   if (event.matches) {
        element.setAttribute('href', 'images/iss-dark-mode-icon.png');
        console.log('dark mode');
    } else  {
        element.setAttribute('href', 'images/iss-light-mode-icon.png');
        console.log('light mode');
    }
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeSet);