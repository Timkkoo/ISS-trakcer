//this script is responsible for fetching API and updating data about people in ISS

const peopleApiURL = 'http://api.open-notify.org/astros.json';

const peopleTable = document.querySelector('.people-data');

getPeopleData();

async function getPeopleData() {
  try {
    const response = await fetch(peopleApiURL);
    if (response.ok) {
      const peopleData = await response.json();
      peopleDetailsData(peopleData);
    } else {
      response.text().then((text) => {
        throw new Error(text);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

const peopleDetailsData = (peopleData) => {
  for (let i = 0; i <= peopleData.people.length; i++) {
    if (peopleData.people[i].craft == 'ISS') {
      peopleTable.innerHTML += `
        <tr>
            <td class='person'>${peopleData.people[i].name}</td>
        </tr>
        `;
    }
  }
};



