// console.log("simon");
const numbersDomElement = document.querySelector(".numbers");
const arrayRandomInt = [];

do {
  const n = Math.floor(Math.random() * (100 - 1) + 1);
  arrayRandomInt.push(n);
} while (arrayRandomInt.length < 5);

console.log(arrayRandomInt);

for (let i = 0; i < arrayRandomInt.length; i++) {
  const number = arrayRandomInt[i];
  const htmlContent = `<h1>${number}</h1>`;
  numbersDomElement.innerHTML += htmlContent;
}
setTimeout(() => {
  numbersDomElement.classList.add("hide");
}, 5000);
