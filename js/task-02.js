const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listFinal = document.querySelector(`#ingredients`);
const list = [];

ingredients.map(elem => {
  const li = document.createElement(`li`);
  li.textContent = elem;
  li.classList.add(`item`);
  list.push(li);
});
console.log(list);

listFinal.append(...list);


// const li = document.createElement(`li`);
// li.textContent = ingredients[0];
// li.classList.add(`item`);
// console.log(li);

// const li = `<li class="item">`ingredients[0]`</li>`;
// console.log(li);
