const elements = {
  nmbr: document.querySelector('input'),
  createBox: document.querySelector('button[data-create]'),
  destroyBox: document.querySelector('button[data-destroy]')  
}
console.log(elements.createBox);
console.log(elements.destroyBox);
console.log(elements.nmbr);

elements.nmbr.addEventListener(`input`, handleAmount);
function handleAmount(evt) {
  // console.dir(evt.currentTarget.value);
  let amount = Number(evt.currentTarget.value);
  console.log(amount);
}

// elements.createBox.addEventListener(`click`, createBoxes);

// function createBoxes(amount) {
//   // amount = Number(input.currentTarget.value);
//   console.dir(elements.nmbr.input.value);
// }

  




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
