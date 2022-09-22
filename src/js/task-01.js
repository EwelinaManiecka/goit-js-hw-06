// const listCategories = document.querySelector("#categories");
// const numberCategory = listCategories.querySelectorAll("li.item");

// console.log(`Number of categories ${numberCategory.length}`);

// const arrayCategory = numberCategory.forEach((item) => {
//     console.log("");
//     console.log(`Category: ${item.querySelector("h2").textContent}`);
//     console.log(`Category: ${item.querySelectorAll("li").length}`);
// })


const numberOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((item) => {
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.children.length}`);
});