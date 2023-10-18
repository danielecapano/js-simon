const numbersDomElement = document.querySelector(".numbers");
const userResultsDomElement = document.querySelector(".user-results");
const userNumbersDomElement = document.querySelector(".user-numbers");
const scoreDomElement = document.querySelector(".score");
const arrayRandomInt = [];

do {
  const n = Math.floor(Math.random() * (100 - 1) + 1);
  if (!arrayRandomInt.includes(n)) {
    arrayRandomInt.push(n);
  }
} while (arrayRandomInt.length < 5);

displayNumberToDom(arrayRandomInt, numbersDomElement);
// setTimeout(() => {
//   hideNumbers();
//   setTimeout(verifiedUserNumbers(arrayRandomInt), 1000);
// }, 5000);

setTimeout(() => {
  hideNumbers();
}, 5000);
setTimeout(() => {
  verifiedUserNumbers(arrayRandomInt);
}, 6000);

function verifiedUserNumbers(array) {
  const arrayUserNumbers = [];
  const arrayExactlyNumbers = [];

  do {
    const n = parseInt(prompt("Inserisci un numero della lista"));
    arrayUserNumbers.push(n);
    if (array.includes(n) && !arrayExactlyNumbers.includes(n)) {
      arrayExactlyNumbers.push(n);
    }
  } while (arrayUserNumbers.length < 5);

  numbersDomElement.classList.remove("hide");

  displayNumberToDom(arrayUserNumbers, userNumbersDomElement);
  userResultsDomElement.classList.remove("hide");
  scoreDomElement.innerHTML = `Il tuo punteggio è ${arrayExactlyNumbers.length}`;
}

function displayNumberToDom(array, domElement) {
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    const htmlContent = `<h1>${number}</h1>`;
    domElement.innerHTML += htmlContent;
  }
}

function hideNumbers() {
  numbersDomElement.classList.add("hide");
}
