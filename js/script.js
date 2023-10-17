// console.log("simon");
const numbersDomElement = document.querySelector(".numbers");
const userResultsDomElement = document.querySelector(".user-results");
const userNumbersDomElement = document.querySelector(".user-numbers");
const scoreDomElement = document.querySelector(".score");
const arrayRandomInt = [];

let counter = 0;

do {
  const n = Math.floor(Math.random() * (100 - 1) + 1);
  arrayRandomInt.push(n);
} while (arrayRandomInt.length < 5);

console.log(arrayRandomInt);

// for (let i = 0; i < arrayRandomInt.length; i++) {
//   const number = arrayRandomInt[i];
//   const htmlContent = `<h1>${number}</h1>`;
//   numbersDomElement.innerHTML += htmlContent;
// }

displayNumberToDom(arrayRandomInt, numbersDomElement);
setTimeout(() => {
  setTimeout(verifiedUserNumbers(arrayRandomInt), 1000);
}, 5000);

console.log(counter);

function verifiedUserNumbers(array) {
  const arrayUserNumbers = [];

  console.log(counter);

  do {
    const n = parseInt(prompt("Inserisci un numero della lista"));
    arrayUserNumbers.push(n);
    if (array.includes(n) && !arrayUserNumbers.includes(n)) {
      counter++;
    }
  } while (arrayUserNumbers.length < 5);
  console.log(arrayUserNumbers, counter);
  numbersDomElement.classList.remove("hide");

  displayNumberToDom(arrayUserNumbers, userNumbersDomElement);
  userResultsDomElement.classList.remove("hide");
  scoreDomElement.innerHTML = `Il tuo punteggio è ${counter}`;

  return counter;
}

function displayNumberToDom(array, domElement) {
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    const htmlContent = `<h1>${number}</h1>`;
    domElement.innerHTML += htmlContent;
  }
}
