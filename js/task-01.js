const numbCateg = document.querySelectorAll(`.item`);
// console.dir(numbCateg);
console.log(`Number of categories: ${numbCateg.length}`);
// const namestItem = document.querySelectorAll(`h2`);
// const nbrElem = document.querySelectorAll(`.elements`);
// console.dir(nbrElem);

// console.dir(namestItem[0].textContent);
// console.log(`Elements: ${nbrElem[0].children.length}`);
// console.dir(namestItem[1].textContent);
// console.log(`Elements: ${nbrElem[1].children.length}`);
// console.dir(namestItem[2].textContent);
// console.log(`Elements: ${nbrElem[2].children.length}`);

// const categories = document.querySelectorAll("li.item")
// console.log("Number of categories:", categories.length)

numbCateg.forEach(function (el) {
    const list = el.querySelector("h2");
    const listEl = el.querySelectorAll("li");
    console.log(`Category:`, list.textContent);
    console.log(`Elements:`, listEl.length);
})